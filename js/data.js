const albumData = {
    casamento: {
        id: 'casamento',
        title: 'Casamento',
        description: 'Projetos desenhados para o maior evento da vida.',
        products: [
            {
                id: 'casamento_essencial',
                tier: 'essencial',
                name: 'Pacote Essencial',
                tagline: 'Capa Foto Express',
                description: 'Ótimo para quem deseja eternizar de forma prática.',
                price: 949,
                recommended: false,
                imagePlaceholder: 'assets/images/casamento-essencial.jpg',
                configGroups: [
                    {
                        id: 'size', name: 'Formato', type: 'single',
                        options: [{ id: '25x25', name: '25x25 cm', desc: 'Padrão', priceModifier: 0, image: 'assets/images/tamanho-25x25.jpg' }]
                    },
                    {
                        id: 'cover', name: 'Capa', type: 'single',
                        options: [{ id: 'foto_express', name: 'Fotográfica Laminada', desc: 'Filme fosco', priceModifier: 0, image: 'assets/images/capa-foto-fosca.jpg' }]
                    },
                    {
                        id: 'pages', name: 'Páginas', type: 'single',
                        options: [
                            { id: '20p', name: '20 Páginas', desc: 'Incluso (Fuji 800g)', priceModifier: 0, image: 'assets/images/paginas-padrao.jpg' },
                            { id: 'custom_pages', name: 'Páginas Extras', desc: 'Adicione mais páginas', isCustomNumber: true, pricePerUnit: 25, unitName: 'Páginas', min: 2, max: 80, image: 'assets/images/paginas-custom.jpg' }
                        ]
                    },
                    {
                        id: 'paper_finish', name: 'Acabamento', type: 'single',
                        options: [
                            { id: 'fosco', name: 'Fosco', desc: 'Laminação UV', priceModifier: 0, image: 'assets/images/papel-fuji-fosco.jpg' },
                            { id: 'silk', name: 'Silk', desc: 'Textura premium', priceModifier: 0, image: 'assets/images/papel-fuji-silk.jpg' }
                        ]
                    }
                ]
            },
            {
                id: 'casamento_classico',
                tier: 'prime',
                name: 'Pacote Clássico',
                tagline: 'Vicenza',
                description: 'Álbum revestido, permite gravação especial na capa.',
                price: 1790,
                recommended: true,
                imagePlaceholder: 'assets/images/casamento-classico.jpg',
                configGroups: [
                    {
                        id: 'size', name: 'Formato', type: 'single',
                        options: [{ id: '30x30', name: '30x30 cm', desc: 'Imponente', priceModifier: 0, image: 'assets/images/tamanho-30x30.jpg' }]
                    },
                    {
                        id: 'cover', name: 'Revestimento', type: 'single',
                        options: [
                            { id: 'tecido', name: 'Tecido', desc: 'Toque macio', priceModifier: 0, image: 'assets/images/capa-tecido.jpg' },
                            { id: 'corino', name: 'Corino', desc: 'Aparência de couro', priceModifier: 0, image: 'assets/images/capa-courino.jpg' }
                        ]
                    },
                    {
                        id: 'pages', name: 'Páginas', type: 'single',
                        options: [
                            { id: '30p', name: '30 Páginas', desc: 'Incluso', priceModifier: 0, image: 'assets/images/paginas-padrao.jpg' },
                            { id: 'custom_pages', name: 'Personalizado', desc: 'Mais páginas', isCustomNumber: true, pricePerUnit: 30, unitName: 'Páginas', min: 2, max: 70, image: 'assets/images/paginas-custom.jpg' }
                        ]
                    },
                    {
                        id: 'engraving', name: 'Gravação na Capa', type: 'single',
                        options: [
                            { id: 'laser', name: 'Gravação a Laser', desc: 'Profundo', priceModifier: 0, image: 'assets/images/extra-laser.jpg' },
                            { id: 'uv', name: 'Impressão UV', desc: 'Vibrante', priceModifier: 0, image: 'assets/images/extra-impressao-uv.jpg' },
                            { id: 'hotstamp', name: 'Hotstamp', desc: 'Brilhante', priceModifier: 0, image: 'assets/images/extra-hotstamping.jpg' }
                        ]
                    }
                ]
            },
            {
                id: 'casamento_luxo',
                tier: 'signature',
                name: 'Pacote Luxo',
                tagline: 'Capa Tecido Express',
                description: 'Sofisticação máxima com opcional de placa gravada.',
                price: 2390,
                recommended: false,
                imagePlaceholder: 'assets/images/casamento-luxo.jpg',
                configGroups: [
                    {
                        id: 'size', name: 'Formato', type: 'single',
                        options: [{ id: '30x30', name: '30x30 cm', desc: 'Imponente', priceModifier: 0, image: 'assets/images/tamanho-30x30.jpg' }]
                    },
                    {
                        id: 'cover', name: 'Capa', type: 'single',
                        options: [{ id: 'tecido', name: 'Tecido Especial', desc: 'Placa a laser', priceModifier: 0, image: 'assets/images/capa-tecido.jpg' }]
                    },
                    {
                        id: 'pages', name: 'Páginas', type: 'single',
                        options: [
                            { id: '40p', name: '40 Páginas', desc: 'Incluso', priceModifier: 0, image: 'assets/images/paginas-padrao.jpg' },
                            { id: 'custom_pages', name: 'Personalizado', desc: 'Mais páginas', isCustomNumber: true, pricePerUnit: 40, unitName: 'Páginas', min: 2, max: 60, image: 'assets/images/paginas-custom.jpg' }
                        ]
                    },
                    {
                        id: 'extras', name: 'Acabamentos', type: 'multiple',
                        options: [
                            { id: 'caixa', name: 'Caixa / Estojo', desc: 'Inclusa', priceModifier: 0, image: 'assets/images/extra-estojo.jpg' }
                        ]
                    }
                ]
            }
        ]
    },
    aniversario: {
        id: 'aniversario',
        title: 'Aniversário',
        description: 'Projetos desenhados para celebrar a vida.',
        products: [
            {
                id: 'aniversario_essencial',
                tier: 'essencial',
                name: 'Pacote Essencial',
                tagline: 'Capa Foto Express',
                description: 'Ótimo para quem deseja eternizar de forma prática.',
                price: 949,
                recommended: false,
                imagePlaceholder: 'assets/images/casamento-essencial.jpg',
                configGroups: [
                    {
                        id: 'size', name: 'Formato', type: 'single',
                        options: [{ id: '25x25', name: '25x25 cm', desc: 'Padrão', priceModifier: 0, image: 'assets/images/tamanho-25x25.jpg' }]
                    },
                    {
                        id: 'cover', name: 'Capa', type: 'single',
                        options: [{ id: 'foto_express', name: 'Fotográfica Laminada', desc: 'Filme fosco', priceModifier: 0, image: 'assets/images/capa-foto-fosca.jpg' }]
                    },
                    {
                        id: 'pages', name: 'Páginas', type: 'single',
                        options: [
                            { id: '20p', name: '20 Páginas', desc: 'Incluso (Fuji 800g)', priceModifier: 0, image: 'assets/images/paginas-padrao.jpg' },
                            { id: 'custom_pages', name: 'Páginas Extras', desc: 'Adicione mais páginas', isCustomNumber: true, pricePerUnit: 25, unitName: 'Páginas', min: 2, max: 80, image: 'assets/images/paginas-custom.jpg' }
                        ]
                    },
                    {
                        id: 'paper_finish', name: 'Acabamento', type: 'single',
                        options: [
                            { id: 'fosco', name: 'Fosco', desc: 'Laminação UV', priceModifier: 0, image: 'assets/images/papel-fuji-fosco.jpg' },
                            { id: 'silk', name: 'Silk', desc: 'Textura premium', priceModifier: 0, image: 'assets/images/papel-fuji-silk.jpg' }
                        ]
                    }
                ]
            },
            {
                id: 'aniversario_classico',
                tier: 'prime',
                name: 'Pacote Clássico',
                tagline: 'Vicenza',
                description: 'Álbum revestido, permite gravação especial na capa.',
                price: 1790,
                recommended: true,
                imagePlaceholder: 'assets/images/casamento-classico.jpg',
                configGroups: [
                    {
                        id: 'size', name: 'Formato', type: 'single',
                        options: [{ id: '30x30', name: '30x30 cm', desc: 'Imponente', priceModifier: 0, image: 'assets/images/tamanho-30x30.jpg' }]
                    },
                    {
                        id: 'cover', name: 'Revestimento', type: 'single',
                        options: [
                            { id: 'tecido', name: 'Tecido', desc: 'Toque macio', priceModifier: 0, image: 'assets/images/capa-tecido.jpg' },
                            { id: 'corino', name: 'Corino', desc: 'Aparência de couro', priceModifier: 0, image: 'assets/images/capa-courino.jpg' }
                        ]
                    },
                    {
                        id: 'pages', name: 'Páginas', type: 'single',
                        options: [
                            { id: '30p', name: '30 Páginas', desc: 'Incluso', priceModifier: 0, image: 'assets/images/paginas-padrao.jpg' },
                            { id: 'custom_pages', name: 'Personalizado', desc: 'Mais páginas', isCustomNumber: true, pricePerUnit: 30, unitName: 'Páginas', min: 2, max: 70, image: 'assets/images/paginas-custom.jpg' }
                        ]
                    },
                    {
                        id: 'engraving', name: 'Gravação na Capa', type: 'single',
                        options: [
                            { id: 'laser', name: 'Gravação a Laser', desc: 'Profundo', priceModifier: 0, image: 'assets/images/extra-laser.jpg' },
                            { id: 'uv', name: 'Impressão UV', desc: 'Vibrante', priceModifier: 0, image: 'assets/images/extra-impressao-uv.jpg' },
                            { id: 'hotstamp', name: 'Hotstamp', desc: 'Brilhante', priceModifier: 0, image: 'assets/images/extra-hotstamping.jpg' }
                        ]
                    }
                ]
            },
            {
                id: 'aniversario_luxo',
                tier: 'signature',
                name: 'Pacote Luxo',
                tagline: 'Capa Tecido Express',
                description: 'Sofisticação máxima com opcional de placa gravada.',
                price: 2390,
                recommended: false,
                imagePlaceholder: 'assets/images/casamento-luxo.jpg',
                configGroups: [
                    {
                        id: 'size', name: 'Formato', type: 'single',
                        options: [{ id: '30x30', name: '30x30 cm', desc: 'Imponente', priceModifier: 0, image: 'assets/images/tamanho-30x30.jpg' }]
                    },
                    {
                        id: 'cover', name: 'Capa', type: 'single',
                        options: [{ id: 'tecido', name: 'Tecido Especial', desc: 'Placa a laser', priceModifier: 0, image: 'assets/images/capa-tecido.jpg' }]
                    },
                    {
                        id: 'pages', name: 'Páginas', type: 'single',
                        options: [
                            { id: '40p', name: '40 Páginas', desc: 'Incluso', priceModifier: 0, image: 'assets/images/paginas-padrao.jpg' },
                            { id: 'custom_pages', name: 'Personalizado', desc: 'Mais páginas', isCustomNumber: true, pricePerUnit: 40, unitName: 'Páginas', min: 2, max: 60, image: 'assets/images/paginas-custom.jpg' }
                        ]
                    },
                    {
                        id: 'extras', name: 'Acabamentos', type: 'multiple',
                        options: [
                            { id: 'caixa', name: 'Caixa / Estojo', desc: 'Inclusa', priceModifier: 0, image: 'assets/images/extra-estojo.jpg' }
                        ]
                    }
                ]
            }
        ]
    },
    newborn: {
        id: 'newborn',
        title: 'Newborn',
        description: 'Pequenos detalhes, grandes memórias.',
        products: [
            {
                id: 'newborn_essencial',
                tier: 'essencial',
                name: 'Pacote Essencial',
                tagline: 'Pocketbook',
                description: 'Pequenos álbuns perfeitos para manusear.',
                price: 449,
                recommended: false,
                imagePlaceholder: 'assets/images/newborn-essencial.jpg',
                configGroups: [
                    {
                        id: 'size', name: 'Formato', type: 'single',
                        options: [
                            { id: '15x15', name: '15x15 cm', desc: 'Super compacto', priceModifier: 0, image: 'assets/images/tamanho-15x15.jpg' },
                            { id: '20x20', name: '20x20 cm', desc: 'Padrão Pocket', priceModifier: 0, image: 'assets/images/tamanho-20x20.jpg' },
                            { id: '25x25', name: '25x25 cm', desc: 'Maior visibilidade', priceModifier: 0, image: 'assets/images/tamanho-25x25.jpg' }
                        ]
                    },
                    {
                        id: 'pages', name: 'Páginas', type: 'single',
                        options: [
                            { id: '20p', name: '20 Páginas', desc: 'Abertura 180°', priceModifier: 0, image: 'assets/images/paginas-padrao.jpg' },
                            { id: 'custom_pages', name: 'Personalizado', desc: 'Páginas extras', isCustomNumber: true, pricePerUnit: 15, unitName: 'Páginas', min: 2, max: 10, image: 'assets/images/paginas-custom.jpg' }
                        ]
                    }
                ]
            },
            {
                id: 'newborn_classico',
                tier: 'prime',
                name: 'Pacote Clássico',
                tagline: 'Trend',
                description: 'Revestimento especial acompanhado de caixa.',
                price: 1190,
                recommended: true,
                imagePlaceholder: 'assets/images/newborn-classico.jpg',
                configGroups: [
                    {
                        id: 'size', name: 'Formato', type: 'single',
                        options: [{ id: '25x25', name: '25x25 cm', desc: 'Tamanho ideal', priceModifier: 0, image: 'assets/images/tamanho-25x25.jpg' }]
                    },
                    {
                        id: 'cover', name: 'Capa', type: 'single',
                        options: [{ id: 'courino', name: 'Courino', desc: 'Placa a laser', priceModifier: 0, image: 'assets/images/capa-courino.jpg' }]
                    },
                    {
                        id: 'pages', name: 'Páginas', type: 'single',
                        options: [
                            { id: '20p', name: '20 Páginas', desc: 'Incluso', priceModifier: 0, image: 'assets/images/paginas-padrao.jpg' },
                            { id: 'custom_pages', name: 'Personalizado', desc: 'Páginas extras', isCustomNumber: true, pricePerUnit: 20, unitName: 'Páginas', min: 2, max: 40, image: 'assets/images/paginas-custom.jpg' }
                        ]
                    },
                    {
                        id: 'extras', name: 'Acompanhamentos', type: 'multiple',
                        options: [
                            { id: 'caixa_aba', name: 'Caixa Aba', desc: 'Inclusa', priceModifier: 0, image: 'assets/images/extra-caixa-aba.jpg' }
                        ]
                    }
                ]
            },
            {
                id: 'newborn_luxo',
                tier: 'signature',
                name: 'Pacote Luxo',
                tagline: 'Capa Foto Express',
                description: 'A imponência do 30x30 fotográfico.',
                price: 1190,
                recommended: false,
                imagePlaceholder: 'assets/images/newborn-luxo.jpg',
                configGroups: [
                    {
                        id: 'size', name: 'Formato', type: 'single',
                        options: [{ id: '30x30', name: '30x30 cm', desc: 'Grande impacto', priceModifier: 0, image: 'assets/images/tamanho-30x30.jpg' }]
                    },
                    {
                        id: 'cover', name: 'Capa', type: 'single',
                        options: [{ id: 'foto', name: 'Fotográfica Laminada', desc: 'Filme fosco', priceModifier: 0, image: 'assets/images/capa-foto-fosca.jpg' }]
                    },
                    {
                        id: 'pages', name: 'Páginas', type: 'single',
                        options: [
                            { id: '30p', name: '30 Páginas', desc: 'Incluso', priceModifier: 0, image: 'assets/images/paginas-padrao.jpg' },
                            { id: 'custom_pages', name: 'Personalizado', desc: 'Páginas extras', isCustomNumber: true, pricePerUnit: 25, unitName: 'Páginas', min: 2, max: 70, image: 'assets/images/paginas-custom.jpg' }
                        ]
                    }
                ]
            }
        ]
    }
};
