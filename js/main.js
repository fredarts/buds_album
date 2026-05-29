document.addEventListener('DOMContentLoaded', () => {
    // State
    let currentCategoryId = 'oficial';
    let selectedAlbum = null;
    let selectedCategoryTitle = '';
    
    // Configuration State: { groupId: [selectedOptionIds] }
    let configState = {};
    // Custom Number Values: { optionId: numberValue }
    let customValues = {};

    // DOM Elements
    const tabsContainer = document.getElementById('categoryTabs');
    const catalogContainer = document.getElementById('catalogContainer');
    const totalValueEl = document.getElementById('totalValue');
    const floatingBar = document.getElementById('floatingBar');
    
    // Configurator DOM Elements
    const configuratorScreen = document.getElementById('configuratorScreen');
    const btnBack = document.getElementById('btnBack');
    const configAlbumTitle = document.getElementById('configAlbumTitle');
    const configBody = document.getElementById('configBody');
    const configTotalValue = document.getElementById('configTotalValue');
    const btnConfigWhatsapp = document.getElementById('btnConfigWhatsapp');

    // Phone Number to send WhatsApp
    const WHATSAPP_NUMBER = '5511999999999'; 

    // Init
    initTabs();
    renderCatalog(currentCategoryId);

    function initTabs() {
        tabsContainer.innerHTML = '';
        Object.keys(albumData).forEach(catId => {
            const cat = albumData[catId];
            const btn = document.createElement('button');
            btn.className = `tab-btn ${catId === currentCategoryId ? 'active' : ''}`;
            btn.textContent = cat.title;
            btn.addEventListener('click', () => {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentCategoryId = catId;
                renderCatalog(catId);
            });
            tabsContainer.appendChild(btn);
        });
    }

    function renderCatalog(categoryId) {
        catalogContainer.innerHTML = '';
        const category = albumData[categoryId];
        
        category.products.forEach((product, index) => {
            const card = document.createElement('article');
            card.className = `album-card animate-up`;
            card.style.animationDelay = `${index * 0.15}s`;
            
            const badgeHTML = product.recommended ? `<div class="badge-recommended">Mais Escolhido</div>` : '';

            card.innerHTML = `
                ${badgeHTML}
                <div class="card-image-wrapper">
                    <img src="${product.imagePlaceholder}" alt="${product.name}" class="card-image" loading="lazy">
                    <div class="card-image-overlay"></div>
                </div>
                <div class="card-content">
                    <span class="card-tagline">${product.tagline}</span>
                    <h3 class="card-title">${product.name}</h3>
                    <span class="card-price">A partir de R$ ${product.price.toLocaleString('pt-BR')}</span>
                    <p class="card-desc">${product.description}</p>
                    <div class="select-indicator">
                        Configurar Álbum ➝
                    </div>
                </div>
            `;

            // Open Configurator on Click
            card.addEventListener('click', () => {
                openConfigurator(product, category.title);
            });

            catalogContainer.appendChild(card);
        });
    }

    /* ==========================================================================
       Configurator Logic
       ========================================================================== */
    function openConfigurator(product, categoryTitle) {
        selectedAlbum = product;
        selectedCategoryTitle = categoryTitle;
        configState = {}; // Reset state
        customValues = {}; // Reset custom number inputs
        
        // Auto-select the first option for "single" choice groups
        if (product.configGroups) {
            product.configGroups.forEach(group => {
                if (group.type === 'single' && group.options.length > 0) {
                    configState[group.id] = [group.options[0].id];
                } else {
                    configState[group.id] = [];
                }
            });
        }

        configAlbumTitle.textContent = product.name;
        renderConfigOptions();
        updateConfigTotal();
        
        // Slide in
        configuratorScreen.classList.add('active');
    }

    function closeConfigurator() {
        configuratorScreen.classList.remove('active');
        selectedAlbum = null;
    }

    btnBack.addEventListener('click', closeConfigurator);

    function renderConfigOptions() {
        configBody.innerHTML = '';
        
        if (!selectedAlbum || !selectedAlbum.configGroups) return;

        selectedAlbum.configGroups.forEach(group => {
            const groupEl = document.createElement('div');
            groupEl.className = 'config-group';
            
            const titleEl = document.createElement('h3');
            titleEl.className = 'config-group-title';
            titleEl.textContent = group.name;
            groupEl.appendChild(titleEl);

            const gridEl = document.createElement('div');
            gridEl.className = 'config-options-grid';

            group.options.forEach(option => {
                const isSelected = configState[group.id].includes(option.id);
                
                const cardEl = document.createElement('div');
                cardEl.className = `config-option-card ${isSelected ? 'selected' : ''}`;
                
                let priceText = option.priceModifier > 0 ? `+ R$ ${option.priceModifier}` : 'Incluso';
                let customInputHTML = '';

                if (option.isCustomNumber) {
                    priceText = `+ R$ ${option.pricePerUnit}/${option.unitName.toLowerCase()}`;
                    if (isSelected) {
                        const currentValue = customValues[option.id] !== undefined ? customValues[option.id] : option.min;
                        customInputHTML = `
                            <div class="custom-number-wrapper" style="margin-top: 1rem; width: 100%;">
                                <input type="number" id="input_${option.id}" class="custom-input" value="${currentValue}" min="${option.min}" max="${option.max}" />
                                <div style="font-size:0.7rem; color:var(--text-secondary); margin-top:0.25rem;">Min ${option.min} / Máx ${option.max}</div>
                            </div>
                        `;
                    }
                }

                cardEl.innerHTML = `
                    <img src="${option.image}" alt="${option.name}" class="option-img" loading="lazy">
                    <span class="option-name">${option.name}</span>
                    <span class="option-desc">${option.desc}</span>
                    <span class="option-price">${priceText}</span>
                    ${customInputHTML}
                `;

                // Handle toggle when clicking the card
                cardEl.addEventListener('click', (e) => {
                    // Prevent toggling if user is interacting with the number input
                    if (e.target.tagName === 'INPUT') return;
                    handleOptionToggle(group.id, group.type, option.id);
                });

                gridEl.appendChild(cardEl);

                // Attach event listener to input if it exists
                if (isSelected && option.isCustomNumber) {
                    const inputEl = cardEl.querySelector(`#input_${option.id}`);
                    if (inputEl) {
                        inputEl.addEventListener('input', (e) => {
                            let val = parseInt(e.target.value);
                            if (isNaN(val)) val = option.min;
                            if (val > option.max) val = option.max;
                            // We don't force minimum aggressively while typing to avoid annoyance, 
                            // but we'll cap it at max. Calculation will handle min constraint.
                            customValues[option.id] = val;
                            updateConfigTotal();
                        });
                        
                        inputEl.addEventListener('blur', (e) => {
                             let val = parseInt(e.target.value);
                             if (isNaN(val) || val < option.min) {
                                 e.target.value = option.min;
                                 customValues[option.id] = option.min;
                                 updateConfigTotal();
                             }
                        });
                    }
                }
            });

            groupEl.appendChild(gridEl);
            configBody.appendChild(groupEl);
        });
    }

    function handleOptionToggle(groupId, type, optionId) {
        const currentSelected = configState[groupId];
        
        if (type === 'single') {
            configState[groupId] = [optionId];
        } else {
            // Checkbox logic
            if (currentSelected.includes(optionId)) {
                configState[groupId] = currentSelected.filter(id => id !== optionId);
            } else {
                configState[groupId].push(optionId);
            }
        }
        
        renderConfigOptions();
        updateConfigTotal();
    }

    function updateConfigTotal() {
        if (!selectedAlbum) return;
        
        let total = selectedAlbum.price;

        // Sum modifiers
        selectedAlbum.configGroups.forEach(group => {
            const selectedIds = configState[group.id];
            group.options.forEach(option => {
                if (selectedIds.includes(option.id)) {
                    if (option.isCustomNumber) {
                        const extraUnits = customValues[option.id] !== undefined ? customValues[option.id] : option.min;
                        total += extraUnits * option.pricePerUnit;
                    } else {
                        total += option.priceModifier;
                    }
                }
            });
        });

        configTotalValue.textContent = `R$ ${total.toLocaleString('pt-BR')}`;
    }

    // WhatsApp Action from Configurator
    btnConfigWhatsapp.addEventListener('click', () => {
        if (!selectedAlbum) return;

        let total = selectedAlbum.price;
        let detailsText = '';

        selectedAlbum.configGroups.forEach(group => {
            const selectedIds = configState[group.id];
            if (selectedIds.length > 0) {
                detailsText += `%0A*${group.name}:*`;
                group.options.forEach(option => {
                    if (selectedIds.includes(option.id)) {
                        
                        if (option.isCustomNumber) {
                            const extraUnits = Math.max(option.min, customValues[option.id] !== undefined ? customValues[option.id] : option.min);
                            const extraCost = extraUnits * option.pricePerUnit;
                            total += extraCost;
                            const priceStr = extraCost > 0 ? ` (+ R$ ${extraCost})` : '';
                            detailsText += `%0A- ${extraUnits} ${option.unitName} Extras${priceStr}`;
                        } else {
                            total += option.priceModifier;
                            const priceStr = option.priceModifier > 0 ? ` (+ R$ ${option.priceModifier})` : '';
                            detailsText += `%0A- ${option.name}${priceStr}`;
                        }
                    }
                });
            }
        });

        const text = `Olá! Gostaria de encomendar um álbum.%0A%0A*Categoria:* ${selectedCategoryTitle}%0A*Pacote:* ${selectedAlbum.name} (Base: R$ ${selectedAlbum.price})%0A%0A*Minhas escolhas:*${detailsText}%0A%0A*Valor Estimado Total:* R$ ${total.toLocaleString('pt-BR')}%0A%0AComo funciona o próximo passo?`;
        
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
        window.open(url, '_blank');
    });
});
