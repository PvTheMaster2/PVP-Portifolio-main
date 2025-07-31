# 📊 Project Analysis Report

**Generated on:** 2025-07-31 10:35:46  
**Root directory:** `C:\Users\pedro\OneDrive\Área de Trabalho\Portifolio -main\PVP-Portifolio`  
**Purpose:** Complete project structure documentation excluding CSV files

## 📈 Project Summary

- **Total files analyzed:** 277
- **📄 Code/Text files:** 102
- **🖼️ Image files:** 74
- **🚫 Excluded files (CSV):** 0
- **⚠️ Large files (> 5MB):** 21
- **📁 Other files:** 80

## 🌳 Project Structure

```
├── .eleventy.js 📄
├── .eleventyignore 📄
├── README.md 📄
├── combine_project.py 📄
├── compilado projeto rescunho site.md 📄
├── custom.css 📄
├── netlify.toml 📄
├── package-lock.json 📄
├── package.json 📄
├── plugin-info.json 📄
├── src 📁
│   ├── helpers 📁
│   │   ├── constants.js 📄
│   │   ├── filetreeUtils.js 📄
│   │   ├── linkUtils.js 📄
│   │   ├── userSetup.js 📄
│   │   ├── userUtils.js 📄
│   │   └── utils.js 📄
│   └── site 📁
│       ├── 404.njk 📄
│       ├── _data 📁
│       │   ├── dynamics.js 📄
│       │   ├── eleventyComputed.js 📄
│       │   └── meta.js 📄
│       ├── _includes 📁
│       │   ├── components 📁
│       │   │   ├── calloutScript.njk 📄
│       │   │   ├── filetree.njk 📄
│       │   │   ├── filetreeNavbar.njk 📄
│       │   │   ├── graphScript.njk 📄
│       │   │   ├── linkPreview.njk 📄
│       │   │   ├── lucideIcons.njk 📄
│       │   │   ├── navbar.njk 📄
│       │   │   ├── notegrowthhistory.njk 📄
│       │   │   ├── pageheader.njk 📄
│       │   │   ├── references.njk 📄
│       │   │   ├── searchButton.njk 📄
│       │   │   ├── searchContainer.njk 📄
│       │   │   ├── searchScript.njk 📄
│       │   │   ├── sidebar.njk 📄
│       │   │   └── timestamps.njk 📄
│       │   └── layouts 📁
│       │       ├── index.njk 📄
│       │       └── note.njk 📄
│       ├── assets 📁
│       │   ├── imagens 📁
│       │   │   ├── 01-personalizado_lep.jpg 🖼️
│       │   │   ├── 01_lep.jpg 🖼️
│       │   │   ├── 06-personalizado_lep.jpg 🖼️
│       │   │   ├── 06_lep.jpg 🖼️
│       │   │   ├── 1_photo-1-personalizado_adriene.jpg 🖼️
│       │   │   ├── 1_photo-1_adriene.jpg 🖼️
│       │   │   ├── 3integrado-03-personalizado_adriene.jpg 🖼️
│       │   │   ├── 3integrado-03_adriene.jpg 🖼️
│       │   │   ├── a1-grande_adriene.png 🖼️
│       │   │   ├── a1_adriene.png 🖼️
│       │   │   ├── a2-grande_adriene.png 🖼️
│       │   │   ├── a2_adriene.png 🖼️
│       │   │   ├── a3-grande_adriene.png 🖼️
│       │   │   ├── a3_adriene.png 🖼️
│       │   │   ├── a4-grande_alexandre.png 🖼️
│       │   │   ├── a4_alexandre.png 🖼️
│       │   │   ├── al1-grande_alexandre.png 🖼️
│       │   │   ├── al1_alexandre.png 🖼️
│       │   │   ├── al2-grande_alexandre.png 🖼️
│       │   │   ├── al2_alexandre.png 🖼️
│       │   │   ├── al3-grande_alexandre.png 🖼️
│       │   │   ├── al3_alexandre.png 🖼️
│       │   │   ├── al5-grande_alexandre.png 🖼️
│       │   │   ├── al5_alexandre.png 🖼️
│       │   │   ├── casa-sitio_casa-sitio.png 🖼️
│       │   │   ├── foto_photo-1-personalizado_nairo.jpg 🖼️
│       │   │   ├── foto_photo-10-personalizado_nairo.jpg 🖼️
│       │   │   ├── foto_photo-10_nairo.jpg 🖼️
│       │   │   ├── foto_photo-1_nairo.jpg 🖼️
│       │   │   ├── gt1-personalizado_gt.png 🖼️
│       │   │   ├── gt1_gt.png 🖼️
│       │   │   ├── gt2-personalizado_gt.png 🖼️
│       │   │   ├── gt2_gt.png 🖼️
│       │   │   ├── gt3-grande_gt.png 🖼️
│       │   │   ├── gt3_gt.png 🖼️
│       │   │   ├── gt4-grande_gt.png 🖼️
│       │   │   ├── gt4_gt.png 🖼️
│       │   │   ├── lp1-grande_lep.png 🖼️
│       │   │   ├── lp1_lep.png 🖼️
│       │   │   ├── lp2-grande_lep.png 🖼️
│       │   │   ├── lp2_lep.png 🖼️
│       │   │   ├── lp3-grande_lep.png 🖼️
│       │   │   ├── lp3_lep.png 🖼️
│       │   │   ├── m1-grande_marista.png 🖼️
│       │   │   ├── m1_marista.png 🖼️
│       │   │   ├── m2-grande_marista.png 🖼️
│       │   │   ├── m2_marista.png 🖼️
│       │   │   ├── m3-grande_marista.png 🖼️
│       │   │   ├── m3_marista.png 🖼️
│       │   │   ├── m4-grande_marista.png 🖼️
│       │   │   ├── m4_marista.png 🖼️
│       │   │   ├── n1-grande_nairo.png 🖼️
│       │   │   ├── n1_nairo.png 🖼️
│       │   │   ├── n2-grande_nairo.png 🖼️
│       │   │   ├── n2_nairo.png 🖼️
│       │   │   ├── n3-grande_nairo.png 🖼️
│       │   │   ├── n3_nairo.png 🖼️
│       │   │   ├── n4-grande_nairo.png 🖼️
│       │   │   ├── n4_nairo.png 🖼️
│       │   │   ├── noturno_11-foto-personalizado_alexandre.jpg 🖼️
│       │   │   ├── noturno_11-foto_alexandre.jpg 🖼️
│       │   │   ├── render-3-personalizado_rafael.jpg 🖼️
│       │   │   ├── render-3_rafael.jpg 🖼️
│       │   │   ├── render-personalizado_rafael.jpg 🖼️
│       │   │   ├── render_photo-2-personalizado_alexandre.jpg 🖼️
│       │   │   ├── render_photo-2_alexandre.jpg 🖼️
│       │   │   ├── render_photo-6-personalizado_alexandre.jpg 🖼️
│       │   │   ├── render_photo-6_alexandre.jpg 🖼️
│       │   │   ├── render_photo-9-personalizado_alexandre.jpg 🖼️
│       │   │   ├── render_photo-9_alexandre.jpg 🖼️
│       │   │   ├── render_rafael.jpg 🖼️
│       │   │   ├── residencial-com-comercio_predio-comercio.png 🖼️
│       │   │   ├── rodrigo-empresa_rodrigo-empresa.png 🖼️
│       │   │   ├── rp1-grande_rafael.png 🖼️
│       │   │   ├── rp1_rafael.png 🖼️
│       │   │   ├── rp2-grande_rafael.png 🖼️
│       │   │   ├── rp2_rafael.png 🖼️
│       │   │   ├── sidcredi_sicredi.png 🖼️
│       │   │   ├── z1-grande_zotti.png 🖼️
│       │   │   ├── z1_zotti.png 🖼️
│       │   │   ├── z2-grande_zotti.png 🖼️
│       │   │   ├── z2_zotti.png 🖼️
│       │   │   ├── z3-grande_zotti.png 🖼️
│       │   │   └── z3_zotti.png 🖼️
│       │   └── pdfs 📁
│       │       ├── cobertura-casa-gp.pdf 📁
│       │       ├── entrada-predial-barao.pdf 📁
│       │       ├── fc-d08-wolf-e301-r02-2pavimento_dom-pedrito.pdf 📁
│       │       ├── fc-d08-wolf-e301-r02-2pavimento_dom-pedrito_recorte_p1.pdf 📁
│       │       ├── fc-d08-wolf-e301-r02-2pavimento_recorte_p1_dom-pedrito.pdf 📁
│       │       ├── fc-d08-wolf-e401-r02-4pavimento_dom-pedrito.pdf 📁
│       │       ├── fc-d08-wolf-e501-r02-5pavimento_dom-pedrito.pdf 📁
│       │       ├── fc-d08-wolf-e501-r02-5pavimento_recorte_p1_dom-pedrito.pdf 📁
│       │       ├── fc-d08-wolf-e999-r00-detalhe-prumada_dom-pedrito.pdf 📁
│       │       ├── fc-d08-wolf-e999-r00-detalhe-prumada_recorte_p1_dom-pedrito.pdf 📁
│       │       ├── fc-d13-e101-r04-terreo_recorte_p1_zotti.pdf 📁
│       │       ├── fc-d13-e101-r04-terreo_zotti.pdf 📁
│       │       ├── fc-d13-e201-r05-segundo-pav_recorte_p1_zotti.pdf 📁
│       │       ├── fc-d13-e201-r05-segundo-pav_zotti.pdf 📁
│       │       ├── fc-d30-e101-térreo-r02_lojas-remiao.pdf 📁
│       │       ├── fc-d30-e101-térreo-r02_recorte_p1_lojas-remiao.pdf 📁
│       │       ├── fc-d30-e201-mezanino-r02_lojas-remiao.pdf 📁
│       │       ├── fc-d30-e201-mezanino-r02_recorte_p1_lojas-remiao.pdf 📁
│       │       ├── fc-d33-e000-r00-situação_loja-joao.pdf 📁
│       │       ├── fc-d33-e001-ent_energia-r00_loja-joao.pdf 📁
│       │       ├── fc-d33-e001-ent_energia-r00_recorte_p1_loja-joao.pdf 📁
│       │       ├── fc-d33-e101-r01_loja-joao.pdf 📁
│       │       ├── fc-d33-e101-r01_recorte_p1_loja-joao.pdf 📁
│       │       ├── fc-d33-e201-r01_loja-joao.pdf 📁
│       │       ├── fc-d33-e201-r01_recorte_p1_loja-joao.pdf 📁
│       │       ├── fc-d34-sureg-e201-ex-r00-2pav_recorte_p1_sicredi.pdf 📁
│       │       ├── fc-d34-sureg-e201-ex-r00-2pav_sicredi.pdf 📁
│       │       ├── fc-d34-sureg-e211-ex-r00_sicredi.pdf 📁
│       │       ├── fc-d34-sureg-e301-ex-r00-3pav_recorte_p1_sicredi.pdf 📁
│       │       ├── fc-d34-sureg-e301-ex-r00-3pav_sicredi.pdf 📁
│       │       ├── fc-d34-sureg-e311-ex-r00-diagramas_sicredi.pdf 📁
│       │       ├── fc-d35-e000-situação-r01_loja-avenida.pdf 📁
│       │       ├── fc-d35-e001-ent_energia-r01_loja-avenida.pdf 📁
│       │       ├── fc-d35-e001-ent_energia-r01_recorte_p1_loja-avenida.pdf 📁
│       │       ├── fc-d35-e101-terreo-r02_loja-avenida.pdf 📁
│       │       ├── fc-d35-e101-terreo-r02_recorte_p1_loja-avenida.pdf 📁
│       │       ├── fc-d35-e102-segundo-pav-r02_loja-avenida.pdf 📁
│       │       ├── fc-d35-e102-segundo-pav-r02_recorte_p1_loja-avenida.pdf 📁
│       │       ├── ifc-dom-pedrito_r08_dom-pedrito.pdf 📁
│       │       ├── ifc-dom-pedrito_r08_recorte_p1_dom-pedrito.pdf 📁
│       │       ├── paineis-predial-barao.pdf 📁
│       │       ├── painel-predial-barao.pdf 📁
│       │       ├── pvp-a02-e002-r02-medidores_predio-comercio.pdf 📁
│       │       ├── pvp-a02-e003-r01-situação_predio-comercio.pdf 📁
│       │       ├── pvp-a02-e004-r00-diagrama-unifilar_predio-comercio.pdf 📁
│       │       ├── pvp-a02-e005-r00-corte-vertical_predio-comercio.pdf 📁
│       │       ├── pvp-a02-e101-r02-térreo_predio-comercio.pdf 📁
│       │       ├── pvp-a02-e101-r03-terreo_recorte_p1_rodrigo-empresa.pdf 📁
│       │       ├── pvp-a02-e101-r03-terreo_rodrigo-empresa.pdf 📁
│       │       ├── pvp-a02-e201-r02-2pav_recorte_p1_rodrigo-empresa.pdf 📁
│       │       ├── pvp-a02-e201-r02-2pav_rodrigo-empresa.pdf 📁
│       │       ├── pvp-a02-e201-r02-tipo_predio-comercio.pdf 📁
│       │       ├── pvp-a02-e301-r02-3pav_recorte_p1_rodrigo-empresa.pdf 📁
│       │       ├── pvp-a02-e301-r02-3pav_rodrigo-empresa.pdf 📁
│       │       ├── pvp-a02-e301-r03-cobertura_predio-comercio.pdf 📁
│       │       ├── pvp-a02-e401-r00-vertical_recorte_p1_rodrigo-empresa.pdf 📁
│       │       ├── pvp-a02-e401-r00-vertical_rodrigo-empresa.pdf 📁
│       │       ├── pvp-a02-h201-r01-água-fria-e-reservatórios_predio-comercio.pdf 📁
│       │       ├── pvp-a02-h201-r03-cloacal-e-pluvial_predio-comercio.pdf 📁
│       │       ├── pvp-a03-e101-r02-terreo_casa-sitio.pdf 📁
│       │       ├── pvp-a03-e101-r02-terreo_recorte_p1_casa-sitio.pdf 📁
│       │       ├── pvp-a03-e201-r02-2pav_casa-sitio.pdf 📁
│       │       ├── pvp-a03-e201-r02-2pav_recorte_p1_casa-sitio.pdf 📁
│       │       ├── pvp-a03-h100-r02-água-quente-e-fria_casa-sitio.pdf 📁
│       │       ├── pvp-a03-h100-r02-água-quente-e-fria_recorte_p1_casa-sitio.pdf 📁
│       │       ├── pvp-a03-h200-r02-pluvial-e-cloal_casa-sitio.pdf 📁
│       │       ├── pvp-a03-h200-r02-pluvial-e-cloal_recorte_p1_casa-sitio.pdf 📁
│       │       ├── render-barao.pdf 📁
│       │       ├── render-casa-cd.pdf 📁
│       │       ├── render-casa-gt.pdf 📁
│       │       ├── render-loja-avenida.pdf 📁
│       │       ├── render-loja-dz.pdf 📁
│       │       ├── render-loja-joao.pdf 📁
│       │       ├── render-loja-rm.pdf 📁
│       │       ├── ros_ele_paaa_2-e3-_lev-2022-r02_marista.pdf 📁
│       │       ├── ros_ele_paaa_2-e3-_lev-2022-r02_recorte_p1_marista.pdf 📁
│       │       ├── ros_ele_paaa_4pav_lev-2022-r02_marista.pdf 📁
│       │       ├── ros_ele_paaa_4pav_lev-2022-r02_recorte_p1_marista.pdf 📁
│       │       ├── ros_ele_paaa_ban4-_lev-2022-r02_marista.pdf 📁
│       │       ├── ros_ele_paaa_ban4-_lev-2022-r02_recorte_p1_marista.pdf 📁
│       │       ├── segundopav-casa-cd.pdf 📁
│       │       ├── segundopav-casa-gp.pdf 📁
│       │       ├── subsolo1-predial-barao.pdf 📁
│       │       ├── subsolo2-predial-barao.pdf 📁
│       │       ├── terreo-casa-cd.pdf 📁
│       │       ├── terreo-casa-gp.pdf 📁
│       │       ├── terreo-predial-barao.pdf 📁
│       │       ├── tipo-predial-barao.pdf 📁
│       │       ├── unifilar-predial-barao.pdf 📁
│       │       └── vertical-predial-barao.pdf 📁
│       ├── favicon.svg 🖼️
│       ├── feed.njk 📄
│       ├── get-theme.js 📄
│       ├── graph.njk 📄
│       ├── img 📁
│       │   ├── default-note-icon.svg 🖼️
│       │   ├── outgoing.svg 🖼️
│       │   ├── tree-1.svg 🖼️
│       │   ├── tree-2.svg 🖼️
│       │   └── tree-3.svg 🖼️
│       ├── notes 📁
│       │   ├── .obsidian 📁
│       │   │   ├── app.json 📄
│       │   │   ├── appearance.json 📄
│       │   │   ├── core-plugins.json 📄
│       │   │   ├── plugins 📁
│       │   │   │   ├── auto-note-mover 📁
│       │   │   │   │   └── main.js 📄
│       │   │   │   ├── better-export-pdf 📁
│       │   │   │   │   └── main.js 📄
│       │   │   │   ├── copilot 📁
│       │   │   │   │   └── main.js 📄
│       │   │   │   ├── dataview 📁
│       │   │   │   │   └── main.js 📄
│       │   │   │   ├── digitalgarden 📁
│       │   │   │   │   ├── data.json 📄
│       │   │   │   │   └── main.js 📄
│       │   │   │   ├── excalibrain 📁
│       │   │   │   │   └── main.js 📄
│       │   │   │   ├── mxmind 📁
│       │   │   │   │   └── main.js 📄
│       │   │   │   ├── obsidian-advanced-uri 📁
│       │   │   │   │   └── main.js 📄
│       │   │   │   ├── obsidian-banners 📁
│       │   │   │   │   └── main.js 📄
│       │   │   │   ├── obsidian-book-search-plugin 📁
│       │   │   │   │   └── main.js 📄
│       │   │   │   ├── obsidian-charts 📁
│       │   │   │   │   └── main.js 📄
│       │   │   │   ├── obsidian-excalidraw-plugin 📁
│       │   │   │   │   └── main.js 📄
│       │   │   │   ├── obsidian-frontmatter-tag-suggest 📁
│       │   │   │   │   └── main.js 📄
│       │   │   │   ├── obsidian-mind-map 📁
│       │   │   │   │   └── main.js 📄
│       │   │   │   ├── obsidian-projects 📁
│       │   │   │   │   └── main.js 📄
│       │   │   │   ├── obsidian-view-mode-by-frontmatter 📁
│       │   │   │   │   └── main.js 📄
│       │   │   │   ├── obsidian-wikipedia 📁
│       │   │   │   │   └── main.js 📄
│       │   │   │   ├── quickadd 📁
│       │   │   │   │   └── main.js 📄
│       │   │   │   ├── smart-connections 📁
│       │   │   │   │   └── main.js 📄
│       │   │   │   ├── templater-obsidian 📁
│       │   │   │   │   └── main.js 📄
│       │   │   │   ├── update-time-on-edit 📁
│       │   │   │   │   ├── data.json 📄
│       │   │   │   │   └── main.js 📄
│       │   │   │   ├── xmind-viewer 📁
│       │   │   │   │   └── main.js 📄
│       │   │   │   └── zettelkasten-llm-tools 📁
│       │   │   │       └── main.js 📄
│       │   │   ├── snippets 📁
│       │   │   └── workspace.json 📄
│       │   ├── ADRIENE 📁
│       │   │   └── reforma-ad_adriene.md 📄
│       │   ├── ALEXANDRE 📁
│       │   │   └── projeto-eletrico-e-hidrossanitario-al_alexandre.md 📄
│       │   ├── LUIZ EDUARDO E PREICILA 📁
│       │   │   └── projeto-lep_lep.md 📄
│       │   ├── NAIRO 📁
│       │   │   └── projeto-nf_nairo.md 📄
│       │   ├── PREDIO COM COMERCIO 📁
│       │   │   └── projeto-eletrico-e-hidrossanitario-rmc_predio-comercio.md 📄
│       │   ├── RAFAEL SPICKER 📁
│       │   │   └── projeto-eletrico-e-hidrossanitario-rp_rafael.md 📄
│       │   ├── REVIT 📁
│       │   │   ├── BARÃO DE UBA 📁
│       │   │   │   └── projeto-eletrico-bu_barao-uba.md 📄
│       │   │   ├── CASA SITIO 📁
│       │   │   │   └── projeto-eletrico-e-hidrosanitario-cs_casa-sitio.md 📄
│       │   │   ├── DOM PEDRITO 📁
│       │   │   │   └── projeto-eletrico-dp_dom-pedrito.md 📄
│       │   │   ├── LOJA AVENIDA DO FORTE 📁
│       │   │   │   └── projeto-eletrico-af_loja-avenida.md 📄
│       │   │   ├── LOJA JOAO WALLIG 📁
│       │   │   │   └── projeto-eletrico-jw_loja-joao.md 📄
│       │   │   ├── LOJAS REMIÃO 📁
│       │   │   │   └── projeto-eletrico-lr._lojas-remiao.md 📄
│       │   │   ├── MARISTA 📁
│       │   │   │   └── projeto-eletrico-ma_marista.md 📄
│       │   │   ├── RODRIGO EMPRESA 📁
│       │   │   │   ├── 00  -ANTIGOS 📁
│       │   │   │   └── projeto-eletrico-e-hidrossanitario-re_rodrigo-empresa.md 📄
│       │   │   ├── SICREDI 📁
│       │   │   │   └── projeto-eletrico-si_sicredi.md 📄
│       │   │   └── ZOTTI 📁
│       │   │       └── projeto-eletrico-dz_zotti.md 📄
│       │   ├── SEFERIN CD 📁
│       │   │   └── projeto-eletrico-cd_cd.md 📄
│       │   ├── SEFERIN GP 📁
│       │   │   └── projeto-eletrico-gp_gp.md 📄
│       │   ├── SEFERIN GT 📁
│       │   │   └── projeto-eletrico-gt_gt.md 📄
│       │   ├── notes.11tydata.js 📄
│       │   ├── notes.json 📄
│       │   └── util 📁
│       │       └── Portifolio 📁
│       ├── search-index.njk 📄
│       ├── sitemap.njk 📄
│       └── styles 📁
│           ├── custom-style.scss 📄
│           ├── digital-garden-base.scss 📄
│           ├── obsidian-base.scss 📄
│           └── style.scss 📄
└── vercel.json 📄
```

## 📋 Project Contents

### ⚠️ Large Files (> 5MB)

Total large files skipped: 21

- `src\site\assets\imagens\01_lep.jpg` (5.54 MB)
- `src\site\assets\imagens\06_lep.jpg` (7.91 MB)
- `src\site\assets\imagens\foto_photo-10_nairo.jpg` (6.84 MB)
- `src\site\assets\imagens\foto_photo-1_nairo.jpg` (5.29 MB)
- `src\site\assets\imagens\noturno_11-foto_alexandre.jpg` (15.81 MB)
- `src\site\assets\imagens\render-3_rafael.jpg` (16.52 MB)
- `src\site\assets\imagens\render_photo-2_alexandre.jpg` (13.09 MB)
- `src\site\assets\imagens\render_photo-6_alexandre.jpg` (14.39 MB)
- `src\site\assets\imagens\render_photo-9_alexandre.jpg` (13.87 MB)
- `src\site\assets\imagens\render_rafael.jpg` (19.49 MB)
- `src\site\assets\pdfs\fc-d34-sureg-e201-ex-r00-2pav_recorte_p1_sicredi.pdf` (5.81 MB)
- `src\site\assets\pdfs\fc-d34-sureg-e201-ex-r00-2pav_sicredi.pdf` (5.77 MB)
- `src\site\assets\pdfs\fc-d34-sureg-e301-ex-r00-3pav_recorte_p1_sicredi.pdf` (28.46 MB)
- `src\site\assets\pdfs\fc-d34-sureg-e301-ex-r00-3pav_sicredi.pdf` (28.47 MB)
- `src\site\assets\pdfs\ifc-dom-pedrito_r08_dom-pedrito.pdf` (37.62 MB)
- `src\site\assets\pdfs\render-barao.pdf` (56.24 MB)
- `src\site\assets\pdfs\render-casa-cd.pdf` (26.51 MB)
- `src\site\assets\pdfs\render-casa-gt.pdf` (15.50 MB)
- `src\site\assets\pdfs\ros_ele_paaa_4pav_lev-2022-r02_marista.pdf` (6.44 MB)
- `src\site\assets\pdfs\ros_ele_paaa_4pav_lev-2022-r02_recorte_p1_marista.pdf` (6.43 MB)
- `src\site\notes\.obsidian\plugins\obsidian-excalidraw-plugin\main.js` (7.94 MB)

---

### 🖼️ Project Images

#### src\site\assets\imagens\01-personalizado_lep.jpg
*Size: 29.73 KB*

![01-personalizado_lep.jpg](src/site/assets/imagens/01-personalizado_lep.jpg)

---

#### src\site\assets\imagens\06-personalizado_lep.jpg
*Size: 33.79 KB*

![06-personalizado_lep.jpg](src/site/assets/imagens/06-personalizado_lep.jpg)

---

#### src\site\assets\imagens\1_photo-1-personalizado_adriene.jpg
*Size: 29.56 KB*

![1_photo-1-personalizado_adriene.jpg](src/site/assets/imagens/1_photo-1-personalizado_adriene.jpg)

---

#### src\site\assets\imagens\1_photo-1_adriene.jpg
*Size: 275.58 KB*

![1_photo-1_adriene.jpg](src/site/assets/imagens/1_photo-1_adriene.jpg)

---

#### src\site\assets\imagens\3integrado-03-personalizado_adriene.jpg
*Size: 24.78 KB*

![3integrado-03-personalizado_adriene.jpg](src/site/assets/imagens/3integrado-03-personalizado_adriene.jpg)

---

#### src\site\assets\imagens\3integrado-03_adriene.jpg
*Size: 230.02 KB*

![3integrado-03_adriene.jpg](src/site/assets/imagens/3integrado-03_adriene.jpg)

---

#### src\site\assets\imagens\a1-grande_adriene.png
*Size: 557.99 KB*

![a1-grande_adriene.png](src/site/assets/imagens/a1-grande_adriene.png)

---

#### src\site\assets\imagens\a1_adriene.png
*Size: 165.62 KB*

![a1_adriene.png](src/site/assets/imagens/a1_adriene.png)

---

#### src\site\assets\imagens\a2-grande_adriene.png
*Size: 898.05 KB*

![a2-grande_adriene.png](src/site/assets/imagens/a2-grande_adriene.png)

---

#### src\site\assets\imagens\a2_adriene.png
*Size: 250.01 KB*

![a2_adriene.png](src/site/assets/imagens/a2_adriene.png)

---

#### src\site\assets\imagens\a3-grande_adriene.png
*Size: 1.20 MB*

![a3-grande_adriene.png](src/site/assets/imagens/a3-grande_adriene.png)

---

#### src\site\assets\imagens\a3_adriene.png
*Size: 196.16 KB*

![a3_adriene.png](src/site/assets/imagens/a3_adriene.png)

---

#### src\site\assets\imagens\a4-grande_alexandre.png
*Size: 798.67 KB*

![a4-grande_alexandre.png](src/site/assets/imagens/a4-grande_alexandre.png)

---

#### src\site\assets\imagens\a4_alexandre.png
*Size: 349.06 KB*

![a4_alexandre.png](src/site/assets/imagens/a4_alexandre.png)

---

#### src\site\assets\imagens\al1-grande_alexandre.png
*Size: 587.91 KB*

![al1-grande_alexandre.png](src/site/assets/imagens/al1-grande_alexandre.png)

---

#### src\site\assets\imagens\al1_alexandre.png
*Size: 159.67 KB*

![al1_alexandre.png](src/site/assets/imagens/al1_alexandre.png)

---

#### src\site\assets\imagens\al2-grande_alexandre.png
*Size: 784.27 KB*

![al2-grande_alexandre.png](src/site/assets/imagens/al2-grande_alexandre.png)

---

#### src\site\assets\imagens\al2_alexandre.png
*Size: 190.05 KB*

![al2_alexandre.png](src/site/assets/imagens/al2_alexandre.png)

---

#### src\site\assets\imagens\al3-grande_alexandre.png
*Size: 791.81 KB*

![al3-grande_alexandre.png](src/site/assets/imagens/al3-grande_alexandre.png)

---

#### src\site\assets\imagens\al3_alexandre.png
*Size: 179.63 KB*

![al3_alexandre.png](src/site/assets/imagens/al3_alexandre.png)

---

#### src\site\assets\imagens\al5-grande_alexandre.png
*Size: 854.41 KB*

![al5-grande_alexandre.png](src/site/assets/imagens/al5-grande_alexandre.png)

---

#### src\site\assets\imagens\al5_alexandre.png
*Size: 333.27 KB*

![al5_alexandre.png](src/site/assets/imagens/al5_alexandre.png)

---

#### src\site\assets\imagens\casa-sitio_casa-sitio.png
*Size: 137.33 KB*

![casa-sitio_casa-sitio.png](src/site/assets/imagens/casa-sitio_casa-sitio.png)

---

#### src\site\assets\imagens\foto_photo-1-personalizado_nairo.jpg
*Size: 25.20 KB*

![foto_photo-1-personalizado_nairo.jpg](src/site/assets/imagens/foto_photo-1-personalizado_nairo.jpg)

---

#### src\site\assets\imagens\foto_photo-10-personalizado_nairo.jpg
*Size: 33.31 KB*

![foto_photo-10-personalizado_nairo.jpg](src/site/assets/imagens/foto_photo-10-personalizado_nairo.jpg)

---

#### src\site\assets\imagens\gt1-personalizado_gt.png
*Size: 50.74 KB*

![gt1-personalizado_gt.png](src/site/assets/imagens/gt1-personalizado_gt.png)

---

#### src\site\assets\imagens\gt1_gt.png
*Size: 280.06 KB*

![gt1_gt.png](src/site/assets/imagens/gt1_gt.png)

---

#### src\site\assets\imagens\gt2-personalizado_gt.png
*Size: 64.18 KB*

![gt2-personalizado_gt.png](src/site/assets/imagens/gt2-personalizado_gt.png)

---

#### src\site\assets\imagens\gt2_gt.png
*Size: 289.84 KB*

![gt2_gt.png](src/site/assets/imagens/gt2_gt.png)

---

#### src\site\assets\imagens\gt3-grande_gt.png
*Size: 1.09 MB*

![gt3-grande_gt.png](src/site/assets/imagens/gt3-grande_gt.png)

---

#### src\site\assets\imagens\gt3_gt.png
*Size: 579.05 KB*

![gt3_gt.png](src/site/assets/imagens/gt3_gt.png)

---

#### src\site\assets\imagens\gt4-grande_gt.png
*Size: 502.82 KB*

![gt4-grande_gt.png](src/site/assets/imagens/gt4-grande_gt.png)

---

#### src\site\assets\imagens\gt4_gt.png
*Size: 252.22 KB*

![gt4_gt.png](src/site/assets/imagens/gt4_gt.png)

---

#### src\site\assets\imagens\lp1-grande_lep.png
*Size: 960.23 KB*

![lp1-grande_lep.png](src/site/assets/imagens/lp1-grande_lep.png)

---

#### src\site\assets\imagens\lp1_lep.png
*Size: 525.96 KB*

![lp1_lep.png](src/site/assets/imagens/lp1_lep.png)

---

#### src\site\assets\imagens\lp2-grande_lep.png
*Size: 708.23 KB*

![lp2-grande_lep.png](src/site/assets/imagens/lp2-grande_lep.png)

---

#### src\site\assets\imagens\lp2_lep.png
*Size: 316.08 KB*

![lp2_lep.png](src/site/assets/imagens/lp2_lep.png)

---

#### src\site\assets\imagens\lp3-grande_lep.png
*Size: 482.74 KB*

![lp3-grande_lep.png](src/site/assets/imagens/lp3-grande_lep.png)

---

#### src\site\assets\imagens\lp3_lep.png
*Size: 203.37 KB*

![lp3_lep.png](src/site/assets/imagens/lp3_lep.png)

---

#### src\site\assets\imagens\m1-grande_marista.png
*Size: 846.81 KB*

![m1-grande_marista.png](src/site/assets/imagens/m1-grande_marista.png)

---

#### src\site\assets\imagens\m1_marista.png
*Size: 401.91 KB*

![m1_marista.png](src/site/assets/imagens/m1_marista.png)

---

#### src\site\assets\imagens\m2-grande_marista.png
*Size: 516.44 KB*

![m2-grande_marista.png](src/site/assets/imagens/m2-grande_marista.png)

---

#### src\site\assets\imagens\m2_marista.png
*Size: 275.21 KB*

![m2_marista.png](src/site/assets/imagens/m2_marista.png)

---

#### src\site\assets\imagens\m3-grande_marista.png
*Size: 923.65 KB*

![m3-grande_marista.png](src/site/assets/imagens/m3-grande_marista.png)

---

#### src\site\assets\imagens\m3_marista.png
*Size: 457.91 KB*

![m3_marista.png](src/site/assets/imagens/m3_marista.png)

---

#### src\site\assets\imagens\m4-grande_marista.png
*Size: 627.73 KB*

![m4-grande_marista.png](src/site/assets/imagens/m4-grande_marista.png)

---

#### src\site\assets\imagens\m4_marista.png
*Size: 330.11 KB*

![m4_marista.png](src/site/assets/imagens/m4_marista.png)

---

#### src\site\assets\imagens\n1-grande_nairo.png
*Size: 1.02 MB*

![n1-grande_nairo.png](src/site/assets/imagens/n1-grande_nairo.png)

---

#### src\site\assets\imagens\n1_nairo.png
*Size: 195.54 KB*

![n1_nairo.png](src/site/assets/imagens/n1_nairo.png)

---

#### src\site\assets\imagens\n2-grande_nairo.png
*Size: 989.17 KB*

![n2-grande_nairo.png](src/site/assets/imagens/n2-grande_nairo.png)

---

#### src\site\assets\imagens\n2_nairo.png
*Size: 181.21 KB*

![n2_nairo.png](src/site/assets/imagens/n2_nairo.png)

---

#### src\site\assets\imagens\n3-grande_nairo.png
*Size: 487.30 KB*

![n3-grande_nairo.png](src/site/assets/imagens/n3-grande_nairo.png)

---

#### src\site\assets\imagens\n3_nairo.png
*Size: 94.02 KB*

![n3_nairo.png](src/site/assets/imagens/n3_nairo.png)

---

#### src\site\assets\imagens\n4-grande_nairo.png
*Size: 274.44 KB*

![n4-grande_nairo.png](src/site/assets/imagens/n4-grande_nairo.png)

---

#### src\site\assets\imagens\n4_nairo.png
*Size: 123.35 KB*

![n4_nairo.png](src/site/assets/imagens/n4_nairo.png)

---

#### src\site\assets\imagens\noturno_11-foto-personalizado_alexandre.jpg
*Size: 24.47 KB*

![noturno_11-foto-personalizado_alexandre.jpg](src/site/assets/imagens/noturno_11-foto-personalizado_alexandre.jpg)

---

#### src\site\assets\imagens\render-3-personalizado_rafael.jpg
*Size: 23.00 KB*

![render-3-personalizado_rafael.jpg](src/site/assets/imagens/render-3-personalizado_rafael.jpg)

---

#### src\site\assets\imagens\render-personalizado_rafael.jpg
*Size: 23.57 KB*

![render-personalizado_rafael.jpg](src/site/assets/imagens/render-personalizado_rafael.jpg)

---

#### src\site\assets\imagens\render_photo-2-personalizado_alexandre.jpg
*Size: 27.44 KB*

![render_photo-2-personalizado_alexandre.jpg](src/site/assets/imagens/render_photo-2-personalizado_alexandre.jpg)

---

#### src\site\assets\imagens\render_photo-6-personalizado_alexandre.jpg
*Size: 28.94 KB*

![render_photo-6-personalizado_alexandre.jpg](src/site/assets/imagens/render_photo-6-personalizado_alexandre.jpg)

---

#### src\site\assets\imagens\render_photo-9-personalizado_alexandre.jpg
*Size: 28.83 KB*

![render_photo-9-personalizado_alexandre.jpg](src/site/assets/imagens/render_photo-9-personalizado_alexandre.jpg)

---

#### src\site\assets\imagens\residencial-com-comercio_predio-comercio.png
*Size: 41.54 KB*

![residencial-com-comercio_predio-comercio.png](src/site/assets/imagens/residencial-com-comercio_predio-comercio.png)

---

#### src\site\assets\imagens\rodrigo-empresa_rodrigo-empresa.png
*Size: 50.98 KB*

![rodrigo-empresa_rodrigo-empresa.png](src/site/assets/imagens/rodrigo-empresa_rodrigo-empresa.png)

---

#### src\site\assets\imagens\rp1-grande_rafael.png
*Size: 545.10 KB*

![rp1-grande_rafael.png](src/site/assets/imagens/rp1-grande_rafael.png)

---

#### src\site\assets\imagens\rp1_rafael.png
*Size: 122.75 KB*

![rp1_rafael.png](src/site/assets/imagens/rp1_rafael.png)

---

#### src\site\assets\imagens\rp2-grande_rafael.png
*Size: 491.21 KB*

![rp2-grande_rafael.png](src/site/assets/imagens/rp2-grande_rafael.png)

---

#### src\site\assets\imagens\rp2_rafael.png
*Size: 255.06 KB*

![rp2_rafael.png](src/site/assets/imagens/rp2_rafael.png)

---

#### src\site\assets\imagens\sidcredi_sicredi.png
*Size: 578.73 KB*

![sidcredi_sicredi.png](src/site/assets/imagens/sidcredi_sicredi.png)

---

#### src\site\assets\imagens\z1-grande_zotti.png
*Size: 789.46 KB*

![z1-grande_zotti.png](src/site/assets/imagens/z1-grande_zotti.png)

---

#### src\site\assets\imagens\z1_zotti.png
*Size: 355.65 KB*

![z1_zotti.png](src/site/assets/imagens/z1_zotti.png)

---

#### src\site\assets\imagens\z2-grande_zotti.png
*Size: 696.25 KB*

![z2-grande_zotti.png](src/site/assets/imagens/z2-grande_zotti.png)

---

#### src\site\assets\imagens\z2_zotti.png
*Size: 304.17 KB*

![z2_zotti.png](src/site/assets/imagens/z2_zotti.png)

---

#### src\site\assets\imagens\z3-grande_zotti.png
*Size: 640.75 KB*

![z3-grande_zotti.png](src/site/assets/imagens/z3-grande_zotti.png)

---

#### src\site\assets\imagens\z3_zotti.png
*Size: 311.47 KB*

![z3_zotti.png](src/site/assets/imagens/z3_zotti.png)

---

### 📄 Code and Text Files

##### 📄 .eleventy.js
*Path: `.eleventy.js`*  
*Size: 17.78 KB*

```js
const slugify = require("@sindresorhus/slugify");
const markdownIt = require("markdown-it");
const fs = require("fs");
const matter = require("gray-matter");
const faviconsPlugin = require("eleventy-plugin-gen-favicons");
const tocPlugin = require("eleventy-plugin-nesting-toc");
const { parse } = require("node-html-parser");
const htmlMinifier = require("html-minifier-terser");
const pluginRss = require("@11ty/eleventy-plugin-rss");

const { headerToId, namedHeadingsFilter } = require("./src/helpers/utils");
const {
  userMarkdownSetup,
  userEleventySetup,
} = require("./src/helpers/userSetup");

const Image = require("@11ty/eleventy-img");
function transformImage(src, cls, alt, sizes, widths = ["500", "700", "auto"]) {
  let options = {
    widths: widths,
    formats: ["webp", "jpeg"],
    outputDir: "./dist/img/optimized",
    urlPath: "/img/optimized",
  };

  // generate images, while this is async we don’t wait
  Image(src, options);
  let metadata = Image.statsSync(src, options);
  return metadata;
}

function getAnchorLink(filePath, linkTitle) {
  const {attributes, innerHTML} = getAnchorAttributes(filePath, linkTitle);
  return `<a ${Object.keys(attributes).map(key => `${key}="${attributes[key]}"`).join(" ")}>${innerHTML}</a>`;
}

function getAnchorAttributes(filePath, linkTitle) {
  let fileName = filePath.replaceAll("&amp;", "&");
  let header = "";
  let headerLinkPath = "";
  if (filePath.includes("#")) {
    [fileName, header] = filePath.split("#");
    headerLinkPath = `#${headerToId(header)}`;
  }

  let noteIcon = process.env.NOTE_ICON_DEFAULT;
  const title = linkTitle ? linkTitle : fileName;
  let permalink = `/notes/${slugify(filePath)}`;
  let deadLink = false;
  try {
    const startPath = "./src/site/notes/";
    const fullPath = fileName.endsWith(".md")
      ? `${startPath}${fileName}`
      : `${startPath}${fileName}.md`;
    const file = fs.readFileSync(fullPath, "utf8");
    const frontMatter = matter(file);
    if (frontMatter.data.permalink) {
      permalink = frontMatter.data.permalink;
    }
    if (
      frontMatter.data.tags &&
      frontMatter.data.tags.indexOf("gardenEntry") != -1
    ) {
      permalink = "/";
    }
    if (frontMatter.data.noteIcon) {
      noteIcon = frontMatter.data.noteIcon;
    }
  } catch {
    deadLink = true;
  }

  if (deadLink) {
    return {
      attributes: {
        "class": "internal-link is-unresolved",
        "href": "/404",
        "target": "",
      },
      innerHTML: title,
    }
  }
  return {
    attributes: {
      "class": "internal-link",
      "target": "",
      "data-note-icon": noteIcon,
      "href": `${permalink}${headerLinkPath}`,
    },
    innerHTML: title,
  }
}

const tagRegex = /(^|\s|\>)(#[^\s!@#$%^&*()=+\.,\[{\]};:'"?><]+)(?!([^<]*>))/g;

module.exports = function (eleventyConfig) {
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
  });
  let markdownLib = markdownIt({
    breaks: true,
    html: true,
    linkify: true,
  })
    .use(require("markdown-it-anchor"), {
      slugify: headerToId,
    })
    .use(require("markdown-it-mark"))
    .use(require("markdown-it-footnote"))
    .use(function (md) {
      md.renderer.rules.hashtag_open = function (tokens, idx) {
        return '<a class="tag" onclick="toggleTagSearch(this)">';
      };
    })
    .use(require("markdown-it-mathjax3"), {
      tex: {
        inlineMath: [["$", "$"]],
      },
      options: {
        skipHtmlTags: { "[-]": ["pre"] },
      },
    })
    .use(require("markdown-it-attrs"))
    .use(require("markdown-it-task-checkbox"), {
      disabled: true,
      divWrap: false,
      divClass: "checkbox",
      idPrefix: "cbx_",
      ulClass: "task-list",
      liClass: "task-list-item",
    })
    .use(require("markdown-it-plantuml"), {
      openMarker: "```plantuml",
      closeMarker: "```",
    })
    .use(namedHeadingsFilter)
    .use(function (md) {
      //https://github.com/DCsunset/markdown-it-mermaid-plugin
      const origFenceRule =
        md.renderer.rules.fence ||
        function (tokens, idx, options, env, self) {
          return self.renderToken(tokens, idx, options, env, self);
        };
      md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
        const token = tokens[idx];
        if (token.info === "mermaid") {
          const code = token.content.trim();
          return `<pre class="mermaid">${code}</pre>`;
        }
        if (token.info === "transclusion") {
          const code = token.content.trim();
          return `<div class="transclusion">${md.render(code)}</div>`;
        }
        if (token.info.startsWith("ad-")) {
          const code = token.content.trim();
          const parts = code.split("\n")
          let titleLine;
          let collapse;
          let collapsible = false
          let collapsed = true
          let icon;
          let color;
          let nbLinesToSkip = 0
          for (let i = 0; i < 4; i++) {
            if (parts[i] && parts[i].trim()) {
              let line = parts[i] && parts[i].trim().toLowerCase()
              if (line.startsWith("title:")) {
                titleLine = line.substring(6);
                nbLinesToSkip++;
              } else if (line.startsWith("icon:")) {
                icon = line.substring(5);
                nbLinesToSkip++;
              } else if (line.startsWith("collapse:")) {
                collapsible = true
                collapse = line.substring(9);
                if (collapse && collapse.trim().toLowerCase() == 'open') {
                  collapsed = false
                }
                nbLinesToSkip++;
              } else if (line.startsWith("color:")) {
                color = line.substring(6);
                nbLinesToSkip++;
              }
            }
          }
          const foldDiv = collapsible ? `<div class="callout-fold">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-chevron-down">
              <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
          </div>` : "";
          const titleDiv = titleLine
            ? `<div class="callout-title"><div class="callout-title-inner">${titleLine}</div>${foldDiv}</div>`
            : "";
          let collapseClasses = titleLine && collapsible ? 'is-collapsible' : ''
          if (collapsible && collapsed) {
            collapseClasses += " is-collapsed"
          }

          let res = `<div data-callout-metadata class="callout ${collapseClasses}" data-callout="${token.info.substring(3)
            }">${titleDiv}\n<div class="callout-content">${md.render(
              parts.slice(nbLinesToSkip).join("\n")
            )}</div></div>`;
          return res
        }

        // Other languages
        return origFenceRule(tokens, idx, options, env, slf);
      };

      const defaultImageRule =
        md.renderer.rules.image ||
        function (tokens, idx, options, env, self) {
          return self.renderToken(tokens, idx, options, env, self);
        };
      md.renderer.rules.image = (tokens, idx, options, env, self) => {
        const imageName = tokens[idx].content;
        //"image.png|metadata?|width"
        const [fileName, ...widthAndMetaData] = imageName.split("|");
        const lastValue = widthAndMetaData[widthAndMetaData.length - 1];
        const lastValueIsNumber = !isNaN(lastValue);
        const width = lastValueIsNumber ? lastValue : null;

        let metaData = "";
        if (widthAndMetaData.length > 1) {
          metaData = widthAndMetaData.slice(0, widthAndMetaData.length - 1).join(" ");
        }

        if (!lastValueIsNumber) {
          metaData += ` ${lastValue}`;
        }

        if (width) {
          const widthIndex = tokens[idx].attrIndex("width");
          const widthAttr = `${width}px`;
          if (widthIndex < 0) {
            tokens[idx].attrPush(["width", widthAttr]);
          } else {
            tokens[idx].attrs[widthIndex][1] = widthAttr;
          }
        }

        return defaultImageRule(tokens, idx, options, env, self);
      };

      const defaultLinkRule =
        md.renderer.rules.link_open ||
        function (tokens, idx, options, env, self) {
          return self.renderToken(tokens, idx, options, env, self);
        };
      md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
        const aIndex = tokens[idx].attrIndex("target");
        const classIndex = tokens[idx].attrIndex("class");

        if (aIndex < 0) {
          tokens[idx].attrPush(["target", "_blank"]);
        } else {
          tokens[idx].attrs[aIndex][1] = "_blank";
        }

        if (classIndex < 0) {
          tokens[idx].attrPush(["class", "external-link"]);
        } else {
          tokens[idx].attrs[classIndex][1] = "external-link";
        }

        return defaultLinkRule(tokens, idx, options, env, self);
      };
    })
    .use(userMarkdownSetup);

  eleventyConfig.setLibrary("md", markdownLib);

  eleventyConfig.addFilter("isoDate", function (date) {
    return date && date.toISOString();
  });

  eleventyConfig.addFilter("link", function (str) {
    return (
      str &&
      str.replace(/\[\[(.*?\|.*?)\]\]/g, function (match, p1) {
        //Check if it is an embedded excalidraw drawing or mathjax javascript
        if (p1.indexOf("],[") > -1 || p1.indexOf('"$"') > -1) {
          return match;
        }
        const [fileLink, linkTitle] = p1.split("|");

        return getAnchorLink(fileLink, linkTitle);
      })
    );
  });

  eleventyConfig.addFilter("taggify", function (str) {
    return (
      str &&
      str.replace(tagRegex, function (match, precede, tag) {
        return `${precede}<a class="tag" onclick="toggleTagSearch(this)" data-content="${tag}">${tag}</a>`;
      })
    );
  });

  eleventyConfig.addFilter("searchableTags", function (str) {
    let tags;
    let ma

... (Content truncated - file too large)
```

---

##### 📄 .eleventyignore
*Path: `.eleventyignore`*  
*Size: 18 bytes*

```text
netlify/functions
```

---

##### 📄 README.md
*Path: `README.md`*  
*Size: 456 bytes*

```md
# Digital Obsidian Garden
This is the template to be used together with the [Digital Garden Obsidian Plugin](https://github.com/oleeskild/Obsidian-Digital-Garden). 
See the README in the plugin repo for information on how to set it up.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/oleeskild/digitalgarden)

---
## Docss
Docs are available at [dg-docs.ole.dev](https://dg-docs.ole.dev/)
```

---

##### 📄 combine_project.py
*Path: `combine_project.py`*  
*Size: 13.58 KB*

```py
#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
Script to analyze and combine project files into a single markdown document.
Creates a hierarchical view of the project structure and includes contents of readable files.
Useful for project documentation and analysis by LLMs.

Modifications:
- Excludes CSV files from analysis
- Includes images in the markdown output
- Organizes content by type (code, images, data)
"""

import os
import sys
from datetime import datetime
import mimetypes
import base64

class ProjectAnalyzer:
    def __init__(self):
        # Extensions that we consider as readable text files
        self.text_extensions = {
            '.py', '.js', '.html', '.css', '.java', '.c', '.cpp', '.h',
            '.json', '.md', '.txt', '.xml', '.yaml', '.yml', '.ini',
            '.cfg', '.conf', '.jsx', '.tsx', '.ts', '.svg', '.sql',
            '.sh', '.bat', '.ps1', '.env', '.gitignore', '.dockerignore',
            '.rst', '.properties', '.gradle', '.toml', '.lock'
        }
        
        # Image extensions that we want to include
        self.image_extensions = {
            '.png', '.jpg', '.jpeg', '.gif', '.bmp', '.tiff', '.tif',
            '.webp', '.svg', '.ico', '.eps'
        }
        
        # Extensions to explicitly exclude (CSV files)
        self.excluded_extensions = {
            '.csv'  # Excluding CSV files as requested
        }
        
        # Files and directories to ignore
        self.ignore_files = {
            '.git', '.idea', '.vscode', '__pycache__', 'node_modules',
            'venv', 'env', '.env', '.DS_Store', 'Thumbs.db'
        }
        
        # Size limits to prevent memory issues
        self.max_file_size_mb = 5  # Maximum file size to read (in MB)
        self.max_total_output_mb = 50  # Maximum total output size (in MB)
        
        # Initialize mimetypes
        mimetypes.init()

    def get_file_size_str(self, file_path):
        """Get human-readable file size."""
        size_bytes = os.path.getsize(file_path)
        
        if size_bytes < 1024:
            return f"{size_bytes} bytes"
        elif size_bytes < 1024 * 1024:
            return f"{size_bytes / 1024:.2f} KB"
        else:
            return f"{size_bytes / (1024 * 1024):.2f} MB"

    def is_excluded_file(self, file_path):
        """Check if file should be excluded (like CSV files)."""
        _, ext = os.path.splitext(file_path)
        ext = ext.lower()
        return ext in self.excluded_extensions

    def is_text_file(self, file_path):
        """Determine if a file is a text file based on extension and content."""
        # First check if file is excluded
        if self.is_excluded_file(file_path):
            return False
            
        _, ext = os.path.splitext(file_path)
        ext = ext.lower()
        
        # Check if extension is in our text extensions list
        if ext in self.text_extensions:
            return True
            
        # Try to detect by mime type
        mime_type = mimetypes.guess_type(file_path)[0]
        if mime_type and mime_type.startswith('text/'):
            return True
            
        # Try to read file as text
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                f.read(1024)  # Try to read first 1KB
                return True
        except:
            return False

    def is_image_file(self, file_path):
        """Check if file is an image."""
        _, ext = os.path.splitext(file_path)
        ext = ext.lower()
        return ext in self.image_extensions

    def should_ignore(self, path):
        """Check if the path should be ignored."""
        return any(ignore in path for ignore in self.ignore_files)

    def is_file_too_large(self, file_path):
        """Check if file is too large to process."""
        try:
            size_mb = os.path.getsize(file_path) / (1024 * 1024)
            return size_mb > self.max_file_size_mb
        except:
            return True

    def generate_tree_structure(self, start_path, output_file):
        """Generate the project tree structure and write to the markdown file."""
        with open(output_file, 'w', encoding='utf-8') as out:
            # Write header
            out.write(f"# 📊 Project Analysis Report\n\n")
            out.write(f"**Generated on:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}  \n")
            out.write(f"**Root directory:** `{os.path.abspath(start_path)}`  \n")
            out.write(f"**Purpose:** Complete project structure documentation excluding CSV files\n\n")
            
            # Write project summary
            total_files = 0
            text_files = 0
            image_files = 0
            excluded_files = 0
            large_files = 0
            
            for root, dirs, files in os.walk(start_path):
                dirs[:] = [d for d in dirs if not self.should_ignore(os.path.join(root, d))]
                for file in files:
                    file_path = os.path.join(root, file)
                    if self.should_ignore(file_path):
                        continue
                    total_files += 1
                    if self.is_file_too_large(file_path):
                        large_files += 1
                    elif self.is_excluded_file(file_path):
                        excluded_files += 1
                    elif self.is_text_file(file_path):
                        text_files += 1
                    elif self.is_image_file(file_path):
                        image_files += 1
            
            out.write(f"## 📈 Project Summary\n\n")
            out.write(f"- **Total files analyzed:** {total_files}\n")
            out.write(f"- **📄 Code/Text files:** {text_files}\n")
            out.write(f"- **🖼️ Image files:** {image_files}\n")
            out.write(f"- **🚫 Excluded files (CSV):** {excluded_files}\n")
            out.write(f"- **⚠️ Large files (> {self.max_file_size_mb}MB):** {large_files}\n")
            out.write(f"- **📁 Other files:** {total_files - text_files - image_files - excluded_files - large_files}\n\n")
            
            # Write project tree structure
            out.write("## 🌳 Project Structure\n\n")
            out.write("```\n")
            self.write_tree(start_path, out)
            out.write("```\n\n")
            
            # Write file contents
            out.write("## 📋 Project Contents\n\n")
            self.write_file_contents(start_path, out)

    def write_tree(self, start_path, out, prefix=""):
        """Write the tree structure of the project."""
        items = sorted(os.listdir(start_path))
        
        for i, item in enumerate(items):
            path = os.path.join(start_path, item)
            
            if self.should_ignore(path):
                continue
                
            is_last = i == len(items) - 1
            
            # Add file type indicators
            if os.path.isfile(path):
                if self.is_excluded_file(path):
                    item_display = f"{item} (CSV - excluded)"
                elif self.is_image_file(path):
                    item_display = f"{item} 🖼️"
                elif self.is_text_file(path):
                    item_display = f"{item} 📄"
                else:
                    item_display = f"{item} 📁"
            else:
                item_display = f"{item} 📁"
                
            out.write(f"{prefix}{'└── ' if is_last else '├── '}{item_display}\n")
            
            if os.path.isdir(path):
                self.write_tree(path, out, prefix + ('    ' if is_last else '│   '))

    def write_file_contents(self, start_path, out, current_path=""):
        """Write the contents of all readable files and images."""
        # Collect files by type
        text_files = []
        image_files = []
        excluded_files = []
        large_files = []  # Files that are too large to process
        
        for root, dirs, files in os.walk(start_path):
            # Skip ignored directories
            dirs[:] = [d for d in dirs if not self.should_ignore(os.path.join(root, d))]
            
            for file in files:
                file_path = os.path.join(root, file)
                
                if self.should_ignore(file_path):
                    continue
                
                # Check file size first
                if self.is_file_too_large(file_path):
                    large_files.append(file_path)
                    continue
                
                if self.is_excluded_file(file_path):
                    excluded_files.append(file_path)
                elif self.is_text_file(file_path):
                    text_files.append(file_path)
                elif self.is_image_file(file_path):
                    image_files.append(file_path)
        
        # Write large files summary
        if large_files:
            out.write(f"### ⚠️ Large Files (> {self.max_file_size_mb}MB)\n\n")
            out.write(f"Total large files skipped: {len(large_files)}\n\n")
            for file_path in sorted(large_files):
                rel_path = os.path.relpath(file_path, start_path)
                file_size = self.get_file_size_str(file_path)
                out.write(f"- `{rel_path}` ({file_size})\n")
            out.write("\n---\n\n")
        
        # Write excluded files summary
        if excluded_files:
            out.write(f"### 🚫 Excluded Files (CSV)\n\n")
            out.write(f"Total excluded files: {len(excluded_files)}\n\n")
            for file_path in sorted(excluded_files):
                rel_path = os.path.relpath(file_path, start_path)
                file_size = self.get_file_size_str(file_path)
                out.write(f"- `{rel_path}` ({file_size})\n")
            out.write("\n---\n\n")
        
        # Write images section
        if image_files:
            out.write(f"### 🖼️ Project Images\n\n")
            for file_path in sorted(image_files):
                rel_path = os.path.relpath(file_path, s

... (Content truncated - file too large)
```

---

##### 📄 compilado projeto rescunho site.md
*Path: `compilado projeto rescunho site.md`*  
*Size: 54.73 KB*

```md
# 📊 Project Analysis Report

**Generated on:** 2025-07-31 10:35:46  
**Root directory:** `C:\Users\pedro\OneDrive\Área de Trabalho\Portifolio -main\PVP-Portifolio`  
**Purpose:** Complete project structure documentation excluding CSV files

## 📈 Project Summary

- **Total files analyzed:** 277
- **📄 Code/Text files:** 102
- **🖼️ Image files:** 74
- **🚫 Excluded files (CSV):** 0
- **⚠️ Large files (> 5MB):** 21
- **📁 Other files:** 80

## 🌳 Project Structure

```
├── .eleventy.js 📄
├── .eleventyignore 📄
├── README.md 📄
├── combine_project.py 📄
├── compilado projeto rescunho site.md 📄
├── custom.css 📄
├── netlify.toml 📄
├── package-lock.json 📄
├── package.json 📄
├── plugin-info.json 📄
├── src 📁
│   ├── helpers 📁
│   │   ├── constants.js 📄
│   │   ├── filetreeUtils.js 📄
│   │   ├── linkUtils.js 📄
│   │   ├── userSetup.js 📄
│   │   ├── userUtils.js 📄
│   │   └── utils.js 📄
│   └── site 📁
│       ├── 404.njk 📄
│       ├── _data 📁
│       │   ├── dynamics.js 📄
│       │   ├── eleventyComputed.js 📄
│       │   └── meta.js 📄
│       ├── _includes 📁
│       │   ├── components 📁
│       │   │   ├── calloutScript.njk 📄
│       │   │   ├── filetree.njk 📄
│       │   │   ├── filetreeNavbar.njk 📄
│       │   │   ├── graphScript.njk 📄
│       │   │   ├── linkPreview.njk 📄
│       │   │   ├── lucideIcons.njk 📄
│       │   │   ├── navbar.njk 📄
│       │   │   ├── notegrowthhistory.njk 📄
│       │   │   ├── pageheader.njk 📄
│       │   │   ├── references.njk 📄
│       │   │   ├── searchButton.njk 📄
│       │   │   ├── searchContainer.njk 📄
│       │   │   ├── searchScript.njk 📄
│       │   │   ├── sidebar.njk 📄
│       │   │   └── timestamps.njk 📄
│       │   └── layouts 📁
│       │       ├── index.njk 📄
│       │       └── note.njk 📄
│       ├── assets 📁
│       │   ├── imagens 📁
│       │   │   ├── 01-personalizado_lep.jpg 🖼️
│       │   │   ├── 01_lep.jpg 🖼️
│       │   │   ├── 06-personalizado_lep.jpg 🖼️
│       │   │   ├── 06_lep.jpg 🖼️
│       │   │   ├── 1_photo-1-personalizado_adriene.jpg 🖼️
│       │   │   ├── 1_photo-1_adriene.jpg 🖼️
│       │   │   ├── 3integrado-03-personalizado_adriene.jpg 🖼️
│       │   │   ├── 3integrado-03_adriene.jpg 🖼️
│       │   │   ├── a1-grande_adriene.png 🖼️
│       │   │   ├── a1_adriene.png 🖼️
│       │   │   ├── a2-grande_adriene.png 🖼️
│       │   │   ├── a2_adriene.png 🖼️
│       │   │   ├── a3-grande_adriene.png 🖼️
│       │   │   ├── a3_adriene.png 🖼️
│       │   │   ├── a4-grande_alexandre.png 🖼️
│       │   │   ├── a4_alexandre.png 🖼️
│       │   │   ├── al1-grande_alexandre.png 🖼️
│       │   │   ├── al1_alexandre.png 🖼️
│       │   │   ├── al2-grande_alexandre.png 🖼️
│       │   │   ├── al2_alexandre.png 🖼️
│       │   │   ├── al3-grande_alexandre.png 🖼️
│       │   │   ├── al3_alexandre.png 🖼️
│       │   │   ├── al5-grande_alexandre.png 🖼️
│       │   │   ├── al5_alexandre.png 🖼️
│       │   │   ├── casa-sitio_casa-sitio.png 🖼️
│       │   │   ├── foto_photo-1-personalizado_nairo.jpg 🖼️
│       │   │   ├── foto_photo-10-personalizado_nairo.jpg 🖼️
│       │   │   ├── foto_photo-10_nairo.jpg 🖼️
│       │   │   ├── foto_photo-1_nairo.jpg 🖼️
│       │   │   ├── gt1-personalizado_gt.png 🖼️
│       │   │   ├── gt1_gt.png 🖼️
│       │   │   ├── gt2-personalizado_gt.png 🖼️
│       │   │   ├── gt2_gt.png 🖼️
│       │   │   ├── gt3-grande_gt.png 🖼️
│       │   │   ├── gt3_gt.png 🖼️
│       │   │   ├── gt4-grande_gt.png 🖼️
│       │   │   ├── gt4_gt.png 🖼️
│       │   │   ├── lp1-grande_lep.png 🖼️
│       │   │   ├── lp1_lep.png 🖼️
│       │   │   ├── lp2-grande_lep.png 🖼️
│       │   │   ├── lp2_lep.png 🖼️
│       │   │   ├── lp3-grande_lep.png 🖼️
│       │   │   ├── lp3_lep.png 🖼️
│       │   │   ├── m1-grande_marista.png 🖼️
│       │   │   ├── m1_marista.png 🖼️
│       │   │   ├── m2-grande_marista.png 🖼️
│       │   │   ├── m2_marista.png 🖼️
│       │   │   ├── m3-grande_marista.png 🖼️
│       │   │   ├── m3_marista.png 🖼️
│       │   │   ├── m4-grande_marista.png 🖼️
│       │   │   ├── m4_marista.png 🖼️
│       │   │   ├── n1-grande_nairo.png 🖼️
│       │   │   ├── n1_nairo.png 🖼️
│       │   │   ├── n2-grande_nairo.png 🖼️
│       │   │   ├── n2_nairo.png 🖼️
│       │   │   ├── n3-grande_nairo.png 🖼️
│       │   │   ├── n3_nairo.png 🖼️
│       │   │   ├── n4-grande_nairo.png 🖼️
│       │   │   ├── n4_nairo.png 🖼️
│       │   │   ├── noturno_11-foto-personalizado_alexandre.jpg 🖼️
│       │   │   ├── noturno_11-foto_alexandre.jpg 🖼️
│       │   │   ├── render-3-personalizado_rafael.jpg 🖼️
│       │   │   ├── render-3_rafael.jpg 🖼️
│       │   │   ├── render-personalizado_rafael.jpg 🖼️
│       │   │   ├── render_photo-2-personalizado_alexandre.jpg 🖼️
│       │   │   ├── render_photo-2_alexandre.jpg 🖼️
│       │   │   ├── render_photo-6-personalizado_alexandre.jpg 🖼️
│       │   │   ├── render_photo-6_alexandre.jpg 🖼️
│       │   │   ├── render_photo-9-personalizado_alexandre.jpg 🖼️
│       │   │   ├── render_photo-9_alexandre.jpg 🖼️
│       │   │   ├── render_rafael.jpg 🖼️
│       │   │   ├── residencial-com-comercio_predio-comercio.png 🖼️
│       │   │   ├── rodrigo-empresa_rodrigo-empresa.png 🖼️
│       │   │   ├── rp1-grande_rafael.png 🖼️
│       │   │   ├── rp1_rafael.png 🖼️
│       │   │   ├── rp2-grande_rafael.png 🖼️
│       │   │   ├── rp2_rafael.png 🖼️
│       │   │   ├── sidcredi_sicredi.png 🖼️
│       │   │   ├── z1-grande_zotti.png 🖼️
│       │   │   ├── z1_zotti.png 🖼️
│       │   │   ├── z2-grande_zotti.png 🖼️
│       │   │   ├── z2_zotti.png 🖼️
│       │   │   ├── z3-grande_zotti.png 🖼️
│       │   │   └── z3_zotti.png 🖼️
│       │   └── pdfs 📁
│       │       ├── cobertura-casa-gp.pdf 📁
│       │       ├── entrada-predial-barao.pdf 📁
│       │       ├── fc-d08-wolf-e301-r02-2pavimento_dom-pedrito.pdf 📁
│       │       ├── fc-d08-wolf-e301-r02-2pavimento_dom-pedrito_recorte_p1.pdf 📁
│       │       ├── fc-d08-wolf-e301-r02-2pavimento_recorte_p1_dom-pedrito.pdf 📁
│       │       ├── fc-d08-wolf-e401-r02-4pavimento_dom-pedrito.pdf 📁
│       │       ├── fc-d08-wolf-e501-r02-5pavimento_dom-pedrito.pdf 📁
│       │       ├── fc-d08-wolf-e501-r02-5pavimento_recorte_p1_dom-pedrito.pdf 📁
│       │       ├── fc-d08-wolf-e999-r00-detalhe-prumada_dom-pedrito.pdf 📁
│       │       ├── fc-d08-wolf-e999-r00-detalhe-prumada_recorte_p1_dom-pedrito.pdf 📁
│       │       ├── fc-d13-e101-r04-terreo_recorte_p1_zotti.pdf 📁
│       │       ├── fc-d13-e101-r04-terreo_zotti.pdf 📁
│       │       ├── fc-d13-e201-r05-segundo-pav_recorte_p1_zotti.pdf 📁
│       │       ├── fc-d13-e201-r05-segundo-pav_zotti.pdf 📁
│       │       ├── fc-d30-e101-térreo-r02_lojas-remiao.pdf 📁
│       │       ├── fc-d30-e101-térreo-r02_recorte_p1_lojas-remiao.pdf 📁
│       │       ├── fc-d30-e201-mezanino-r02_lojas-remiao.pdf 📁
│       │       ├── fc-d30-e201-mezanino-r02_recorte_p1_lojas-remiao.pdf 📁
│       │       ├── fc-d33-e000-r00-situação_loja-joao.pdf 📁
│       │       ├── fc-d33-e001-ent_energia-r00_loja-joao.pdf 📁
│       │       ├── fc-d33-e001-ent_energia-r00_recorte_p1_loja-joao.pdf 📁
│       │       ├── fc-d33-e101-r01_loja-joao.pdf 📁
│       │       ├── fc-d33-e101-r01_recorte_p1_loja-joao.pdf 📁
│       │       ├── fc-d33-e201-r01_loja-joao.pdf 📁
│       │       ├── fc-d33-e201-r01_recorte_p1_loja-joao.pdf 📁
│       │       ├── fc-d34-sureg-e201-ex-r00-2pav_recorte_p1_sicredi.pdf 📁
│       │       ├── fc-d34-sureg-e201-ex-r00-2pav_sicredi.pdf 📁
│       │       ├── fc-d34-sureg-e211-ex-r00_sicredi.pdf 📁
│       │       ├── fc-d34-sureg-e301-ex-r00-3pav_recorte_p1_sicredi.pdf 📁
│       │       ├── fc-d34-sureg-e301-ex-r00-3pav_sicredi.pdf 📁
│       │       ├── fc-d34-sureg-e311-ex-r00-diagramas_sicredi.pdf 📁
│       │       ├── fc-d35-e000-situação-r01_loja-avenida.pdf 📁
│       │       ├── fc-d35-e001-ent_energia-r01_loja-avenida.pdf 📁
│       │       ├── fc-d35-e001-ent_energia-r01_recorte_p1_loja-avenida.pdf 📁
│       │       ├── fc-d35-e101-terreo-r02_loja-avenida.pdf 📁
│       │       ├── fc-d35-e101-terreo-r02_recorte_p1_loja-avenida.pdf 📁
│       │       ├── fc-d35-e102-segundo-pav-r02_loja-avenida.pdf 📁
│       │       ├── fc-d35-e102-segundo-pav-r02_recorte_p1_loja-avenida.pdf 📁
│       │       ├── ifc-dom-pedrito_r08_dom-pedrito.pdf 📁
│       │       ├── ifc-dom-pedrito_r08_recorte_p1_dom-pedrito.pdf 📁
│       │       ├── paineis-predial-barao.pdf 📁
│       │       ├── painel-predial-barao.pdf 📁
│       │       ├── pvp-a02-e002-r02-medidores_predio-comercio.pdf 📁
│       │       ├── pvp-a02-e003-r01-situação_predio-comercio.pdf 📁
│       │       ├── pvp-a02-e004-r00-diagrama-unifilar_predio-comercio.pdf 📁
│       │       ├── pvp-a02-e005-r00-corte-vertical_predio-comercio.pdf 📁
│       │       ├── pvp-a02-e101-r02-térreo_predio-comercio.pdf 📁
│       │       ├── pvp-a02-e101-r03-terreo_recorte_p1_rodrigo-empresa.pdf 📁
│       │       ├── pvp-a02-e101-r03-terreo_rodrigo-empresa.pdf 📁
│       │       ├── pvp-a02-e201-r02-2pav_recorte_p1_rodrigo-empresa.pdf 📁
│       │       ├── pvp-a02-e201-r02-2pav_rodrigo-empresa.pdf 📁
│       │       ├── pvp-a02-e201-r02-tipo_predio-comercio.pdf 📁
│       │       ├── pvp-a02-e301-r02-3pav_recorte_p1_rodrigo-empresa.pdf 📁
│       │       ├── pvp-a02-e301-r02-3pav_rodrigo-empresa.pdf 📁
│       │       ├── pvp-a02-e301-r03-cobertura_predio-comercio.pdf 📁
│       │       ├── pvp-a02-e401-r00-vertical_recorte_p1_rodrigo-empresa.pdf 📁
│       │       ├── pvp-a02-e401-r00-vertical_rodrigo-empresa.pdf 📁
│       │       ├── pvp-a02-h201-r01-água-fria-e-reservatórios_predio-comercio.pdf 📁
│       │       ├── pvp-a02-h201-r03-cloacal-e-pluvial_predio-comercio.pdf 📁
│       │       ├── pvp-a03-e101-r02-terreo_casa-sitio.pdf 📁
│       │       ├── pvp-a03-e101-r02-terreo_recorte_p1_casa-sitio.pdf 📁
│       │       ├── pvp-a03-e201-r02-2pav_casa-sitio.pdf 📁
│       │       ├── pvp-a03-e201-r02-2pav_recorte_p1_casa-sitio.pdf 📁
│       │       ├── pvp-a03-h100-r02-água-quente-e-fria_casa-sitio.pdf 📁
│       │       ├── pvp-a03-h100-r02-água-quente-e-fria_recorte_p1_casa-sitio.pd

... (Content truncated - file too large)
```

---

##### 📄 custom.css
*Path: `custom.css`*  
*Size: 1.99 KB*

```css
/* Base geral */
body {
  font-family: 'Inter', sans-serif;
  background: #fafafa;
  color: #1a1a1a;
  line-height: 1.6;
  max-width: 800px;
  margin: auto;
  padding: 2rem;
}

/* Cabeçalhos */
h1, h2, h3, h4 {
  font-weight: 600;
  color: #1e3a8a;
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.3em;
  margin-top: 2rem;
}

h1 {
  font-size: 2rem;
}
h2 {
  font-size: 1.6rem;
}
h3 {
  font-size: 1.3rem;
}

/* Links */
a {
  color: #3b82f6;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

/* Tip Box (🧠 como as caixinhas azuis do help.obsidian.md) */
.tip {
  border-left: 5px solid #60a5fa;
  background: #e0f2fe;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 6px;
}

/* Bloco de código */
pre {
  background: #f3f4f6;
  border: 1px solid #d1d5db;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
}
code {
  background: #e5e7eb;
  border-radius: 4px;
  padding: 0 4px;
  font-family: 'Fira Code', monospace;
  font-size: 0.95em;
}

/* Blocos YAML */
.frontmatter {
  background-color: #fff7ed;
  border-left: 4px solid #fb923c;
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  font-family: monospace;
}

/* Blockquote estilizado */
blockquote {
  border-left: 4px solid #9ca3af;
  padding-left: 1rem;
  font-style: italic;
  color: #4b5563;
  background-color: #f9fafb;
}

/* Tabela */
table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 1rem;
}
th, td {
  border: 1px solid #ddd;
  padding: 0.75rem;
}
th {
  background-color: #f3f4f6;
  font-weight: 600;
}

/* Navegação lateral fixa (se quiser em tela grande) */
@media screen and (min-width: 1200px) {
  body {
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 2rem;
  }

  .site-nav {
    position: sticky;
    top: 2rem;
    align-self: start;
    background: #f3f4f6;
    border-radius: 10px;
    padding: 1rem;
    height: fit-content;
  }

  .site-nav a {
    display: block;
    margin-bottom: 0.5rem;
    color: #1f2937;
    font-weight: 500;
  }

  .site-nav a:hover {
    color: #2563eb;
  }
}
```

---

##### 📄 netlify.toml
*Path: `netlify.toml`*  
*Size: 213 bytes*

```toml
[build]
  publish = "dist"
  command = "npm install && npm run build"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200

[[redirects]]
  from = "/*"
  to = "/404"
  status = 404

```

---

##### 📄 package-lock.json
*Path: `package-lock.json`*  
*Size: 254.35 KB*

```json
{
    "name": "web",
    "version": "1.0.0",
    "lockfileVersion": 3,
    "requires": true,
    "packages": {
        "": {
            "name": "web",
            "version": "1.0.0",
            "license": "ISC",
            "dependencies": {
                "@11ty/eleventy-img": "^4.0.2",
                "@sindresorhus/slugify": "^1.1.0",
                "axios": "^1.2.2",
                "dotenv": "^16.0.3",
                "eleventy-plugin-gen-favicons": "^1.1.2",
                "eleventy-plugin-nesting-toc": "^1.3.0",
                "fs-file-tree": "^1.1.1",
                "glob": "^10.2.1",
                "gray-matter": "^4.0.3",
                "markdown-it": "^14.1.0",
                "markdown-it-anchor": "^9.0.1",
                "markdown-it-attrs": "^4.1.6",
                "markdown-it-footnote": "^3.0.3",
                "markdown-it-mark": "^4.0.0",
                "markdown-it-mathjax3": "^4.3.1",
                "markdown-it-plantuml": "^1.4.1",
                "markdown-it-task-checkbox": "^1.0.6",
                "npm-run-all": "^4.1.5",
                "rimraf": "^4.4.1"
            },
            "devDependencies": {
                "@11ty/eleventy": "^2.0.1",
                "@11ty/eleventy-plugin-rss": "^1.2.0",
                "cross-env": "^7.0.3",
                "html-minifier-terser": "^7.2.0",
                "node-html-parser": "^6.1.13",
                "sass": "^1.49.9"
            }
        },
        "node_modules/@11ty/dependency-tree": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/@11ty/dependency-tree/-/dependency-tree-2.0.1.tgz",
            "integrity": "sha512-5R+DsT9LJ9tXiSQ4y+KLFppCkQyXhzAm1AIuBWE/sbU0hSXY5pkhoqQYEcPJQFg/nglL+wD55iv2j+7O96UAvg==",
            "dev": true
        },
        "node_modules/@11ty/eleventy": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/@11ty/eleventy/-/eleventy-2.0.1.tgz",
            "integrity": "sha512-t8XVUbCJByhVEa1RzO0zS2QzbL3wPY8ot1yUw9noqiSHxJWUwv6jiwm1/MZDPTYtkZH2ZHvdQIRQ5/SjG9XmLw==",
            "dev": true,
            "dependencies": {
                "@11ty/dependency-tree": "^2.0.1",
                "@11ty/eleventy-dev-server": "^1.0.4",
                "@11ty/eleventy-utils": "^1.0.1",
                "@11ty/lodash-custom": "^4.17.21",
                "@iarna/toml": "^2.2.5",
                "@sindresorhus/slugify": "^1.1.2",
                "bcp-47-normalize": "^1.1.1",
                "chokidar": "^3.5.3",
                "cross-spawn": "^7.0.3",
                "debug": "^4.3.4",
                "dependency-graph": "^0.11.0",
                "ejs": "^3.1.9",
                "fast-glob": "^3.2.12",
                "graceful-fs": "^4.2.11",
                "gray-matter": "^4.0.3",
                "hamljs": "^0.6.2",
                "handlebars": "^4.7.7",
                "is-glob": "^4.0.3",
                "iso-639-1": "^2.1.15",
                "kleur": "^4.1.5",
                "liquidjs": "^10.7.0",
                "luxon": "^3.3.0",
                "markdown-it": "^13.0.1",
                "micromatch": "^4.0.5",
                "minimist": "^1.2.8",
                "moo": "^0.5.2",
                "multimatch": "^5.0.0",
                "mustache": "^4.2.0",
                "normalize-path": "^3.0.0",
                "nunjucks": "^3.2.3",
                "path-to-regexp": "^6.2.1",
                "please-upgrade-node": "^3.2.0",
                "posthtml": "^0.16.6",
                "posthtml-urls": "^1.0.0",
                "pug": "^3.0.2",
                "recursive-copy": "^2.0.14",
                "semver": "^7.3.8",
                "slugify": "^1.6.6"
            },
            "bin": {
                "eleventy": "cmd.js"
            },
            "engines": {
                "node": ">=14"
            },
            "funding": {
                "type": "opencollective",
                "url": "https://opencollective.com/11ty"
            }
        },
        "node_modules/@11ty/eleventy-dev-server": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/@11ty/eleventy-dev-server/-/eleventy-dev-server-1.0.4.tgz",
            "integrity": "sha512-qVBmV2G1KF/0o5B/3fITlrrDHy4bONUI2YuN3/WJ3BNw4NU1d/we8XhKrlgq13nNvHoBx5czYp3LZt8qRG53Fg==",
            "dev": true,
            "dependencies": {
                "@11ty/eleventy-utils": "^1.0.1",
                "chokidar": "^3.5.3",
                "debug": "^4.3.4",
                "dev-ip": "^1.0.1",
                "finalhandler": "^1.2.0",
                "mime": "^3.0.0",
                "minimist": "^1.2.8",
                "morphdom": "^2.7.0",
                "please-upgrade-node": "^3.2.0",
                "ssri": "^8.0.1",
                "ws": "^8.13.0"
            },
            "bin": {
                "eleventy-dev-server": "cmd.js"
            },
            "engines": {
                "node": ">=14"
            },
            "funding": {
                "type": "opencollective",
                "url": "https://opencollective.com/11ty"
            }
        },
        "node_modules/@11ty/eleventy-fetch": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/@11ty/eleventy-fetch/-/eleventy-fetch-4.0.1.tgz",
            "integrity": "sha512-yIiLM5ziBmg86i4TlXpBdcIygJHvh/GgPJyAiFOckO9H4y9cQDM8eIcJCUQ4Mum0NEVui/OjhEut2R08xw0vlQ==",
            "dependencies": {
                "debug": "^4.3.4",
                "flat-cache": "^3.0.4",
                "node-fetch": "^2.6.7",
                "p-queue": "^6.6.2"
            },
            "engines": {
                "node": ">=14"
            },
            "funding": {
                "type": "opencollective",
                "url": "https://opencollective.com/11ty"
            }
        },
        "node_modules/@11ty/eleventy-img": {
            "version": "4.0.2",
            "resolved": "https://registry.npmjs.org/@11ty/eleventy-img/-/eleventy-img-4.0.2.tgz",
            "integrity": "sha512-MSCkZRJk9rWa7nojx9HBMZJePOrm+V3XNpT091qguj61SG5UsgXbxAkoeejO3npmKIQJTyVIV/rrA6d7xZYOvw==",
            "dependencies": {
                "@11ty/eleventy-fetch": "^4.0.0",
                "brotli-size": "^4.0.0",
                "debug": "^4.3.4",
                "entities": "^4.5.0",
                "image-size": "^1.1.1",
                "p-queue": "^6.6.2",
                "sharp": "^0.33.2"
            },
            "engines": {
                "node": ">=18"
            },
            "funding": {
                "type": "opencollective",
                "url": "https://opencollective.com/11ty"
            }
        },
        "node_modules/@11ty/eleventy-plugin-rss": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/@11ty/eleventy-plugin-rss/-/eleventy-plugin-rss-1.2.0.tgz",
            "integrity": "sha512-YzFnSH/5pObcFnqZ2sAQ782WmpOZHj1+xB9ydY/0j7BZ2jUNahn53VmwCB/sBRwXA/Fbwwj90q1MLo01Ru0UaQ==",
            "dev": true,
            "dependencies": {
                "debug": "^4.3.4",
                "posthtml": "^0.16.6",
                "posthtml-urls": "1.0.0"
            },
            "funding": {
                "type": "opencollective",
                "url": "https://opencollective.com/11ty"
            }
        },
        "node_modules/@11ty/eleventy-utils": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/@11ty/eleventy-utils/-/eleventy-utils-1.0.3.tgz",
            "integrity": "sha512-nULO91om7vQw4Y/UBjM8i7nJ1xl+/nyK4rImZ41lFxiY2d+XUz7ChAj1CDYFjrLZeu0utAYJTZ45LlcHTkUG4g==",
            "dev": true,
            "dependencies": {
                "normalize-path": "^3.0.0"
            },
            "engines": {
                "node": ">=12"
            },
            "funding": {
                "type": "opencollective",
                "url": "https://opencollective.com/11ty"
            }
        },
        "node_modules/@11ty/eleventy/node_modules/argparse": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
            "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
            "dev": true
        },
        "node_modules/@11ty/eleventy/node_modules/entities": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/entities/-/entities-3.0.1.tgz",
            "integrity": "sha512-WiyBqoomrwMdFG1e0kqvASYfnlb0lp8M5o5Fw2OFq1hNZxxcNk8Ik0Xm7LxzBhuidnZB/UtBqVCgUz3kBOP51Q==",
            "dev": true,
            "engines": {
                "node": ">=0.12"
            },
            "funding": {
                "url": "https://github.com/fb55/entities?sponsor=1"
            }
        },
        "node_modules/@11ty/eleventy/node_modules/linkify-it": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/linkify-it/-/linkify-it-4.0.1.tgz",
            "integrity": "sha512-C7bfi1UZmoj8+PQx22XyeXCuBlokoyWQL5pWSP+EI6nzRylyThouddufc2c1NDIcP9k5agmN9fLpA7VNJfIiqw==",
            "dev": true,
            "dependencies": {
                "uc.micro": "^1.0.1"
            }
        },
        "node_modules/@11ty/eleventy/node_modules/markdown-it": {
            "version": "13.0.2",
            "resolved": "https://registry.npmjs.org/markdown-it/-/markdown-it-13.0.2.tgz",
            "integrity": "sha512-FtwnEuuK+2yVU7goGn/MJ0WBZMM9ZPgU9spqlFs7/A/pDIUNSOQZhUgOqYCficIuR2QaFnrt8LHqBWsbTAoI5w==",
            "dev": true,
            "dependencies": {
                "argparse": "^2.0.1",
                "entities": "~3.0.1",
                "linkify-it": "^4.0.1",
                "mdurl": "^1.0.1",
                "uc.micro": "^1.0.5"
            },
            "bin": {
                "markdown-it": "bin/markdown-it.js"
            }
        },
        "node_modules/@11ty/eleventy/node_modules/mdurl": {
     

... (Content truncated - file too large)
```

---

##### 📄 package.json
*Path: `package.json`*  
*Size: 1.66 KB*

```json
{
    "name": "web",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "prebuild": "rimraf dist",
        "start": "npm-run-all get-theme build:sass --parallel watch:*",
        "watch:sass": "sass --watch src/site/styles:dist/styles",
        "watch:eleventy": "cross-env ELEVENTY_ENV=dev eleventy --serve",
        "build:eleventy": "cross-env ELEVENTY_ENV=prod NODE_OPTIONS=--max-old-space-size=4096 eleventy",
        "build:sass": "sass src/site/styles:dist/styles --style compressed",
        "get-theme": "node src/site/get-theme.js",
        "build": "npm-run-all get-theme build:*"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
        "@11ty/eleventy": "^2.0.1",
        "@11ty/eleventy-plugin-rss": "^1.2.0",
        "cross-env": "^7.0.3",
        "html-minifier-terser": "^7.2.0",
        "node-html-parser": "^6.1.13",
        "sass": "^1.49.9"
    },
    "dependencies": {
        "@11ty/eleventy-img": "^4.0.2",
        "@sindresorhus/slugify": "^1.1.0",
        "axios": "^1.2.2",
        "dotenv": "^16.0.3",
        "eleventy-plugin-gen-favicons": "^1.1.2",
        "eleventy-plugin-nesting-toc": "^1.3.0",
        "fs-file-tree": "^1.1.1",
        "glob": "^10.2.1",
        "gray-matter": "^4.0.3",
        "markdown-it": "^14.1.0",
        "markdown-it-anchor": "^9.0.1",
        "markdown-it-attrs": "^4.1.6",
        "markdown-it-footnote": "^3.0.3",
        "markdown-it-mark": "^4.0.0",
        "markdown-it-mathjax3": "^4.3.1",
        "markdown-it-plantuml": "^1.4.1",
        "markdown-it-task-checkbox": "^1.0.6",
        "npm-run-all": "^4.1.5",
        "rimraf": "^4.4.1"
    }
}
```

---

##### 📄 plugin-info.json
*Path: `plugin-info.json`*  
*Size: 2.59 KB*

```json
{
    "filesToDelete": [
        "src/site/styles/style.css",
        "src/site/index.njk",
        "src/site/index.11tydata.js",
        "src/site/_data/filetree.js",
        "api/search.js",
        "netlify/functions/search/search.js",
        "src/site/versionednote.njk",
        "src/site/_includes/layouts/versionednote.njk",
        "src/site/lunr-index.js",
        "src/site/_data/versionednotes.js",
        "src/site/lunr.njk"
        
    ],
    "filesToAdd": [
        "src/site/styles/custom-style.scss",
        ".env",
        "src/site/favicon.svg",
        "src/site/img/default-note-icon.svg",
        "src/site/img/tree-1.svg",
        "src/site/img/tree-2.svg",
        "src/site/img/tree-3.svg",
        "src/helpers/userUtils.js",
        "src/helpers/userSetup.js",
        "vercel.json",
        "netlify.toml"
    ],
    "filesToModify": [
        ".eleventy.js",
        ".eleventyignore",
        "README.md",
        "package-lock.json",
        "package.json",
        "src/site/404.njk",
        "src/site/sitemap.njk",
        "src/site/feed.njk",
        "src/site/styles/style.scss",
        "src/site/styles/digital-garden-base.scss",
        "src/site/styles/obsidian-base.scss",
        "src/site/notes/notes.json",
        "src/site/notes/notes.11tydata.js",
        "src/site/_includes/layouts/note.njk",
        "src/site/_includes/layouts/index.njk",
        "src/site/_includes/components/notegrowthhistory.njk",
        "src/site/_includes/components/pageheader.njk",
        "src/site/_includes/components/linkPreview.njk",
        "src/site/_includes/components/references.njk",
        "src/site/_includes/components/sidebar.njk",
        "src/site/_includes/components/graphScript.njk",
        "src/site/_includes/components/filetree.njk",
        "src/site/_includes/components/filetreeNavbar.njk",
        "src/site/_includes/components/navbar.njk",
        "src/site/_includes/components/searchButton.njk",
        "src/site/_includes/components/searchContainer.njk",
        "src/site/_includes/components/searchScript.njk",
        "src/site/_includes/components/calloutScript.njk",
        "src/site/_includes/components/lucideIcons.njk",
        "src/site/_includes/components/timestamps.njk",
        "src/site/_data/meta.js",
        "src/site/_data/dynamics.js",
        "src/site/img/outgoing.svg",
        "src/helpers/constants.js",
        "src/helpers/utils.js",
        "src/helpers/filetreeUtils.js",
        "src/helpers/linkUtils.js",
        "src/site/get-theme.js",
        "src/site/_data/eleventyComputed.js",
        "src/site/graph.njk",
        "src/site/search-index.njk"
    ]
}
```

---


#### 📁 Directory: src\helpers

##### 📄 constants.js
*Path: `src\helpers\constants.js`*  
*Size: 245 bytes*

```js
exports.ALL_NOTE_SETTINGS= [
    "dgHomeLink",
    "dgPassFrontmatter",
    "dgShowBacklinks",
    "dgShowLocalGraph",
    "dgShowInlineTitle",
    "dgShowFileTree",
    "dgEnableSearch",
    "dgShowToc",
    "dgLinkPreview",
    "dgShowTags"
];
```

---

##### 📄 filetreeUtils.js
*Path: `src\helpers\filetreeUtils.js`*  
*Size: 3.08 KB*

```js
const sortTree = (unsorted) => {
  //Sort by folder before file, then by name
  const orderedTree = Object.keys(unsorted)
    .sort((a, b) => {

      let a_pinned = unsorted[a].pinned || false;
      let b_pinned = unsorted[b].pinned || false;
      if (a_pinned != b_pinned) {
        if (a_pinned) {
          return -1;
        } else {
          return 1;
        }
      }

      const a_is_note = a.indexOf(".md") > -1;
      const b_is_note = b.indexOf(".md") > -1;

      if (a_is_note && !b_is_note) {
        return 1;
      }

      if (!a_is_note && b_is_note) {
        return -1;
      }

      //Regular expression that extracts any initial decimal number
      const aNum = parseFloat(a.match(/^\d+(\.\d+)?/));
      const bNum = parseFloat(b.match(/^\d+(\.\d+)?/));

      const a_is_num = !isNaN(aNum);
      const b_is_num = !isNaN(bNum);

      if (a_is_num && b_is_num && aNum != bNum) {
        return aNum - bNum; //Fast comparison between numbers
      }

      if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
      }

      return -1;
    })
    .reduce((obj, key) => {
      obj[key] = unsorted[key];

      return obj;
    }, {});

  for (const key of Object.keys(orderedTree)) {
    if (orderedTree[key].isFolder) {
      orderedTree[key] = sortTree(orderedTree[key]);
    }
  }

  return orderedTree;
};

function getPermalinkMeta(note, key) {
  let permalink = "/";
  let parts = note.filePathStem.split("/");
  let name = parts[parts.length - 1];
  let noteIcon = process.env.NOTE_ICON_DEFAULT;
  let hide = false;
  let pinned = false;
  let folders = null;
  try {
    if (note.data.permalink) {
      permalink = note.data.permalink;
    }
    if (note.data.tags && note.data.tags.indexOf("gardenEntry") != -1) {
      permalink = "/";
    }    
    if (note.data.title) {
      name = note.data.title;
    }
    if (note.data.noteIcon) {
      noteIcon = note.data.noteIcon;
    }
    // Reason for adding the hide flag instead of removing completely from file tree is to
    // allow users to use the filetree data elsewhere without the fear of losing any data.
    if (note.data.hide) {
      hide = note.data.hide;
    }
    if (note.data.pinned) {
      pinned = note.data.pinned;
    }
    if (note.data["dg-path"]) {
      folders = note.data["dg-path"].split("/");
    } else {
      folders = note.filePathStem
        .split("notes/")[1]
        .split("/");
    }
    folders[folders.length - 1]+= ".md";
  } catch {
    //ignore
  }

  return [{ permalink, name, noteIcon, hide, pinned }, folders];
}

function assignNested(obj, keyPath, value) {
  lastKeyIndex = keyPath.length - 1;
  for (var i = 0; i < lastKeyIndex; ++i) {
    key = keyPath[i];
    if (!(key in obj)) {
      obj[key] = { isFolder: true };
    }
    obj = obj[key];
  }
  obj[keyPath[lastKeyIndex]] = value;
}

function getFileTree(data) {
  const tree = {};
  (data.collections.note || []).forEach((note) => {
    const [meta, folders] = getPermalinkMeta(note);
    assignNested(tree, folders, { isNote: true, ...meta });
  });
  const fileTree = sortTree(tree);
  return fileTree;
}

exports.getFileTree = getFileTree;
```

---

##### 📄 linkUtils.js
*Path: `src\helpers\linkUtils.js`*  
*Size: 2.57 KB*

```js
const wikiLinkRegex = /\[\[(.*?\|.*?)\]\]/g;
const internalLinkRegex = /href="\/(.*?)"/g;

function caselessCompare(a, b) {
  return a.toLowerCase() === b.toLowerCase();
}

function extractLinks(content) {
  return [
    ...(content.match(wikiLinkRegex) || []).map(
      (link) =>
        link
          .slice(2, -2)
          .split("|")[0]
          .replace(/.(md|markdown)\s?$/i, "")
          .replace("\\", "")
          .trim()
          .split("#")[0]
    ),
    ...(content.match(internalLinkRegex) || []).map(
      (link) =>
        link
          .slice(6, -1)
          .split("|")[0]
          .replace(/.(md|markdown)\s?$/i, "")
          .replace("\\", "")
          .trim()
          .split("#")[0]
    ),
  ];
}

function getGraph(data) {
  let nodes = {};
  let links = [];
  let stemURLs = {};
  let homeAlias = "/";
  (data.collections.note || []).forEach((v, idx) => {
    let fpath = v.filePathStem.replace("/notes/", "");
    let parts = fpath.split("/");
    let group = "none";
    if (parts.length >= 3) {
      group = parts[parts.length - 2];
    }
    nodes[v.url] = {
      id: idx,
      title: v.data.title || v.fileSlug,
      url: v.url,
      group,
      home:
        v.data["dg-home"] ||
        (v.data.tags && v.data.tags.indexOf("gardenEntry") > -1) ||
        false,
      outBound: extractLinks(v.template.frontMatter.content),
      neighbors: new Set(),
      backLinks: new Set(),
      noteIcon: v.data.noteIcon || process.env.NOTE_ICON_DEFAULT,
      hide: v.data.hideInGraph || false,
    };
    stemURLs[fpath] = v.url;
    if (
      v.data["dg-home"] ||
      (v.data.tags && v.data.tags.indexOf("gardenEntry") > -1)
    ) {
      homeAlias = v.url;
    }
  });
  Object.values(nodes).forEach((node) => {
    let outBound = new Set();
    node.outBound.forEach((olink) => {
      let link = (stemURLs[olink] || olink).split("#")[0];
      outBound.add(link);
    });
    node.outBound = Array.from(outBound);
    node.outBound.forEach((link) => {
      let n = nodes[link];
      if (n) {
        n.neighbors.add(node.url);
        n.backLinks.add(node.url);
        node.neighbors.add(n.url);
        links.push({ source: node.id, target: n.id });
      }
    });
  });
  Object.keys(nodes).map((k) => {
    nodes[k].neighbors = Array.from(nodes[k].neighbors);
    nodes[k].backLinks = Array.from(nodes[k].backLinks);
    nodes[k].size = nodes[k].neighbors.length;
  });
  return {
    homeAlias,
    nodes,
    links,
  };
}

exports.wikiLinkRegex = wikiLinkRegex;
exports.internalLinkRegex = internalLinkRegex;
exports.extractLinks = extractLinks;
exports.getGraph = getGraph;
```

---

##### 📄 userSetup.js
*Path: `src\helpers\userSetup.js`*  
*Size: 505 bytes*

```js
function userMarkdownSetup(md) {
  // The md parameter stands for the markdown-it instance used throughout the site generator.
  // Feel free to add any plugin you want here instead of /.eleventy.js
}
function userEleventySetup(eleventyConfig) {
  // The eleventyConfig parameter stands for the the config instantiated in /.eleventy.js.
  // Feel free to add any plugin you want here instead of /.eleventy.js
}
exports.userMarkdownSetup = userMarkdownSetup;
exports.userEleventySetup = userEleventySetup;
```

---

##### 📄 userUtils.js
*Path: `src\helpers\userUtils.js`*  
*Size: 115 bytes*

```js
// Put your computations here.

function userComputed(data) {
  return {};
}

exports.userComputed = userComputed;
```

---

##### 📄 utils.js
*Path: `src\helpers\utils.js`*  
*Size: 1.29 KB*

```js
const slugify = require("@sindresorhus/slugify");

function headerToId(heading) {
    var slugifiedHeader = slugify(heading);
    if(!slugifiedHeader){
        return heading;
    }
    return slugifiedHeader;
}

function namedHeadings(md, state) {

    var ids = {}

    state.tokens.forEach(function(token, i) {
        if (token.type === 'heading_open') {
            var text = md.renderer.render(state.tokens[i + 1].children, md.options)
            var id = headerToId(text);
            var uniqId = uncollide(ids, id)
            ids[uniqId] = true
            setAttr(token, 'id', uniqId)
        }
    })
}

function uncollide(ids, id) {
    if (!ids[id]) return id
    var i = 1
    while (ids[id + '-' + i]) { i++ }
    return id + '-' + i
}

function setAttr(token, attr, value, options) {
    var idx = token.attrIndex(attr)

    if (idx === -1) {
        token.attrPush([attr, value])
    } else if (options && options.append) {
        token.attrs[idx][1] =
            token.attrs[idx][1] + ' ' + value
    } else {
        token.attrs[idx][1] = value
    }
}

//https://github.com/rstacruz/markdown-it-named-headings/blob/master/index.js
exports.namedHeadingsFilter = function (md, options) {
    md.core.ruler.push('named_headings', namedHeadings.bind(null, md));
}

exports.headerToId = headerToId;
```

---


#### 📁 Directory: src\site

##### 📄 404.njk
*Path: `src\site\404.njk`*  
*Size: 946 bytes*

```njk

<!DOCTYPE html>
<html lang="{{ meta.mainLanguage }}">
    <head>
        <title>Nothing here</title>
        <link href="/styles/digital-garden-base.css" rel="stylesheet">
        {%-if meta.themeStyle%}
            <link href="/styles/obsidian-base.css" rel="stylesheet">
    	    <link href="{{meta.themeStyle}}" rel="stylesheet">
        {% else %}
            <link href="/styles/style.css" rel="stylesheet">
        {%endif%}

        <link href="/styles/custom-style.css" rel="stylesheet">
        
    </head>
    <body class="theme-{{meta.baseTheme}} markdown-preview-view">
        <div class="content centered">

            {%-if not meta.themeStyle%}
                <div class="font-bg"> &#x1F60E; </div>
            {%endif%}
            <h1>There is nothing here</h1>
            <p>If you got here from a link, this note is probably not made public</p>
            <a href="/">Go back home</a>
        </div>
    </body>
</html>
```

---


#### 📁 Directory: src\site\_data

##### 📄 dynamics.js
*Path: `src\site\_data\dynamics.js`*  
*Size: 1.72 KB*

```js
const fsFileTree = require("fs-file-tree");

const BASE_PATH = "src/site/_includes/components/user";
const STYLE_PATH = "src/site/styles/user";
const NAMESPACES = ["index", "notes", "common"];
const SLOTS = ["head", "header", "beforeContent", "afterContent", "footer"];
const FILE_TREE_NAMESPACE = "filetree";
const FILE_TREE_SLOTS = ["beforeTitle", "afterTitle"];
const SIDEBAR_NAMESPACE = "sidebar";
const SIDEBAR_SLOTS = ["top", "bottom"];
const STYLES_NAMESPACE = "styles";

const generateComponentPaths = async (namespace, slots) => {
  const data = {};
  for (let index = 0; index < slots.length; index++) {
    const slot = slots[index];
    try {
      const tree = await fsFileTree(`${BASE_PATH}/${namespace}/${slot}`);
      let comps = Object.keys(tree)
        .filter((p) => p.indexOf(".njk") != -1)
        .map((p) => `components/user/${namespace}/${slot}/${p}`);
      comps.sort();
      data[slot] = comps;
    } catch {
      data[slot] = [];
    }
  }
  return data;
};

const generateStylesPaths = async () => {
  try {
    const tree = await fsFileTree(`${STYLE_PATH}`);
    let comps = Object.keys(tree).map((p) =>
      `/styles/user/${p}`.replace(".scss", ".css")
    );
    comps.sort();
    return comps;
  } catch {
    return [];
  }
};

module.exports = async () => {
  const data = {};
  for (let index = 0; index < NAMESPACES.length; index++) {
    const ns = NAMESPACES[index];
    data[ns] = await generateComponentPaths(ns, SLOTS);
  }
  data[FILE_TREE_NAMESPACE] = await generateComponentPaths(
    FILE_TREE_NAMESPACE,
    FILE_TREE_SLOTS
  );
  data[SIDEBAR_NAMESPACE] = await generateComponentPaths(
    SIDEBAR_NAMESPACE,
    SIDEBAR_SLOTS
  );
  data[STYLES_NAMESPACE] = await generateStylesPaths();
  return data;
};
```

---

##### 📄 eleventyComputed.js
*Path: `src\site\_data\eleventyComputed.js`*  
*Size: 326 bytes*

```js
const { getGraph } = require("../../helpers/linkUtils");
const { getFileTree } = require("../../helpers/filetreeUtils");
const { userComputed } = require("../../helpers/userUtils");

module.exports = {
  graph: (data) => getGraph(data),
  filetree: (data) => getFileTree(data),
  userComputed: (data) => userComputed(data)
};
```

---

##### 📄 meta.js
*Path: `src\site\_data\meta.js`*  
*Size: 2.21 KB*

```js
require("dotenv").config();
const { globSync } = require("glob");

module.exports = async (data) => {
  let baseUrl = process.env.SITE_BASE_URL || "";
  if (baseUrl && !baseUrl.startsWith("http")) {
    baseUrl = "https://" + baseUrl;
  }
  let themeStyle = globSync("src/site/styles/_theme.*.css")[0] || "";
  if (themeStyle) {
    themeStyle = themeStyle.split("site")[1];
  }
  let bodyClasses = [];
  let noteIconsSettings = {
    filetree: false,
    links: false,
    title: false,
    default: process.env.NOTE_ICON_DEFAULT,
  };

  const styleSettingsCss = process.env.STYLE_SETTINGS_CSS || "";
  const styleSettingsBodyClasses = process.env.STYLE_SETTINGS_BODY_CLASSES || "";

  if (process.env.NOTE_ICON_TITLE && process.env.NOTE_ICON_TITLE == "true") {
    bodyClasses.push("title-note-icon");
    noteIconsSettings.title = true;
  }
  if (
    process.env.NOTE_ICON_FILETREE &&
    process.env.NOTE_ICON_FILETREE == "true"
  ) {
    bodyClasses.push("filetree-note-icon");
    noteIconsSettings.filetree = true;
  }
  if (
    process.env.NOTE_ICON_INTERNAL_LINKS &&
    process.env.NOTE_ICON_INTERNAL_LINKS == "true"
  ) {
    bodyClasses.push("links-note-icon");
    noteIconsSettings.links = true;
  }
  if (
    process.env.NOTE_ICON_BACK_LINKS &&
    process.env.NOTE_ICON_BACK_LINKS == "true"
  ) {
    bodyClasses.push("backlinks-note-icon");
    noteIconsSettings.backlinks = true;
  }
  if (styleSettingsCss) {
    bodyClasses.push("css-settings-manager");
  }
  if (styleSettingsBodyClasses) {
    bodyClasses.push(styleSettingsBodyClasses);
  }

  let timestampSettings = {
    timestampFormat: process.env.TIMESTAMP_FORMAT || "MMM dd, yyyy h:mm a",
    showCreated: process.env.SHOW_CREATED_TIMESTAMP == "true",
    showUpdated: process.env.SHOW_UPDATED_TIMESTAMP == "true",
  };
  const meta = {
    env: process.env.ELEVENTY_ENV,
    theme: process.env.THEME,
    themeStyle,
    bodyClasses: bodyClasses.join(" "),
    noteIconsSettings,
    timestampSettings,
    baseTheme: process.env.BASE_THEME || "dark",
    siteName: process.env.SITE_NAME_HEADER || "Digital Garden",
    mainLanguage: process.env.SITE_MAIN_LANGUAGE || "en",
    siteBaseUrl: baseUrl,
    styleSettingsCss,
    buildDate: new Date(),
  };

  return meta;
};
```

---


#### 📁 Directory: src\site\_includes\components

##### 📄 calloutScript.njk
*Path: `src\site\_includes\components\calloutScript.njk`*  
*Size: 1.52 KB*

```njk
<script async src="https://cdn.jsdelivr.net/npm/lucide@0.115.0/dist/umd/lucide.min.js"></script>
<script>
    // Create callout icons
    window.addEventListener("load", () => {
        document.querySelectorAll(".callout").forEach((elem) => {
            const icon = getComputedStyle(elem).getPropertyValue('--callout-icon');
            const iconName = icon && icon.trim().replace(/^lucide-/, "");

            if (iconName) {
                const calloutTitle = elem.querySelector(".callout-title");

                if (calloutTitle) {
                    const calloutIconContainer = document.createElement("div");
                    const calloutIcon = document.createElement("i");

                    calloutIconContainer.appendChild(calloutIcon);
                    calloutIcon.setAttribute("icon-name", iconName);
                    calloutIconContainer.setAttribute("class", "callout-icon");
                    calloutTitle.insertBefore(calloutIconContainer, calloutTitle.firstChild);
                }
            }
        });

        lucide.createIcons();

        // Collapse callouts
        Array.from(document.querySelectorAll(".callout.is-collapsible")).forEach((elem) => {
            elem.querySelector('.callout-title').addEventListener("click", (event) => {
                if (elem.classList.contains("is-collapsed")) {
                    elem.classList.remove("is-collapsed");
                } else {
                    elem.classList.add("is-collapsed");
                }
            });
        });
    });
</script>
```

---

##### 📄 filetree.njk
*Path: `src\site\_includes\components\filetree.njk`*  
*Size: 2.93 KB*

```njk
{% macro menuItem(fileOrFolderName, fileOrFolder, step, currentPath) %}
    {%if fileOrFolder.isNote or fileOrFolder.isFolder%}
        <div x-show="isOpen" style="display:none" class="{{'filelist' if step>0}}">
            {%if fileOrFolder.isNote and not fileOrFolder.hide %}
                <div @click.stop class="notelink {{ 'active-note' if fileOrFolder.permalink === permalink}}">
                    {%- if not meta.noteIconsSettings.filetree -%}<i icon-name="sticky-note" aria-hidden="true"></i>{%- endif -%}
                    <a data-note-icon="{{fileOrFolder.noteIcon}}" style="text-decoration: none;" class="filename" href="{{fileOrFolder.permalink}}">{{fileOrFolder.name}} </a>
                </div>
            {% elif fileOrFolder.isFolder%}
                <div class="folder inner-folder"  x-data="{isOpen: $persist(false).as('{{currentPath}}')}" @click.stop="isOpen=!isOpen">
                    <div class="foldername-wrapper align-icon">
                    <i x-show="isOpen" style="display: none;"  icon-name="chevron-down"></i>
                    <i x-show="!isOpen"  icon-name="chevron-right"></i>
                    <span class="foldername">{{fileOrFolderName}}</span>
                    </div>
                    {% for fileOrFolderName, child in fileOrFolder %}
                        {{menuItem(fileOrFolderName, child, step+1, (currentPath+"/"+fileOrFolderName))}}
                    {% endfor %}
                </div>
            {% endif %}
        </div>
        {%endif%}
    {% endmacro %}
    
    <div x-init="isDesktop = (window.innerWidth>=1400) ? true: false;" 
            x-on:resize.window="isDesktop = (window.innerWidth>=1400) ? true : false;" 
            x-data="{isDesktop: true, showFilesMobile: false}">

        <div x-show.important="!isDesktop" style="display: none;">
            {%include "components/filetreeNavbar.njk"%}
        </div>
        
        <div x-show="showFilesMobile && !isDesktop" @click="showFilesMobile = false" style="display:none;" class="fullpage-overlay"></div>

      <nav class="filetree-sidebar"  x-show.important="isDesktop || showFilesMobile" style="display: none;">
        {% for imp in dynamics.filetree.beforeTitle %}
            {% include imp %}
        {% endfor %}
         <a href="/" style="text-decoration: none;">
               <h1 style="text-align:center;">{{meta.siteName}}</h1>
         </a>
         {% for imp in dynamics.filetree.afterTitle %}
            {% include imp %}
        {% endfor %}
        {% if settings.dgEnableSearch === true%}
            <div style="display: flex; justify-content: center;">
                {% include "components/searchButton.njk" %}
            </div>
        {%endif%}
         <div class="folder" x-data="{isOpen: true}">
               {%- for fileOrFolderName, fileOrFolder in filetree -%}
                  {{menuItem(fileOrFolderName, fileOrFolder, 0, fileOrFolderName)}}
               {%- endfor -%}
         </div>
      </nav>
    </div>
```

---

##### 📄 filetreeNavbar.njk
*Path: `src\site\_includes\components\filetreeNavbar.njk`*  
*Size: 669 bytes*

```njk
<nav class="navbar">
    <div class="navbar-inner">
        <span style="font-size: 1.5rem; margin-right: 10px;" @click="showFilesMobile=!showFilesMobile"><i  icon-name="menu"></i></span>
        {% for imp in dynamics.filetree.beforeTitle %}
            {% include imp %}
        {% endfor %}
        <a href="/" style="text-decoration: none;">
            <h1 style="margin: 15px !important;">{{meta.siteName}}</h1>
        </a>
        {% for imp in dynamics.filetree.afterTitle %}
            {% include imp %}
        {% endfor %}
    </div>
    
    {% if settings.dgEnableSearch === true%}
        {% include "components/searchButton.njk" %}
    {%endif%}
</nav>
```

---

##### 📄 graphScript.njk
*Path: `src\site\_includes\components\graphScript.njk`*  
*Size: 8.47 KB*

```njk
<script>
    async function fetchGraphData() {
        const graphData = await fetch('/graph.json').then(res => res.json());
        const fullGraphData  = filterFullGraphData(graphData);
        return {graphData, fullGraphData}
    }

    function getNextLevelNeighbours(existing, remaining) {
        const keys = Object.values(existing).map((n) => n.neighbors).flat();
        const n_remaining = Object.keys(remaining).reduce((acc, key) => {
                if (keys.indexOf(key) != -1) {
                    if (!remaining[key].hide) {
                        existing[key] = remaining[key];
                    }
                } else {
                    acc[key] = remaining[key];
                }
                return acc;
            }, {});
        return existing, n_remaining;
    }

    function filterLocalGraphData(graphData, depth) {
        if (graphData == null) {
            return null;
        }
        let remaining = JSON.parse(JSON.stringify(graphData.nodes));
        let links = JSON.parse(JSON.stringify(graphData.links));
        let currentLink = decodeURI(window.location.pathname);
        let currentNode = remaining[currentLink] || Object.values(remaining).find((v) => v.home);
        delete remaining[currentNode.url];
        if (!currentNode.home) {
            let home = Object.values(remaining).find((v) => v.home);
            delete remaining[home.url];
        }
        currentNode.current = true;
        let existing = {};
        existing[currentNode.url] = currentNode;
        for (let i = 0; i < depth; i++) {
            existing, remaining = getNextLevelNeighbours(existing, remaining);
        }
        nodes = Object.values(existing);
        if (!currentNode.home) {
            nodes = nodes.filter(n => !n.home);
        }
        let ids = nodes.map((n) => n.id);
        return {
            nodes,
            links: links.filter(function (con) {
                return ids.indexOf(con.target) > -1 && ids.indexOf(con.source) > -1;
            }),
        }
    }

    function getCssVar(variable) {return getComputedStyle(document.body).getPropertyValue(variable)}

    function htmlDecode(input) {
        var doc = new DOMParser().parseFromString(input, "text/html");
        return doc.documentElement.textContent;
    }

    function renderGraph(graphData, id, delay, fullScreen) {
        if (graphData == null) {
            return;
        }
        const el = document.getElementById(id);
        width = el.offsetWidth;
        height = el.offsetHeight;
        const highlightNodes = new Set();
        let hoverNode = null;
        const color = getCssVar("--graph-main");
        const mutedColor = getCssVar("--graph-muted");
        let Graph = ForceGraph()
        (el)
            .graphData(graphData)
            .nodeId('id')
            .nodeLabel('title')
            .linkSource('source')
            .linkTarget('target')
            .d3AlphaDecay(0.10)
            .width(width)
            .height(height)
            .linkDirectionalArrowLength(2)
            .linkDirectionalArrowRelPos(0.5)
            .autoPauseRedraw(false)
            .linkColor((link) => {
                if (hoverNode == null) {
                    return color;
                }
                if (link.source.id == hoverNode.id || link.target.id == hoverNode.id) {
                    return color;
                } else {
                    return mutedColor;
                }
                
            })
            .nodeCanvasObject((node, ctx) => {
                const numberOfNeighbours = (node.neighbors && node.neighbors.length) || 2;
                const nodeR = Math.min(7, Math.max(numberOfNeighbours / 2, 2));
                
                ctx.beginPath();
                ctx.arc(node.x, node.y, nodeR, 0, 2 * Math.PI, false);
                if (hoverNode == null) {
                    ctx.fillStyle = color;
                } else {
                    if (node == hoverNode || highlightNodes.has(node.url)) {
                        ctx.fillStyle = color;
                    } else {
                        ctx.fillStyle = mutedColor;
                    }
                }
                 
                ctx.fill();
                
                if (node.current) {
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, nodeR + 1, 0, 2 * Math.PI, false);
                    ctx.lineWidth = 0.5;
                    ctx.strokeStyle = color;
                    ctx.stroke();
                }

                const label = htmlDecode(node.title)
                const fontSize = 3.5;
                ctx.font = `${fontSize}px Sans-Serif`;

                ctx.textAlign = 'center';
                ctx.textBaseline = 'top';
                ctx.fillText(label, node.x, node.y + nodeR + 2);
            })
            .onNodeClick(node => {
                window.location = node.url;
            })
            .onNodeHover(node => {
                highlightNodes.clear();
                if (node) {
                highlightNodes.add(node);
                node.neighbors.forEach(neighbor => highlightNodes.add(neighbor));
                }
                hoverNode = node || null;
                
            });
            if (fullScreen || (delay != null && graphData.nodes.length > 4)) {
                setTimeout(() => {
                    Graph.zoomToFit(5, 75);
                }, delay || 200);
            }
        return Graph;
    }

    function renderLocalGraph(graphData, depth, fullScreen) {
        if (window.graph){
            window.graph._destructor();
        }
        const data = filterLocalGraphData(graphData, depth);
        return renderGraph(data, 'link-graph', null, fullScreen);
    }

    function filterFullGraphData(graphData) {
        if (graphData == null) {
            return null;
        }
        graphData = JSON.parse(JSON.stringify(graphData));
        const hiddens = Object.values(graphData.nodes).filter((n) => n.hide).map((n) => n.id);
        const data = {
            links: JSON.parse(JSON.stringify(graphData.links)).filter((l) => hiddens.indexOf(l.source) == -1 && hiddens.indexOf(l.target) == -1),
            nodes: [...Object.values(graphData.nodes).filter((n) => !n.hide)]
        }
        return data
    }

    function openFullGraph(fullGraphData) {
        lucide.createIcons({
                attrs: {
                    class: ["svg-icon"]
                }
            });
        return renderGraph(fullGraphData, "full-graph-container", 200, false);;
    }

    function closefullGraph(fullGraph) {
        if (fullGraph) {
            fullGraph._destructor();
        }
        return null;
    }
</script>
<div  x-init="{graphData, fullGraphData} = await fetchGraphData();" x-data="{ graphData: null, depth: 1, graph: null, fullGraph: null, showFullGraph: false, fullScreen: false, fullGraphData: null}" id="graph-component" x-bind:class="fullScreen ? 'graph graph-fs' : 'graph'" v-scope>
    <div class="graph-title-container">
        <div class="graph-title">Connected Pages</div>
        <div id="graph-controls">
                <div class="depth-control">
                    <label for="graph-depth">Depth</label>
                    <div class="slider">
                            <input x-model.number="depth" name="graph-depth" list="depthmarkers" type="range" step="1" min="1" max="3" id="graph-depth"/>
                    <datalist id="depthmarkers">
                            <option value="1" label="1"></option>
                            <option value="2" label="2"></option>
                            <option value="3" label="3"></option>
                    </datalist>
                    </div>
                    <span id="depth-display" x-text="depth"></span>
                </div>
                <div class="ctrl-right">
                    <span id="global-graph-btn" x-on:click="showFullGraph = true; setTimeout(() => {fullGraph = openFullGraph(fullGraphData)}, 100)"><i  icon-name="globe" aria-hidden="true"></i></span>
                    <span  id="graph-fs-btn"  x-on:click="fullScreen = !fullScreen"><i  icon-name="expand" aria-hidden="true"></i></span>
                </div>
        </div>
    </div>
    <div x-effect="window.graph = renderLocalGraph(graphData, depth, fullScreen)" id="link-graph" ></div>
    <div x-show="showFullGraph" id="full-graph" class="show" style="display: none;">
        <span id="full-graph-close" x-on:click="fullGraph = closefullGraph(fullGraph); showFullGraph = false;"><i icon-name="x" aria-hidden="true"></i></span><div id="full-graph-container"></div>
    </div>
</div>
```

---

##### 📄 linkPreview.njk
*Path: `src\site\_includes\components\linkPreview.njk`*  
*Size: 5.45 KB*

```njk
<!-- Credit for the link preview implementation goes to https://github.com/maximevaillancourt/digital-garden-jekyll-template/blob/master/_includes/link-previews.html -->
<style>
#tooltip-wrapper {
  background: var(--background-primary);
  padding: 1em;
  border-radius: 4px;
  overflow: hidden;
  position: fixed;
  width: 80%;
  max-width: 400px;
  height: auto;
  max-height: 300px;
  font-size: 0.8em;
  box-shadow: 0 5px 10px rgba(0,0,0,0.1);
  opacity: 0;
  transition: opacity 100ms;
  unicode-bidi: plaintext;
  overflow-y: scroll;
  z-index: 10;
}

#tooltip-wrapper:after {
  content: "";
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  pointer-events: none;
  width: 100%;
  unicode-bidi: plaintext;
  height: 75px;
}
</style>
<div style="opacity: 0; display: none;" id='tooltip-wrapper'>
  <div id='tooltip-content'>
  </div>
</div>

<iframe style="display: none; height: 0; width: 0;" id='link-preview-iframe' src="">
</iframe>

<script>
  var opacityTimeout;
  var contentTimeout;
  var transitionDurationMs = 100;

  var iframe = document.getElementById('link-preview-iframe')
  var tooltipWrapper = document.getElementById('tooltip-wrapper')
  var tooltipContent = document.getElementById('tooltip-content')

  var linkHistories = {};

  function hideTooltip() {
    opacityTimeout = setTimeout(function () {
      tooltipWrapper.style.opacity = 0;
      contentTimeout = setTimeout(function () {
        tooltipContent.innerHTML = '';
        tooltipWrapper.style.display = 'none';
      }, transitionDurationMs + 1);
    }, transitionDurationMs)
  }

  function showTooltip(event) {
    var elem = event.target;
    var elem_props = elem.getClientRects()[elem.getClientRects().length - 1];
    var top = window.pageYOffset || document.documentElement.scrollTop;
    var url = event.target.getAttribute("href");
    if (url.indexOf("http") === -1 || url.indexOf(window.location.host) !== -1) {
      let contentURL = url.split('#')[0]
      if (!linkHistories[contentURL]) {
        iframe.src = contentURL
        iframe.onload = function () {
          tooltipContentHtml = ''
          tooltipContentHtml += '<div style="font-weight: bold; unicode-bidi: plaintext;">' + iframe.contentWindow.document.querySelector('h1').innerHTML + '</div>'
          tooltipContentHtml += iframe.contentWindow.document.querySelector('.content').innerHTML
          tooltipContent.innerHTML = tooltipContentHtml
          linkHistories[contentURL] = tooltipContentHtml
          tooltipWrapper.style.display = 'block';
          tooltipWrapper.scrollTop = 0;
          setTimeout(function () {
            tooltipWrapper.style.opacity = 1;
            if (url.indexOf("#") != -1) {
              let id = url.split('#')[1];
              const focus = tooltipWrapper.querySelector(`[id='${id}']`);
              focus.classList.add('referred');
              console.log(focus);
              focus.scrollIntoView({behavior: 'smooth'}, true)
            } else {
              tooltipWrapper.scroll(0, 0);
            }
          }, 1)
        }
      } else {
        tooltipContent.innerHTML = linkHistories[contentURL]
        tooltipWrapper.style.display = 'block';
        setTimeout(function () {
          tooltipWrapper.style.opacity = 1;
          if (url.indexOf("#") != -1) {
              let id = url.split('#')[1];
              const focus = tooltipWrapper.querySelector(`[id='${id}']`);
              focus.classList.add('referred');
              focus.scrollIntoView({behavior: 'smooth'}, true)
          } else {
              tooltipWrapper.scroll(0, 0);
          }
        }, 1)
      }

      function getInnerWidth(elem) {
        var style = window.getComputedStyle(elem);
        return elem.offsetWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight) - parseFloat(style.borderLeft) - parseFloat(style.borderRight) - parseFloat(style.marginLeft) - parseFloat(style.marginRight);
      }

      tooltipWrapper.style.left = elem_props.left - (tooltipWrapper.offsetWidth / 2) + (elem_props.width / 2) + "px";

      if ((window.innerHeight - elem_props.top) < (tooltipWrapper.offsetHeight)) {
        tooltipWrapper.style.top = elem_props.top + top - tooltipWrapper.offsetHeight - 10 + "px";
      } else if ((window.innerHeight - elem_props.top) > (tooltipWrapper.offsetHeight)) {
        tooltipWrapper.style.top = elem_props.top + top + 35 + "px";
      }

      if ((elem_props.left + (elem_props.width / 2)) < (tooltipWrapper.offsetWidth / 2)) {
        tooltipWrapper.style.left = "10px";
      } else if ((document.body.clientWidth - elem_props.left - (elem_props.width / 2)) < (tooltipWrapper.offsetWidth / 2)) {
        tooltipWrapper.style.left = document.body.clientWidth - tooltipWrapper.offsetWidth - 20 + "px";
      }
    }
  }

  function setupListeners(linkElement) {
    linkElement.addEventListener('mouseleave', function (_event) {
      hideTooltip();
    });

    tooltipWrapper.addEventListener('mouseleave', function (_event) {
      hideTooltip();
    });

    linkElement.addEventListener('mouseenter', function (event) {
      clearTimeout(opacityTimeout);
      clearTimeout(contentTimeout);
      showTooltip(event);
    });

    tooltipWrapper.addEventListener('mouseenter', function (event) {
      clearTimeout(opacityTimeout);
      clearTimeout(contentTimeout);
    });
  }

  window.addEventListener("load", function(event) 
  {
    document.querySelectorAll('.internal-link').forEach(setupListeners);
    document.querySelectorAll('.backlink-card a').forEach(setupListeners);
  });
</script>
```

---

##### 📄 lucideIcons.njk
*Path: `src\site\_includes\components\lucideIcons.njk`*  
*Size: 122 bytes*

```njk
<script>
lucide.createIcons({
            attrs: {
                class: ["svg-icon"]
            }
        });
</script>
```

---

##### 📄 navbar.njk
*Path: `src\site\_includes\components\navbar.njk`*  
*Size: 582 bytes*

```njk
{%if settings.dgHomeLink === true%}
    <nav class="navbar">
        <div class="navbar-inner">
            <a href="/" style="text-decoration: none;">
                <h1 style="margin: 15px !important;">{{meta.siteName}}</h1>
            </a>
        </div>
        {% if settings.dgEnableSearch === true%}
            {% include "components/searchButton.njk" %}
        {%endif%}
    </nav>
    {%else%}
    <div class="empty-navbar" >
        {% if settings.dgEnableSearch === true%}
            {% include "components/searchButton.njk" %}
        {%endif%}
    </div>
{%endif%}
```

---

##### 📄 notegrowthhistory.njk
*Path: `src\site\_includes\components\notegrowthhistory.njk`*  
*Size: 709 bytes*

```njk
{%- if collections.versionednote.length > 0 -%}
    <div style="position:absolute; top:100px; right:0; padding:20px 15px 40px 15px; background-color:#2a2a2a; border-radius: 25px;">
        <!-- animate big when moving over -->
        <h2>Notegrowth</h2>
        <ul style="list-style-type: none; padding:0;">
            {%- for note in collections.versionednote -%}
                {%- if note.data.item.title === page.fileSlug -%}
                    <li style="padding:10px">
                        <a href="{{ note.url }}">
                            {{note.data.item.date}}</a>
                    </li>
                {%- endif -%}
            {%- endfor -%}
        </ul>
    </div>
    {%-endif-%}
```

---

##### 📄 pageheader.njk
*Path: `src\site\_includes\components\pageheader.njk`*  
*Size: 2.24 KB*

```njk
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script async type="module">
    import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
</script>
<script async src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/prism.min.js" integrity="sha512-hpZ5pDCF2bRCweL5WoA0/N1elet1KYL5mx3LP555Eg/0ZguaHawxNvEjF6O3rufAChs16HVNhEc6blF/rZoowQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script async src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/plugins/autoloader/prism-autoloader.min.js" integrity="sha512-sv0slik/5O0JIPdLBCR2A3XDg/1U3WuDEheZfI/DI5n8Yqc3h5kjrnr46FGBNiUAJF7rE4LHKwQ/SoSLRKAxEA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

{%include "components/calloutScript.njk"%}

<script async src="https://fastly.jsdelivr.net/npm/force-graph@1.43.0/dist/force-graph.min.js"></script>

<script async src="https://fastly.jsdelivr.net/npm/@alpinejs/persist@3.11.1/dist/cdn.min.js"></script>
<script src="https://fastly.jsdelivr.net/npm/alpinejs@3.11.1/dist/cdn.min.js" async></script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/themes/prism-okaidia.min.css" integrity="sha512-mIs9kKbaw6JZFfSuo+MovjU+Ntggfoj8RwAmJbVXQ5mkAX5LlgETQEweFPI18humSPHymTb5iikEOKWF7I8ncQ==" crossorigin="anonymous" referrerpolicy="no-referrer" async/>
<script src="https://fastly.jsdelivr.net/npm/whatwg-fetch@3.6.2/dist/fetch.umd.min.js" crossorigin="anonymous" referrerpolicy="no-referrer" async></script>

<link href="/styles/digital-garden-base.css" rel="stylesheet">
{%-if meta.themeStyle%}
    <link href="/styles/obsidian-base.css" rel="stylesheet">
    <link href="{{meta.themeStyle}}" rel="stylesheet">
{% else %}
    <link href="/styles/style.css" rel="stylesheet">
{%endif%}

<link href="/styles/custom-style.css" rel="stylesheet">
{%- for style in dynamics.styles -%}
<link href="{{style}}" rel="stylesheet">
{%- endfor -%}

{% favicons './src/site/favicon.svg', appleIconBgColor='#123' %}

{% if metatags %}
    {% for name, content in metatags %}
        <meta name="{{ name }}" content="{{ content }}">
    {% endfor %}
{% endif %}

{% if meta.styleSettingsCss %}
    <style>
        {{ meta.styleSettingsCss | safe }}
    </style>
{% endif %}
<style>
</style>
```

---

##### 📄 references.njk
*Path: `src\site\_includes\components\references.njk`*  
*Size: 928 bytes*

```njk
    <script>
      if (window.location.hash) {
        document.getElementById(window.location.hash.slice(1)).classList.add('referred');
      }
      window.addEventListener('hashchange', (evt) => {
        const oldParts = evt.oldURL.split("#");
        if (oldParts[1]) {
          document.getElementById(oldParts[1]).classList.remove('referred');
        }
        const newParts = evt.newURL.split("#");
        if (newParts[1]) {
          document.getElementById(newParts[1]).classList.add('referred');
        }
      }, false);
      const url_parts = window.location.href.split("#")
      const url = url_parts[0];
      const referrence = url_parts[1];
      document.querySelectorAll(".cm-s-obsidian > *[id]").forEach(function (el) {
        el.ondblclick = function(evt) {
          const ref_url = url + '#' + evt.target.id
          navigator.clipboard.writeText(ref_url);
      }
      });

      
    </script>
```

---

##### 📄 searchButton.njk
*Path: `src\site\_includes\components\searchButton.njk`*  
*Size: 390 bytes*

```njk
<div class="search-button align-icon" onclick="toggleSearch()">
    <span class="search-icon">
        <i icon-name="search" ></i>
    </span>
    <span class="search-text">
        <span>Search</span>
        <span style="font-size: 0.6rem; padding: 2px 2px 0 6px; text-align:center; transform: translateY(4px);" class="search-keys">
            CTRL + K
        </span>
    </span>
</div>
```

---

##### 📄 searchContainer.njk
*Path: `src\site\_includes\components\searchContainer.njk`*  
*Size: 790 bytes*

```njk
<div class="search-container" id="globalsearch" onclick="toggleSearch()">
    <div class="search-box">
        <input type="search" id="term" placeholder="Start typing...">
        <div id="search-results"></div>
        <footer class="search-box-footer">
            <div class="navigation-hint">
                <span>Enter to select</span>
            </div>

            <div class="navigation-hint align-icon">
                <i  icon-name="arrow-up" aria-hidden="true"></i>
                <i  icon-name="arrow-down" aria-hidden="true"></i>
                <span>to navigate</span>
            </div>

            <div class="navigation-hint">
                <span>ESC to close</span>
            </div>

        </footer>
    </div>
</div>
{%include "components/searchScript.njk"%}
```

---

##### 📄 searchScript.njk
*Path: `src\site\_includes\components\searchScript.njk`*  
*Size: 13.68 KB*

```njk
<script src="https://cdn.jsdelivr.net/npm/flexsearch@0.7.21/dist/flexsearch.bundle.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', init, false);
    document.addEventListener('DOMContentLoaded', setCorrectShortcut, false);

    window.toggleSearch = function () {
        if (document.getElementById('globalsearch').classList.contains('active')) {
            document
                .getElementById('globalsearch')
                .classList
                .remove('active');
        } else {
            document
                .getElementById('globalsearch')
                .classList
                .add('active');
            document
                .getElementById('term')
                .focus();
        }
    }

    window.toggleTagSearch = function (evt) {
        console.log(evt.textContent);
        const term = evt.textContent;
        if (term) {
            window
                .document
                .getElementById('term')
                .value = term.trim();
            window.toggleSearch();
            window.search();
        }
    }

    const loadingSvg = `
    <svg width="100" height="100" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
      <g fill="none" fill-rule="evenodd" transform="translate(1 1)" stroke-width="2">
          <circle cx="22" cy="22" r="6" stroke-opacity="0">
              <animate attributeName="r"
                   begin="1.5s" dur="3s"
                   values="6;22"
                   calcMode="linear"
                   repeatCount="indefinite" />
              <animate attributeName="stroke-opacity"
                   begin="1.5s" dur="3s"
                   values="1;0" calcMode="linear"
                   repeatCount="indefinite" />
              <animate attributeName="stroke-width"
                   begin="1.5s" dur="3s"
                   values="2;0" calcMode="linear"
                   repeatCount="indefinite" />
          </circle>
          <circle cx="22" cy="22" r="6" stroke-opacity="0">
              <animate attributeName="r"
                   begin="3s" dur="3s"
                   values="6;22"
                   calcMode="linear"
                   repeatCount="indefinite" />
              <animate attributeName="stroke-opacity"
                   begin="3s" dur="3s"
                   values="1;0" calcMode="linear"
                   repeatCount="indefinite" />
              <animate attributeName="stroke-width"
                   begin="3s" dur="3s"
                   values="2;0" calcMode="linear"
                   repeatCount="indefinite" />
          </circle>
          <circle cx="22" cy="22" r="8">
              <animate attributeName="r"
                   begin="0s" dur="1.5s"
                   values="6;1;2;3;4;5;6"
                   calcMode="linear"
                   repeatCount="indefinite" />
          </circle>
      </g>
  </svg>`;

    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this,
                args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) 
                    func.apply(context, args);
                };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) 
                func.apply(context, args);
            };
    };

    function setCorrectShortcut() {
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0) {
            document
                .querySelectorAll(".search-keys")
                .forEach(x => x.innerHTML = "⌘ + K");
        }
    }

    function createIndex(posts) {
        const encoder = (str) => str
            .toLowerCase()
            .split(/([^a-z]|[^\x00-\x7F])/)
        const contentIndex = new FlexSearch.Document({
            cache: true,
            charset: "latin:extra",
            optimize: true,
            index: [
                {
                    field: "content",
                    tokenize: "reverse",
                    encode: encoder
                }, {
                    field: "title",
                    tokenize: "forward",
                    encode: encoder
                }, {
                    field: "tags",
                    tokenize: "forward",
                    encode: encoder
                }
            ]
        })
        posts.forEach((p, idx) => {
            contentIndex.add({
                id: idx, title: p.title, content: p.content, tags: p.tags //Change to removeHTML
            })
        });
        return contentIndex;
    }

    async function init() {
        //init offline search index

        const searchIndexDate = '{{meta.buildDate|isoDate}}';
        let shouldFetch = true;
        if(localStorage.getItem("searchIndex")) {
            let {date, docs}= JSON.parse(localStorage.getItem('searchIndex'));
            if(date === searchIndexDate){
                shouldFetch = false;
                let index = createIndex(docs);
                window.docs = docs
                window.index = index;
            }        
        }
        if(shouldFetch){
            let docs = await(await fetch('/searchIndex.json?v={{meta.buildDate|isoDate}}')).json();
            let index = createIndex(docs);
            localStorage.setItem("searchIndex", JSON.stringify({date: '{{meta.buildDate|isoDate}}', docs}));
            window.docs = docs
            window.index = index;
        }

        //open searchmodal when ctrl + k is pressed, cmd + k on mac
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                toggleSearch();
            }
            if (e.key === 'Escape') {
                document
                    .getElementById('globalsearch')
                    .classList
                    .remove('active');
            }

            //navigate search results with arrow keys
            if (document.getElementById('globalsearch').classList.contains('active')) {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    let active = document.querySelector('.searchresult.active');
                    if (active) {
                        active
                            .classList
                            .remove('active');
                        if (active.nextElementSibling) {
                            active
                                .nextElementSibling
                                .classList
                                .add('active');
                        } else {
                            document
                                .querySelector('.searchresult')
                                .classList
                                .add('active');
                        }
                    } else {
                        document
                            .querySelector('.searchresult')
                            .classList
                            .add('active');
                    }

                    let currentActive = document.querySelector('.searchresult.active');
                    if (currentActive) {
                        currentActive.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'});
                    }
                }
                if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    let active = document.querySelector('.searchresult.active');
                    if (active) {
                        active
                            .classList
                            .remove('active');
                        if (active.previousElementSibling) {
                            active
                                .previousElementSibling
                                .classList
                                .add('active');
                        } else {
                            document
                                .querySelectorAll('.searchresult')
                                .forEach((el) => {
                                    if (!el.nextElementSibling) {
                                        el
                                            .classList
                                            .add('active');
                                    }
                                });
                        }
                    } else {
                        document
                            .querySelectorAll('.searchresult')
                            .forEach((el) => {
                                if (el.nextElementSibling) {
                                    el
                                        .classList
                                        .add('active');
                                }
                            });
                    }

                    let currentActive = document.querySelector('.searchresult.active');
                    if (currentActive) {
                        currentActive.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'});
                    }

                }
                if (e.key === 'Enter') {
                    e.preventDefault();
                    let active = document.querySelector('.searchresult.active');
                    if (active) {
                        window.location.href = active
                            .querySelector("a")
                            .href;
                    }
                }
            }
        });

        const debouncedSearch = debounce(search, 200, false);
        field = document.querySelector('#term');
        field.addEventListener('keydown', (e) => {
            if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') {
                debouncedSearch();
            }
        });
    

... (Content truncated - file too large)
```

---

##### 📄 sidebar.njk
*Path: `src\site\_includes\components\sidebar.njk`*  
*Size: 4.28 KB*

```njk
<aside>
      <div class="sidebar">
            <div class="sidebar-container">
                  {% for imp in dynamics.sidebar.top %}
                        {% include imp %}
                  {% endfor %}
                  {%if settings.dgShowLocalGraph === true%}
                        {%include "components/graphScript.njk"%}
                  {%endif%}

                  {%if settings.dgShowToc === true%}
                        {%set tocHtml= (content and (content|toc)) %}
                        {%if tocHtml %}
                              <div class="toc">
                                    <div class="toc-title-container">
                                          <div class="toc-title">
                                                On this page
                                          </div>
                                    </div>
                                    <div class="toc-container">
                                          {{ tocHtml | safe }}
                                    </div>
                              </div>
                        {%endif%}

                  {%endif%}

                        {%if settings.dgShowBacklinks === true %}
                              {%if settings.dgShowBacklinks === true %}
                              <div class="backlinks">
                                    <div class="backlink-title" style="margin: 4px 0 !important;">Pages mentioning this page</div>
                                          <div class="backlink-list">
                                          {%- if page.url == "/" -%}
                                                {%- if graph.nodes[graph.homeAlias].backLinks.length === 0 -%}
                                                      <div class="backlink-card">
                                                            <span class="no-backlinks-message">No other pages mentions this page</span>
                                                      </div>
                                                {%- endif -%}
                                          {%- for backlink in graph.nodes[graph.homeAlias].backLinks -%}
                                                {%- if graph.nodes[backlink].url != graph.homeAlias -%}
                                                <div class="backlink-card">
                                                      {%- if not meta.noteIconsSettings.backlinks -%}<i  icon-name="link"></i> {%- endif -%}<a href="{{graph.nodes[backlink].url}}" data-note-icon="{{graph.nodes[backlink].noteIcon}}" class="backlink">{{graph.nodes[backlink].title}}</a>
                                                </div>
                                                {%- endif -%}
                                          {%- endfor -%}
                                          {%- else -%}
                                                {%- if graph.nodes[page.url].backLinks.length === 0 -%}
                                                      <div class="backlink-card">
                                                            <span class="no-backlinks-message">No other pages mentions this page</span>
                                                      </div>
                                                {%- endif -%}
                                          {%- for backlink in graph.nodes[page.url].backLinks -%}
                                                {%- if graph.nodes[backlink].url != page.url -%}
                                                <div class="backlink-card">
                                                      {%- if not meta.noteIconsSettings.backlinks -%}<i  icon-name="link"></i> {%- endif -%}<a href="{{graph.nodes[backlink].url}}" data-note-icon="{{graph.nodes[backlink].noteIcon}}" class="backlink">{{graph.nodes[backlink].title}}</a>
                                                </div>
                                                {%- endif -%}
                                          {%- endfor -%}
                                    {%- endif -%}
                                    </div>
                              </div>
                        {%endif%}
                  {%endif%}
                  {% for imp in dynamics.sidebar.bottom %}
                        {% include imp %}
                  {% endfor %}
            </div>
      </div>
</aside>
```

---

##### 📄 timestamps.njk
*Path: `src\site\_includes\components\timestamps.njk`*  
*Size: 676 bytes*

```njk
<script src=" https://fastly.jsdelivr.net/npm/luxon@3.2.1/build/global/luxon.min.js "></script>
<script defer>
  TIMESTAMP_FORMAT = "{{meta.timestampSettings.timestampFormat}}";
  document.querySelectorAll('.human-date').forEach(function (el) {
    date = el.getAttribute('data-date') || el.innerText
    parsed_date = luxon.DateTime.fromISO(date)
    if (parsed_date.invalid != null){
      // Date cannot be parsed
      parsed_date = luxon.DateTime.fromSQL(date)
    }
    if (parsed_date.invalid != null){
      // Date still cannot be parsed
      parsed_date = luxon.DateTime.fromHTML(date)
    }
    el.innerHTML = parsed_date.toFormat(TIMESTAMP_FORMAT);
  })
</script>
```

---


#### 📁 Directory: src\site\_includes\layouts

##### 📄 index.njk
*Path: `src\site\_includes\layouts\index.njk`*  
*Size: 2.54 KB*

```njk
<!DOCTYPE html>
<html lang="{{ meta.mainLanguage }}">
  <head>
    <title>{% if title %}{{ title }}{% else %}{{ page.fileSlug }}{% endif %}</title>
    {%include "components/pageheader.njk"%}
    {% for imp in dynamics.common.head %}
      {% include imp %}
    {% endfor %}
    {% for imp in dynamics.index.head %}
      {% include imp %}
    {% endfor %}
  </head>
  <body class="theme-{{meta.baseTheme}} markdown-preview-view markdown-rendered markdown-preview-section {{meta.bodyClasses}}">
    {%include "components/notegrowthhistory.njk"%}
    {% if settings.dgShowFileTree !== true %}
      {%include "components/navbar.njk"%}
    {%else%}
      {%include "components/filetree.njk"%}
    {% endif %}
    {% if settings.dgEnableSearch === true %}
      {%include "components/searchContainer.njk"%}
    {% endif %}
    <main class="content cm-s-obsidian {{contentClasses}}">
      <header>
      {% if settings.dgShowInlineTitle === true %}
        <h1>{{ noteTitle  }}</h1>
      {% endif %}

      <div class="header-meta">
        {% if settings.dgShowTags === true and tags %}
          <div class="header-tags">
            {% for tag in tags %}
              {% if tag != 'gardenEntry' and tag !='note' %}
                <a class="tag" onclick="toggleTagSearch(this)">
                  #{{tag}}
                </a>
              {% endif %}
            {% endfor %}
          </div>
        {% endif %}
      </div>
      {% for imp in dynamics.common.header %}
        {% include imp %}
      {% endfor %}
      {% for imp in dynamics.index.header %}
        {% include imp %}
      {% endfor %}
      </header>
      {% for imp in dynamics.common.beforeContent %}
        {% include imp %}
      {% endfor %}
      {% for imp in dynamics.index.beforeContent %}
        {% include imp %}
      {% endfor %}
      {{ content | hideDataview | taggify | link | safe}}
      {% for imp in dynamics.common.afterContent %}
        {% include imp %}
      {% endfor %}
      {% for imp in dynamics.index.afterContent %}
        {% include imp %}
      {% endfor %}
    </main>

    {% if settings.dgShowBacklinks === true or settings.dgShowLocalGraph === true or settings.dgShowToc === true%}
      {%include "components/sidebar.njk" %}
    {%endif%}

    {% if settings.dgLinkPreview === true %}
      {%include "components/linkPreview.njk"%}
    {% endif %}
    {% for imp in dynamics.common.footer %}
      {% include imp %}
    {% endfor %}
    {% for imp in dynamics.index.footer %}
      {% include imp %}
    {% endfor %}
    {%include "components/lucideIcons.njk"%}
    </body>
  </html>
```

---

##### 📄 note.njk
*Path: `src\site\_includes\layouts\note.njk`*  
*Size: 3.45 KB*

```njk
---
permalink: "notes/{{ page.fileSlug | slugify }}/"
---
<!DOCTYPE html>
<html lang="{{ meta.mainLanguage }}">
  <head>
    <title>{% if title %}{{ title }}{% else %}{{ page.fileSlug }}{% endif %}</title>
    {%include "components/pageheader.njk"%}
    {% for imp in dynamics.common.head %}
      {% include imp %}
    {% endfor %}
    {% for imp in dynamics.notes.head %}
      {% include imp %}
    {% endfor %}
  </head>
  <body class="theme-{{meta.baseTheme}} markdown-preview-view markdown-rendered markdown-preview-section {{meta.bodyClasses}}">
    {%include "components/notegrowthhistory.njk"%}
    
    {% if settings.dgShowFileTree !== true %}
      {%include "components/navbar.njk"%}
    {%else%}
      {%include "components/filetree.njk"%}
    {% endif %}

    {% if settings.dgEnableSearch === true %}
      {%include "components/searchContainer.njk"%}
    {% endif %}

    <main class="content cm-s-obsidian {{contentClasses}}">
      <header>
        {% if settings.dgShowInlineTitle === true %}
          <h1 data-note-icon="{% if noteIcon %}{{noteIcon}}{% else %}{{meta.noteIconsSettings.default}}{% endif %}">{% if title %}{{ title }}{% else %}{{ page.fileSlug }}{% endif %}</h1>
        {% endif %}
        <div class="header-meta">
          {% if settings.dgShowTags === true and tags %}
            <div class="header-tags">
              {% for tag in tags %}
                {% if tag != 'gardenEntry' and tag !='note' %}
                  <a class="tag" onclick="toggleTagSearch(this)">
                    #{{tag}}
                  </a>
                {% endif %}
              {% endfor %}
            </div>
          {% endif %}
          {%- if meta.timestampSettings.showCreated or meta.timestampSettings.showUpdated -%}
          <div class="timestamps">
            {%- if meta.timestampSettings.showCreated and created -%}
            <div><i icon-name="calendar-plus"></i> <span class="human-date" data-date="{{created}}"></span></div>
            {%- endif -%}
            {%- if meta.timestampSettings.showUpdated and updated -%}
            <div><i icon-name="calendar-clock"></i> <span class="human-date" data-date="{{updated}}"></span></div>
            {%- endif -%}
          </div>
          {%- endif -%}
        </div>
      {% for imp in dynamics.common.header %}
        {% include imp %}
      {% endfor %}
      {% for imp in dynamics.notes.header %}
        {% include imp %}
      {% endfor %}
      </header>
      {% for imp in dynamics.common.beforeContent %}
        {% include imp %}
      {% endfor %}
      {% for imp in dynamics.notes.beforeContent %}
        {% include imp %}
      {% endfor %}
      {{ content | hideDataview | taggify | link | safe}}
      {% for imp in dynamics.common.afterContent %}
        {% include imp %}
      {% endfor %}
      {% for imp in dynamics.notes.afterContent %}
        {% include imp %}
      {% endfor %}
    </main>

    {% if settings.dgShowBacklinks === true or settings.dgShowLocalGraph === true or settings.dgShowToc === true%}
      {%include "components/sidebar.njk"%}
    {% endif %}

    {% if settings.dgLinkPreview === true %}
      {%include "components/linkPreview.njk"%}
    {% endif %}
    {% include "components/references.njk" %}
    {% include "components/timestamps.njk" %}
    {% for imp in dynamics.common.footer %}
      {% include imp %}
    {% endfor %}
    {% for imp in dynamics.notes.footer %}
      {% include imp %}
    {% endfor %}
    {%include "components/lucideIcons.njk"%}
  </body>
</html>
```

---


#### 📁 Directory: src\site

##### 📄 favicon.svg
*Path: `src\site\favicon.svg`*  
*Size: 3.09 KB*

```svg
<svg id="emoji" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="37.0753" y="36.0532" width="26.8836" height="18.1139" fill="#FFFFFF"/>
    <polygon fill="#EA5A47" stroke="#EA5A47" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="50.2353,23.2 38.1,36 63.5,36"/>
    <path fill="#EA5A47" d="M47.3,26l-6.4,6.0595v-8.5733c0-0.9313,0.7549-1.4162,1.6862-1.4162h3.0276 c0.9313,0,1.6862,0.4849,1.6862,1.4162C47.3,23.4862,47.3,26,47.3,26z"/>
    <rect x="43" y="42" width="6" height="12" fill="#A57939"/>
    <rect x="54" y="42" width="6" height="5" fill="#92D3F5"/>
    <path fill="#B1CC33" d="M41.0059,28.3393c0-3.3123-3.4447-6.0025-7.6937-6.0025c-0.3549,0.0029-0.7095,0.025-1.0622,0.0662 c-1.7995-3.4553-5.7065-5.8554-10.2499-5.8554c-6.2478,0-11.3122,4.5286-11.3122,10.1144c0.0012,0.3692,0.0247,0.738,0.0704,1.1043 C7.9656,28.6665,6,30.8102,6,33.3136c0,3.3123,3.4446,6.0025,7.6936,6.0025c1.6151,0.0139,3.2056-0.4022,4.6137-1.207 c1.8177,1.4766,4.7264,2.4385,8.0154,2.4385c5.5105,0,9.9776-2.6875,9.9776-6.0025c-0.0009-0.2191-0.0214-0.4377-0.0612-0.6531 C39.0357,32.9904,41.0059,30.8453,41.0059,28.3393z"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="46,27 50.2353,23 64,35.0976 64,54 38,54 38,41.5482"/>
    <rect x="43" y="42" width="6" height="12" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <rect x="54" y="42" width="6" height="5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="43.5,23 46.5,23 46.5,26"/>
    <path fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2" d="M31.245,39.3396"/>
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="22.5,54 22.5,46.8269 17.5,42"/>
    <line x1="23.0408" x2="25.885" y1="46.7265" y2="43.7657" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M41.0059,28.3393 c0-3.3123-3.4447-6.0025-7.6937-6.0025c-0.3549,0.0029-0.7095,0.025-1.0622,0.0662c-1.7995-3.4553-5.7065-5.8554-10.2499-5.8554 c-6.2478,0-11.3122,4.5286-11.3122,10.1144c0.0012,0.3692,0.0247,0.738,0.0704,1.1043C7.9656,28.6665,6,30.8102,6,33.3136 c0,3.3123,3.4446,6.0025,7.6936,6.0025c1.6151,0.0139,3.2056-0.4022,4.6137-1.207c1.8177,1.4766,4.7264,2.4385,8.0154,2.4385 c5.5105,0,9.9776-2.6875,9.9776-6.0025c-0.0009-0.2191-0.0214-0.4377-0.0612-0.6531 C39.0357,32.9904,41.0059,30.8453,41.0059,28.3393z"/>
    <line x1="63.5" x2="42.5" y1="36" y2="36" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
</svg>
```

---

##### 📄 feed.njk
*Path: `src\site\feed.njk`*  
*Size: 1.22 KB*

```njk
---json
{
  "permalink": "/feed.xml",
  "eleventyExcludeFromCollections": true
}
---
{%if meta.siteBaseUrl %}<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xml:base="{{ meta.siteBaseUrl }}">
    <title>{{ meta.siteName}}</title>
    <link href="{{ meta.siteBaseUrl }}{{ permalink }}" rel="self" ////>
    <link href="{{ meta.siteBaseUrl }}" ////>
    <updated>{{ collections.notes | getNewestCollectionItemDate | dateToRfc3339 }}</updated>
    <id>{{ meta.siteBaseUrl }}</id>
    {%- for note in collections.note | reverse %}
        <entry>
            <title>
                {% if note.title %}{{ note.title }}
                {% else %}{{ note.fileSlug }}
                {% endif %}
            </title>
            <updated>{%if note.data.updated %}{{ note.data.updated | dateToZulu }}{%else%}{{ note.date | dateToRfc3339 }}{%endif%}</updated>
            <id>{{ meta.siteBaseUrl }}{{note.url | url }}</id>
            <content type="html">
                {{ note.templateContent | hideDataview | taggify | link | htmlToAbsoluteUrls(meta.siteBaseUrl) }}
            </content>
            <link href="{{ meta.siteBaseUrl }}{{note.url | url }}" ////>
        </entry>
    {%- endfor %}
</feed>
{% endif %}
```

---

##### 📄 get-theme.js
*Path: `src\site\get-theme.js`*  
*Size: 1.38 KB*

```js
require("dotenv").config();
const axios = require("axios");
const fs = require("fs");
const crypto = require("crypto");
const {globSync} = require("glob");

const themeCommentRegex = /\/\*[\s\S]*?\*\//g;

async function getTheme() {
  let themeUrl = process.env.THEME;
  if (themeUrl) {
    //https://forum.obsidian.md/t/1-0-theme-migration-guide/42537
    //Not all themes with no legacy mark have a theme.css file, so we need to check for it
    try {
      await axios.get(themeUrl);
    } catch {
      if (themeUrl.indexOf("theme.css") > -1) {
        themeUrl = themeUrl.replace("theme.css", "obsidian.css");
      } else if (themeUrl.indexOf("obsidian.css") > -1) {
        themeUrl = themeUrl.replace("obsidian.css", "theme.css");
      }
    }

    const res = await axios.get(themeUrl);
    try {
      const existing = globSync("src/site/styles/_theme.*.css");
      existing.forEach((file) => {
        fs.rmSync(file);
      });
    } catch {}
    let skippedFirstComment = false;
    const data = res.data.replace(themeCommentRegex, (match) => {
      if (skippedFirstComment) {
        return "";
      } else {
        skippedFirstComment = true;
        return match;
      }
    });
    const hashSum = crypto.createHash("sha256");
    hashSum.update(data);
    const hex = hashSum.digest("hex");
    fs.writeFileSync(`src/site/styles/_theme.${hex.substring(0, 8)}.css`, data);
  }
}

getTheme();
```

---

##### 📄 graph.njk
*Path: `src\site\graph.njk`*  
*Size: 96 bytes*

```njk
---
permalink: /graph.json
eleventyExcludeFromCollections: true
---
{{ graph | jsonify | safe }}
```

---


#### 📁 Directory: src\site\img

##### 📄 default-note-icon.svg
*Path: `src\site\img\default-note-icon.svg`*  
*Size: 479 bytes*

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <line x1="10" y1="9" x2="8" y2="9"></line>
</svg>
```

---

##### 📄 outgoing.svg
*Path: `src\site\img\outgoing.svg`*  
*Size: 315 bytes*

```svg
<?xml version="1.0" encoding="utf-8"?>
<svg xmlns='http://www.w3.org/2000/svg' class='i-external' viewBox='0 0 32 32' width='14' height='14' fill='none' stroke='#888888' stroke-linecap='round' stroke-linejoin='round' stroke-width='9.38%'><path d='M14 9 L3 9 3 29 23 29 23 18 M18 4 L28 4 28 14 M28 4 L14 18'/></svg>
```

---

##### 📄 tree-1.svg
*Path: `src\site\img\tree-1.svg`*  
*Size: 657 bytes*

```svg
<?xml version="1.0" encoding="UTF-8"?>
<svg width="150" height="205" version="1.1" viewBox="0 0 39.688 54.24" xmlns="http://www.w3.org/2000/svg">
 <g transform="translate(-69.7 -93.956)" fill="none" stroke="#008000">
  <path d="m69.7 146.87h39.688" stroke-width="2.6458"/>
  <g transform="translate(-.36252)">
   <path d="m89.544 146.87v-6.794" stroke-width="2.6458"/>
   <path d="m88.77 141.34 6.6272-8.1886" stroke-width="2.3347"/>
   <path d="m89.919 141.46-5.5766-5.8386" stroke-width="2.3102"/>
  </g>
  <circle cx="100.95" cy="126.47" r="6.9136" stroke-width="2.6458"/>
  <circle cx="79.351" cy="130.4" r="5.0854" stroke-width="2.6458"/>
 </g>
</svg>
```

---

##### 📄 tree-2.svg
*Path: `src\site\img\tree-2.svg`*  
*Size: 630 bytes*

```svg
<?xml version="1.0" encoding="UTF-8"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->
<svg width="150" height="205" version="1.1" viewBox="0 0 39.688 54.24" xmlns="http://www.w3.org/2000/svg">
 <g transform="translate(0 -.8262)" fill="none" stroke="#20b2aa">
  <circle cx="33.971" cy="33.263" r="4.79" stroke-width="1.8521"/>
  <circle cx="5.716" cy="33.263" r="4.79" stroke-width="1.8521"/>
  <g stroke-width="2.6458">
   <path d="m6.8958 53.743h25.896"/>
   <path d="m19.844 53.743v-25.896"/>
   <circle cx="19.844" cy="18.683" r="7.0212"/>
   <path d="m6.8958 40.795 12.948 3.237 12.948-3.237"/>
  </g>
 </g>
</svg>
```

---

##### 📄 tree-3.svg
*Path: `src\site\img\tree-3.svg`*  
*Size: 949 bytes*

```svg
<?xml version="1.0" encoding="UTF-8"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->
<svg width="150" height="205" version="1.1" viewBox="0 0 39.688 54.24" xmlns="http://www.w3.org/2000/svg">
 <g fill="none" stroke="#2e8b57">
  <g>
   <circle cx="34.846" cy="31.29" r="3.9152" stroke-width="1.8521"/>
   <circle cx="4.8413" cy="31.29" r="3.9152" stroke-width="1.8521"/>
   <path d="m9.2604 52.775h21.167" stroke-width="2.6458"/>
  </g>
  <path d="m19.844 53.834v-37.849" stroke-width="2.5838"/>
  <circle cx="19.844" cy="7.1851" r="5.739" stroke-width="2.6458"/>
  <path d="m6.6146 37.959 5.2917 5.2917h7.9375" stroke-width="2.6458"/>
  <path d="m33.073 37.959-5.2917 5.2917h-7.9375" stroke-width="2.6458"/>
  <circle cx="31.804" cy="17.056" r="3.9152" stroke-width="1.3229"/>
  <circle cx="7.884" cy="17.056" r="3.9152" stroke-width="1.3229"/>
  <path d="m9.2604 23.406 10.583 2.6458 10.583-2.6458" stroke-width="2.6458"/>
 </g>
</svg>
```

---


#### 📁 Directory: src\site\notes\.obsidian

##### 📄 app.json
*Path: `src\site\notes\.obsidian\app.json`*  
*Size: 2 bytes*

```json
{}
```

---

##### 📄 appearance.json
*Path: `src\site\notes\.obsidian\appearance.json`*  
*Size: 2 bytes*

```json
{}
```

---

##### 📄 core-plugins.json
*Path: `src\site\notes\.obsidian\core-plugins.json`*  
*Size: 658 bytes*

```json
{
  "file-explorer": true,
  "global-search": true,
  "switcher": true,
  "graph": true,
  "backlink": true,
  "canvas": true,
  "outgoing-link": true,
  "tag-pane": true,
  "properties": false,
  "page-preview": true,
  "daily-notes": true,
  "templates": true,
  "note-composer": true,
  "command-palette": true,
  "slash-command": false,
  "editor-status": true,
  "bookmarks": true,
  "markdown-importer": false,
  "zk-prefixer": false,
  "random-note": false,
  "outline": true,
  "word-count": true,
  "slides": false,
  "audio-recorder": false,
  "workspaces": false,
  "file-recovery": true,
  "publish": false,
  "sync": true,
  "webviewer": false
}
```

---


#### 📁 Directory: src\site\notes\.obsidian\plugins\auto-note-mover

##### 📄 main.js
*Path: `src\site\notes\.obsidian\plugins\auto-note-mover\main.js`*  
*Size: 84.67 KB*

```js
/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// main.ts
__export(exports, {
  default: () => AutoNoteMover
});
var import_obsidian6 = __toModule(require("obsidian"));

// settings/settings.ts
var import_obsidian5 = __toModule(require("obsidian"));

// suggests/file-suggest.ts
var import_obsidian2 = __toModule(require("obsidian"));

// suggests/suggest.ts
var import_obsidian = __toModule(require("obsidian"));

// node_modules/@popperjs/core/lib/enums.js
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}

// node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};

// node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// node_modules/@popperjs/core/lib/utils/math.js
var max = Math.max;
var min = Math.min;
var round = Math.round;

// node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (isHTMLElement(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth;
    if (offsetWidth > 0) {
      scaleX = round(rect.width) / offsetWidth || 1;
    }
    if (offsetHeight > 0) {
      scaleY = round(rect.height) / offsetHeight || 1;
    }
  }
  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}

// node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

// node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}

// node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
}

// node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
  var isIE = navigator.userAgent.indexOf("Trident") !== -1;
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNod

... (Content truncated - file too large)
```

---


#### 📁 Directory: src\site\notes\.obsidian\plugins\better-export-pdf

##### 📄 main.js
*Path: `src\site\notes\.obsidian\plugins\better-export-pdf\main.js`*  
*Size: 864.58 KB*

```js
/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js
var require_cjs = __commonJS({
  "node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"(exports, module2) {
    "use strict";
    var isMergeableObject = function isMergeableObject2(value) {
      return isNonNullObject(value) && !isSpecial(value);
    };
    function isNonNullObject(value) {
      return !!value && typeof value === "object";
    }
    function isSpecial(value) {
      var stringValue = Object.prototype.toString.call(value);
      return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
    }
    var canUseSymbol = typeof Symbol === "function" && Symbol.for;
    var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
    function isReactElement(value) {
      return value.$$typeof === REACT_ELEMENT_TYPE;
    }
    function emptyTarget(val) {
      return Array.isArray(val) ? [] : {};
    }
    function cloneUnlessOtherwiseSpecified(value, options) {
      return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
    }
    function defaultArrayMerge(target, source, options) {
      return target.concat(source).map(function(element) {
        return cloneUnlessOtherwiseSpecified(element, options);
      });
    }
    function getMergeFunction(key, options) {
      if (!options.customMerge) {
        return deepmerge;
      }
      var customMerge = options.customMerge(key);
      return typeof customMerge === "function" ? customMerge : deepmerge;
    }
    function getEnumerableOwnPropertySymbols(target) {
      return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
        return Object.propertyIsEnumerable.call(target, symbol);
      }) : [];
    }
    function getKeys(target) {
      return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
    }
    function propertyIsOnObject(object, property) {
      try {
        return property in object;
      } catch (_) {
        return false;
      }
    }
    function propertyIsUnsafe(target, key) {
      return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
    }
    function mergeObject(target, source, options) {
      var destination = {};
      if (options.isMergeableObject(target)) {
        getKeys(target).forEach(function(key) {
          destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
        });
      }
      getKeys(source).forEach(function(key) {
        if (propertyIsUnsafe(target, key)) {
          return;
        }
        if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
          destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
        } else {
          destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
        }
      });
      return destination;
    }
    function deepmerge(target, source, options) {
      options = options || {};
      options.arrayMerge = options.arrayMerge || defaultArrayMerge;
      options.isMergeableObject = options.isMergeableObject || isMergeableObject;
      options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
      var sourceIsArray = Array.isArray(source);
      var targetIsArray = Array.isArray(target);
      var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
      if (!sourceAndTargetTypesMatch) {
        return cloneUnlessOtherwiseSpecified(source, options);
      } else if (sourceIsArray) {
        return options.arrayMerge(target, source, options);
      } else {
        return mergeObject(target, source, options);
      }
    }
    deepmerge.all = function deepmergeAll(array, options) {
      if (!Array.isArray(array)) {
        throw new Error("first argument should be an array");
      }
      return array.reduce(function(prev, next) {
        return deepmerge(prev, next, options);
      }, {});
    };
    var deepmerge_1 = deepmerge;
    module2.exports = deepmerge_1;
  }
});

// node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/utils/common.js
var require_common = __commonJS({
  "node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/utils/common.js"(exports) {
    "use strict";
    var TYPED_OK = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Int32Array !== "undefined";
    function _has(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }
    exports.assign = function(obj) {
      var sources = Array.prototype.slice.call(arguments, 1);
      while (sources.length) {
        var source = sources.shift();
        if (!source) {
          continue;
        }
        if (typeof source !== "object") {
          throw new TypeError(source + "must be non-object");
        }
        for (var p in source) {
          if (_has(source, p)) {
            obj[p] = source[p];
          }
        }
      }
      return obj;
    };
    exports.shrinkBuf = function(buf, size) {
      if (buf.length === size) {
        return buf;
      }
      if (buf.subarray) {
        return buf.subarray(0, size);
      }
      buf.length = size;
      return buf;
    };
    var fnTyped = {
      arraySet: function(dest, src, src_offs, len, dest_offs) {
        if (src.subarray && dest.subarray) {
          dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
          return;
        }
        for (var i = 0; i < len; i++) {
          dest[dest_offs + i] = src[src_offs + i];
        }
      },
      // Join array of chunks to single array.
      flattenChunks: function(chunks) {
        var i, l, len, pos, chunk, result;
        len = 0;
        for (i = 0, l = chunks.length; i < l; i++) {
          len += chunks[i].length;
        }
        result = new Uint8Array(len);
        pos = 0;
        for (i = 0, l = chunks.length; i < l; i++) {
          chunk = chunks[i];
          result.set(chunk, pos);
          pos += chunk.length;
        }
        return result;
      }
    };
    var fnUntyped = {
      arraySet: function(dest, src, src_offs, len, dest_offs) {
        for (var i = 0; i < len; i++) {
          dest[dest_offs + i] = src[src_offs + i];
        }
      },
      // Join array of chunks to single array.
      flattenChunks: function(chunks) {
        return [].concat.apply([], chunks);
      }
    };
    exports.setTyped = function(on) {
      if (on) {
        exports.Buf8 = Uint8Array;
        exports.Buf16 = Uint16Array;
        exports.Buf32 = Int32Array;
        exports.assign(exports, fnTyped);
      } else {
        exports.Buf8 = Array;
        exports.Buf16 = Array;
        exports.Buf32 = Array;
        exports.assign(exports, fnUntyped);
      }
    };
    exports.setTyped(TYPED_OK);
  }
});

// node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/trees.js
var require_trees = __commonJS({
  "node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/trees.js"(exports) {
    "use strict";
    var utils = require_common();
    var Z_FIXED = 4;
    var Z_BINARY = 0;
    var Z_TEXT = 1;
    var Z_UNKNOWN = 2;
    function zero(buf) {
      var len = buf.length;
      while (--len >= 0) {
        buf[len] = 0;
      }
    }
    var STORED_BLOCK = 0;
    var STATIC_TREES = 1;
    var DYN_TREES = 2;
    var MIN_MATCH = 3;
    var MAX_MATCH = 258;
    var LENGTH_CODES = 29;
    var LITERALS = 256;
    var L_CODES = LITERALS + 1 + LENGTH_CODES;
    var D_CODES = 30;
    var BL_CODES = 19;
    var HEAP_SIZE = 2 * L_CODES + 1;
    var MAX_BITS = 15;
    var Buf_size = 16;
    var MAX_BL_BITS = 7;
    var END_BLOCK = 256;
    var REP_3_6 = 16;
    var REPZ_3_10 = 17;
    var REPZ_11_138 = 18;
    var extra_lbits = (
      /* extra bits for each length code */
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]
    );
    var extra_dbits = (
      /* extra bits for each distance code */
      [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]
    );
    var extra_blbits = (
      /* extra bits for each bit length code */
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]
    );
    var bl_o

... (Content truncated - file too large)
```

---


#### 📁 Directory: src\site\notes\.obsidian\plugins\copilot

##### 📄 main.js
*Path: `src\site\notes\.obsidian\plugins\copilot\main.js`*  
*Size: 3.12 MB*

```js
/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var g8t=Object.create;var M$=Object.defineProperty;var y8t=Object.getOwnPropertyDescriptor;var b8t=Object.getOwnPropertyNames;var _8t=Object.getPrototypeOf,v8t=Object.prototype.hasOwnProperty;var w8t=(e,t,r)=>t in e?M$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var C=(e,t)=>()=>(e&&(t=e(e=0)),t);var b=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Yd=(e,t)=>{for(var r in t)M$(e,r,{get:t[r],enumerable:!0})},Z1e=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of b8t(t))!v8t.call(e,o)&&o!==r&&M$(e,o,{get:()=>t[o],enumerable:!(n=y8t(t,o))||n.enumerable});return e};var B=(e,t,r)=>(r=e!=null?g8t(_8t(e)):{},Z1e(t||!e||!e.__esModule?M$(r,"default",{value:e,enumerable:!0}):r,e)),sl=e=>Z1e(M$({},"__esModule",{value:!0}),e);var Ll=(e,t,r)=>w8t(e,typeof t!="symbol"?t+"":t,r);function x8t(e){eDe=e}function P6(){return eDe}function He(e,t){let r=P6(),n=T6({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,r,r===CD?void 0:CD].filter(o=>!!o)});e.common.issues.push(n)}function M6(e,t,r,n){if(r==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}function tDe(e,t,r,n,o){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!o)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?o.call(e,r):o?o.value=r:t.set(e,r),r}function br(e){if(!e)return{};let{errorMap:t,invalid_type_error:r,required_error:n,description:o}=e;if(t&&(r||n))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:o}:{errorMap:(a,s)=>{var u,l;let{message:c}=e;return a.code==="invalid_enum_value"?{message:c??s.defaultError}:typeof s.data>"u"?{message:(u=c??n)!==null&&u!==void 0?u:s.defaultError}:a.code!=="invalid_type"?{message:s.defaultError}:{message:(l=c??r)!==null&&l!==void 0?l:s.defaultError}},description:o}}function nDe(e){let t="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return e.precision?t=`${t}\\.\\d{${e.precision}}`:e.precision==null&&(t=`${t}(\\.\\d+)?`),t}function q8t(e){return new RegExp(`^${nDe(e)}$`)}function oDe(e){let t=`${rDe}T${nDe(e)}`,r=[];return r.push(e.local?"Z?":"Z"),e.offset&&r.push("([+-]\\d{2}:?\\d{2})"),t=`${t}(${r.join("|")})`,new RegExp(`^${t}$`)}function U8t(e,t){return!!((t==="v4"||!t)&&j8t.test(e)||(t==="v6"||!t)&&L8t.test(e))}function z8t(e,t){if(!I8t.test(e))return!1;try{let[r]=e.split("."),n=r.replace(/-/g,"+").replace(/_/g,"/").padEnd(r.length+(4-r.length%4)%4,"="),o=JSON.parse(atob(n));return!(typeof o!="object"||o===null||!o.typ||!o.alg||t&&o.alg!==t)}catch{return!1}}function H8t(e,t){return!!((t==="v4"||!t)&&N8t.test(e)||(t==="v6"||!t)&&F8t.test(e))}function V8t(e,t){let r=(e.toString().split(".")[1]||"").length,n=(t.toString().split(".")[1]||"").length,o=r>n?r:n,i=parseInt(e.toFixed(o).replace(".","")),a=parseInt(t.toFixed(o).replace(".",""));return i%a/Math.pow(10,o)}function SD(e){if(e instanceof Qd){let t={};for(let r in e.shape){let n=e.shape[r];t[r]=Xd.create(SD(n))}return new Qd({...e._def,shape:()=>t})}else return e instanceof bS?new bS({...e._def,type:SD(e.element)}):e instanceof Xd?Xd.create(SD(e.unwrap())):e instanceof ny?ny.create(SD(e.unwrap())):e instanceof ry?ry.create(e.items.map(t=>SD(t))):e}function $ae(e,t){let r=gS(e),n=gS(t);if(e===t)return{valid:!0,data:e};if(r===Qe.object&&n===Qe.object){let o=xn.objectKeys(t),i=xn.objectKeys(e).filter(s=>o.indexOf(s)!==-1),a={...e,...t};for(let s of i){let u=$ae(e[s],t[s]);if(!u.valid)return{valid:!1};a[s]=u.data}return{valid:!0,data:a}}else if(r===Qe.array&&n===Qe.array){if(e.length!==t.length)return{valid:!1};let o=[];for(let i=0;i<e.length;i++){let a=e[i],s=t[i],u=$ae(a,s);if(!u.valid)return{valid:!1};o.push(u.data)}return{valid:!0,data:o}}else return r===Qe.date&&n===Qe.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}function iDe(e,t){return new RM({values:e,typeName:re.ZodEnum,...br(t)})}function aDe(e,t={},r){return e?fO.create().superRefine((n,o)=>{var i,a;if(!e(n)){let s=typeof t=="function"?t(n):typeof t=="string"?{message:t}:t,u=(a=(i=s.fatal)!==null&&i!==void 0?i:r)!==null&&a!==void 0?a:!0,l=typeof s=="string"?{message:s}:s;o.addIssue({code:"custom",...l,fatal:u})}}):fO.create()}var xn,Fae,Qe,gS,ve,S8t,Qf,CD,eDe,T6,C8t,Ic,zt,xD,yd,kae,Bae,wM,R$,mt,I$,A$,Gp,X1e,_r,O8t,E8t,P8t,T8t,M8t,I8t,A8t,R8t,D8t,Lae,j8t,N8t,L8t,F8t,k8t,B8t,rDe,$8t,dO,SM,xM,CM,OM,OD,EM,PM,fO,yS,Dm,ED,bS,Qd,TM,mS,I6,MM,ry,A6,PD,TD,R6,IM,AM,RM,DM,pO,ep,Xd,ny,jM,NM,MD,W8t,D$,j$,LM,J8t,re,G8t,sDe,uDe,K8t,Y8t,lDe,Z8t,X8t,Q8t,eHt,tHt,rHt,nHt,oHt,iHt,aHt,sHt,uHt,lHt,cHt,dHt,fHt,pHt,hHt,mHt,gHt,yHt,bHt,_Ht,vHt,Q1e,wHt,SHt,xHt,CHt,OHt,EHt,PHt,THt,MHt,Tr,bd=C(()=>{(function(e){e.assertEqual=o=>o;function t(o){}e.assertIs=t;function r(o){throw new Error}e.assertNever=r,e.arrayToEnum=o=>{let i={};for(let a of o)i[a]=a;return i},e.getValidEnumValues=o=>{let i=e.objectKeys(o).filter(s=>typeof o[o[s]]!="number"),a={};for(let s of i)a[s]=o[s];return e.objectValues(a)},e.objectValues=o=>e.objectKeys(o).map(function(i){return o[i]}),e.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{let i=[];for(let a in o)Object.prototype.hasOwnProperty.call(o,a)&&i.push(a);return i},e.find=(o,i)=>{for(let a of o)if(i(a))return a},e.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function n(o,i=" | "){return o.map(a=>typeof a=="string"?`'${a}'`:a).join(i)}e.joinValues=n,e.jsonStringifyReplacer=(o,i)=>typeof i=="bigint"?i.toString():i})(xn||(xn={}));(function(e){e.mergeShapes=(t,r)=>({...t,...r})})(Fae||(Fae={}));Qe=xn.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),gS=e=>{switch(typeof e){case"undefined":return Qe.undefined;case"string":return Qe.string;case"number":return isNaN(e)?Qe.nan:Qe.number;case"boolean":return Qe.boolean;case"function":return Qe.function;case"bigint":return Qe.bigint;case"symbol":return Qe.symbol;case"object":return Array.isArray(e)?Qe.array:e===null?Qe.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?Qe.promise:typeof Map<"u"&&e instanceof Map?Qe.map:typeof Set<"u"&&e instanceof Set?Qe.set:typeof Date<"u"&&e instanceof Date?Qe.date:Qe.object;default:return Qe.unknown}},ve=xn.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),S8t=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:"),Qf=class e extends Error{get errors(){return this.issues}constructor(t){super(),this.issues=[],this.addIssue=n=>{this.issues=[...this.issues,n]},this.addIssues=(n=[])=>{this.issues=[...this.issues,...n]};let r=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,r):this.__proto__=r,this.name="ZodError",this.issues=t}format(t){let r=t||function(i){return i.message},n={_errors:[]},o=i=>{for(let a of i.issues)if(a.code==="invalid_union")a.unionErrors.map(o);else if(a.code==="invalid_return_type")o(a.returnTypeError);else if(a.code==="invalid_arguments")o(a.argumentsError);else if(a.path.length===0)n._errors.push(r(a));else{let s=n,u=0;for(;u<a.path.length;){let l=a.path[u];u===a.path.length-1?(s[l]=s[l]||{_errors:[]},s[l]._errors.push(r(a))):s[l]=s[l]||{_errors:[]},s=s[l],u++}}};return o(this),n}static assert(t){if(!(t instanceof e))throw new Error(`Not a ZodError: ${t}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,xn.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=r=>r.message){let r={},n=[];for(let o of this.issues)o.path.length>0?(r[o.path[0]]=r[o.path[0]]||[],r[o.path[0]].push(t(o))):n.push(t(o));return{formErrors:n,fieldErrors:r}}get formErrors(){return this.flatten()}};Qf.create=e=>new Qf(e);CD=(e,t)=>{let r;switch(e.code){case ve.invalid_type:e.received===Qe.undefined?r="Required":r=`Expected ${e.expected}, received ${e.received}`;break;case ve.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(e.expected,xn.jsonStringifyReplacer)}`;break;case ve.unrecognized_keys:r=`Unrecognized key(s) in object: ${xn.joinValues(e.keys,", ")}`;break;case ve.invalid_union:r="Invalid input";break;case ve.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${xn.joinValues(e.options)}`;break;case ve.invalid_enum_value:r=`Invalid enum value. Expected ${xn.joinValues(e.options)}, received '${e.received}'`;break;case ve.invalid_arguments:r="Invalid function arguments";break;case ve.invalid_return_type:r="Invalid function return type";break;case ve.invalid_date:r="Invalid date";break;case ve.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(r=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(r=`${r} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?r=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?r=`Invalid input: must end with "${e.validation.endsWith}"`:xn.assertNever(e.validation):e.validation!=="regex"?r=`Invalid ${e.validation}`:r="Invalid";break;case ve.too_small:e.type==="array"?r=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"

... (Content truncated - file too large)
```

---


#### 📁 Directory: src\site\notes\.obsidian\plugins\dataview

##### 📄 main.js
*Path: `src\site\notes\.obsidian\plugins\dataview\main.js`*  
*Size: 1.24 MB*

```js
'use strict';

var obsidian = require('obsidian');
var state = require('@codemirror/state');
var view = require('@codemirror/view');
var language = require('@codemirror/language');

// these aren't really private, but nor are they really useful to document

/**
 * @private
 */
class LuxonError extends Error {}

/**
 * @private
 */
class InvalidDateTimeError extends LuxonError {
  constructor(reason) {
    super(`Invalid DateTime: ${reason.toMessage()}`);
  }
}

/**
 * @private
 */
class InvalidIntervalError extends LuxonError {
  constructor(reason) {
    super(`Invalid Interval: ${reason.toMessage()}`);
  }
}

/**
 * @private
 */
class InvalidDurationError extends LuxonError {
  constructor(reason) {
    super(`Invalid Duration: ${reason.toMessage()}`);
  }
}

/**
 * @private
 */
class ConflictingSpecificationError extends LuxonError {}

/**
 * @private
 */
class InvalidUnitError extends LuxonError {
  constructor(unit) {
    super(`Invalid unit ${unit}`);
  }
}

/**
 * @private
 */
class InvalidArgumentError extends LuxonError {}

/**
 * @private
 */
class ZoneIsAbstractError extends LuxonError {
  constructor() {
    super("Zone is an abstract class");
  }
}

/**
 * @private
 */

const n$1 = "numeric",
  s$2 = "short",
  l$2 = "long";

const DATE_SHORT = {
  year: n$1,
  month: n$1,
  day: n$1,
};

const DATE_MED = {
  year: n$1,
  month: s$2,
  day: n$1,
};

const DATE_MED_WITH_WEEKDAY = {
  year: n$1,
  month: s$2,
  day: n$1,
  weekday: s$2,
};

const DATE_FULL = {
  year: n$1,
  month: l$2,
  day: n$1,
};

const DATE_HUGE = {
  year: n$1,
  month: l$2,
  day: n$1,
  weekday: l$2,
};

const TIME_SIMPLE = {
  hour: n$1,
  minute: n$1,
};

const TIME_WITH_SECONDS = {
  hour: n$1,
  minute: n$1,
  second: n$1,
};

const TIME_WITH_SHORT_OFFSET = {
  hour: n$1,
  minute: n$1,
  second: n$1,
  timeZoneName: s$2,
};

const TIME_WITH_LONG_OFFSET = {
  hour: n$1,
  minute: n$1,
  second: n$1,
  timeZoneName: l$2,
};

const TIME_24_SIMPLE = {
  hour: n$1,
  minute: n$1,
  hourCycle: "h23",
};

const TIME_24_WITH_SECONDS = {
  hour: n$1,
  minute: n$1,
  second: n$1,
  hourCycle: "h23",
};

const TIME_24_WITH_SHORT_OFFSET = {
  hour: n$1,
  minute: n$1,
  second: n$1,
  hourCycle: "h23",
  timeZoneName: s$2,
};

const TIME_24_WITH_LONG_OFFSET = {
  hour: n$1,
  minute: n$1,
  second: n$1,
  hourCycle: "h23",
  timeZoneName: l$2,
};

const DATETIME_SHORT = {
  year: n$1,
  month: n$1,
  day: n$1,
  hour: n$1,
  minute: n$1,
};

const DATETIME_SHORT_WITH_SECONDS = {
  year: n$1,
  month: n$1,
  day: n$1,
  hour: n$1,
  minute: n$1,
  second: n$1,
};

const DATETIME_MED = {
  year: n$1,
  month: s$2,
  day: n$1,
  hour: n$1,
  minute: n$1,
};

const DATETIME_MED_WITH_SECONDS = {
  year: n$1,
  month: s$2,
  day: n$1,
  hour: n$1,
  minute: n$1,
  second: n$1,
};

const DATETIME_MED_WITH_WEEKDAY = {
  year: n$1,
  month: s$2,
  day: n$1,
  weekday: s$2,
  hour: n$1,
  minute: n$1,
};

const DATETIME_FULL = {
  year: n$1,
  month: l$2,
  day: n$1,
  hour: n$1,
  minute: n$1,
  timeZoneName: s$2,
};

const DATETIME_FULL_WITH_SECONDS = {
  year: n$1,
  month: l$2,
  day: n$1,
  hour: n$1,
  minute: n$1,
  second: n$1,
  timeZoneName: s$2,
};

const DATETIME_HUGE = {
  year: n$1,
  month: l$2,
  day: n$1,
  weekday: l$2,
  hour: n$1,
  minute: n$1,
  timeZoneName: l$2,
};

const DATETIME_HUGE_WITH_SECONDS = {
  year: n$1,
  month: l$2,
  day: n$1,
  weekday: l$2,
  hour: n$1,
  minute: n$1,
  second: n$1,
  timeZoneName: l$2,
};

/**
 * @interface
 */
class Zone {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new ZoneIsAbstractError();
  }

  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new ZoneIsAbstractError();
  }

  get ianaName() {
    return this.name;
  }

  /**
   * Returns whether the offset is known to be fixed for the whole year.
   * @abstract
   * @type {boolean}
   */
  get isUniversal() {
    throw new ZoneIsAbstractError();
  }

  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  offsetName(ts, opts) {
    throw new ZoneIsAbstractError();
  }

  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(ts, format) {
    throw new ZoneIsAbstractError();
  }

  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(ts) {
    throw new ZoneIsAbstractError();
  }

  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(otherZone) {
    throw new ZoneIsAbstractError();
  }

  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new ZoneIsAbstractError();
  }
}

let singleton$1 = null;

/**
 * Represents the local zone for this JavaScript environment.
 * @implements {Zone}
 */
class SystemZone extends Zone {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    if (singleton$1 === null) {
      singleton$1 = new SystemZone();
    }
    return singleton$1;
  }

  /** @override **/
  get type() {
    return "system";
  }

  /** @override **/
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

  /** @override **/
  get isUniversal() {
    return false;
  }

  /** @override **/
  offsetName(ts, { format, locale }) {
    return parseZoneInfo(ts, format, locale);
  }

  /** @override **/
  formatOffset(ts, format) {
    return formatOffset(this.offset(ts), format);
  }

  /** @override **/
  offset(ts) {
    return -new Date(ts).getTimezoneOffset();
  }

  /** @override **/
  equals(otherZone) {
    return otherZone.type === "system";
  }

  /** @override **/
  get isValid() {
    return true;
  }
}

let dtfCache = {};
function makeDTF(zone) {
  if (!dtfCache[zone]) {
    dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      era: "short",
    });
  }
  return dtfCache[zone];
}

const typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6,
};

function hackyOffset(dtf, date) {
  const formatted = dtf.format(date).replace(/\u200E/g, ""),
    parsed = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(formatted),
    [, fMonth, fDay, fYear, fadOrBc, fHour, fMinute, fSecond] = parsed;
  return [fYear, fMonth, fDay, fadOrBc, fHour, fMinute, fSecond];
}

function partsOffset(dtf, date) {
  const formatted = dtf.formatToParts(date);
  const filled = [];
  for (let i = 0; i < formatted.length; i++) {
    const { type, value } = formatted[i];
    const pos = typeToPos[type];

    if (type === "era") {
      filled[pos] = value;
    } else if (!isUndefined(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }
  return filled;
}

let ianaZoneCache = {};
/**
 * A zone identified by an IANA identifier, like America/New_York
 * @implements {Zone}
 */
class IANAZone extends Zone {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(name) {
    if (!ianaZoneCache[name]) {
      ianaZoneCache[name] = new IANAZone(name);
    }
    return ianaZoneCache[name];
  }

  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    ianaZoneCache = {};
    dtfCache = {};
  }

  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @deprecated This method returns false for some valid IANA names. Use isValidZone instead.
   * @return {boolean}
   */
  static isValidSpecifier(s) {
    return this.isValidZone(s);
  }

  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  static isValidZone(zone) {
    if (!zone) {
      return false;
    }
    try {
      new Intl.DateTimeFormat("en-US", { timeZone: zone }).format();
      return true;
    } catch (e) {
      return false;
    }
  }

  constructor(name) {
    super();
    /** @private **/
    this.zoneName = name;
    /** @private **/
    this.valid = IANAZone.isValidZone(name);
  }

  /** @override **/
  get type() {
    return "iana";
  }

  /** @override **/
  get name() {
    return this.zoneName;
  }

  /** @override **/
  get isUniversal() {
    return false;
  }

  /** @override **/
  offsetName(ts, { format, locale }) {
    return parseZoneInfo(ts, format, locale, this.name);
  }

  /** @override **/
  formatOffset(ts, format) {
    return formatOffset(this.offset(ts), format);

... (Content truncated - file too large)
```

---


#### 📁 Directory: src\site\notes\.obsidian\plugins\digitalgarden

##### 📄 data.json
*Path: `src\site\notes\.obsidian\plugins\digitalgarden\data.json`*  
*Size: 1.54 KB*

```json
{
  "githubRepo": "PVP-Portifolio-main",
  "githubToken": "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",
  "githubUserName": "pvthemaster2",
  "gardenBaseUrl": "pvpportifolio.netlify.app/",
  "prHistory": [
    "https://github.com/PvTheMaster2/OBSIDIAN-TCC-R00/pull/1"
  ],
  "baseTheme": "dark",
  "theme": "{\"name\":\"Zen\",\"author\":\"laughmaker\",\"repo\":\"laughmaker/Zen\",\"screenshot\":\"cover.png\",\"modes\":[\"dark\",\"light\"],\"cssUrl\":\"https://raw.githubusercontent.com/laughmaker/Zen/HEAD/theme.css\"}",
  "faviconPath": "",
  "useFullResolutionImages": false,
  "noteSettingsIsInitialized": true,
  "siteName": "Tratado_DeRose",
  "mainLanguage": "en",
  "slugifyEnabled": false,
  "noteIconKey": "dg-note-icon",
  "defaultNoteIcon": "",
  "showNoteIconOnTitle": false,
  "showNoteIconInFileTree": true,
  "showNoteIconOnInternalLink": true,
  "showNoteIconOnBackLink": false,
  "showCreatedTimestamp": false,
  "createdTimestampKey": "",
  "showUpdatedTimestamp": false,
  "updatedTimestampKey": "",
  "timestampFormat": "MMM dd, yyyy h:mm a",
  "styleSettingsCss": "",
  "styleSettingsBodyClasses": "",
  "pathRewriteRules": "",
  "customFilters": [],
  "contentClassesKey": "dg-content-classes",
  "defaultNoteSettings": {
    "dgHomeLink": true,
    "dgPassFrontmatter": false,
    "dgShowBacklinks": true,
    "dgShowLocalGraph": true,
    "dgShowInlineTitle": true,
    "dgShowFileTree": true,
    "dgEnableSearch": true,
    "dgShowToc": true,
    "dgLinkPreview": false,
    "dgShowTags": true
  }
}
```

---

##### 📄 main.js
*Path: `src\site\notes\.obsidian\plugins\digitalgarden\main.js`*  
*Size: 1.00 MB*

```js
/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all3) => {
  for (var name in all3)
    __defProp(target, name, { get: all3[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/escape-string-regexp/index.js
var require_escape_string_regexp = __commonJS({
  "node_modules/escape-string-regexp/index.js"(exports, module2) {
    "use strict";
    module2.exports = (string) => {
      if (typeof string !== "string") {
        throw new TypeError("Expected a string");
      }
      return string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
    };
  }
});

// node_modules/lodash.deburr/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.deburr/index.js"(exports, module2) {
    var INFINITY = 1 / 0;
    var symbolTag = "[object Symbol]";
    var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    var rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23";
    var rsComboSymbolsRange = "\\u20d0-\\u20f0";
    var rsCombo = "[" + rsComboMarksRange + rsComboSymbolsRange + "]";
    var reComboMark = RegExp(rsCombo, "g");
    var deburredLetters = {
      // Latin-1 Supplement block.
      "\xC0": "A",
      "\xC1": "A",
      "\xC2": "A",
      "\xC3": "A",
      "\xC4": "A",
      "\xC5": "A",
      "\xE0": "a",
      "\xE1": "a",
      "\xE2": "a",
      "\xE3": "a",
      "\xE4": "a",
      "\xE5": "a",
      "\xC7": "C",
      "\xE7": "c",
      "\xD0": "D",
      "\xF0": "d",
      "\xC8": "E",
      "\xC9": "E",
      "\xCA": "E",
      "\xCB": "E",
      "\xE8": "e",
      "\xE9": "e",
      "\xEA": "e",
      "\xEB": "e",
      "\xCC": "I",
      "\xCD": "I",
      "\xCE": "I",
      "\xCF": "I",
      "\xEC": "i",
      "\xED": "i",
      "\xEE": "i",
      "\xEF": "i",
      "\xD1": "N",
      "\xF1": "n",
      "\xD2": "O",
      "\xD3": "O",
      "\xD4": "O",
      "\xD5": "O",
      "\xD6": "O",
      "\xD8": "O",
      "\xF2": "o",
      "\xF3": "o",
      "\xF4": "o",
      "\xF5": "o",
      "\xF6": "o",
      "\xF8": "o",
      "\xD9": "U",
      "\xDA": "U",
      "\xDB": "U",
      "\xDC": "U",
      "\xF9": "u",
      "\xFA": "u",
      "\xFB": "u",
      "\xFC": "u",
      "\xDD": "Y",
      "\xFD": "y",
      "\xFF": "y",
      "\xC6": "Ae",
      "\xE6": "ae",
      "\xDE": "Th",
      "\xFE": "th",
      "\xDF": "ss",
      // Latin Extended-A block.
      "\u0100": "A",
      "\u0102": "A",
      "\u0104": "A",
      "\u0101": "a",
      "\u0103": "a",
      "\u0105": "a",
      "\u0106": "C",
      "\u0108": "C",
      "\u010A": "C",
      "\u010C": "C",
      "\u0107": "c",
      "\u0109": "c",
      "\u010B": "c",
      "\u010D": "c",
      "\u010E": "D",
      "\u0110": "D",
      "\u010F": "d",
      "\u0111": "d",
      "\u0112": "E",
      "\u0114": "E",
      "\u0116": "E",
      "\u0118": "E",
      "\u011A": "E",
      "\u0113": "e",
      "\u0115": "e",
      "\u0117": "e",
      "\u0119": "e",
      "\u011B": "e",
      "\u011C": "G",
      "\u011E": "G",
      "\u0120": "G",
      "\u0122": "G",
      "\u011D": "g",
      "\u011F": "g",
      "\u0121": "g",
      "\u0123": "g",
      "\u0124": "H",
      "\u0126": "H",
      "\u0125": "h",
      "\u0127": "h",
      "\u0128": "I",
      "\u012A": "I",
      "\u012C": "I",
      "\u012E": "I",
      "\u0130": "I",
      "\u0129": "i",
      "\u012B": "i",
      "\u012D": "i",
      "\u012F": "i",
      "\u0131": "i",
      "\u0134": "J",
      "\u0135": "j",
      "\u0136": "K",
      "\u0137": "k",
      "\u0138": "k",
      "\u0139": "L",
      "\u013B": "L",
      "\u013D": "L",
      "\u013F": "L",
      "\u0141": "L",
      "\u013A": "l",
      "\u013C": "l",
      "\u013E": "l",
      "\u0140": "l",
      "\u0142": "l",
      "\u0143": "N",
      "\u0145": "N",
      "\u0147": "N",
      "\u014A": "N",
      "\u0144": "n",
      "\u0146": "n",
      "\u0148": "n",
      "\u014B": "n",
      "\u014C": "O",
      "\u014E": "O",
      "\u0150": "O",
      "\u014D": "o",
      "\u014F": "o",
      "\u0151": "o",
      "\u0154": "R",
      "\u0156": "R",
      "\u0158": "R",
      "\u0155": "r",
      "\u0157": "r",
      "\u0159": "r",
      "\u015A": "S",
      "\u015C": "S",
      "\u015E": "S",
      "\u0160": "S",
      "\u015B": "s",
      "\u015D": "s",
      "\u015F": "s",
      "\u0161": "s",
      "\u0162": "T",
      "\u0164": "T",
      "\u0166": "T",
      "\u0163": "t",
      "\u0165": "t",
      "\u0167": "t",
      "\u0168": "U",
      "\u016A": "U",
      "\u016C": "U",
      "\u016E": "U",
      "\u0170": "U",
      "\u0172": "U",
      "\u0169": "u",
      "\u016B": "u",
      "\u016D": "u",
      "\u016F": "u",
      "\u0171": "u",
      "\u0173": "u",
      "\u0174": "W",
      "\u0175": "w",
      "\u0176": "Y",
      "\u0177": "y",
      "\u0178": "Y",
      "\u0179": "Z",
      "\u017B": "Z",
      "\u017D": "Z",
      "\u017A": "z",
      "\u017C": "z",
      "\u017E": "z",
      "\u0132": "IJ",
      "\u0133": "ij",
      "\u0152": "Oe",
      "\u0153": "oe",
      "\u0149": "'n",
      "\u017F": "ss"
    };
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    function basePropertyOf(object) {
      return function(key) {
        return object == null ? void 0 : object[key];
      };
    }
    var deburrLetter = basePropertyOf(deburredLetters);
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var Symbol2 = root.Symbol;
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toString3(value) {
      return value == null ? "" : baseToString(value);
    }
    function deburr(string) {
      string = toString3(string);
      return string && string.replace(reLatin,

... (Content truncated - file too large)
```

---


#### 📁 Directory: src\site\notes\.obsidian\plugins\excalibrain

##### 📄 main.js
*Path: `src\site\notes\.obsidian\plugins\excalibrain\main.js`*  
*Size: 382.11 KB*

```js
"use strict";var e,t,i,n=require("obsidian");!function(e){e[e.DEFINED=1]="DEFINED",e[e.INFERRED=2]="INFERRED"}(e||(e={})),function(e){e[e.PARENT=0]="PARENT",e[e.CHILD=1]="CHILD",e[e.LEFT=2]="LEFT",e[e.RIGHT=3]="RIGHT"}(t||(t={})),function(e){e[e.TO=1]="TO",e[e.FROM=2]="FROM",e[e.BOTH=3]="BOTH"}(i||(i={}));const s=/(?:\[([^[\]]+)\]\()((?:(?:ftp|https?|sftp|shttp|tftp):(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>"']|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?«»“”‘’]))\)|\b()((?:(?:ftp|https?|sftp|shttp|tftp):(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>"']|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?«»“”‘’]))\b/gi;class r{constructor(e){this.plugin=e,this.fileToUrlMap=new Map,this.fileUrlInverseMap=new Map,this.hosts=[],this.initalized=!1,this.app=e.app}async init(){const e=Date.now(),t=this.app.vault.getMarkdownFiles();for(const e of t)await this.parseFileURLs(e);this.registerFileEvents(),this.initalized=!0,console.log(`ExcaliBrain indexed ${this.fileUrlInverseMap.size} URLs from ${this.hosts.length} unique hosts in ${this.fileToUrlMap.size} of ${t.length} markdown files in ${((Date.now()-e)/1e3).toFixed(1)} seconds`)}getOrigin(e,t){try{return new URL(e).origin}catch(i){return console.log(`ExcaliBrain URLParser: Invalid URL ${e} in file ${t.path}`),":Unknown Origin:"}}async parseFileURLs(e){var t,i,r,a;if(!(e&&e instanceof n.TFile))return;let u="";try{u=await this.app.vault.cachedRead(e)}catch(t){return void console.log(`ExcaliBrain URLParser: Failed to read file ${e.path}`,t)}const o=new Map;let l;for(;null!==(l=s.exec(u));){const n=null!==(i=null!==(t=l[1])&&void 0!==t?t:l[3])&&void 0!==i?i:"";let s=null!==(a=null!==(r=l[2])&&void 0!==r?r:l[4])&&void 0!==a?a:"";if(s.match(/^(?:ftp|https?|sftp|shttp|tftp):/)||(s="https://"+s),o.has(s)){if(""!==n){const e=o.get(s);""===e.alias&&o.set(s,Object.assign(Object.assign({},e),{alias:n}))}}else{const t=this.getOrigin(s,e);o.set(s,{url:s,alias:n,origin:t}),this.updateInverseMap(s,e,t)}}const D=Array.from(o.values());D.length>0&&this.fileToUrlMap.set(e,D)}updateInverseMap(e,t,i){this.fileUrlInverseMap.has(e)||this.fileUrlInverseMap.set(e,{files:[],origin:i});const n=this.fileUrlInverseMap.get(e);n&&(n.files.includes(t)||n.files.push(t),this.hosts.includes(n.origin)||this.hosts.push(n.origin))}registerFileEvents(){const e=e=>{t(e),this.parseFileURLs(e)},t=e=>{const t=this.fileToUrlMap.get(e);this.fileToUrlMap.delete(e),t&&t.forEach((t=>{const i=this.fileUrlInverseMap.get(t.url);if(i){if(i.files=i.files.filter((t=>t!==e)),0===i.files.length)return this.fileUrlInverseMap.delete(t.url),void(this.hosts=this.hosts.filter((e=>e!==i.origin)));this.fileUrlInverseMap.set(t.url,i)}}))};this.plugin.registerEvent(this.app.vault.on("create",e)),this.plugin.registerEvent(this.app.vault.on("modify",e)),this.plugin.registerEvent(this.app.vault.on("delete",t))}}const a=(e,t,i)=>{const n=e.metadataCache.getFirstLinkpathDest(t,i);return n?n.path:t},u=(e,t)=>{var i,n,r,u,o;const l=new Set,D=e.matchAll(/[^[]*\[\[(?<wikiLink>[^#\]\|]*)[^\]]*]]|\[[^\]]*]\((?<mdLink>[^)]*)\)/g);let d,h;for(;!(d=D.next()).done;){if(null===(n=null===(i=null==d?void 0:d.value)||void 0===i?void 0:i.groups)||void 0===n?void 0:n.wikiLink){const e=a(app,d.value.groups.wikiLink,t.path);e&&l.add(e)}if(null===(u=null===(r=null==d?void 0:d.value)||void 0===r?void 0:r.groups)||void 0===u?void 0:u.mdLink){const e=a(app,decodeURIComponent(d.value.groups.mdLink),t.path);e&&l.add(e)}}for(;null!==(h=s.exec(e));)l.add(null!==(o=h[2])&&void 0!==o?o:h[4]);return Array.from(l)},o=(e,t,i)=>{var s;const r=new Set;if(t.values){if(t.hasOwnProperty("conversionAccuracy"))return[];const l=Array.from(t.values());let D;try{l.filter((e=>(null==e?void 0:e.type)&&("file"===e.type||"header"===e.type||"block"==e.type))).forEach((t=>{const n=a(e.app,t.path,i.path);n&&r.add(n)})),l.filter((e=>Boolean(null==e?void 0:e.values))).forEach((t=>{D=t;const n=Array.from(t.values());o(e,n,i).forEach((e=>r.add(e)))}))}catch(e){console.log(e),console.log(l),console.log(D),console.log(null==D?void 0:D.values)}const d=u(l.filter((e=>"string"==typeof e)).join(" "),i),h=null===(s=l.filter((e=>(null==e?void 0:e.values)&&"object"==typeof e&&"string"==typeof e.values[0])))||void 0===s?void 0:s.map((t=>a(e.app,t.values[0],i.path)));
//! currently there is an issue with case sensitivity. DataView retains case sensitivity of links for the front matter, but not the others
h||console.log({error:"objectLinks is undefined which is unexpected",errorLocation:"readDVField",field:t,file:i});const c=((e,t,i)=>{const s=new Set;return t.forEach((t=>{var i;(null===(i=null==t?void 0:t.hasOwnProperty)||void 0===i?void 0:i.call(t,"ts"))&&s.add(n.moment(t.ts).format(e.dailyNoteSettings.format))})),Array.from(s)})(e,l);return Array.from(r).concat(d).concat(null!=h?h:[]).concat(c)}if(t.path){const n=a(e.app,t.path,i.path);return n?[n]:[]}return"string"==typeof t?u(t,i):[]},l=(e,t,i)=>{const n=[],s=new Set;return i.forEach((i=>{const r=t[i];r&&!s.has(i)&&(s.add(i),o(e,r,t.file).forEach((e=>n.push({link:e,field:i}))))})),n},D=(e,t)=>{var i;const n=d(e,t);if(!n)return[null,null];if(e[t.primaryTagFieldLowerCase]){const s=null===(i=e[t.primaryTagFieldLowerCase].match(/#([^\s\])$"'\\]*)(?:$|\s)/g))||void 0===i?void 0:i.map((e=>e.trim())).filter((e=>t.tagStyleList.some((t=>e.startsWith(t))))),r=s&&s.length>0?s[0]:n[0];return[r,n.filter((e=>e!=r))]}return[n[0],n.slice(1)]},d=(e,t)=>{var i,n,s;return e?(null!==(s=null===(n=null===(i=e.file)||void 0===i?void 0:i.tags)||void 0===n?void 0:n.values)&&void 0!==s?s:[]).filter((e=>t.tagStyleList.some((t=>e.startsWith(t))))):null},h=(e,t)=>{const[i,n]=e;if(!i)return{};const s=t.tagNodeStyles[t.tagStyleList.filter((e=>i.startsWith(e)))[0]];if(s&&t.displayAllStylePrefixes){const e=Object.keys(t.tagNodeStyles).filter((e=>n.includes(e))),i=new Set;s.prefix&&i.add(s.prefix),null==e||e.map((e=>t.tagNodeStyles[e].prefix)).filter((e=>Boolean(e))).forEach((e=>i.add(e)));const r=Array.from(i).join("");return Object.assign(Object.assign({},s),{prefix:r})}return s},c=e=>{console.error(Object.assign({plugin:"ExcaliBrain"},e))};console.log.bind(window.console),console.log.bind(window.console);const g=e=>`data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(e.replaceAll("&nbsp;"," "))))}`,E=(e,t)=>{if(!e.DEVICE.isDesktop)return;let i=!0;if(!t){const n=e.targetView;if(!n)return;i=app.workspace.activeLeaf===n.leaf,t=n.ownerWindow}i&&(t.electronWindow.isAlwaysOnTop()||(t.electronWindow.setAlwaysOnTop(!0),setTimeout((()=>{t.electronWindow.setAlwaysOnTop(!1)}),500)))};function p(e){const t=e.lastIndexOf("/"),i=-1==t?e:e.substring(t+1);return{folderpath:n.normalizePath(e.substring(0,t)),filename:i,basename:i.replace(/\.[^/.]+$/,"")}}function f(e,t){return!!e&&["pdf","mp4","mp3","webm","md"].includes(e.extension)&&!t.isExcalidrawFile(e)}class F{constructor(e){this.pages=new Map,this.forEach=this.pages.forEach.bind(this.pages),this.app=e.app,this.plugin=e}add(e,t){this.pages.set(e,t)}has(e){return this.pages.has(e)}get(e){return this.pages.get(e)}getPages(){return Array.from(this.pages.values())}get size(){return this.pages.size}delete(e){const t=this.pages.get(e);t&&(t.neighbours.forEach(((t,i)=>{const n=this.pages.get(i);n&&(n.unlinkNeighbour(e),n.file||0!==n.neighbours.size||this.pages.delete(i))})),this.pages.delete(e))}addInferredParentChild(t,n){this.plugin.settings.inferAllLinksAsFriends?(n.addLeftFriend(t,e.INFERRED,i.TO),t.addLeftFriend(n,e.INFERRED,i.FROM)):this.plugin.settings.inverseInfer?(n.addChild(t,e.INFERRED,i.TO),t.addParent(n,e.INFERRED,i.FROM)):(n.addParent(t,e.INFERRED,i.TO),t.addChild(n,e.INFERRED,i.FROM))}addResolvedLinks(e){const t=this.app.metadataCache.resolvedLinks;Object.keys(t).forEach((i=>{if(e&&e.path!==i)return;const n=this.pages.get(i);Object.keys(t[i]).forEach((e=>{let t=this.pages.get(e);t||(t=this.pages.get(this.plugin.lowercasePathMap.get(e.toLowerCase()))),this.addInferredParentChild(n,t)}))}))}addPageURLs(){this.plugin.urlParser.fileToUrlMap.forEach(((t,n)=>{const s=this.get(n.path);s&&t.forEach((t=>{let n=this.get(t.url);n||(n=new A(this,t.url,null,this.plugin,!1,!1,t.alias,t.url),this.add(t.url,n)),""===t.alias||""!==n.name&&n.name!==t.url||(n.name=t.alias),this.addInferredParentChild(s,n);const r=this.get(t.origin);r&&(n.addParent(r,e.INFERRED,i.FROM),r.addChild(n,e.INFERRED,i.TO))}))}))}addUnresolvedLinks(e){if(e&&(e.isFolder||e.isTag))return;const t=this.app.metadataCache.unresolvedLinks;Object.keys(t).forEach((i=>{if(e&&e.path!==i)return;let n=this.pages.get(i);n&&i!==this.plugin.settings.excalibrainFilepath&&Object.keys(t[i]).forEach((e=>m(e,n,this.plugin,this)))}))}}const m=(t,n,s,r)=>{var a;const u=null!==(a=r.get(t))&&void 0!==a?a:new A(r,t,null,s);return s.settings.inferAllLinksAsFriends?(u.addLeftFriend(n,e.INFERRED,i.TO),n.addLeftFriend(u,e.INFERRED,i.FROM)):s.settings.inverseInfer?(u.addChild(n,e.INFERRED,i.TO),n.addParent(u,e.INFERRED,i.FROM)):(u.addParent(n,e.INFERRED,i.TO),n.addChild(u,e.INFERRED,i.FROM)),r.add(t,u),u},C={target:null,isHidden:!1,isParent:!1,isChild:!1,isLeftFriend:!1,isRightFriend:!1,isNextFriend:!1,isPreviousFriend:!1,direction:null},y=(e,t)=>e&&t?e+", "+t:e||t,S=(e,t)=>e?e===i.BOTH||e===t?e:i.BOTH:t,b=(t,i)=>t===e.DEFINED?e.DEFINED:t===e.INFERRED?i===e.DEFINED?e.DEFINED:e.INFERRED:i;class A{constructor(e,t,i,n,s=!1,r=!1,a,u=null){this.pages=e,this.path=t,this.file=i,this.plugin=n,this.isFolder=s,this.isTag=r,this.name=a,this.url=u,this.dvIndexReady=!1,a||(this.name=i?"md"===i.extension?i.basename:i.name:Boolean(u)?u:(e=>{const t=e.endsWith(".md"),i=e.substring(e.lastIndexOf("/")+1);return t?i.slice(0,-3):i})(t)),this.mtime=i?i.stat.mtime:null,this.neighbours=new Map}addDVFieldLinksToPage(){var t,n,s;if(this.dvIndexReady||this.isFolder||!this.pages)return;if(this.dvIndexReady=!0,this.isTag){const t=this.plugin.DVAPI.index.etags.getInverse("#"+this.path.substring(4));if(!t)return;return void t.forEach((t=>{

... (Content truncated - file too large)
```

---


#### 📁 Directory: src\site\notes\.obsidian\plugins\mxmind

##### 📄 main.js
*Path: `src\site\notes\.obsidian\plugins\mxmind\main.js`*  
*Size: 16.15 KB*

```js
/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  MxmindIframeView: () => MxmindIframeView,
  VIEW_TYPE_EXAMPLE: () => VIEW_TYPE_EXAMPLE,
  default: () => MxmindPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");

// node_modules/lodash-es/_freeGlobal.js
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal_default = freeGlobal;

// node_modules/lodash-es/_root.js
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal_default || freeSelf || Function("return this")();
var root_default = root;

// node_modules/lodash-es/_Symbol.js
var Symbol2 = root_default.Symbol;
var Symbol_default = Symbol2;

// node_modules/lodash-es/_getRawTag.js
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var nativeObjectToString = objectProto.toString;
var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
  try {
    value[symToStringTag] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
var getRawTag_default = getRawTag;

// node_modules/lodash-es/_objectToString.js
var objectProto2 = Object.prototype;
var nativeObjectToString2 = objectProto2.toString;
function objectToString(value) {
  return nativeObjectToString2.call(value);
}
var objectToString_default = objectToString;

// node_modules/lodash-es/_baseGetTag.js
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
}
var baseGetTag_default = baseGetTag;

// node_modules/lodash-es/isObjectLike.js
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_default = isObjectLike;

// node_modules/lodash-es/isSymbol.js
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag;
}
var isSymbol_default = isSymbol;

// node_modules/lodash-es/_trimmedEndIndex.js
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var trimmedEndIndex_default = trimmedEndIndex;

// node_modules/lodash-es/_baseTrim.js
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex_default(string) + 1).replace(reTrimStart, "") : string;
}
var baseTrim_default = baseTrim;

// node_modules/lodash-es/isObject.js
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_default = isObject;

// node_modules/lodash-es/toNumber.js
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol_default(value)) {
    return NAN;
  }
  if (isObject_default(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject_default(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim_default(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var toNumber_default = toNumber;

// node_modules/lodash-es/now.js
var now = function() {
  return root_default.Date.now();
};
var now_default = now;

// node_modules/lodash-es/debounce.js
var FUNC_ERROR_TEXT = "Expected a function";
var nativeMax = Math.max;
var nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber_default(wait) || 0;
  if (isObject_default(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber_default(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now_default();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now_default());
  }
  function debounced() {
    var time = now_default(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var debounce_default = debounce;

// main.ts
var iframe = null;
var ready = false;
var VIEW_TYPE_EXAMPLE = "mxmind-view";
function getTheme() {
  return document.body.hasClass("theme-dark") ? "dark" : "light";
}
function getLanguage() {
  const locale = import_obsidian.moment.locale();
  const arr = locale.split("-");
  if (arr[1]) {
    arr[1] = arr[1].toString().toUpperCase();
  }
  return arr.join("-");
}
var getUrl = () => {
  const base = "https://mxmind.com";
  return base + "/mindmap/new?utm_source=obsidian&utm_medium=plugin&theme=" + getTheme() + "&lng=" + getLanguage();
};
async function file2mindmap(file, update = false) {
  const content = await this.app.vault.cachedRead(file);
  const post = () => {
    postIframeMessage(update ? "updateFromMarkdown" : "loadFromMd", [
      content
    ]);
  };
  try {
    await waitEditor();
    post();
  } catch (e) {
    post();
  }
}
async function saveAndRevealFile(app, blob, filePath) {
  const arrayBuffer = await blob.arrayBuffer();
  const uint8Array = new Uint8Array(arrayBuffer);
  const f = app.vault.getAbstractFileByPath(filePath);
  if (f) {
    app.vault.delete(f);
  }
  await app.vault.createBinary(filePath, uint8Array);
  const file = app.vault.getAbstractFileByPath(filePath);
  if (!file)
    return;
  await app.workspace.getLeaf(true).openFile(file);
  const fileExplorer = app.workspace.getLeavesOfType("file-explorer")[0];
  if (fileExplorer && fileExplorer.view.revealInFolder) {
    fileExplorer.view.revealInFolder(file);
  }
}
var MxmindPlugin = class extends import_obsidian.Plugin {
  //settings: MyPluginSettings;
  async onload() {
    this.registerView(
      VIEW_TYPE_EXAMPLE,
      (leaf) => new MxmindIframeView(leaf)
    );
    const ribbonIconEl = this.addRibbonIcon(
      "network",
      "Mxmind",
      async (evt) => {
        this.toggleView();
        const activeFile = this.app.workspace.getActiveFile();
        if (activeFile && activeFile.extension == "md") {
          await this.activateView();
          await file2mindmap(activeFi

... (Content truncated - file too large)
```

---


#### 📁 Directory: src\site\notes\.obsidian\plugins\obsidian-advanced-uri

##### 📄 main.js
*Path: `src\site\notes\.obsidian\plugins\obsidian-advanced-uri\main.js`*  
*Size: 132.03 KB*

```js
/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source visit the plugins github repository (https://github.com/Vinzent03/obsidian-advanced-uri)
*/

var gt=Object.create;var ae=Object.defineProperty;var mt=Object.getOwnPropertyDescriptor;var xt=Object.getOwnPropertyNames;var vt=Object.getPrototypeOf,wt=Object.prototype.hasOwnProperty;var De=(o,n)=>()=>(n||o((n={exports:{}}).exports,n),n.exports),jt=(o,n)=>{for(var e in n)ae(o,e,{get:n[e],enumerable:!0})},Ve=(o,n,e,t)=>{if(n&&typeof n=="object"||typeof n=="function")for(let i of xt(n))!wt.call(o,i)&&i!==e&&ae(o,i,{get:()=>n[i],enumerable:!(t=mt(n,i))||t.enumerable});return o};var xe=(o,n,e)=>(e=o!=null?gt(vt(o)):{},Ve(n||!o||!o.__esModule?ae(e,"default",{value:o,enumerable:!0}):e,o)),bt=o=>Ve(ae({},"__esModule",{value:!0}),o);var Le=De((Y,ve)=>{(function(n,e){typeof Y=="object"&&typeof ve=="object"?ve.exports=e():typeof define=="function"&&define.amd?define([],e):typeof Y=="object"?Y.feather=e():n.feather=e()})(typeof self!="undefined"?self:Y,function(){return function(o){var n={};function e(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return o[t].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=o,e.c=n,e.d=function(t,i,a){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:a})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=0)}({"./dist/icons.json":function(o){o.exports={activity:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',airplay:'<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',"alert-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',"alert-octagon":'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',"alert-triangle":'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',"align-center":'<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',"align-justify":'<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',"align-left":'<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',"align-right":'<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',anchor:'<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',aperture:'<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',archive:'<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',"arrow-down-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',"arrow-down-left":'<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',"arrow-down-right":'<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',"arrow-down":'<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',"arrow-left-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',"arrow-left":'<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',"arrow-right-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',"arrow-right":'<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',"arrow-up-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',"arrow-up-left":'<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',"arrow-up-right":'<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',"arrow-up":'<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',"at-sign":'<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',award:'<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',"bar-chart-2":'<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',"bar-chart":'<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',"battery-charging":'<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',battery:'<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',"bell-off":'<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',bell:'<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',bluetooth:'<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',bold:'<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',"book-open":'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',bookmark:'<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',box:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',briefcase:'<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',"camera-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',camera:'<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',cast:'<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',"check-circle":'<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',"check-square":'<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',check:'<polyline points="20 6 9 17 4 12"></polyline>',"chevron-down":'<polyline points="6 9 12 15 18 9"></polyline>',"chevron-left":'<polyline points="15 18 9 12 15 6"></polyline>',"chevron-right":'<polyline points="9 18 15 12 9 6"></polyline>',"chevron-up":'<polyline points="18 15 12 9 6 15"></polyline>',"chevrons-down":'<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',"chevrons-left":'<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',"chevrons-right":'<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',"chevrons-up":'<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',chrome:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',circle:'<circle cx="12" cy="12" r="10"></circle>',clipboard:'<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',clock:'<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',"cloud-drizzle":'<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23">

... (Content truncated - file too large)
```

---


#### 📁 Directory: src\site\notes\.obsidian\plugins\obsidian-banners

##### 📄 main.js
*Path: `src\site\notes\.obsidian\plugins\obsidian-banners\main.js`*  
*Size: 147.07 KB*

```js
/*
- THIS IS A GENERATED/BUNDLED FILE BY ESBUILD -
Please visit the repository linked to view the source code:
https://github.com/noatpad/obsidian-banners
*/
var Zn=Object.create;var Ie=Object.defineProperty;var ei=Object.getOwnPropertyDescriptor;var ui=Object.getOwnPropertyNames;var ti=Object.getPrototypeOf,ri=Object.prototype.hasOwnProperty;var Pu=t=>Ie(t,"__esModule",{value:!0});var o=(t,u)=>()=>(u||t((u={exports:{}}).exports,u),u.exports),ai=(t,u)=>{Pu(t);for(var r in u)Ie(t,r,{get:u[r],enumerable:!0})},ni=(t,u,r)=>{if(u&&typeof u=="object"||typeof u=="function")for(let a of ui(u))!ri.call(t,a)&&a!=="default"&&Ie(t,a,{get:()=>u[a],enumerable:!(r=ei(u,a))||r.enumerable});return t},S=t=>ni(Pu(Ie(t!=null?Zn(ti(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);var Pe=o((ge,ru)=>{"use strict";Object.defineProperty(ge,"__esModule",{value:!0});ge.default=ii;function Me(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Me=function(r){return typeof r}:Me=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Me(t)}function ii(t){var u=typeof t=="string"||t instanceof String;if(!u){var r=Me(t);throw t===null?r="null":r==="object"&&(r=t.constructor.name),new TypeError("Expected a string but received a ".concat(r))}}ru.exports=ge.default;ru.exports.default=ge.default});var nu=o((pe,au)=>{"use strict";Object.defineProperty(pe,"__esModule",{value:!0});pe.default=di;function di(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},u=arguments.length>1?arguments[1]:void 0;for(var r in u)typeof t[r]=="undefined"&&(t[r]=u[r]);return t}au.exports=pe.default;au.exports.default=pe.default});var Lu=o((_e,iu)=>{"use strict";Object.defineProperty(_e,"__esModule",{value:!0});_e.default=li;var oi=qu(Pe()),si=qu(nu());function qu(t){return t&&t.__esModule?t:{default:t}}var Di={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1};function li(t,u){(0,oi.default)(t),u=(0,si.default)(u,Di),u.allow_trailing_dot&&t[t.length-1]==="."&&(t=t.substring(0,t.length-1));var r=t.split("."),a=r[r.length-1];return u.require_tld&&(r.length<2||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(a)||/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20\u00A9\uFFFD]/.test(a))||!u.allow_numeric_tld&&/^\d+$/.test(a)?!1:r.every(function(n){return!(n.length>63||!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(n)||/[\uff01-\uff5e]/.test(n)||/^-|-$/.test(n)||!u.allow_underscores&&/_/.test(n))})}iu.exports=_e.default;iu.exports.default=_e.default});var ju=o((he,ou)=>{"use strict";Object.defineProperty(he,"__esModule",{value:!0});he.default=du;var ci=fi(Pe());function fi(t){return t&&t.__esModule?t:{default:t}}var Ou="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",Y="(".concat(Ou,"[.]){3}").concat(Ou),mi=new RegExp("^".concat(Y,"$")),I="(?:[0-9a-fA-F]{1,4})",gi=new RegExp("^("+"(?:".concat(I,":){7}(?:").concat(I,"|:)|")+"(?:".concat(I,":){6}(?:").concat(Y,"|:").concat(I,"|:)|")+"(?:".concat(I,":){5}(?::").concat(Y,"|(:").concat(I,"){1,2}|:)|")+"(?:".concat(I,":){4}(?:(:").concat(I,"){0,1}:").concat(Y,"|(:").concat(I,"){1,3}|:)|")+"(?:".concat(I,":){3}(?:(:").concat(I,"){0,2}:").concat(Y,"|(:").concat(I,"){1,4}|:)|")+"(?:".concat(I,":){2}(?:(:").concat(I,"){0,3}:").concat(Y,"|(:").concat(I,"){1,5}|:)|")+"(?:".concat(I,":){1}(?:(:").concat(I,"){0,4}:").concat(Y,"|(:").concat(I,"){1,6}|:)|")+"(?::((?::".concat(I,"){0,5}:").concat(Y,"|(?::").concat(I,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");function du(t){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";if((0,ci.default)(t),u=String(u),!u)return du(t,4)||du(t,6);if(u==="4"){if(!mi.test(t))return!1;var r=t.split(".").sort(function(a,n){return a-n});return r[3]<=255}return u==="6"?!!gi.test(t):!1}ou.exports=he.default;ou.exports.default=he.default});var Nu=o((be,su)=>{"use strict";Object.defineProperty(be,"__esModule",{value:!0});be.default=Ei;var pi=qe(Pe()),_i=qe(Lu()),Ru=qe(ju()),hi=qe(nu());function qe(t){return t&&t.__esModule?t:{default:t}}var bi={protocols:["http","https","ftp"],require_tld:!0,require_protocol:!1,require_host:!0,require_port:!1,require_valid_protocol:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_protocol_relative_urls:!1,validate_length:!0},Fi=/^\[([^\]]+)\](?::([0-9]+))?$/;function Ci(t){return Object.prototype.toString.call(t)==="[object RegExp]"}function Hu(t,u){for(var r=0;r<u.length;r++){var a=u[r];if(t===a||Ci(a)&&a.test(t))return!0}return!1}function Ei(t,u){if((0,pi.default)(t),!t||/[\s<>]/.test(t)||t.indexOf("mailto:")===0||(u=(0,hi.default)(u,bi),u.validate_length&&t.length>=2083))return!1;var r,a,n,i,s,l,D,c;if(D=t.split("#"),t=D.shift(),D=t.split("?"),t=D.shift(),D=t.split("://"),D.length>1){if(r=D.shift().toLowerCase(),u.require_valid_protocol&&u.protocols.indexOf(r)===-1)return!1}else{if(u.require_protocol)return!1;if(t.substr(0,2)==="//"){if(!u.allow_protocol_relative_urls)return!1;D[0]=t.substr(2)}}if(t=D.join("://"),t==="")return!1;if(D=t.split("/"),t=D.shift(),t===""&&!u.require_host)return!0;if(D=t.split("@"),D.length>1&&(u.disallow_auth||D[0]===""||D[0].substr(0,1)===":"||(a=D.shift(),a.indexOf(":")>=0&&a.split(":").length>2)))return!1;i=D.join("@"),l=null,c=null;var b=i.match(Fi);if(b?(n="",c=b[1],l=b[2]||null):(D=i.split(":"),n=D.shift(),D.length&&(l=D.join(":"))),l!==null){if(s=parseInt(l,10),!/^[0-9]+$/.test(l)||s<=0||s>65535)return!1}else if(u.require_port)return!1;return!(!(0,Ru.default)(n)&&!(0,_i.default)(n,u)&&(!c||!(0,Ru.default)(c,6))||(n=n||c,u.host_whitelist&&!Hu(n,u.host_whitelist))||u.host_blacklist&&Hu(n,u.host_blacklist))}su.exports=be.default;su.exports.default=be.default});var Du=o((QO,Vu)=>{Vu.exports=()=>/\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764(?:\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?|\u200D(?:\uD83D\uDC8B\u200D)?)\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])|\uD83E\uDEF1\uD83C\uDFFF\u200D\uD83E\uDEF2)(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764(?:\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?|\u200D(?:\uD83D\uDC8B\u200D)?)\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])|\uD83E\uDEF1\uD83C\uDFFE\u200D\uD83E\uDEF2)(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764(?:\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?|\u200D(?:\uD83D\uDC8B\u200D)?)\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])|\uD83E\uDEF1\uD83C\uDFFD\u200D\uD83E\uDEF2)(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764(?:\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?|\u200D(?:\uD83D\uDC8B\u200D)?)\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])|\uD83E\uDEF1\uD83C\uDFFC\u200D\uD83E\uDEF2)(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764(?:\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?|\u200D(?:\uD83D\uDC8B\u200D)?)\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])|\uD83E\uDEF1\uD83C\uDFFB\u200D\uD83E\uDEF2)(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764(?:\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|[\u2695\u2696\u2708]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764(?:\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])))|\u200D(?:\u2764(?:\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?|\u200D(?:\uD83D\uDC8B\u200D)?)\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\u200D[\u2695\u2696\u2708])?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764(?:\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC

... (Content truncated - file too large)
```

---


#### 📁 Directory: src\site\notes\.obsidian\plugins\obsidian-book-search-plugin

##### 📄 main.js
*Path: `src\site\notes\.obsidian\plugins\obsidian-book-search-plugin\main.js`*  
*Size: 47.21 KB*

```js
/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var ut=Object.defineProperty;var Or=Object.getOwnPropertyDescriptor;var Dr=Object.getOwnPropertyNames;var Nr=Object.prototype.hasOwnProperty;var Lr=(r,e)=>{for(var t in e)ut(r,t,{get:e[t],enumerable:!0})},Rr=(r,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Dr(e))!Nr.call(r,i)&&i!==t&&ut(r,i,{get:()=>e[i],enumerable:!(o=Or(e,i))||o.enumerable});return r};var Fr=r=>Rr(ut({},"__esModule",{value:!0}),r);var Lo={};Lr(Lo,{default:()=>at});module.exports=Fr(Lo);var oe=require("obsidian");var Vt=require("obsidian");var we=class we{constructor(e,t,o){this.localePreference=e;this.enableCoverImageEdgeCurl=t;this.apiKey=o}getLanguageRestriction(e){return e==="default"?window.moment.locale():e}buildSearchParams(e,t){let o={q:e,maxResults:we.MAX_RESULTS,printType:we.PRINT_TYPE,langRestrict:this.getLanguageRestriction((t==null?void 0:t.locale)||this.localePreference)};return this.apiKey&&(o.key=this.apiKey),o}async getByQuery(e,t){try{let o=this.buildSearchParams(e,t),i=await Ue("https://www.googleapis.com/books/v1/volumes",o);return i!=null&&i.totalItems?i.items.map(({volumeInfo:n})=>this.createBookItem(n)):[]}catch(o){throw console.warn(o),o}}extractISBNs(e){var t;return(t=e==null?void 0:e.reduce((o,i)=>{let n=i.type==="ISBN_10"?"isbn10":"isbn13";return o[n]=i.identifier.trim(),o},{}))!=null?t:{}}extractBasicBookInfo(e){var t,o,i,n;return{title:e.title,subtitle:e.subtitle,author:this.formatList(e.authors),authors:e.authors,category:this.formatList(e.categories),categories:e.categories,publisher:e.publisher,totalPage:e.pageCount,coverUrl:this.setCoverImageEdgeCurl((o=(t=e.imageLinks)==null?void 0:t.thumbnail)!=null?o:"",this.enableCoverImageEdgeCurl),coverSmallUrl:this.setCoverImageEdgeCurl((n=(i=e.imageLinks)==null?void 0:i.smallThumbnail)!=null?n:"",this.enableCoverImageEdgeCurl),publishDate:e.publishedDate||"",description:e.description,link:e.canonicalVolumeLink||e.infoLink,previewLink:e.previewLink}}createBookItem(e){return{title:"",subtitle:"",author:"",authors:[],category:"",categories:[],publisher:"",publishDate:"",totalPage:"",coverUrl:"",coverSmallUrl:"",description:"",link:"",previewLink:"",...this.extractBasicBookInfo(e),...this.extractISBNs(e.industryIdentifiers)}}formatList(e){var t;return e&&e.length>1?e.map(o=>o.trim()).join(", "):(t=e==null?void 0:e[0])!=null?t:""}setCoverImageEdgeCurl(e,t){return t?e:e.replace("&edge=curl","")}static convertGoogleBookImageURLSize(e,t){return e.replace(/(&zoom)=\d/,`$1=${t}`)}};we.MAX_RESULTS=40,we.PRINT_TYPE="books";var _e=we;var We=class{constructor(e,t){this.clientId=e;this.clientSecret=t}async getByQuery(e){try{let t={query:e,display:50,sort:"sim"},o={"X-Naver-Client-Id":this.clientId,"X-Naver-Client-Secret":this.clientSecret},i=await Ue("https://openapi.naver.com/v1/search/book.json",t,o);return i!=null&&i.total?i.items.map(this.createBookItem):[]}catch(t){throw console.warn(t),t}}createBookItem(e){var t,o;return{title:e.title,author:e.author,publisher:e.publisher,coverUrl:e.image,publishDate:((t=e.pubdate)==null?void 0:t.slice(0,4))||"",link:e.link,description:e.description,isbn:e.isbn,...((o=e.isbn)==null?void 0:o.length)>=13?{isbn13:e.isbn}:{isbn10:e.isbn}}}};var mt=class extends Error{constructor(e){super(e),this.name="ConfigurationError"}};function _t(r){switch(r.serviceProvider){case"google":return new _e(r.localePreference,r.enableCoverImageEdgeCurl,r.apiKey);case"naver":return Mr(r),new We(r.naverClientId,r.naverClientSecret);default:throw new Error("Unsupported service provider.")}}function Mr(r){if(!r.naverClientId||!r.naverClientSecret)throw new mt('\uB124\uC774\uBC84 \uAC1C\uBC1C\uC790\uC13C\uD130\uC5D0\uC11C "Client ID"\uC640 "Client Secret"\uB97C \uBC1C\uAE09\uBC1B\uC544 \uC124\uC815\uD574\uC8FC\uC138\uC694.')}async function Ue(r,e={},t){let o=new URL(r);return $r(o,e),(await(0,Vt.requestUrl)({url:o.href,method:"GET",headers:{Accept:"*/*","Content-Type":"application/json; charset=utf-8",...t}})).json}function $r(r,e){Object.entries(e).forEach(([t,o])=>{r.searchParams.append(t,o.toString())})}var Ut=/^-?[0-9]*$/,dt=/{{DATE(\+-?[0-9]+)?}}/,gt=/{{DATE:([^}\n\r+]*)(\+-?[0-9]+)?}}/;function Hr(r){return r.replace(/[\\,#%&{}/*<>$":@.?|]/g,"").replace(/\s+/g," ")}function ht(r,e,t="md"){let o;return e?o=Be(r,Ge(e)):o=r.author?`${r.title} - ${r.author}`:r.title,Hr(o)+`.${t}`}function jr(r){return Object.entries(r).reduce((e,[t,o])=>(e[Vr(t)]=o,e),{})}function Xt(r,e,t="Snake Case"){var n,l;let o=t==="Camel Case"?r:jr(r),i=typeof e=="string"?_r(e):e;for(let a in i){let s=(l=(n=i[a])==null?void 0:n.toString().trim())!=null?l:"";o[a]&&o[a]!==s?o[a]=`${o[a]}, ${s}`:o[a]=s}return o}function Be(r,e){return e!=null&&e.trim()?Object.entries(r).reduce((o,[i,n=""])=>o.replace(new RegExp(`{{${i}}}`,"ig"),n),e).replace(/{{\w+}}/gi,"").trim():""}function Vr(r){return r.replace(/[A-Z]/g,e=>`_${e==null?void 0:e.toLowerCase()}`)}function _r(r){return r?r.split(`
`).map(e=>{var n,l;let t=e.indexOf(":");if(t===-1)return[e.trim(),""];let o=(n=e.slice(0,t))==null?void 0:n.trim(),i=(l=e.slice(t+1))==null?void 0:l.trim();return[o,i]}).reduce((e,[t,o])=>{var i;return t&&(e[t]=(i=o==null?void 0:o.trim())!=null?i:""),e},{}):{}}function zt(r){return Object.entries(r).map(([e,t])=>{var i;let o=(i=t==null?void 0:t.toString().trim())!=null?i:"";return/\r|\n/.test(o)?"":/:\s/.test(o)?`${e}: "${o.replace(/"/g,"&quot;")}"
`:`${e}: ${o}
`}).join("").trim()}function Wt(r){let e;return(r==null?void 0:r.offset)!==null&&(r==null?void 0:r.offset)!==void 0&&typeof r.offset=="number"&&(e=window.moment.duration(r.offset,"days")),r!=null&&r.format?window.moment().add(e).format(r==null?void 0:r.format):window.moment().add(e).format("YYYY-MM-DD")}function Ge(r){let e=r;for(;dt.test(e);){let t=dt.exec(e),o=0;if(t!=null&&t[1]){let i=t[1].replace("+","").trim();Ut.test(i)&&(o=parseInt(i))}e=Gt(e,dt,Wt({offset:o}))}for(;gt.test(e);){let t=gt.exec(e),o=t==null?void 0:t[1],i=0;if(t!=null&&t[2]){let n=t[2].replace("+","").trim();Ut.test(n)&&(i=parseInt(n))}e=Gt(e,gt,Wt({format:o,offset:i}))}return e}function Gt(r,e,t){return r.replace(e,function(){return t})}var P=require("obsidian");var Ur={en:"English",af:"Afrikaans","ar-dz":"Arabic (Algeria)","ar-kw":"Arabic (Kuwait)","ar-ly":"Arabic (Libya)","ar-ma":"Arabic (Morocco)","ar-sa":"Arabic (Saudi Arabia)","ar-tn":"Arabic (Tunisia)",ar:"Arabic",az:"Azerbaijani",be:"Belarusian",bg:"Bulgarian",bm:"Bambara",bn:"Bengali",bo:"Tibetan",br:"Breton",bs:"Bosnian",ca:"Catalan",cs:"Czech",cv:"Chuvash",cy:"Welsh",da:"Danish","de-at":"German (Austria)","de-ch":"German (Switzerland)",de:"German",dv:"Divehi",el:"Greek","en-au":"English (Australia)","en-ca":"English (Canada)","en-gb":"English (United Kingdom)","en-ie":"English (Ireland)","en-nz":"English (New Zealand)",eo:"Esperanto","es-do":"Spanish (Dominican Republic)","es-us":"Spanish (United States)",es:"Spanish",et:"Estonian",eu:"Basque",fa:"Persian",fi:"Finnish",fo:"Faroese","fr-ca":"French (Canada)","fr-ch":"French (Switzerland)",fr:"French",fy:"Western Frisian",gd:"Scottish Gaelic",gl:"Galician","gom-latn":"gom (Latin)",gu:"Gujarati",he:"Hebrew",hi:"Hindi",hr:"Croatian",hu:"Hungarian","hy-am":"Armenian (Armenia)",id:"Indonesian",is:"Icelandic",it:"Italian",ja:"Japanese",jv:"Javanese",ka:"Georgian",kk:"Kazakh",km:"Khmer",kn:"Kannada",ko:"Korean",ky:"Kirghiz",lb:"Luxembourgish",lo:"Lao",lt:"Lithuanian",lv:"Latvian",me:"me",mi:"Maori",mk:"Macedonian",ml:"Malayalam",mr:"Marathi","ms-my":"Malay (Malaysia)",ms:"Malay",mt:"Maltese",my:"Burmese",nb:"Norwegian Bokm\xE5l",ne:"Nepali","nl-be":"Dutch (Belgium)",nl:"Dutch",nn:"Norwegian Nynorsk","pa-in":"Punjabi (India)",pl:"Polish","pt-br":"Portuguese (Brazil)",pt:"Portuguese",ro:"Romanian",ru:"Russian",sd:"Sindhi",se:"Northern Sami",si:"Sinhala",sk:"Slovak",sl:"Slovenian",sq:"Albanian","sr-cyrl":"Serbian (Cyrillic)",sr:"Serbian",ss:"Swati",sv:"Swedish",sw:"Swahili",ta:"Tamil",te:"Telugu",tet:"Tetum",th:"Thai","tl-ph":"Tagalog (Philippines)",tlh:"Klingon",tr:"Turkish",tzl:"tzl","tzm-latn":"tzm (Latin)",tzm:"tzm",uk:"Ukrainian",ur:"Urdu","uz-latn":"Uzbek (Latin)",uz:"Uzbek",vi:"Vietnamese","x-pseudo":"x-pseudo",yo:"Yoruba","zh-cn":"Chinese (China)","zh-hk":"Chinese (Hong Kong SAR China)","zh-tw":"Chinese (Taiwan)","zh-mo":"Chinese (Macau SAR China)"},ye=Ur;var be=require("obsidian"),Xe=class extends be.Modal{constructor(t,o){var i,n;super(t.app);this.callback=o;this.plugin=t,this.currentServiceProvider=(n=(i=t.settings)==null?void 0:i.serviceProvider)!=null?n:"google"}get settings(){return this.plugin.settings}async saveSetting(){return this.plugin.saveSettings()}saveClientId(t){this.currentServiceProvider==="naver"&&(this.plugin.settings.naverClientId=t)}saveClientSecret(t){this.currentServiceProvider==="naver"&&(this.settings.naverClientSecret=t)}get currentClientId(){return this.currentServiceProvider==="naver"?this.settings.naverClientId:""}get currentClientSecret(){return this.currentServiceProvider==="naver"?this.settings.naverClientSecret:""}onOpen(){let{contentEl:t}=this;t.createEl("h2",{text:"Service Provider Setting"}),new be.Setting(t).setName("Client ID").addText(o=>{o.setValue(this.currentClientId).onChange(i=>this.saveClientId(i))}),new be.Setting(t).setName("Client Secret").addText(o=>{o.setValue(this.currentClientSecret).onChange(i=>this.saveClientSecret(i))}),new be.Setting(t).addButton(o=>o.setButtonText("Save").setCta().onClick(async()=>{var i;await this.plugin.saveSettings(),this.close(),(i=this.callback)==null||i.call(this)}))}onClose(){this.contentEl.empty()}};var gr=require("obsidian");var T="top",A="bottom",B="right",k="left",ze="auto",ee=[T,A,B,k],q="start",pe="end",Yt="clippingParents",Ye="viewport",xe="popper",Kt="reference",vt=ee.reduce(function(r,e){return r.concat([e+"-"+q,e+"-"+pe])},[]),Ke=[].concat(ee,[ze]).reduce(function(r,e){return r.concat([e,e+"-"+q,e+"-"+pe])},[]),Wr="beforeRead",Gr="read",Xr="

... (Content truncated - file too large)
```

---


#### 📁 Directory: src\site\notes\.obsidian\plugins\obsidian-charts

##### 📄 main.js
*Path: `src\site\notes\.obsidian\plugins\obsidian-charts\main.js`*  
*Size: 364.34 KB*

```js
/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source visit the plugins github repository (https://github.com/phibr0/obsidian-dictionary)
*/

var ob=Object.create;var Hi=Object.defineProperty,ab=Object.defineProperties,lb=Object.getOwnPropertyDescriptor,cb=Object.getOwnPropertyDescriptors,hb=Object.getOwnPropertyNames,Us=Object.getOwnPropertySymbols,ub=Object.getPrototypeOf,Yo=Object.prototype.hasOwnProperty,Vc=Object.prototype.propertyIsEnumerable;var Yc=(n,t,e)=>t in n?Hi(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Nn=(n,t)=>{for(var e in t||(t={}))Yo.call(t,e)&&Yc(n,e,t[e]);if(Us)for(var e of Us(t))Vc.call(t,e)&&Yc(n,e,t[e]);return n},_i=(n,t)=>ab(n,cb(t)),Xc=n=>Hi(n,"__esModule",{value:!0});var qc=(n,t)=>{var e={};for(var i in n)Yo.call(n,i)&&t.indexOf(i)<0&&(e[i]=n[i]);if(n!=null&&Us)for(var i of Us(n))t.indexOf(i)<0&&Vc.call(n,i)&&(e[i]=n[i]);return e};var Xo=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports),fb=(n,t)=>{Xc(n);for(var e in t)Hi(n,e,{get:t[e],enumerable:!0})},db=(n,t,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of hb(t))!Yo.call(n,i)&&i!=="default"&&Hi(n,i,{get:()=>t[i],enumerable:!(e=lb(t,i))||e.enumerable});return n},ze=n=>db(Xc(Hi(n!=null?ob(ub(n)):{},"default",n&&n.__esModule&&"default"in n?{get:()=>n.default,enumerable:!0}:{value:n,enumerable:!0})),n);var Ku=Xo((qa,Ga)=>{(function(n,t){typeof qa=="object"&&typeof Ga!="undefined"?Ga.exports=t():typeof define=="function"&&define.amd?define(t):(n=typeof globalThis!="undefined"?globalThis:n||self,n.chroma=t())})(qa,function(){"use strict";for(var n=function(u,d,b){return d===void 0&&(d=0),b===void 0&&(b=1),u<d?d:u>b?b:u},t=n,e=function(u){u._clipped=!1,u._unclipped=u.slice(0);for(var d=0;d<=3;d++)d<3?((u[d]<0||u[d]>255)&&(u._clipped=!0),u[d]=t(u[d],0,255)):d===3&&(u[d]=t(u[d],0,1));return u},i={},s=0,r=["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"];s<r.length;s+=1){var o=r[s];i["[object "+o+"]"]=o.toLowerCase()}var a=function(u){return i[Object.prototype.toString.call(u)]||"object"},l=a,c=function(u,d){return d===void 0&&(d=null),u.length>=3?Array.prototype.slice.call(u):l(u[0])=="object"&&d?d.split("").filter(function(b){return u[0][b]!==void 0}).map(function(b){return u[0][b]}):u[0]},h=a,f=function(u){if(u.length<2)return null;var d=u.length-1;return h(u[d])=="string"?u[d].toLowerCase():null},g=Math.PI,p={clip_rgb:e,limit:n,type:a,unpack:c,last:f,PI:g,TWOPI:g*2,PITHIRD:g/3,DEG2RAD:g/180,RAD2DEG:180/g},m={format:{},autodetect:[]},y=p.last,S=p.clip_rgb,M=p.type,C=m,F=function(){for(var d=[],b=arguments.length;b--;)d[b]=arguments[b];var _=this;if(M(d[0])==="object"&&d[0].constructor&&d[0].constructor===this.constructor)return d[0];var P=y(d),T=!1;if(!P){T=!0,C.sorted||(C.autodetect=C.autodetect.sort(function(B,q){return q.p-B.p}),C.sorted=!0);for(var w=0,A=C.autodetect;w<A.length;w+=1){var L=A[w];if(P=L.test.apply(L,d),P)break}}if(C.format[P]){var j=C.format[P].apply(null,T?d:d.slice(0,-1));_._rgb=S(j)}else throw new Error("unknown format: "+d);_._rgb.length===3&&_._rgb.push(1)};F.prototype.toString=function(){return M(this.hex)=="function"?this.hex():"["+this._rgb.join(",")+"]"};var D=F,I=function(){for(var u=[],d=arguments.length;d--;)u[d]=arguments[d];return new(Function.prototype.bind.apply(I.Color,[null].concat(u)))};I.Color=D,I.version="2.4.2";var $=I,N=p.unpack,G=Math.max,U=function(){for(var u=[],d=arguments.length;d--;)u[d]=arguments[d];var b=N(u,"rgb"),_=b[0],P=b[1],T=b[2];_=_/255,P=P/255,T=T/255;var w=1-G(_,G(P,T)),A=w<1?1/(1-w):0,L=(1-_-w)*A,j=(1-P-w)*A,B=(1-T-w)*A;return[L,j,B,w]},it=U,lt=p.unpack,rt=function(){for(var u=[],d=arguments.length;d--;)u[d]=arguments[d];u=lt(u,"cmyk");var b=u[0],_=u[1],P=u[2],T=u[3],w=u.length>4?u[4]:1;return T===1?[0,0,0,w]:[b>=1?0:255*(1-b)*(1-T),_>=1?0:255*(1-_)*(1-T),P>=1?0:255*(1-P)*(1-T),w]},Pt=rt,zt=$,et=D,Et=m,St=p.unpack,re=p.type,ye=it;et.prototype.cmyk=function(){return ye(this._rgb)},zt.cmyk=function(){for(var u=[],d=arguments.length;d--;)u[d]=arguments[d];return new(Function.prototype.bind.apply(et,[null].concat(u,["cmyk"])))},Et.format.cmyk=Pt,Et.autodetect.push({p:2,test:function(){for(var u=[],d=arguments.length;d--;)u[d]=arguments[d];if(u=St(u,"cmyk"),re(u)==="array"&&u.length===4)return"cmyk"}});var ot=p.unpack,Lt=p.last,Bt=function(u){return Math.round(u*100)/100},Ut=function(){for(var u=[],d=arguments.length;d--;)u[d]=arguments[d];var b=ot(u,"hsla"),_=Lt(u)||"lsa";return b[0]=Bt(b[0]||0),b[1]=Bt(b[1]*100)+"%",b[2]=Bt(b[2]*100)+"%",_==="hsla"||b.length>3&&b[3]<1?(b[3]=b.length>3?b[3]:1,_="hsla"):b.length=3,_+"("+b.join(",")+")"},Qt=Ut,k=p.unpack,v=function(){for(var u=[],d=arguments.length;d--;)u[d]=arguments[d];u=k(u,"rgba");var b=u[0],_=u[1],P=u[2];b/=255,_/=255,P/=255;var T=Math.min(b,_,P),w=Math.max(b,_,P),A=(w+T)/2,L,j;return w===T?(L=0,j=Number.NaN):L=A<.5?(w-T)/(w+T):(w-T)/(2-w-T),b==w?j=(_-P)/(w-T):_==w?j=2+(P-b)/(w-T):P==w&&(j=4+(b-_)/(w-T)),j*=60,j<0&&(j+=360),u.length>3&&u[3]!==void 0?[j,L,A,u[3]]:[j,L,A]},x=v,R=p.unpack,E=p.last,O=Qt,Z=x,V=Math.round,J=function(){for(var u=[],d=arguments.length;d--;)u[d]=arguments[d];var b=R(u,"rgba"),_=E(u)||"rgb";return _.substr(0,3)=="hsl"?O(Z(b),_):(b[0]=V(b[0]),b[1]=V(b[1]),b[2]=V(b[2]),(_==="rgba"||b.length>3&&b[3]<1)&&(b[3]=b.length>3?b[3]:1,_="rgba"),_+"("+b.slice(0,_==="rgb"?3:4).join(",")+")")},tt=J,xt=p.unpack,Ht=Math.round,Ot=function(){for(var u,d=[],b=arguments.length;b--;)d[b]=arguments[b];d=xt(d,"hsl");var _=d[0],P=d[1],T=d[2],w,A,L;if(P===0)w=A=L=T*255;else{var j=[0,0,0],B=[0,0,0],q=T<.5?T*(1+P):T+P-T*P,H=2*T-q,Q=_/360;j[0]=Q+1/3,j[1]=Q,j[2]=Q-1/3;for(var K=0;K<3;K++)j[K]<0&&(j[K]+=1),j[K]>1&&(j[K]-=1),6*j[K]<1?B[K]=H+(q-H)*6*j[K]:2*j[K]<1?B[K]=q:3*j[K]<2?B[K]=H+(q-H)*(2/3-j[K])*6:B[K]=H;u=[Ht(B[0]*255),Ht(B[1]*255),Ht(B[2]*255)],w=u[0],A=u[1],L=u[2]}return d.length>3?[w,A,L,d[3]]:[w,A,L,1]},Yt=Ot,Xt=Yt,ue=m,ke=/^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,xe=/^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,Rn=/^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,un=/^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,Ln=/^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,je=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,$i=Math.round,Fn=function(u){u=u.toLowerCase().trim();var d;if(ue.format.named)try{return ue.format.named(u)}catch(K){}if(d=u.match(ke)){for(var b=d.slice(1,4),_=0;_<3;_++)b[_]=+b[_];return b[3]=1,b}if(d=u.match(xe)){for(var P=d.slice(1,5),T=0;T<4;T++)P[T]=+P[T];return P}if(d=u.match(Rn)){for(var w=d.slice(1,4),A=0;A<3;A++)w[A]=$i(w[A]*2.55);return w[3]=1,w}if(d=u.match(un)){for(var L=d.slice(1,5),j=0;j<3;j++)L[j]=$i(L[j]*2.55);return L[3]=+L[3],L}if(d=u.match(Ln)){var B=d.slice(1,4);B[1]*=.01,B[2]*=.01;var q=Xt(B);return q[3]=1,q}if(d=u.match(je)){var H=d.slice(1,4);H[1]*=.01,H[2]*=.01;var Q=Xt(H);return Q[3]=+d[4],Q}};Fn.test=function(u){return ke.test(u)||xe.test(u)||Rn.test(u)||un.test(u)||Ln.test(u)||je.test(u)};var oi=Fn,$s=$,ji=D,ai=m,qe=p.type,In=tt,$n=oi;ji.prototype.css=function(u){return In(this._rgb,u)},$s.css=function(){for(var u=[],d=arguments.length;d--;)u[d]=arguments[d];return new(Function.prototype.bind.apply(ji,[null].concat(u,["css"])))},ai.format.css=$n,ai.autodetect.push({p:5,test:function(u){for(var d=[],b=arguments.length-1;b-- >0;)d[b]=arguments[b+1];if(!d.length&&qe(u)==="string"&&$n.test(u))return"css"}});var li=D,js=$,fn=m,ce=p.unpack;fn.format.gl=function(){for(var u=[],d=arguments.length;d--;)u[d]=arguments[d];var b=ce(u,"rgba");return b[0]*=255,b[1]*=255,b[2]*=255,b},js.gl=function(){for(var u=[],d=arguments.length;d--;)u[d]=arguments[d];return new(Function.prototype.bind.apply(li,[null].concat(u,["gl"])))},li.prototype.gl=function(){var u=this._rgb;return[u[0]/255,u[1]/255,u[2]/255,u[3]]};var bt=p.unpack,te=function(){for(var u=[],d=arguments.length;d--;)u[d]=arguments[d];var b=bt(u,"rgb"),_=b[0],P=b[1],T=b[2],w=Math.min(_,P,T),A=Math.max(_,P,T),L=A-w,j=L*100/255,B=w/(255-L)*100,q;return L===0?q=Number.NaN:(_===A&&(q=(P-T)/L),P===A&&(q=2+(T-_)/L),T===A&&(q=4+(_-P)/L),q*=60,q<0&&(q+=360)),[q,j,B]},dn=te,pe=p.unpack,zs=Math.floor,vd=function(){for(var u,d,b,_,P,T,w=[],A=arguments.length;A--;)w[A]=arguments[A];w=pe(w,"hcg");var L=w[0],j=w[1],B=w[2],q,H,Q;B=B*255;var K=j*255;if(j===0)q=H=Q=B;else{L===360&&(L=0),L>360&&(L-=360),L<0&&(L+=360),L/=60;var ct=zs(L),mt=L-ct,_t=B*(1-j),Mt=_t+K*(1-mt),oe=_t+K*mt,ne=_t+K;switch(ct){case 0:u=[ne,oe,_t],q=u[0],H=u[1],Q=u[2];break;case 1:d=[Mt,ne,_t],q=d[0],H=d[1],Q=d[2];break;case 2:b=[_t,ne,oe],q=b[0],H=b[1],Q=b[2];break;case 3:_=[_t,Mt,ne],q=_[0],H=_[1],Q=_[2];break;case 4:P=[oe,_t,ne],q=P[0],H=P[1],Q=P[2];break;case 5:T=[ne,_t,Mt],q=T[0],H=T[1],Q=T[2];break}}return[q,H,Q,w.length>3?w[3]:1]},_d=vd,yd=p.unpack,xd=p.type,wd=$,Al=D,Rl=m,kd=dn;Al.prototype.hcg=function(){return kd(this._rgb)},wd.hcg=function(){for(var u=[],d=arguments.length;d--;)u[d]=arguments[d];return new(Function.prototype.bind.apply(Al,[null].concat(u,["hcg"])))},Rl.format.hcg=_d,Rl.autodetect.push({p:1,test:function(){for(var u=[],d=arguments.length;d--;)u[d]=arguments[d];if(u=yd(u,"hcg"),xd(u)==="array"&&u.length===3)return"hcg"}});var Sd=p.unpack,Md=p.last,Bs=Math.round,Cd=function(){for(var u=[],d=arguments.length;d--;)u[d]=arguments[d];var b=Sd(u,"rgba"),_=b[0],P=b[1],T=b[2],w=b[3],A=Md(u)||"auto";w===void 0&&(w=1),A==="auto"&&(A=w<1?"rgba":"rgb"),_=Bs(_),P=Bs(P),T=Bs(T);var L=_<<16|P<<8|T,j="000000"+L.toString(16);j=j.substr(j.length-6);var B="0"+Bs(w*255).toString(16);switch(B=B.substr(B.length-2),A.toLowerCase()){case"rgba":return"#"+j+B;case"argb":return"#"+B+j;default:return"#"+j}},Ll=Cd,Pd=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,Td=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,Dd=function(u){if(u.match(Pd)){(u.length===4||u.length===7)&&(u=u.substr(1)),u.length===3&&(u=u.

... (Content truncated - file too large)
```

---


#### 📁 Directory: src\site\notes\.obsidian\plugins\obsidian-frontmatter-tag-suggest

##### 📄 main.js
*Path: `src\site\notes\.obsidian\plugins\obsidian-frontmatter-tag-suggest\main.js`*  
*Size: 4.38 KB*

```js
/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// main.ts
__export(exports, {
  default: () => FrontmatterTagSuggestPlugin
});
var import_obsidian = __toModule(require("obsidian"));
var FrontmatterTagSuggestPlugin = class extends import_obsidian.Plugin {
  onload() {
    return __async(this, null, function* () {
      this.registerEditorSuggest(new TagSuggest(this));
    });
  }
};
var TagSuggest = class extends import_obsidian.EditorSuggest {
  constructor(plugin) {
    super(plugin.app);
    this.inline = false;
    this.plugin = plugin;
  }
  getTags() {
    const tags = this.plugin.app.metadataCache.getTags();
    return [...Object.keys(tags)].map((p) => p.split("#").pop());
  }
  inRange(range) {
    var _a;
    if (!range || !range.length)
      return false;
    if (((_a = range.match(/^---\n/gm)) == null ? void 0 : _a.length) != 1)
      return false;
    if (!/^tags?:/gm.test(range))
      return false;
    const split = range.split(/(^\w+:?\s*\n?)/gm);
    for (let i = split.length - 1; i >= 0; i--) {
      if (/(^\w+:?\s*\n?)/gm.test(split[i]))
        return split[i].startsWith("tags:");
    }
    return false;
  }
  onTrigger(cursor, editor, _) {
    var _a;
    const lineContents = editor.getLine(cursor.line).toLowerCase();
    const onFrontmatterTagLine = lineContents.startsWith("tags:") || lineContents.startsWith("tag:") || this.inRange(editor.getRange({ line: 0, ch: 0 }, cursor));
    if (onFrontmatterTagLine) {
      this.inline = lineContents.startsWith("tags:") || lineContents.startsWith("tag:");
      const sub = editor.getLine(cursor.line).substring(0, cursor.ch);
      const match = (_a = sub.match(/(\S+)$/)) == null ? void 0 : _a.first();
      if (match) {
        this.tags = this.getTags();
        const matchData = {
          end: cursor,
          start: {
            ch: sub.lastIndexOf(match),
            line: cursor.line
          },
          query: match
        };
        return matchData;
      }
    }
    return null;
  }
  getSuggestions(context) {
    const suggestions = this.tags.filter((p) => p.toLowerCase().contains(context.query.toLowerCase()));
    return suggestions;
  }
  renderSuggestion(suggestion, el) {
    const outer = el.createDiv({ cls: "ES-suggester-container" });
    outer.createDiv({ cls: "ES-tags" }).setText(`#${suggestion}`);
  }
  selectSuggestion(suggestion) {
    if (this.context) {
      if (this.inline) {
        suggestion = `${suggestion}`;
      } else {
        suggestion = `${suggestion}
 -`;
      }
      this.context.editor.replaceRange(`${suggestion} `, this.context.start, this.context.end);
    }
  }
};

/* nosourcemap */
```

---


#### 📁 Directory: src\site\notes\.obsidian\plugins\obsidian-mind-map

##### 📄 main.js
*Path: `src\site\notes\.obsidian\plugins\obsidian-mind-map\main.js`*  
*Size: 996.89 KB*

```js
'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/*! markmap-common v0.1.2 | MIT License */

class Hook {
  constructor() {
    this.listeners = [];
  }

  tap(fn) {
    this.listeners.push(fn);
    return () => this.revoke(fn);
  }

  revoke(fn) {
    const i = this.listeners.indexOf(fn);
    if (i >= 0) this.listeners.splice(i, 1);
  }

  revokeAll() {
    this.listeners.splice(0);
  }

  call(...args) {
    for (const fn of this.listeners) {
      fn(...args);
    }
  }

}

const uniqId = Math.random().toString(36).slice(2, 8);
function wrapFunction(fn, {
  before,
  after
}) {
  return function wrapped(...args) {
    const ctx = {
      args
    };

    try {
      if (before) before(ctx);
    } catch (_unused) {// ignore
    }

    ctx.result = fn(...args);

    try {
      if (after) after(ctx);
    } catch (_unused2) {// ignore
    }

    return ctx.result;
  };
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var cjs = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });

// List of valid entities
//
// Generate with ./support/entities.js script
//

/*eslint quotes:0*/
var entities = {
  "Aacute":"\u00C1",
  "aacute":"\u00E1",
  "Abreve":"\u0102",
  "abreve":"\u0103",
  "ac":"\u223E",
  "acd":"\u223F",
  "acE":"\u223E\u0333",
  "Acirc":"\u00C2",
  "acirc":"\u00E2",
  "acute":"\u00B4",
  "Acy":"\u0410",
  "acy":"\u0430",
  "AElig":"\u00C6",
  "aelig":"\u00E6",
  "af":"\u2061",
  "Afr":"\uD835\uDD04",
  "afr":"\uD835\uDD1E",
  "Agrave":"\u00C0",
  "agrave":"\u00E0",
  "alefsym":"\u2135",
  "aleph":"\u2135",
  "Alpha":"\u0391",
  "alpha":"\u03B1",
  "Amacr":"\u0100",
  "amacr":"\u0101",
  "amalg":"\u2A3F",
  "AMP":"\u0026",
  "amp":"\u0026",
  "And":"\u2A53",
  "and":"\u2227",
  "andand":"\u2A55",
  "andd":"\u2A5C",
  "andslope":"\u2A58",
  "andv":"\u2A5A",
  "ang":"\u2220",
  "ange":"\u29A4",
  "angle":"\u2220",
  "angmsd":"\u2221",
  "angmsdaa":"\u29A8",
  "angmsdab":"\u29A9",
  "angmsdac":"\u29AA",
  "angmsdad":"\u29AB",
  "angmsdae":"\u29AC",
  "angmsdaf":"\u29AD",
  "angmsdag":"\u29AE",
  "angmsdah":"\u29AF",
  "angrt":"\u221F",
  "angrtvb":"\u22BE",
  "angrtvbd":"\u299D",
  "angsph":"\u2222",
  "angst":"\u00C5",
  "angzarr":"\u237C",
  "Aogon":"\u0104",
  "aogon":"\u0105",
  "Aopf":"\uD835\uDD38",
  "aopf":"\uD835\uDD52",
  "ap":"\u2248",
  "apacir":"\u2A6F",
  "apE":"\u2A70",
  "ape":"\u224A",
  "apid":"\u224B",
  "apos":"\u0027",
  "ApplyFunction":"\u2061",
  "approx":"\u2248",
  "approxeq":"\u224A",
  "Aring":"\u00C5",
  "aring":"\u00E5",
  "Ascr":"\uD835\uDC9C",
  "ascr":"\uD835\uDCB6",
  "Assign":"\u2254",
  "ast":"\u002A",
  "asymp":"\u2248",
  "asympeq":"\u224D",
  "Atilde":"\u00C3",
  "atilde":"\u00E3",
  "Auml":"\u00C4",
  "auml":"\u00E4",
  "awconint":"\u2233",
  "awint":"\u2A11",
  "backcong":"\u224C",
  "backepsilon":"\u03F6",
  "backprime":"\u2035",
  "backsim":"\u223D",
  "backsimeq":"\u22CD",
  "Backslash":"\u2216",
  "Barv":"\u2AE7",
  "barvee":"\u22BD",
  "Barwed":"\u2306",
  "barwed":"\u2305",
  "barwedge":"\u2305",
  "bbrk":"\u23B5",
  "bbrktbrk":"\u23B6",
  "bcong":"\u224C",
  "Bcy":"\u0411",
  "bcy":"\u0431",
  "bdquo":"\u201E",
  "becaus":"\u2235",
  "Because":"\u2235",
  "because":"\u2235",
  "bemptyv":"\u29B0",
  "bepsi":"\u03F6",
  "bernou":"\u212C",
  "Bernoullis":"\u212C",
  "Beta":"\u0392",
  "beta":"\u03B2",
  "beth":"\u2136",
  "between":"\u226C",
  "Bfr":"\uD835\uDD05",
  "bfr":"\uD835\uDD1F",
  "bigcap":"\u22C2",
  "bigcirc":"\u25EF",
  "bigcup":"\u22C3",
  "bigodot":"\u2A00",
  "bigoplus":"\u2A01",
  "bigotimes":"\u2A02",
  "bigsqcup":"\u2A06",
  "bigstar":"\u2605",
  "bigtriangledown":"\u25BD",
  "bigtriangleup":"\u25B3",
  "biguplus":"\u2A04",
  "bigvee":"\u22C1",
  "bigwedge":"\u22C0",
  "bkarow":"\u290D",
  "blacklozenge":"\u29EB",
  "blacksquare":"\u25AA",
  "blacktriangle":"\u25B4",
  "blacktriangledown":"\u25BE",
  "blacktriangleleft":"\u25C2",
  "blacktriangleright":"\u25B8",
  "blank":"\u2423",
  "blk12":"\u2592",
  "blk14":"\u2591",
  "blk34":"\u2593",
  "block":"\u2588",
  "bne":"\u003D\u20E5",
  "bnequiv":"\u2261\u20E5",
  "bNot":"\u2AED",
  "bnot":"\u2310",
  "Bopf":"\uD835\uDD39",
  "bopf":"\uD835\uDD53",
  "bot":"\u22A5",
  "bottom":"\u22A5",
  "bowtie":"\u22C8",
  "boxbox":"\u29C9",
  "boxDL":"\u2557",
  "boxDl":"\u2556",
  "boxdL":"\u2555",
  "boxdl":"\u2510",
  "boxDR":"\u2554",
  "boxDr":"\u2553",
  "boxdR":"\u2552",
  "boxdr":"\u250C",
  "boxH":"\u2550",
  "boxh":"\u2500",
  "boxHD":"\u2566",
  "boxHd":"\u2564",
  "boxhD":"\u2565",
  "boxhd":"\u252C",
  "boxHU":"\u2569",
  "boxHu":"\u2567",
  "boxhU":"\u2568",
  "boxhu":"\u2534",
  "boxminus":"\u229F",
  "boxplus":"\u229E",
  "boxtimes":"\u22A0",
  "boxUL":"\u255D",
  "boxUl":"\u255C",
  "boxuL":"\u255B",
  "boxul":"\u2518",
  "boxUR":"\u255A",
  "boxUr":"\u2559",
  "boxuR":"\u2558",
  "boxur":"\u2514",
  "boxV":"\u2551",
  "boxv":"\u2502",
  "boxVH":"\u256C",
  "boxVh":"\u256B",
  "boxvH":"\u256A",
  "boxvh":"\u253C",
  "boxVL":"\u2563",
  "boxVl":"\u2562",
  "boxvL":"\u2561",
  "boxvl":"\u2524",
  "boxVR":"\u2560",
  "boxVr":"\u255F",
  "boxvR":"\u255E",
  "boxvr":"\u251C",
  "bprime":"\u2035",
  "Breve":"\u02D8",
  "breve":"\u02D8",
  "brvbar":"\u00A6",
  "Bscr":"\u212C",
  "bscr":"\uD835\uDCB7",
  "bsemi":"\u204F",
  "bsim":"\u223D",
 

... (Content truncated - file too large)
```

---


#### 📁 Directory: src\site\notes\.obsidian\plugins\obsidian-projects

##### 📄 main.js
*Path: `src\site\notes\.obsidian\plugins\obsidian-projects\main.js`*  
*Size: 975.97 KB*

```js
/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

"use strict";var v8=Object.create;var df=Object.defineProperty,y8=Object.defineProperties,b8=Object.getOwnPropertyDescriptor,w8=Object.getOwnPropertyDescriptors,D8=Object.getOwnPropertyNames,Od=Object.getOwnPropertySymbols,$k=Object.getPrototypeOf,n_=Object.prototype.hasOwnProperty,Vk=Object.prototype.propertyIsEnumerable,k8=Reflect.get;var t_=(t,e,n)=>e in t?df(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,H=(t,e)=>{for(var n in e||(e={}))n_.call(e,n)&&t_(t,n,e[n]);if(Od)for(var n of Od(e))Vk.call(e,n)&&t_(t,n,e[n]);return t},te=(t,e)=>y8(t,w8(e));var qk=t=>typeof t=="symbol"?t:t+"",Sr=(t,e)=>{var n={};for(var r in t)n_.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&Od)for(var r of Od(t))e.indexOf(r)<0&&Vk.call(t,r)&&(n[r]=t[r]);return n};var bo=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Ol=(t,e)=>{for(var n in e)df(t,n,{get:e[n],enumerable:!0})},Uk=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of D8(e))!n_.call(t,o)&&o!==n&&df(t,o,{get:()=>e[o],enumerable:!(r=b8(e,o))||r.enumerable});return t};var Bt=(t,e,n)=>(n=t!=null?v8($k(t)):{},Uk(e||!t||!t.__esModule?df(n,"default",{value:t,enumerable:!0}):n,t)),C8=t=>Uk(df({},"__esModule",{value:!0}),t);var it=(t,e,n)=>(t_(t,typeof e!="symbol"?e+"":e,n),n);var Yk=(t,e,n)=>k8($k(t),n,e);var Ne=(t,e,n)=>new Promise((r,o)=>{var i=s=>{try{l(n.next(s))}catch(u){o(u)}},a=s=>{try{l(n.throw(s))}catch(u){o(u)}},l=s=>s.done?r(s.value):Promise.resolve(s.value).then(i,a);l((n=n.apply(t,e)).next())});var Zn=bo((r_,o_)=>{(function(t,e){typeof r_=="object"&&typeof o_!="undefined"?o_.exports=e():typeof define=="function"&&define.amd?define(e):(t=typeof globalThis!="undefined"?globalThis:t||self).dayjs=e()})(r_,function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",o="second",i="minute",a="hour",l="day",s="week",u="month",f="quarter",c="year",p="date",d="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,D={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(ge){var ce=["th","st","nd","rd"],ie=ge%100;return"["+ge+(ce[(ie-20)%10]||ce[ie]||ce[0])+"]"}},b=function(ge,ce,ie){var z=String(ge);return!z||z.length>=ce?ge:""+Array(ce+1-z.length).join(ie)+ge},w={s:b,z:function(ge){var ce=-ge.utcOffset(),ie=Math.abs(ce),z=Math.floor(ie/60),Q=ie%60;return(ce<=0?"+":"-")+b(z,2,"0")+":"+b(Q,2,"0")},m:function ge(ce,ie){if(ce.date()<ie.date())return-ge(ie,ce);var z=12*(ie.year()-ce.year())+(ie.month()-ce.month()),Q=ce.clone().add(z,u),oe=ie-Q<0,j=ce.clone().add(z+(oe?-1:1),u);return+(-(z+(ie-Q)/(oe?Q-j:j-Q))||0)},a:function(ge){return ge<0?Math.ceil(ge)||0:Math.floor(ge)},p:function(ge){return{M:u,y:c,w:s,d:l,D:p,h:a,m:i,s:o,ms:r,Q:f}[ge]||String(ge||"").toLowerCase().replace(/s$/,"")},u:function(ge){return ge===void 0}},x="en",C={};C[x]=D;var A="$isDayjsObject",R=function(ge){return ge instanceof W||!(!ge||!ge[A])},P=function ge(ce,ie,z){var Q;if(!ce)return x;if(typeof ce=="string"){var oe=ce.toLowerCase();C[oe]&&(Q=oe),ie&&(C[oe]=ie,Q=oe);var j=ce.split("-");if(!Q&&j.length>1)return ge(j[0])}else{var X=ce.name;C[X]=ce,Q=X}return!z&&Q&&(x=Q),Q||!z&&x},Y=function(ge,ce){if(R(ge))return ge.clone();var ie=typeof ce=="object"?ce:{};return ie.date=ge,ie.args=arguments,new W(ie)},B=w;B.l=P,B.i=R,B.w=function(ge,ce){return Y(ge,{locale:ce.$L,utc:ce.$u,x:ce.$x,$offset:ce.$offset})};var W=function(){function ge(ie){this.$L=P(ie.locale,null,!0),this.parse(ie),this.$x=this.$x||ie.x||{},this[A]=!0}var ce=ge.prototype;return ce.parse=function(ie){this.$d=function(z){var Q=z.date,oe=z.utc;if(Q===null)return new Date(NaN);if(B.u(Q))return new Date;if(Q instanceof Date)return new Date(Q);if(typeof Q=="string"&&!/Z$/i.test(Q)){var j=Q.match(h);if(j){var X=j[2]-1||0,De=(j[7]||"0").substring(0,3);return oe?new Date(Date.UTC(j[1],X,j[3]||1,j[4]||0,j[5]||0,j[6]||0,De)):new Date(j[1],X,j[3]||1,j[4]||0,j[5]||0,j[6]||0,De)}}return new Date(Q)}(ie),this.init()},ce.init=function(){var ie=this.$d;this.$y=ie.getFullYear(),this.$M=ie.getMonth(),this.$D=ie.getDate(),this.$W=ie.getDay(),this.$H=ie.getHours(),this.$m=ie.getMinutes(),this.$s=ie.getSeconds(),this.$ms=ie.getMilliseconds()},ce.$utils=function(){return B},ce.isValid=function(){return this.$d.toString()!==d},ce.isSame=function(ie,z){var Q=Y(ie);return this.startOf(z)<=Q&&Q<=this.endOf(z)},ce.isAfter=function(ie,z){return Y(ie)<this.startOf(z)},ce.isBefore=function(ie,z){return this.endOf(z)<Y(ie)},ce.$g=function(ie,z,Q){return B.u(ie)?this[z]:this.set(Q,ie)},ce.unix=function(){return Math.floor(this.valueOf()/1e3)},ce.valueOf=function(){return this.$d.getTime()},ce.startOf=function(ie,z){var Q=this,oe=!!B.u(z)||z,j=B.p(ie),X=function(Je,Ce){var tt=B.w(Q.$u?Date.UTC(Q.$y,Ce,Je):new Date(Q.$y,Ce,Je),Q);return oe?tt:tt.endOf(l)},De=function(Je,Ce){return B.w(Q.toDate()[Je].apply(Q.toDate("s"),(oe?[0,0,0,0]:[23,59,59,999]).slice(Ce)),Q)},ke=this.$W,$e=this.$M,ne=this.$D,me="set"+(this.$u?"UTC":"");switch(j){case c:return oe?X(1,0):X(31,11);case u:return oe?X(1,$e):X(0,$e+1);case s:var Ve=this.$locale().weekStart||0,We=(ke<Ve?ke+7:ke)-Ve;return X(oe?ne-We:ne+(6-We),$e);case l:case p:return De(me+"Hours",0);case a:return De(me+"Minutes",1);case i:return De(me+"Seconds",2);case o:return De(me+"Milliseconds",3);default:return this.clone()}},ce.endOf=function(ie){return this.startOf(ie,!1)},ce.$set=function(ie,z){var Q,oe=B.p(ie),j="set"+(this.$u?"UTC":""),X=(Q={},Q[l]=j+"Date",Q[p]=j+"Date",Q[u]=j+"Month",Q[c]=j+"FullYear",Q[a]=j+"Hours",Q[i]=j+"Minutes",Q[o]=j+"Seconds",Q[r]=j+"Milliseconds",Q)[oe],De=oe===l?this.$D+(z-this.$W):z;if(oe===u||oe===c){var ke=this.clone().set(p,1);ke.$d[X](De),ke.init(),this.$d=ke.set(p,Math.min(this.$D,ke.daysInMonth())).$d}else X&&this.$d[X](De);return this.init(),this},ce.set=function(ie,z){return this.clone().$set(ie,z)},ce.get=function(ie){return this[B.p(ie)]()},ce.add=function(ie,z){var Q,oe=this;ie=Number(ie);var j=B.p(z),X=function($e){var ne=Y(oe);return B.w(ne.date(ne.date()+Math.round($e*ie)),oe)};if(j===u)return this.set(u,this.$M+ie);if(j===c)return this.set(c,this.$y+ie);if(j===l)return X(1);if(j===s)return X(7);var De=(Q={},Q[i]=e,Q[a]=n,Q[o]=t,Q)[j]||1,ke=this.$d.getTime()+ie*De;return B.w(ke,this)},ce.subtract=function(ie,z){return this.add(-1*ie,z)},ce.format=function(ie){var z=this,Q=this.$locale();if(!this.isValid())return Q.invalidDate||d;var oe=ie||"YYYY-MM-DDTHH:mm:ssZ",j=B.z(this),X=this.$H,De=this.$m,ke=this.$M,$e=Q.weekdays,ne=Q.months,me=Q.meridiem,Ve=function(Ce,tt,nt,wt){return Ce&&(Ce[tt]||Ce(z,oe))||nt[tt].slice(0,wt)},We=function(Ce){return B.s(X%12||12,Ce,"0")},Je=me||function(Ce,tt,nt){var wt=Ce<12?"AM":"PM";return nt?wt.toLowerCase():wt};return oe.replace(g,function(Ce,tt){return tt||function(nt){switch(nt){case"YY":return String(z.$y).slice(-2);case"YYYY":return B.s(z.$y,4,"0");case"M":return ke+1;case"MM":return B.s(ke+1,2,"0");case"MMM":return Ve(Q.monthsShort,ke,ne,3);case"MMMM":return Ve(ne,ke);case"D":return z.$D;case"DD":return B.s(z.$D,2,"0");case"d":return String(z.$W);case"dd":return Ve(Q.weekdaysMin,z.$W,$e,2);case"ddd":return Ve(Q.weekdaysShort,z.$W,$e,3);case"dddd":return $e[z.$W];case"H":return String(X);case"HH":return B.s(X,2,"0");case"h":return We(1);case"hh":return We(2);case"a":return Je(X,De,!0);case"A":return Je(X,De,!1);case"m":return String(De);case"mm":return B.s(De,2,"0");case"s":return String(z.$s);case"ss":return B.s(z.$s,2,"0");case"SSS":return B.s(z.$ms,3,"0");case"Z":return j}return null}(Ce)||j.replace(":","")})},ce.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},ce.diff=function(ie,z,Q){var oe,j=this,X=B.p(z),De=Y(ie),ke=(De.utcOffset()-this.utcOffset())*e,$e=this-De,ne=function(){return B.m(j,De)};switch(X){case c:oe=ne()/12;break;case u:oe=ne();break;case f:oe=ne()/3;break;case s:oe=($e-ke)/6048e5;break;case l:oe=($e-ke)/864e5;break;case a:oe=$e/n;break;case i:oe=$e/e;break;case o:oe=$e/t;break;default:oe=$e}return Q?oe:B.a(oe)},ce.daysInMonth=function(){return this.endOf(u).$D},ce.$locale=function(){return C[this.$L]},ce.locale=function(ie,z){if(!ie)return this.$L;var Q=this.clone(),oe=P(ie,z,!0);return oe&&(Q.$L=oe),Q},ce.clone=function(){return B.w(this.$d,this)},ce.toDate=function(){return new Date(this.valueOf())},ce.toJSON=function(){return this.isValid()?this.toISOString():null},ce.toISOString=function(){return this.$d.toISOString()},ce.toString=function(){return this.$d.toUTCString()},ge}(),ae=W.prototype;return Y.prototype=ae,[["$ms",r],["$s",o],["$m",i],["$H",a],["$W",l],["$M",u],["$y",c],["$D",p]].forEach(function(ge){ae[ge[1]]=function(ce){return this.$g(ce,ge[0],ge[1])}}),Y.extend=function(ge,ce){return ge.$i||(ge(ce,W,Y),ge.$i=!0),Y},Y.locale=P,Y.isDayjs=R,Y.unix=function(ge){return Y(1e3*ge)},Y.en=C[x],Y.Ls=C,Y.p={},Y})});var zk=bo((i_,a_)=>{(function(t,e){typeof i_=="object"&&typeof a_!="undefined"?a_.exports=e():typeof define=="function"&&define.amd?define(e):(t=typeof globalThis!="undefined"?globalThis:t||self).dayjs_plugin_isoWeek=e()})(i_,function(){"use strict";var t="day";return function(e,n,r){var o=function(l){return l.add(4-l.isoWeekday(),t)},i=n.prototype;i.isoWeekYear=function(){return o(this).year()},i.isoWeek=function(l){if(!this.$utils().u(l))return this.add(7*(l-this.isoWeek()),t);var s,u,f,c,p=o(this),d=(s=this.isoWeekYear(),u=this.$u,f=(u?r.utc:r)().year(s).startOf("year"),c=4-f.isoWeekday(),f.isoWeekday()>4&&(c+=7),f.add(c,t));return p.diff(d,"week")+1},i.isoWeekday=function(l){return this.$utils().u(l)?this.day()||7:this.day(this.day()%7?l:l-7)};var a=i.startOf;i.startOf=function(l,s){var u=this.$utils(),f=!!u.u(s)||s;r

... (Content truncated - file too large)
```

---


#### 📁 Directory: src\site\notes\.obsidian\plugins\obsidian-view-mode-by-frontmatter

##### 📄 main.js
*Path: `src\site\notes\.obsidian\plugins\obsidian-view-mode-by-frontmatter\main.js`*  
*Size: 19.43 KB*

```js
/*
THIS IS A GENERATED/BUNDLED FILE BY ROLLUP
if you want to view the source visit the plugins github repository
*/

'use strict';

var obsidian = require('obsidian');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const DEFAULT_SETTINGS = {
    debounceTimeout: 300,
    ignoreOpenFiles: false,
    ignoreForceViewAll: false,
    folders: [{ folder: '', viewMode: '' }],
    files: [{ filePattern: '', viewMode: '' }],
};
class ViewModeByFrontmatterPlugin extends obsidian.Plugin {
    constructor() {
        super(...arguments);
        this.OBSIDIAN_UI_MODE_KEY = "obsidianUIMode";
        this.OBSIDIAN_EDITING_MODE_KEY = "obsidianEditingMode";
    }
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadSettings();
            this.addSettingTab(new ViewModeByFrontmatterSettingTab(this.app, this));
            this.openedFiles = resetOpenedNotes(this.app);
            const readViewModeFromFrontmatterAndToggle = (leaf) => __awaiter(this, void 0, void 0, function* () {
                let view = leaf.view instanceof obsidian.MarkdownView ? leaf.view : null;
                if (null === view) {
                    if (true == this.settings.ignoreOpenFiles) {
                        this.openedFiles = resetOpenedNotes(this.app);
                    }
                    return;
                }
                // if setting is true, nothing to do if this was an open note
                if (true == this.settings.ignoreOpenFiles &&
                    alreadyOpen(view.file, this.openedFiles)) {
                    this.openedFiles = resetOpenedNotes(this.app);
                    return;
                }
                let state = leaf.getViewState();
                // check if in a declared folder or file
                let folderOrFileModeState = null;
                const setFolderOrFileModeState = (viewMode) => {
                    const [key, mode] = viewMode.split(":").map((s) => s.trim());
                    if (key === "default") {
                        folderOrFileModeState = null; // ensures that no state is set
                        return;
                    }
                    else if (!["live", "preview", "source"].includes(mode)) {
                        return;
                    }
                    folderOrFileModeState = Object.assign({}, state.state);
                    folderOrFileModeState.mode = mode;
                    switch (key) {
                        case this.OBSIDIAN_EDITING_MODE_KEY: {
                            if (mode == "live") {
                                folderOrFileModeState.source = false;
                                folderOrFileModeState.mode = "source";
                            }
                            else {
                                folderOrFileModeState.source = true;
                            }
                            break;
                        }
                        case this.OBSIDIAN_UI_MODE_KEY:
                            folderOrFileModeState.source = false;
                            break;
                    }
                };
                for (const folderMode of this.settings.folders) {
                    if (folderMode.folder !== '' && folderMode.viewMode) {
                        const folder = this.app.vault.getAbstractFileByPath(folderMode.folder);
                        if (folder instanceof obsidian.TFolder) {
                            if (view.file.parent === folder || view.file.parent.path.startsWith(folder.path)) {
                                if (!state.state) { // just to be on the safe side
                                    continue;
                                }
                                setFolderOrFileModeState(folderMode.viewMode);
                            }
                        }
                        else {
                            console.warn(`ForceViewMode: Folder ${folderMode.folder} does not exist or is not a folder.`);
                        }
                    }
                }
                for (const { filePattern, viewMode } of this.settings.files) {
                    if (!filePattern || !viewMode) {
                        continue;
                    }
                    if (!state.state) {
                        // just to be on the safe side
                        continue;
                    }
                    if (!view.file.basename.match(filePattern)) {
                        continue;
                    }
                    setFolderOrFileModeState(viewMode);
                }
                if (folderOrFileModeState) {
                    if (state.state.mode !== folderOrFileModeState.mode ||
                        state.state.source !== folderOrFileModeState.source) {
                        state.state.mode = folderOrFileModeState.mode;
                        state.state.source = folderOrFileModeState.source;
                        yield leaf.setViewState(state);
                    }
                    return;
                }
                // ... get frontmatter data and search for a key indicating the desired view mode
                // and when the given key is present ... set it to the declared mode
                const fileCache = this.app.metadataCache.getFileCache(view.file);
                const fileDeclaredUIMode = fileCache !== null && fileCache.frontmatter
                    ? fileCache.frontmatter[this.OBSIDIAN_UI_MODE_KEY]
                    : null;
                const fileDeclaredEditingMode = fileCache !== null && fileCache.frontmatter
                    ? fileCache.frontmatter[this.OBSIDIAN_EDITING_MODE_KEY]
                    : null;
                if (fileDeclaredUIMode) {
                    if (["source", "preview", "live"].includes(fileDeclaredUIMode) &&
                        view.getMode() !== fileDeclaredUIMode) {
                        state.state.mode = fileDeclaredUIMode;
                    }
                }
                if (fileDeclaredEditingMode) {
                    const shouldBeSourceMode = fileDeclaredEditingMode == 'source';
                    if (["source", "live"].includes(fileDeclaredEditingMode)) {
                        state.state.source = shouldBeSourceMode;
                    }
                }
                if (fileDeclaredUIMode || fileDeclaredEditingMode) {
                    yield leaf.setViewState(state);
                    if (true == this.settings.ignoreOpenFiles) {
                        this.openedFiles = resetOpenedNotes(this.app);
                    }
                    return;
                }
                const defaultViewMode = this.app.vault.config.defaultViewMode
                    ? this.app.vault.config.defaultViewMode
                    : "source";
                const defaultEditingModeIsLivePreview = this.app.vault.config.livePreview === undefined ? true : this.app.vault.config.livePreview;
                if (!this.settings.ignoreForceViewAll) {
                    let state = leaf.getViewState();
                    if (view.getMode() !== defaultViewMode) {
                        state.state.mode = defaultViewMode;
                    }
                    state.state.source = defaultEditingModeIsLivePreview ? false : true;
                    yield leaf.setViewState(state);
                    this.openedFiles = resetOpenedNotes(this.app);
                }
                return;
            });
            // "active-leaf-change": open note, navigate to note -> will check whether
            // the view mode needs to be set; default view mode setting is ignored.
            this.registerEvent(this.app.workspace.on("active-leaf-change", this.settings.debounceTimeout === 0
                ? readViewModeFromFrontmatterAndToggle
                : obsidian.debounce(readViewModeFromFrontmatterAndToggle, this.settings.debounceTimeout)));
        });
    }
    loadSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            this.settings = Object.assign({}, DEFAULT_SETTINGS, yield this.loadData());
        });
    }
    saveSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.saveData(this.settings);
        });
    }
    onunload() {
        return __awaiter(this, void 0, void 0, function* () {
            this.openedFiles = [];
        });
    }
}
function alreadyOpen(currFile, openedFiles) {
    const leavesWithSameNote = [];
    if (currFile == null) {
        return false;
    }
    openedFiles.forEac

... (Content truncated - file too large)
```

---


#### 📁 Directory: src\site\notes\.obsidian\plugins\obsidian-wikipedia

##### 📄 main.js
*Path: `src\site\notes\.obsidian\plugins\obsidian-wikipedia\main.js`*  
*Size: 11.91 KB*

```js
/*
THIS IS A GENERATED/BUNDLED FILE BY ROLLUP
if you want to view the source visit the plugins github repository
*/

'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const DEFAULT_SETTINGS = {
    template: `{{text}}\n> [Wikipedia]({{url}})`,
    shouldUseParagraphTemplate: true,
    shouldBoldSearchTerm: true,
    paragraphTemplate: `> {{paragraphText}}\n>\n`,
    language: "en",
};
const extractApiUrl = "wikipedia.org/w/api.php?format=json&action=query&prop=extracts&explaintext=1&redirects&origin=*&titles=";
const disambiguationIdentifier = "may refer to:";
class WikipediaPlugin extends obsidian.Plugin {
    getLanguage() {
        return this.settings.language ? this.settings.language : "en";
    }
    getUrl(title) {
        return `https://${this.getLanguage()}.wikipedia.org/wiki/${encodeURI(title)}`;
    }
    getApiUrl() {
        return `https://${this.getLanguage()}.` + extractApiUrl;
    }
    formatExtractText(extract, searchTerm) {
        const text = extract.text;
        let formattedText = "";
        if (this.settings.shouldUseParagraphTemplate) {
            const split = text.split("==")[0].trim().split("\n");
            formattedText = split
                .map((paragraph) => this.settings.paragraphTemplate.replace("{{paragraphText}}", paragraph))
                .join("")
                .trim();
        }
        else {
            formattedText = text.split("==")[0].trim();
        }
        if (this.settings.shouldBoldSearchTerm) {
            const pattern = new RegExp(searchTerm, "i");
            formattedText = formattedText.replace(pattern, `**${searchTerm}**`);
        }
        return formattedText;
    }
    handleNotFound(searchTerm) {
        new obsidian.Notice(`${searchTerm} not found on Wikipedia.`);
    }
    handleCouldntResolveDisambiguation() {
        new obsidian.Notice(`Could not automatically resolve disambiguation.`);
    }
    hasDisambiguation(extract) {
        if (extract.text.includes(disambiguationIdentifier)) {
            return true;
        }
        return false;
    }
    parseResponse(json) {
        const pages = json.query.pages;
        const pageKeys = Object.keys(pages);
        if (pageKeys.includes("-1")) {
            return undefined;
        }
        const extracts = pageKeys.map((key) => {
            const page = pages[key];
            const extract = {
                title: page.title,
                text: page.extract,
                url: this.getUrl(page.title),
            };
            return extract;
        });
        return extracts[0];
    }
    formatExtractInsert(extract, searchTerm) {
        const formattedText = this.formatExtractText(extract, searchTerm);
        const template = this.settings.template;
        const formattedTemplate = template
            .replace("{{text}}", formattedText)
            .replace("{{searchTerm}}", searchTerm)
            .replace("{{url}}", extract.url);
        return formattedTemplate;
    }
    getWikipediaText(title) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.getApiUrl() + encodeURIComponent(title);
            const requestParam = {
                url: url,
            };
            const resp = yield obsidian.request(requestParam)
                .then((r) => JSON.parse(r))
                .catch(() => new obsidian.Notice("Failed to get Wikipedia. Check your internet connection or language prefix."));
            const extract = this.parseResponse(resp);
            return extract;
        });
    }
    pasteIntoEditor(editor, searchTerm) {
        return __awaiter(this, void 0, void 0, function* () {
            let extract = yield this.getWikipediaText(searchTerm);
            if (!extract) {
                this.handleNotFound(searchTerm);
                return;
            }
            if (this.hasDisambiguation(extract)) {
                new obsidian.Notice(`Disambiguation found for ${searchTerm}. Choosing first result.`);
                const newSearchTerm = extract.text
                    .split(disambiguationIdentifier)[1]
                    .trim()
                    .split(",")[0]
                    .split("==")
                    .pop()
                    .trim();
                extract = yield this.getWikipediaText(newSearchTerm);
                if (!extract) {
                    this.handleCouldntResolveDisambiguation();
                    return;
                }
            }
            editor.replaceSelection(this.formatExtractInsert(extract, searchTerm));
        });
    }
    getWikipediaTextForActiveFile(editor) {
        return __awaiter(this, void 0, void 0, function* () {
            const activeFile = yield this.app.workspace.getActiveFile();
            if (activeFile) {
                const searchTerm = activeFile.basename;
                if (searchTerm) {
                    yield this.pasteIntoEditor(editor, searchTerm);
                }
            }
        });
    }
    getWikipediaTextForSearchTerm(editor) {
        return __awaiter(this, void 0, void 0, function* () {
            new WikipediaSearchModal(this.app, this, editor).open();
        });
    }
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadSettings();
            this.addCommand({
                id: "wikipedia-get-active-note-title",
                name: "Get Wikipedia for Active Note Title",
                editorCallback: (editor) => this.getWikipediaTextForActiveFile(editor),
            });
            this.addCommand({
                id: "wikipedia-get-search-term",
                name: "Get Wikipedia for Search Term",
                editorCallback: (editor) => this.getWikipediaTextForSearchTerm(editor),
            });
            this.addSettingTab(new WikipediaSettingTab(this.app, this));
        });
    }
    loadSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            this.settings = Object.assign({}, DEFAULT_SETTINGS, yield this.loadData());
        });
    }
    saveSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.saveData(this.settings);
        });
    }
}
class WikipediaSearchModal extends obsidian.Modal {
    constructor(app, plugin, editor) {
        super(app);
        this.plugin = plugin;
        this.editor = editor;
    }
    onOpen() {
        let { contentEl } = this;
        contentEl.createEl("h2", { text: "Enter Search Term:" });
        const inputs = contentEl.createDiv("inputs");
        const searchInput = new obsidian.TextComponent(inputs).onChange((searchTerm) => {
            this.searchTerm = searchTerm;
        });
        searchInput.inputEl.focus();
        searchInput.inputEl.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                this.close();
            }
        });
        const controls = contentEl.createDiv("controls");
        const searchButton = controls.createEl("button", {
            text: "Search",
            cls: "mod-cta",
            attr: {
                autofocus: true,
            },
        });
        searchButton.addEventListener("click", this.close.bind(this));
        const cancelButton = controls.createEl("button", { text: "Cancel" });
        cancelButton.addEventListener("click", this.close.bind(this));
    }
    onClose() {
        return __awaiter(this, void 0, void 0, function* () {
            let { contentEl } = this;
            contentEl.empty();
            if (this.searchTerm) {
                yield this.plugin.pasteIntoEditor(this.editor, this.searchTerm);
            }
        });
    }
}
class WikipediaSettingTab extends obsidian.PluginSettingTab {
    constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
    }
    display() {
        let { containerEl } = this;
        containerEl.empty();
        containerEl.createEl("h2", { text: "Obsidian Wikipedia" });
        new obsidian.Setting(containerEl)
            .setName("Wikipedia Language Prefix")
            .setDesc(`Choose Wikipedia language prefix to use (ex. en for English)`)
            .addText((textField) => {
            textField
                .setValue(this.plugin.settings.language)
                .onChange((value) => __awaiter(this, void 0, void 0, function* () {
                this.plugin.settings.language = value;
                yield this.plugin.saveSettings();
            }));
        });
        new obsidian.Setting(contain

... (Content truncated - file too large)
```

---


#### 📁 Directory: src\site\notes\.obsidian\plugins\quickadd

##### 📄 main.js
*Path: `src\site\notes\.obsidian\plugins\quickadd\main.js`*  
*Size: 3.39 MB*

```js
/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var yV=Object.create;var Gc=Object.defineProperty;var oV=Object.getOwnPropertyDescriptor;var AV=Object.getOwnPropertyNames;var zV=Object.getPrototypeOf,gV=Object.prototype.hasOwnProperty;var iV=(c,G,I)=>G in c?Gc(c,G,{enumerable:!0,configurable:!0,writable:!0,value:I}):c[G]=I;var rV=(c,G)=>()=>(G||c((G={exports:{}}).exports,G),G.exports),kV=(c,G)=>{for(var I in G)Gc(c,I,{get:G[I],enumerable:!0})},rW=(c,G,I,l)=>{if(G&&typeof G=="object"||typeof G=="function")for(let b of AV(G))!gV.call(c,b)&&b!==I&&Gc(c,b,{get:()=>G[b],enumerable:!(l=oV(G,b))||l.enumerable});return c};var kW=(c,G,I)=>(I=c!=null?yV(zV(c)):{},rW(G||!c||!c.__esModule?Gc(I,"default",{value:c,enumerable:!0}):I,c)),xV=c=>rW(Gc({},"__esModule",{value:!0}),c);var Z2=(c,G,I)=>(iV(c,typeof G!="symbol"?G+"":G,I),I);var u0=rV(D1=>{"use strict";D1.byteLength=vN;D1.toByteArray=tN;D1.fromByteArray=yN;var Ml=[],nl=[],JN=typeof Uint8Array<"u"?Uint8Array:Array,$Z="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(P2=0,t0=$Z.length;P2<t0;++P2)Ml[P2]=$Z[P2],nl[$Z.charCodeAt(P2)]=P2;var P2,t0;nl["-".charCodeAt(0)]=62;nl["_".charCodeAt(0)]=63;function w0(c){var G=c.length;if(G%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var I=c.indexOf("=");I===-1&&(I=G);var l=I===G?0:4-I%4;return[I,l]}function vN(c){var G=w0(c),I=G[0],l=G[1];return(I+l)*3/4-l}function eN(c,G,I){return(G+I)*3/4-I}function tN(c){var G,I=w0(c),l=I[0],b=I[1],Z=new JN(eN(c,l,b)),W=0,d=b>0?l-4:l,V;for(V=0;V<d;V+=4)G=nl[c.charCodeAt(V)]<<18|nl[c.charCodeAt(V+1)]<<12|nl[c.charCodeAt(V+2)]<<6|nl[c.charCodeAt(V+3)],Z[W++]=G>>16&255,Z[W++]=G>>8&255,Z[W++]=G&255;return b===2&&(G=nl[c.charCodeAt(V)]<<2|nl[c.charCodeAt(V+1)]>>4,Z[W++]=G&255),b===1&&(G=nl[c.charCodeAt(V)]<<10|nl[c.charCodeAt(V+1)]<<4|nl[c.charCodeAt(V+2)]>>2,Z[W++]=G>>8&255,Z[W++]=G&255),Z}function wN(c){return Ml[c>>18&63]+Ml[c>>12&63]+Ml[c>>6&63]+Ml[c&63]}function uN(c,G,I){for(var l,b=[],Z=G;Z<I;Z+=3)l=(c[Z]<<16&16711680)+(c[Z+1]<<8&65280)+(c[Z+2]&255),b.push(wN(l));return b.join("")}function yN(c){for(var G,I=c.length,l=I%3,b=[],Z=16383,W=0,d=I-l;W<d;W+=Z)b.push(uN(c,W,W+Z>d?d:W+Z));return l===1?(G=c[I-1],b.push(Ml[G>>2]+Ml[G<<4&63]+"==")):l===2&&(G=(c[I-2]<<8)+c[I-1],b.push(Ml[G>>10]+Ml[G>>4&63]+Ml[G<<2&63]+"=")),b.join("")}});var L5={};kV(L5,{default:()=>GI});module.exports=xV(L5);var QV=require("obsidian");var zl=require("obsidian");function KI(){}function Ql(c,G){for(let I in G)c[I]=G[I];return c}function ib(c){return c()}function xW(){return Object.create(null)}function WI(c){c.forEach(ib)}function VI(c){return typeof c=="function"}function _(c,G){return c!=c?G==G:c!==G||c&&typeof c=="object"||typeof c=="function"}function UW(c){return Object.keys(c).length===0}function jc(c,G,I,l){if(c){let b=MW(c,G,I,l);return c[0](b)}}function MW(c,G,I,l){return c[1]&&l?Ql(I.ctx.slice(),c[1](l(G))):I.ctx}function fc(c,G,I,l){if(c[2]&&l){let b=c[2](l(I));if(G.dirty===void 0)return b;if(typeof b=="object"){let Z=[],W=Math.max(G.dirty.length,b.length);for(let d=0;d<W;d+=1)Z[d]=G.dirty[d]|b[d];return Z}return G.dirty|b}return G.dirty}function Tc(c,G,I,l,b,Z){if(b){let W=MW(G,I,l,Z);c.p(W,b)}}function Cc(c){if(c.ctx.length>32){let G=[],I=c.ctx.length/32;for(let l=0;l<I;l++)G[l]=-1;return G}return-1}function Sc(c){let G={};for(let I in c)I[0]!=="$"&&(G[I]=c[I]);return G}function WG(c,G){let I={};G=new Set(G);for(let l in c)!G.has(l)&&l[0]!=="$"&&(I[l]=c[l]);return I}function Dc(c){return c&&VI(c.destroy)?c.destroy:KI}var BW=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,bc=class{constructor(G){this.options=G,this._listeners="WeakMap"in BW?new WeakMap:void 0}observe(G,I){return this._listeners.set(G,I),this._getObserver().observe(G,this.options),()=>{this._listeners.delete(G),this._observer.unobserve(G)}}_getObserver(){var G;return(G=this._observer)!==null&&G!==void 0?G:this._observer=new ResizeObserver(I=>{var l;for(let b of I)bc.entries.set(b.target,b),(l=this._listeners.get(b.target))===null||l===void 0||l(b)})}};bc.entries="WeakMap"in BW?new WeakMap:void 0;var LW=!1;function UV(){LW=!0}function MV(){LW=!1}function w(c,G){c.appendChild(G)}function wI(c,G,I){let l=BV(c);if(!l.getElementById(G)){let b=A("style");b.id=G,b.textContent=I,LV(l,b)}}function BV(c){if(!c)return document;let G=c.getRootNode?c.getRootNode():c.ownerDocument;return G&&G.host?G:c.ownerDocument}function LV(c,G){return w(c.head||c,G),G.sheet}function U(c,G,I){c.insertBefore(G,I||null)}function k(c){c.parentNode&&c.parentNode.removeChild(c)}function dc(c,G){for(let I=0;I<c.length;I+=1)c[I]&&c[I].d(G)}function A(c){return document.createElement(c)}function v2(c){return document.createElementNS("http://www.w3.org/2000/svg",c)}function LI(c){return document.createTextNode(c)}function C(){return LI(" ")}function Gl(){return LI("")}function r(c,G,I,l){return c.addEventListener(G,I,l),()=>c.removeEventListener(G,I,l)}function e(c,G,I){I==null?c.removeAttribute(G):c.getAttribute(G)!==I&&c.setAttribute(G,I)}function W2(c,G){for(let I in G)e(c,I,G[I])}function rb(c){return c===""?null:+c}function jV(c){return Array.from(c.childNodes)}function Nl(c,G){G=""+G,c.data!==G&&(c.data=G)}function dG(c,G){c.value=G??""}function kb(c,G,I,l){I==null?c.style.removeProperty(G):c.style.setProperty(G,I,l?"important":"")}function xb(c,G,I){for(let l=0;l<c.options.length;l+=1){let b=c.options[l];if(b.__value===G){b.selected=!0;return}}(!I||G!==void 0)&&(c.selectedIndex=-1)}function jW(c){let G=c.querySelector(":checked");return G&&G.__value}function cl(c,G,I){c.classList[I?"add":"remove"](G)}function fV(c,G,{bubbles:I=!1,cancelable:l=!1}={}){let b=document.createEvent("CustomEvent");return b.initCustomEvent(c,I,l,G),b}var Zc;function cc(c){Zc=c}function fW(){if(!Zc)throw new Error("Function called outside component initialization");return Zc}function Vc(c){fW().$$.on_mount.push(c)}function HI(){let c=fW();return(G,I,{cancelable:l=!1}={})=>{let b=c.$$.callbacks[G];if(b){let Z=fV(G,I,{cancelable:l});return b.slice().forEach(W=>{W.call(c,Z)}),!Z.defaultPrevented}return!0}}function FI(c,G){let I=c.$$.callbacks[G.type];I&&I.slice().forEach(l=>l.call(this,G))}var bG=[];var T=[],ZG=[],zb=[],TV=Promise.resolve(),gb=!1;function CV(){gb||(gb=!0,TV.then(TW))}function Wc(c){ZG.push(c)}function D(c){zb.push(c)}var Ab=new Set,cG=0;function TW(){if(cG!==0)return;let c=Zc;do{try{for(;cG<bG.length;){let G=bG[cG];cG++,cc(G),SV(G.$$)}}catch(G){throw bG.length=0,cG=0,G}for(cc(null),bG.length=0,cG=0;T.length;)T.pop()();for(let G=0;G<ZG.length;G+=1){let I=ZG[G];Ab.has(I)||(Ab.add(I),I())}ZG.length=0}while(bG.length);for(;zb.length;)zb.pop()();gb=!1,Ab.clear(),cc(c)}function SV(c){if(c.fragment!==null){c.update(),WI(c.before_update);let G=c.dirty;c.dirty=[-1],c.fragment&&c.fragment.p(c.ctx,G),c.after_update.forEach(Wc)}}function DV(c){let G=[],I=[];ZG.forEach(l=>c.indexOf(l)===-1?G.push(l):I.push(l)),I.forEach(l=>l()),ZG=G}var Lc=new Set,J2;function iI(){J2={r:0,c:[],p:J2}}function rI(){J2.r||WI(J2.c),J2=J2.p}function y(c,G){c&&c.i&&(Lc.delete(c),c.i(G))}function g(c,G,I,l){if(c&&c.o){if(Lc.has(c))return;Lc.add(c),J2.c.push(()=>{Lc.delete(c),l&&(I&&c.d(1),l())}),c.o(G)}else l&&l()}function Kc(c,G){g(c,1,1,()=>{G.delete(c.key)})}function Pc(c,G,I,l,b,Z,W,d,V,a,m,N){let F=c.length,h=Z.length,H=F,X={};for(;H--;)X[c[H].key]=H;let n=[],R=new Map,J=new Map,t=[];for(H=h;H--;){let s=N(b,Z,H),o=I(s),v=W.get(o);v?l&&t.push(()=>v.p(s,G)):(v=a(o,s),v.c()),R.set(o,n[H]=v),o in X&&J.set(o,Math.abs(H-X[o]))}let Y=new Set,p=new Set;function E(s){y(s,1),s.m(d,m),W.set(s.key,s),m=s.first,h--}for(;F&&h;){let s=n[h-1],o=c[F-1],v=s.key,x=o.key;s===o?(m=s.first,F--,h--):R.has(x)?!W.has(v)||Y.has(v)?E(s):p.has(x)?F--:J.get(v)>J.get(x)?(p.add(v),E(s)):(Y.add(x),F--):(V(o,W),F--)}for(;F--;){let s=c[F];R.has(s.key)||V(s,W)}for(;h;)E(n[h-1]);return WI(t),n}function VG(c,G){let I={},l={},b={$$scope:1},Z=c.length;for(;Z--;){let W=c[Z],d=G[Z];if(d){for(let V in W)V in d||(l[V]=1);for(let V in d)b[V]||(I[V]=d[V],b[V]=1);c[Z]=d}else for(let V in W)b[V]=1}for(let W in l)W in I||(I[W]=void 0);return I}function CW(c){return typeof c=="object"&&c!==null?c:{}}var KV=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"],f5=new Set([...KV]);function K(c,G,I){let l=c.$$.props[G];l!==void 0&&(c.$$.bound[l]=I,I(c.$$.ctx[l]))}function j(c){c&&c.c()}function L(c,G,I,l){let{fragment:b,after_update:Z}=c.$$;b&&b.m(G,I),l||Wc(()=>{let W=c.$$.on_mount.map(ib).filter(VI);c.$$.on_destroy?c.$$.on_destroy.push(...W):WI(W),c.$$.on_mount=[]}),Z.forEach(Wc)}function M(c,G){let I=c.$$;I.fragment!==null&&(DV(I.after_update),WI(I.on_destroy),I.fragment&&I.fragment.d(G),I.on_destroy=I.fragment=null,I.ctx=[])}function PV(c,G){c.$$.dirty[0]===-1&&(bG.push(c),CV(),c.$$.dirty.fill(0)),c.$$.dirty[G/31|0]|=1<<G%31}function $(c,G,I,l,b,Z,W,d=[-1]){let V=Zc;cc(c);let a=c.$$={fragment:null,ctx:[],props:Z,update:KI,not_equal:b,bound:xW(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(G.context||(V?V.$$.context:[])),callbacks:xW(),dirty:d,skip_bound:!1,root:G.target||V.$$.root};W&&W(a.root);let m=!1;if(a.ctx=I?I(c,G.props||{},(N,F,...h)=>{let H=h.length?h[0]:F;return a.ctx&&b(a.ctx[N],a.ctx[N]=H)&&(!a.skip_bound&&a.bound[N]&&a.bound[N](H),m&&PV(c,N)),F}):[],a.update(),m=!0,WI(a.before_update),a.fragment=l?l(a.ctx):!1,G.target){if(G.hydrate){UV();let N=jV(G.target);a.fragment&&a.fragment.l(N),N.forEach(k)}else a.fragment&&a.fragment.c();G.intro&&y(c.$$.fragment),L(c,G.target,G.anchor,G.customElement),MV(),TW()}cc(V)}var OV;typeof HTMLElement=="function"&&(OV=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connected

... (Content truncated - file too large)
```

---


#### 📁 Directory: src\site\notes\.obsidian\plugins\smart-connections

##### 📄 main.js
*Path: `src\site\notes\.obsidian\plugins\smart-connections\main.js`*  
*Size: 2.03 MB*

```js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/smart-embed-model/node_modules/base64-js/index.js
var require_base64_js = __commonJS({
  "node_modules/smart-embed-model/node_modules/base64-js/index.js"(exports2) {
    "use strict";
    exports2.byteLength = byteLength;
    exports2.toByteArray = toByteArray;
    exports2.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    var i;
    var len;
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len2 = b64.length;
      if (len2 % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      var validLen = b64.indexOf("=");
      if (validLen === -1) validLen = len2;
      var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
      return [validLen, placeHoldersLen];
    }
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i2;
      for (i2 = 0; i2 < len2; i2 += 4) {
        tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      return arr;
    }
    function tripletToBase64(num) {
      return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i2 = start; i2 < end; i2 += 3) {
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    function fromByteArray(uint8) {
      var tmp;
      var len2 = uint8.length;
      var extraBytes = len2 % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
        parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
      }
      if (extraBytes === 1) {
        tmp = uint8[len2 - 1];
        parts.push(
          lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
        );
      } else if (extraBytes === 2) {
        tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
        parts.push(
          lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
        );
      }
      return parts.join("");
    }
  }
});

// src/index.js
var src_exports = {};
__export(src_exports, {
  default: () => SmartConnectionsPlugin
});
module.exports = __toCommonJS(src_exports);
var import_obsidian29 = __toESM(require("obsidian"), 1);

// node_modules/obsidian-smart-env/smart_env.js
var import_obsidian11 = require("obsidian");

// node_modules/obsidian-smart-env/node_modules/smart-environment/components/settings.js
async function build_html(env, opts = {}) {
  const env_settings_html = Object.entries(env.settings_config).map(([setting_key, setting_config]) => {
    if (!setting_config.setting) setting_config.setting = setting_key;
    return this.render_setting_html(setting_config);
  }).join("\n");
  const env_collections_containers_html = Object.entries(env.collections).map(([collection_key, collection]) => {
    return `<div data-smart-settings="${collection_key}"></div>`;
  }).join("\n");
  const html = `
    <div class="">
      ${env_settings_html}
      ${env_collections_containers_html}
    </div>
  `;
  return html;
}
async function render(env, opts = {}) {
  const html = await build_html.call(this, env, opts);
  const frag = this.create_doc_fragment(html);
  return await post_process.call(this, env, frag, opts);
}
async function post_process(env, frag, opts = {}) {
  await this.render_setting_components(frag, { scope: env });
  const env_collections_containers = frag.querySelectorAll("[data-smart-settings]");
  for (const env_collections_container of env_collections_containers) {
    const collection_key = env_collections_container.dataset.smartSettings;
    const collection = env[collection_key];
    await collection.render_settings(env_collections_container);
  }
  return frag;
}

// node_modules/obsidian-smart-env/node_modules/smart-environment/node_modules/smart-settings/smart_settings.js
var SmartSettings = class {
  /**
   * Creates an instance of SmartEnvSettings.
   * @param {Object} main - The main object to contain the instance (smart_settings) and getter (settings)
   * @param {Object} [opts={}] - Configuration options.
   */
  constructor(main, opts = {}) {
    this.main = main;
    this.opts = opts;
    this._fs = null;
    this._settings = {};
    this._saved = false;
    this.save_timeout = null;
  }
  static async create(main, opts = {}) {
    const smart_settings = new this(main, opts);
    await smart_settings.load();
    main.smart_settings = smart_settings;
    Object.defineProperty(main, "settings", {
      get() {
        return smart_settings.settings;
      },
      set(settings) {
        smart_settings.settings = settings;
      }
    });
    return smart_settings;
  }
  static create_sync(main, opts = {}) {
    const smart_settings = new this(main, opts);
    smart_settings.load_sync();
    main.smart_settings = smart_settings;
    Object.defineProperty(main, "settings", {
      get() {
        return smart_settings.settings;
      },
      set(settings) {
        smart_settings.settings = settings;
      }
    });
    return smart_settings;
  }
  /**
   * Gets the current settings, wrapped with an observer to handle changes.
   * @returns {Proxy} A proxy object that observes changes to the settings.
   */
  get settings() {
    return observe_object(this._settings, (property, value, target) => {
      if (this.save_timeout) clearTimeout(this.save_timeout);
      this.save_timeout = setTimeout(() => {
        this.save(this._settings);
        this.save_timeout = null;
      }, 1e3);
    });
  }
  /**
   * Sets the current settings.
   * @param {Object} settings - The new settings to apply.
   */
  set settings(settings) {
    this._settings = settings;
  }
  async save(settings = this._settings) {
    if (typeof this.opts.save === "function") await this.opts.save(settings);
    else await this.main.save_settings(settings);
  }
  async load() {
    if (typeof this.opts.load === "function") this._settings = await this.opts.load();
    else this._settings = await this.main.load_settings();
  }
  load_sync() {
    if (typeof this.opts.load === "function") this._settings = this.opts.load();
    else this._settings = this.main.load_settings();
  }
};
function observe_object(obj, on_change) {
  function create_proxy(target) {
    return new Proxy(target, {
      set(target2, property, value) {
        if (target2[property] !== value) {
          target2[property] = value;
          on_change(property, value, target2);
        }
        if (typeof value === "object" && value !== null) {
          target2[property] = create_proxy(value);
        }
        return true;
      },
      get(target2, property) {
        const result = target2[property];
        if (typeof result ===

... (Content truncated - file too large)
```

---


#### 📁 Directory: src\site\notes\.obsidian\plugins\templater-obsidian

##### 📄 main.js
*Path: `src\site\notes\.obsidian\plugins\templater-obsidian\main.js`*  
*Size: 325.13 KB*

```js
/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var Aa=Object.create;var Ln=Object.defineProperty;var _a=Object.getOwnPropertyDescriptor;var xa=Object.getOwnPropertyNames;var ya=Object.getPrototypeOf,ja=Object.prototype.hasOwnProperty;var Yi=n=>Ln(n,"__esModule",{value:!0});var va=(n,e)=>{Yi(n);for(var t in e)Ln(n,t,{get:e[t],enumerable:!0})},wa=(n,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of xa(e))!ja.call(n,r)&&r!=="default"&&Ln(n,r,{get:()=>e[r],enumerable:!(t=_a(e,r))||t.enumerable});return n},X=n=>wa(Yi(Ln(n!=null?Aa(ya(n)):{},"default",n&&n.__esModule&&"default"in n?{get:()=>n.default,enumerable:!0}:{value:n,enumerable:!0})),n);var Ui=(()=>{for(var n=new Uint8Array(128),e=0;e<64;e++)n[e<26?e+65:e<52?e+71:e<62?e-4:e*4-205]=e;return t=>{for(var r=t.length,i=new Uint8Array((r-(t[r-1]=="=")-(t[r-2]=="="))*3/4|0),o=0,a=0;o<r;){var l=n[t.charCodeAt(o++)],c=n[t.charCodeAt(o++)],d=n[t.charCodeAt(o++)],m=n[t.charCodeAt(o++)];i[a++]=l<<2|c>>4,i[a++]=c<<4|d>>2,i[a++]=d<<6|m}return i}})();va(exports,{default:()=>Oi});var jr=X(require("obsidian"));var L=X(require("obsidian"));var Gi=X(require("obsidian"));function oe(n){let e=new Gi.Notice("",8e3);n instanceof O&&n.console_msg?(e.noticeEl.innerHTML=`<b>Templater Error</b>:<br/>${n.message}<br/>Check console for more information`,console.error("Templater Error:",n.message,`
`,n.console_msg)):e.noticeEl.innerHTML=`<b>Templater Error</b>:<br/>${n.message}`}var O=class extends Error{constructor(e,t){super(e);this.console_msg=t;this.name=this.constructor.name,Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}};async function Te(n,e){try{return await n()}catch(t){return t instanceof O?oe(t):oe(new O(e,t.message)),null}}function ke(n,e){try{return n()}catch(t){return oe(new O(e,t.message)),null}}var re=function(){function n(){}return n.explainIfInvalidTSDocTagName=function(e){if(e[0]!=="@")return'A TSDoc tag name must start with an "@" symbol';if(!n._tsdocTagNameRegExp.test(e))return"A TSDoc tag name must start with a letter and contain only letters and numbers"},n.validateTSDocTagName=function(e){var t=n.explainIfInvalidTSDocTagName(e);if(t)throw new Error(t)},n.explainIfInvalidLinkUrl=function(e){if(e.length===0)return"The URL cannot be empty";if(!n._urlSchemeRegExp.test(e))return'An @link URL must begin with a scheme comprised only of letters and numbers followed by "://". (For general URLs, use an HTML "<a>" tag instead.)';if(!n._urlSchemeAfterRegExp.test(e))return'An @link URL must have at least one character after "://"'},n.explainIfInvalidHtmlName=function(e){if(!n._htmlNameRegExp.test(e))return"An HTML name must be an ASCII letter followed by zero or more letters, digits, or hyphens"},n.validateHtmlName=function(e){var t=n.explainIfInvalidHtmlName(e);if(t)throw new Error(t)},n.explainIfInvalidPackageName=function(e){if(e.length===0)return"The package name cannot be an empty string";if(!n._validPackageNameRegExp.test(e))return"The package name ".concat(JSON.stringify(e)," is not a valid package name")},n.explainIfInvalidImportPath=function(e,t){if(e.length>0){if(e.indexOf("//")>=0)return'An import path must not contain "//"';if(e[e.length-1]==="/")return'An import path must not end with "/"';if(!t&&e[0]==="/")return'An import path must not start with "/" unless prefixed by a package name'}},n.isSystemSelector=function(e){return n._systemSelectors.has(e)},n.explainIfInvalidUnquotedIdentifier=function(e){if(e.length===0)return"The identifier cannot be an empty string";if(n._identifierBadCharRegExp.test(e))return"The identifier cannot non-word characters";if(n._identifierNumberStartRegExp.test(e))return"The identifier must not start with a number"},n.explainIfInvalidUnquotedMemberIdentifier=function(e){var t=n.explainIfInvalidUnquotedIdentifier(e);if(t!==void 0)return t;if(n.isSystemSelector(e))return'The identifier "'.concat(e,'" must be quoted because it is a TSDoc system selector name')},n._tsdocTagNameRegExp=/^@[a-z][a-z0-9]*$/i,n._urlSchemeRegExp=/^[a-z][a-z0-9]*\:\/\//i,n._urlSchemeAfterRegExp=/^[a-z][a-z0-9]*\:\/\/./i,n._htmlNameRegExp=/^[a-z]+[a-z0-9\-]*$/i,n._identifierBadCharRegExp=/[^a-z0-9_$]/i,n._identifierNumberStartRegExp=/^[0-9]/,n._validPackageNameRegExp=/^(?:@[a-z0-9\-_\.]+\/)?[a-z0-9\-_\.]+$/i,n._systemSelectors=new Set(["instance","static","constructor","class","enum","function","interface","namespace","type","variable"]),n}();var kr=function(){function n(){this._docNodeDefinitionsByKind=new Map,this._docNodeDefinitionsByConstructor=new Map}return n.prototype.registerDocNodes=function(e,t){var r=re.explainIfInvalidPackageName(e);if(r)throw new Error("Invalid NPM package name: "+r);for(var i=0,o=t;i<o.length;i++){var a=o[i];if(!n._nodeKindRegExp.test(a.docNodeKind))throw new Error("The DocNode kind ".concat(JSON.stringify(a.docNodeKind)," is not a valid identifier.")+" It must start with an underscore or letter, and be comprised of letters, numbers, and underscores");var l=this._docNodeDefinitionsByKind.get(a.docNodeKind);if(l!==void 0)throw new Error('The DocNode kind "'.concat(a.docNodeKind,'" was already registered')+" by ".concat(l.packageName));if(l=this._docNodeDefinitionsByConstructor.get(a.constructor),l!==void 0)throw new Error("This DocNode constructor was already registered by ".concat(l.packageName)+" as ".concat(l.docNodeKind));var c={docNodeKind:a.docNodeKind,constructor:a.constructor,packageName:e,allowedChildKinds:new Set};this._docNodeDefinitionsByKind.set(a.docNodeKind,c),this._docNodeDefinitionsByConstructor.set(a.constructor,c)}},n.prototype.throwIfNotRegisteredKind=function(e){if(!this._docNodeDefinitionsByKind.has(e))throw new Error('The DocNode kind "'.concat(e,'" was not registered with this TSDocConfiguration'))},n.prototype.registerAllowableChildren=function(e,t){for(var r=this._getDefinition(e),i=0,o=t;i<o.length;i++){var a=o[i];this._getDefinition(a),r.allowedChildKinds.add(a)}},n.prototype.isAllowedChild=function(e,t){var r=this._getDefinition(e);return r.allowedChildKinds.has(t)},n.prototype._getDefinition=function(e){var t=this._docNodeDefinitionsByKind.get(e);if(t===void 0)throw new Error('The DocNode kind "'.concat(e,'" was not registered with this TSDocConfiguration'));return t},n._nodeKindRegExp=/^[_a-z][_a-z0-9]*$/i,n}();var U;(function(n){n.Core="Core",n.Extended="Extended",n.Discretionary="Discretionary",n.None="None"})(U||(U={}));var R;(function(n){n[n.InlineTag=0]="InlineTag",n[n.BlockTag=1]="BlockTag",n[n.ModifierTag=2]="ModifierTag"})(R||(R={}));var Sr=function(){function n(e){re.validateTSDocTagName(e.tagName),this.tagName=e.tagName,this.tagNameWithUpperCase=e.tagName.toUpperCase(),this.syntaxKind=e.syntaxKind,this.standardization=e.standardization||U.None,this.allowMultiple=!!e.allowMultiple}return n.validateTSDocTagName=function(e){re.validateTSDocTagName(e)},n}();var G=function(){function n(){}return n._defineTag=function(e){return new Sr(e)},n.alpha=n._defineTag({tagName:"@alpha",syntaxKind:R.ModifierTag,standardization:U.Discretionary}),n.beta=n._defineTag({tagName:"@beta",syntaxKind:R.ModifierTag,standardization:U.Discretionary}),n.decorator=n._defineTag({tagName:"@decorator",syntaxKind:R.BlockTag,allowMultiple:!0,standardization:U.Extended}),n.defaultValue=n._defineTag({tagName:"@defaultValue",syntaxKind:R.BlockTag,standardization:U.Extended}),n.deprecated=n._defineTag({tagName:"@deprecated",syntaxKind:R.BlockTag,standardization:U.Core}),n.eventProperty=n._defineTag({tagName:"@eventProperty",syntaxKind:R.ModifierTag,standardization:U.Extended}),n.example=n._defineTag({tagName:"@example",syntaxKind:R.BlockTag,allowMultiple:!0,standardization:U.Extended}),n.experimental=n._defineTag({tagName:"@experimental",syntaxKind:R.ModifierTag,standardization:U.Discretionary}),n.inheritDoc=n._defineTag({tagName:"@inheritDoc",syntaxKind:R.InlineTag,standardization:U.Extended}),n.internal=n._defineTag({tagName:"@internal",syntaxKind:R.ModifierTag,standardization:U.Discretionary}),n.label=n._defineTag({tagName:"@label",syntaxKind:R.InlineTag,standardization:U.Core}),n.link=n._defineTag({tagName:"@link",syntaxKind:R.InlineTag,allowMultiple:!0,standardization:U.Core}),n.override=n._defineTag({tagName:"@override",syntaxKind:R.ModifierTag,standardization:U.Extended}),n.packageDocumentation=n._defineTag({tagName:"@packageDocumentation",syntaxKind:R.ModifierTag,standardization:U.Core}),n.param=n._defineTag({tagName:"@param",syntaxKind:R.BlockTag,allowMultiple:!0,standardization:U.Core}),n.privateRemarks=n._defineTag({tagName:"@privateRemarks",syntaxKind:R.BlockTag,standardization:U.Core}),n.public=n._defineTag({tagName:"@public",syntaxKind:R.ModifierTag,standardization:U.Discretionary}),n.readonly=n._defineTag({tagName:"@readonly",syntaxKind:R.ModifierTag,standardization:U.Extended}),n.remarks=n._defineTag({tagName:"@remarks",syntaxKind:R.BlockTag,standardization:U.Core}),n.returns=n._defineTag({tagName:"@returns",syntaxKind:R.BlockTag,standardization:U.Core}),n.sealed=n._defineTag({tagName:"@sealed",syntaxKind:R.ModifierTag,standardization:U.Extended}),n.see=n._defineTag({tagName:"@see",syntaxKind:R.BlockTag,standardization:U.Extended}),n.throws=n._defineTag({tagName:"@throws",syntaxKind:R.BlockTag,allowMultiple:!0,standardization:U.Extended}),n.typeParam=n._defineTag({tagName:"@typeParam",syntaxKind:R.BlockTag,allowMultiple:!0,standardization:U.Core}),n.virtual=n._defineTag({tagName:"@virtual",syntaxKind:R.ModifierTag,standardization:U.Extended}),n.allDefinitions=[n.alpha,n.beta,n.defaultValue,n.decorator,n.deprecated,n.eventProperty,n.example,n.experimental,n.inheritDoc,n.internal,n.label,n.link,n.override,n.packageDocumentation,n.param,n.privateRemarks,n.public,n.readonly,n.remarks,n.returns,n.sealed,n.see,n.throws,n.typeParam,n.virtual],n}();var Cr=function(){function n(){this.ignoreUndefinedTags=!1,this.reportUnsupportedTags=!1,this.reportUnsupportedHtmlElements=!1}return n}();var g;(functio

... (Content truncated - file too large)
```

---


#### 📁 Directory: src\site\notes\.obsidian\plugins\update-time-on-edit

##### 📄 data.json
*Path: `src\site\notes\.obsidian\plugins\update-time-on-edit\data.json`*  
*Size: 83.32 KB*

```json
{
  "dateFormat": "yyyy-MM-dd'T'HH:mm",
  "enableCreateTime": true,
  "headerUpdated": "updated",
  "headerCreated": "created",
  "minMinutesBetweenSaves": 1,
  "ignoreGlobalFolder": [],
  "ignoreCreatedFolder": [],
  "enableExperimentalHash": false,
  "fileHashMap": {
    "Starter-Kit/Templates/5_Structure Template.md": "76d235062a5da5e2ab91e322157211085d632adfe491749fb7c806dd65e55941",
    "Starter-Kit/1_Fleeting/About - 1_Fleeting Notes.md": "3b089379fbb1fdd8f3586d0c759bda4c6311232f14e4110be1e019857bc6448e",
    "Starter-Kit/1_Fleeting/My First Fleeting Note.md": "6ab92174f9d2f08664dd549c895c3bb97759d699c872da91031bc3d442b02c23",
    "2025-04-08.md": "54cdf3d54e7a5dec2690c6004620e1f69e1bdc28a4dbb3e6ca09f9d9eda85124",
    "Dayle.md": "9028b4254179cf7a429142e77fe0a43e60912e4ff830c5c0579589a03a12fe1f",
    "Starter-Kit/Templates/5_Structure Template 1.md": "30d571d96baedf02fb5c67e2d2b774717c5e89c3a809d640cfa825de4380eab3",
    "99 - RESOURCES/99 - TEMPLATE/Prompt.txt.md": "361a8346cbf6d8a4d9254c3f9e2e1ea79f5713f393658c49652bf3e511fabdbd",
    "99 - RESOURCES/Diagram.md": "624ff338b38a4b21e5fcb97dd7f133c072485ae074ea5e7fd0eb01c192918f28",
    "99 - RESOURCES/99 - TEMPLATE/5_Structure Template 1.md": "8dadc408f2020c559a8accc4ca44a1d5b36dd2af41fc661ab1e90cb2e643e931",
    "99 - RESOURCES/99 - TEMPLATE/TEMPLATE_R00.md": "0a791712950a38589260b932faeb06acc4e98145a34c019abea16d9edf89d012",
    "99 - RESOURCES/99 - TEMPLATE/!TEMPLATE_R02.md": "a305ebf38b02c7f7f6030e763ee52fa9c0b89a6c5ea92ed57705e6dd1940dba1",
    "99 - RESOURCES/99 - TEMPLATE/5_Structure Template.md": "41b5339972262e7557fffefd46df183851e5b85bbae09c4b0cccefc397e65543",
    "99 - RESOURCES/99 - TEMPLATE/Prompt2.md.md": "be76093820924000e112c605cb752088089337568504ca229ca6a561261df9f2",
    "10 - PERMANENT/Projeto de Diplomação R00 - PERMA BACKUP.md": "55923c4a440001a949db5699b5ca1210f171e9896d40fb2c37879a4a966fb132",
    "Terceiro Plano de Ação.md": "ba8fdfc5a39d071ce6f9fa2dfbf426db09a1a2219654f65f1b410640deb760e0",
    "99 - RESOURCES/99 - TEMPLATE/TEMPLATE OFICIAL.md": "07ee4a4d9fce88f20a4428deefb991c7b48dac933c6e3283bd6379ee4ea37edf",
    "Lib/site-packages/pymupdf-1.25.3.dist-info/README.md": "1e41c1764d01500b6d81de7332d144fb32cc52907a1d7726edd2c42c94d77411",
    "Lib/site-packages/path_and_address-2.0.1.dist-info/licenses/AUTHORS.md": "b370ed190ebe4fcb43cb5b6fd7a09eb9ba80bd9d341631f86f5b57c0e1a6842c",
    "Lib/site-packages/Markdown-3.7.dist-info/LICENSE.md": "f5f852f32c3c16253ea3c1b502d7b8a5ed03bdbf329bed13267c406091d389e2",
    "Lib/site-packages/idna-3.10.dist-info/LICENSE.md": "3109dc6b311832d691c1187ce3dd21839062cebb8f237fda962075af35d37055",
    "Lib/site-packages/werkzeug/debug/shared/ICON_LICENSE.md": "035262b13564992bae5b1c7f7b418aa1fa02115fa858b7605001c44bcfef9ec5",
    "Lib/site-packages/flask/sansio/README.md": "e73c1548e96ffb31e66a1b8ac6fc6218c80e3e1895c5b1152f81592262219d5e",
    "Lib/site-packages/grip-4.6.2.dist-info/AUTHORS.md": "e735c2ffcfa55ee2114184aef1549be499e83274d46d8b4f5a8523ed9348d1ca",
    "Projeto de Diplomação R00 - PERMA 1.md": "d3e936c138fa0a02564c364ea344a90ae7b898068c7764af684f3142f4cde82c",
    "10 - PERMANENT/folder/Projeto de Diplomação R00 - PERMA 1.md": "5014d9bfddb3be17143fa76fd4c683f055dc9b034dfad540cab3cf77e1086ea2",
    "99 - RESOURCES/99 - TEMPLATE/new_tamplate.md": "ad803c86f457f8f619980ca3f582c3501a7b1681fc15cb2cdd9b752dc790a583",
    "Projeto de Diplomação R00 - PERMA.md": "7a912000294aa9d5e11fb697cce52f06bd80b6aef2af911762f67d12b4cfd9da",
    "node_modules/esprima/README.md": "21af14d107042808c0dc78b801af3f50e64e6f9ba4dcc80b0b5049db860960ad",
    "node_modules/sprintf-js/README.md": "d486b5051c0811d2e13ed9d2a298032ec05d124d3adf26025dda1a84b1d93063",
    "node_modules/is-extendable/README.md": "4ba0aa9027cceb3f61908fd344fabea86d8841f929489595be8952242013e9e3",
    "node_modules/extend-shallow/README.md": "87a0d3655970c6b76e840f472d3c177aa92b3a20a607f546b5802d429943e779",
    "node_modules/section-matter/README.md": "2eb5a974e8b0865c6923de61ef6c937b924f559a9b58c27ea3587514f7c7b6b1",
    "node_modules/js-yaml/CHANGELOG.md": "3399afca900055eeceb9d3fbd50eec4157d0ad0e5f14f76b2b44ed86f57df004",
    "node_modules/js-yaml/README.md": "7193f8a2d07ca2a8c491d9ca76f7b6f18fdc5a0fecdecd000b9170492fd30b75",
    "node_modules/gray-matter/CHANGELOG.md": "96c166799de639b92c820283864bf2609b7f0155ed5dd572af6ac937b0615d1b",
    "node_modules/gray-matter/README.md": "20894d82cae4484c24e5fb382883ad63d8735a3f3603a7451fdcaf54a34be882",
    "node_modules/argparse/CHANGELOG.md": "577f533d0a7a630890374e3422f8787f1349fc1de81fa48feb597ec3f169218a",
    "node_modules/argparse/README.md": "016f24a3703e5077077afee49181b9a1fd5322a98ef435deb5bba92e4fd00684",
    "AGENT2.0.md": "810a612d0a602166b88db1269b4f98290492759d932234818c4b0f9e532e0fdd",
    "00 - INBOX/1.md": "ab928ccbbeb67d5dfcd97a4baa843eded8751d042f816823599e44d2d73e4902",
    "00 - INBOX/2.md": "af1203c615dab2f2331eb0aeefcccf3752e78cc6134973e4cd0de1ecd957b5f6",
    "00 - INBOX/Templates.md": "c80a9c3c449311d39491e67b90e7611b22ab12e85aa8799e80b155145f44cd2f",
    "00 - INBOX/00 - ANTIGOS/Bi Directional Links.md": "688c31e843fb4bce4135ddd23c0343b06ad8818667ab17f8e871fdf124be34c4",
    "00 - INBOX/00 - ANTIGOS/banco de dados vetorial.md": "6f55b1f54ea68a0b22ad5e2b7dadedeb78faadeff5e50747966ec75ba92cbd96",
    "00 - INBOX/00 - ANTIGOS/LangChain.md": "f50ff09bf8b524b5be8fb77d2b961b09bc6035062fb2ae803f4fd1f8f8b016a5",
    "00 - INBOX/00 - ANTIGOS/primeira respostsa md.md": "bce7d440fe3108e5d27d3187101772ea0b65fae5f0df063d188ad9864ad91943",
    "00 - INBOX/00 - ANTIGOS/Templates.md": "311f47f40c34ed1b779c52dbc9d79d0e61936783a7801a8d5db6d51386424f9c",
    "00 - INBOX/01 - TCC(VEERSAOCORRIGIDA)/botao_revit_correcao.md": "28949a1abd2ded59373b9b12369d4a3d91120af3588e9d42beafd5985b8f51c8",
    "00 - INBOX/01 - TCC(VEERSAOCORRIGIDA)/botao_revit_otimizado.md": "1ef24f2bf51a39029c8aee41fe03ac19282750c64dcba5db27d62f46655aa61a",
    "00 - INBOX/01 - TCC(VEERSAOCORRIGIDA)/cache_manager.md": "2f21adecdecfdbd3abd4195229f67997751e01e7a9a359636fbcc1a60fe1a2b8",
    "00 - INBOX/01 - TCC(VEERSAOCORRIGIDA)/command_parser.md": "0554026a3afc05f948f91845dd5dd07c1b569cced3695c5da0a52e354e010a40",
    "00 - INBOX/01 - TCC(VEERSAOCORRIGIDA)/compilado_ATUALIZADO.md": "80f3dbfaad9d97cafca6050795c92a87bf06242d8d2cf2ca1574081fc328d277",
    "00 - INBOX/01 - TCC(VEERSAOCORRIGIDA)/database_agent.md": "4fef07a8b20ae4f60295436978f597f2eba9a7c4516fdd93fba47e6928aca023",
    "00 - INBOX/01 - TCC(VEERSAOCORRIGIDA)/enhanced_database_agent.md": "4bad27670db4458068b0caeb0bde670d813fbc6f5cda125a8e1220fb1c950126",
    "00 - INBOX/01 - TCC(VEERSAOCORRIGIDA)/config.md": "14170f003b22cbce76792dd433812bc8f1894c96279a7a26bcdd35e9de58c7fa",
    "00 - INBOX/01 - TCC(VEERSAOCORRIGIDA)/llm_interface.md": "e25291a87469ea4b6562a8cf55c3741dcd4c188c41703c7dbbc584afd8f59bb6",
    "00 - INBOX/01 - TCC(VEERSAOCORRIGIDA)/FLUXOGRAMA .md": "019392c5fc4eedd8c3b1722f751853cb50e2810029b8beb9d97fb01380df3c0c",
    "00 - INBOX/01 - TCC(VEERSAOCORRIGIDA)/main.md": "8bb12b350366c33ac98e24b23937b57c8f7ed3a3edc82382b239bce0d5576a6f",
    "00 - INBOX/01 - TCC(VEERSAOCORRIGIDA)/orchestrator_agent.md": "92a1d972111b40fb7032f53924d33bf072ad782db00eb181ccfdb0cb1630362f",
    "00 - INBOX/01 - TCC(VEERSAOCORRIGIDA)/monitor.md": "c50db572acb1fdf1ec60b33c4da2170f4f5736a6086ab51e508bcae088afdb58",
    "00 - INBOX/01 - TCC(VEERSAOCORRIGIDA)/main2.md": "59454ca2b3c6da6362fe70b0cfc56dbacf754a661d696e0a0c85c0041f300daf",
    "00 - INBOX/01 - TCC(VEERSAOCORRIGIDA)/script_gen_integration.md": "c7b984e9c4882c5bcee4a142e3d07eeeb0017654c159e2022ef49c22d7052ded",
    "00 - INBOX/01 - TCC(VEERSAOCORRIGIDA)/script_generator_agent.md": "35e7edd947383d88a0e5684bf120d094870d09695b342c7fe13ce1c91dc80fad",
    "00 - INBOX/01 - TCC(VEERSAOCORRIGIDA)/script_validator.md": "a3e716d7bac7eaf65ba25e93eb929534f8aaccd557179dd99bcedf817ecb3145",
    "00 - INBOX/01 - TCC(VEERSAOCORRIGIDA)/test_integration_main2..md": "7ee30d054b859f938a4c2bfd712d63cb32e23522887048c79dde31d091ef77c3",
    "00 - INBOX/01 - TCC(VEERSAOCORRIGIDA)/validation_agent.md": "87a28507380dee6850170cce516fad49da4ddbddb086eabda356654ee01aa61d",
    "00 - INBOX/04 - OUTROS/!TEMPLATE_R02.md": "098f359b80fe07031fb5e2ba24bcbaf5f83ae537ddd89ab70180308b9ddff5ba",
    "00 - INBOX/04 - OUTROS/5_Structure Template 1.md": "ec5bd9b3f8a2e3f7abd6a1e51df4a9b17156d4d9d953eebbf749a4cfb6940008",
    "00 - INBOX/04 - OUTROS/TEMPLATE OFICIAL.md": "1bb32eb4460305772fa0ec53a8fb63f09436742165156228491b5d0114c23c76",
    "10 - PERMANENT/EXPLICAÇÃO EXPERIENCIA/Resposta Relato 4.md": "04d2449e37a3071ff0c832be12be265276fcf272d3320576b9065a617e53c3e6",
    "10 - PERMANENT/EXPLICAÇÃO EXPERIENCIA/Explicação MAPA 2.md": "313f8134db97e879fd188e11d617dd1b328d975bd4f796984d38c7283d8f71c3",
    "10 - PERMANENT/EXPLICAÇÃO EXPERIENCIA/Explicação MAPA 3.md": "9722e1d62be723608f6023cee3baf4b8adb5f3116881e8ba74ad923711268ac9",
    "10 - PERMANENT/EXPLICAÇÃO EXPERIENCIA/Relato1.md": "cb595f98d351c465e98d40829bb0e93183d4a3e801bf47c7f98775359456e1b0",
    "10 - PERMANENT/EXPLICAÇÃO EXPERIENCIA/Resposta Relato 1.md": "541207b3ad24166c3e9bb7626e172ba75292646455f99651d67e2e20fe52b7f1",
    "10 - PERMANENT/EXPLICAÇÃO EXPERIENCIA/Resposta Relato 2.md": "6d70ac4dc128379ac0f2087084dc6f3c8ae7008ab8f6ecbc426a78cbf0b0a42b",
    "10 - PERMANENT/EXPLICAÇÃO EXPERIENCIA/Resposta Relato 3.md": "1295064e1b80b37cae875eb17e93103f792adf25de950aacdcde9a7ffab9c7b4",
    "10 - PERMANENT/EXPLICAÇÃO EXPERIENCIA/Explicação MAPA 1.md": "289122cbdbd2939ad1985d2f57bde6e98bb41f741c57d89fd1b13a187406fe68",
    "30 - FINAL FORM/OBSIDIAN EXPERIENCIA 2.md": "df5cf23a82865acb6b7919a6f90ea39329acca8ce9967ed6ce06e374f6f06b34",
    "30 - FINAL FORM/OBSIDIAN EXPERIENCIA.md": "d4d6e886abfa0de6c02d8246e84935d1670d78749c0e6239f35462209dafd580",
    "30 - FINAL FORM/RESPOSTA COMPLETINHA.md": "1eca92bcdbbd75689092102e37351b62935bdf294372d288474973f8fb467065",
    "20 - MPS OF CONTENTS/MAPA 3.md": "

... (Content truncated - file too large)
```

---

##### 📄 main.js
*Path: `src\site\notes\.obsidian\plugins\update-time-on-edit\main.js`*  
*Size: 203.52 KB*

```js
/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/js-sha256/src/sha256.js
var require_sha256 = __commonJS({
  "node_modules/js-sha256/src/sha256.js"(exports, module2) {
    (function() {
      "use strict";
      var ERROR = "input is invalid type";
      var WINDOW = typeof window === "object";
      var root = WINDOW ? window : {};
      if (root.JS_SHA256_NO_WINDOW) {
        WINDOW = false;
      }
      var WEB_WORKER = !WINDOW && typeof self === "object";
      var NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node;
      if (NODE_JS) {
        root = global;
      } else if (WEB_WORKER) {
        root = self;
      }
      var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && typeof module2 === "object" && module2.exports;
      var AMD = typeof define === "function" && define.amd;
      var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
      var HEX_CHARS = "0123456789abcdef".split("");
      var EXTRA = [-2147483648, 8388608, 32768, 128];
      var SHIFT = [24, 16, 8, 0];
      var K = [
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
      ];
      var OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"];
      var blocks = [];
      if (root.JS_SHA256_NO_NODE_JS || !Array.isArray) {
        Array.isArray = function(obj) {
          return Object.prototype.toString.call(obj) === "[object Array]";
        };
      }
      if (ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
        ArrayBuffer.isView = function(obj) {
          return typeof obj === "object" && obj.buffer && obj.buffer.constructor === ArrayBuffer;
        };
      }
      var createOutputMethod = function(outputType, is224) {
        return function(message) {
          return new Sha256(is224, true).update(message)[outputType]();
        };
      };
      var createMethod = function(is224) {
        var method = createOutputMethod("hex", is224);
        if (NODE_JS) {
          method = nodeWrap(method, is224);
        }
        method.create = function() {
          return new Sha256(is224);
        };
        method.update = function(message) {
          return method.create().update(message);
        };
        for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
          var type = OUTPUT_TYPES[i];
          method[type] = createOutputMethod(type, is224);
        }
        return method;
      };
      var nodeWrap = function(method, is224) {
        var crypto = require("crypto");
        var Buffer2 = require("buffer").Buffer;
        var algorithm = is224 ? "sha224" : "sha256";
        var bufferFrom;
        if (Buffer2.from && !root.JS_SHA256_NO_BUFFER_FROM) {
          bufferFrom = Buffer2.from;
        } else {
          bufferFrom = function(message) {
            return new Buffer2(message);
          };
        }
        var nodeMethod = function(message) {
          if (typeof message === "string") {
            return crypto.createHash(algorithm).update(message, "utf8").digest("hex");
          } else {
            if (message === null || message === void 0) {
              throw new Error(ERROR);
            } else if (message.constructor === ArrayBuffer) {
              message = new Uint8Array(message);
            }
          }
          if (Array.isArray(message) || ArrayBuffer.isView(message) || message.constructor === Buffer2) {
            return crypto.createHash(algorithm).update(bufferFrom(message)).digest("hex");
          } else {
            return method(message);
          }
        };
        return nodeMethod;
      };
      var createHmacOutputMethod = function(outputType, is224) {
        return function(key, message) {
          return new HmacSha256(key, is224, true).update(message)[outputType]();
        };
      };
      var createHmacMethod = function(is224) {
        var method = createHmacOutputMethod("hex", is224);
        method.create = function(key) {
          return new HmacSha256(key, is224);
        };
        method.update = function(key, message) {
          return method.create(key).update(message);
        };
        for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
          var type = OUTPUT_TYPES[i];
          method[type] = createHmacOutputMethod(type, is224);
        }
        return method;
      };
      function Sha256(is224, sharedMemory) {
        if (sharedMemory) {
          blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
          this.blocks = blocks;
        } else {
          this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        }
        if (is224) {
          this.h0 = 3238371032;
          this.h1 = 914150663;
          this.h2 = 812702999;
          this.h3 = 4144912697;
          this.h4 = 4290775857;
          this.h5 = 1750603025;
          this.h6 = 1694076839;
          this.h7 = 3204075428;
        } else {
          this.h0 = 1779033703;
          this.h1 = 3144134277;
          this.h2 = 1013904242;
          this.h3 = 2773480762;
          this.h4 = 1359893119;
          this.h5 = 2600822924;
          this.h6 = 528734635;
          this.h7 = 1541459225;
        }
        this.block = this.start = this.bytes = this.hBytes = 0;
        this.finalized = this.hashed = false;
        this.first = true;
        this.is224 = is224;
      }
      Sha256.prototype.update = function(message) {
        if (this.finalized) {
          return;
        }
        var notString, type = typeof message;
        if (type !== "string") {
          if (type === "object") {
            if (message === null) {
              throw new Error(ERROR);
            } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
              message = new Uint8Array(message);
            } else if (!Array.isArray(message)) {
              if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
                throw new Error(ERROR);
              }
            }
          } else {
            throw new Error(ERROR);
          }
          notString = true;
        }
        var code, index = 0, i, length = message.length, blocks2 = this.blocks;
        while (index < length) {
          if (this.hashed) {
            this.hashed = false;
            blocks2[0] = this.block;
            blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
          }
          if (notString) {
            for (i = this.start; index < length && i < 64; ++index) {
              blocks2[i >> 2] |= message[index] << SHIFT[i++ & 3];
            }
          } else {
            for (i = this.start; index < length && i < 64; ++index) {
              code = message.charCodeAt(index);
              if (code < 128) {
                blocks2[i >> 2] |= code << SHIFT[i++ & 3];
              } else if (code < 2048) {
         

... (Content truncated - file too large)
```

---


#### 📁 Directory: src\site\notes\.obsidian\plugins\xmind-viewer

##### 📄 main.js
*Path: `src\site\notes\.obsidian\plugins\xmind-viewer\main.js`*  
*Size: 3.94 KB*

```js
"use strict";var e=require("obsidian");class t{channel=new MessageChannel;channelSetupPromise;eventIndex=0;handlers={};constructor(e,t="*"){const n=e.getIframe();if(n.hasAttribute("data-event-channel-setup"))throw new Error("An embed viewer instance already initialized on the iframe!");n.setAttribute("data-event-channel-setup","true"),this.channelSetupPromise=(async()=>{await new Promise(e=>{n.addEventListener("load",()=>{this.channel.port1.start();const s=t=>{const[n]=t.data;"channel-ready"===n&&(t.preventDefault(),this.channel.port1.removeEventListener("message",s),this.channel.port1.addEventListener("message",this.eventDispatcher.bind(this)),e(void 0))};this.channel.port1.addEventListener("message",s),n.contentWindow?.postMessage(["setup-channel",{port:this.channel.port2}],t||"*",[this.channel.port2])})})})()}eventDispatcher(e){const[t,n,s]=e.data||[];"event"===t&&n&&this.handlers[n]&&this.handlers[n].forEach(e=>e(s))}addEventListener(e,t){this.handlers[e]=this.handlers[e]||[],this.handlers[e].includes(t)||this.handlers[e].push(t)}removeEventListener(e,t){if(!this.handlers[e])return;const n=this.handlers[e].findIndex(e=>e===t);this.handlers[e].splice(n,1)}async emit(e,t){await this.channelSetupPromise;const n="xmind-embed-viewer#"+this.eventIndex++;await new Promise(s=>{const r=e=>{const[t,i]=e.data;t===n&&(this.channel.port1.removeEventListener("message",r),s(i))};this.channel.port1.addEventListener("message",r),this.channel.port1.postMessage([e,t,n])})}}class n{iframe;constructor(e,t){let n;const s="string"==typeof e?document.querySelector(e):e;if(null===s)throw new Error("IFrame or mount element not found by selector "+e);s instanceof HTMLIFrameElement?n=s:(n=document.createElement("iframe"),s.appendChild(n)),n.setAttribute("frameborder","0"),n.setAttribute("scrolling","no"),n.setAttribute("allowfullscreen","true"),n.setAttribute("allow","allowfullscreen"),n.setAttribute("crossorigin","anonymous"),n.setAttribute("src",t),this.iframe=n}getIframe(){return this.iframe}setStyles(e){const t=this.getIframe();for(const[n,s]of Object.entries(e))t.style[n]=s}}class s{iframeController;iframeEventChannelController;internalState={sheets:[],zoomScale:100,currentSheetId:""};region;constructor(e){const{file:s,el:r,region:i="global",styles:a={height:"350px",width:"750px"},isPitchModeDisabled:l}=e,o="cn"===i?"www.xmind.cn":"www.xmind.app",h=new n(r,`https://${o}/embed-viewer${l?"?pitch-mode=disabled":""}`),c=new t(h,`https://${o}`);this.iframeController=h,this.iframeEventChannelController=c,this.region=i,c.addEventListener("sheet-switch",e=>this.internalState.currentSheetId=e),c.addEventListener("zoom-change",e=>this.internalState.zoomScale=e),c.addEventListener("sheets-load",e=>this.internalState.sheets=e),this.iframeController.setStyles(a),s&&this.load(s)}addEventListener(e,t){this.iframeEventChannelController.addEventListener(e,t)}removeEventListener(e,t){this.iframeEventChannelController.removeEventListener(e,t)}setStyles(e){this.iframeController.setStyles(e)}load(e){this.iframeEventChannelController.emit("open-file",e)}setZoomScale(e){this.iframeEventChannelController.emit("zoom",e)}setFitMap(){this.iframeEventChannelController.emit("fit-map")}switchSheet(e){this.iframeEventChannelController.emit("switch-sheet",e)}get zoom(){return this.internalState.zoomScale}get sheets(){return JSON.parse(JSON.stringify(this.internalState.sheets))}get currentSheetId(){return this.internalState.currentSheetId}}class r extends e.FileView{plugin;styles;constructor(e,t,n){super(e),this.app=t,this.plugin=n,this.styles={width:"100%",height:"100%",border:"none"}}getViewType(){return"xmind-viewer"}getIcon(){return"brain"}getDisplayText(){return this.file?`XMind view: ${this.file.basename}`:"No file open"}async onLoadFile(e){const t=await this.app.vault.readBinary(e);new s({el:this.contentEl,file:t,region:"global",styles:this.styles})}}const i="xmind-viewer";class a extends e.Plugin{onload(){this.registerView(i,e=>new r(e,this.app,this)),this.registerExtensions(["xmind"],i)}}module.exports=a;
```

---


#### 📁 Directory: src\site\notes\.obsidian\plugins\zettelkasten-llm-tools

##### 📄 main.js
*Path: `src\site\notes\.obsidian\plugins\zettelkasten-llm-tools\main.js`*  
*Size: 1.80 MB*

```js
/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all2) => {
  for (var name2 in all2)
    __defProp(target, name2, { get: all2[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/crypto-js/core.js
var require_core = __commonJS({
  "node_modules/crypto-js/core.js"(exports, module2) {
    (function(root3, factory) {
      if (typeof exports === "object") {
        module2.exports = exports = factory();
      } else if (typeof define === "function" && define.amd) {
        define([], factory);
      } else {
        root3.CryptoJS = factory();
      }
    })(exports, function() {
      var CryptoJS = CryptoJS || function(Math2, undefined2) {
        var crypto;
        if (typeof window !== "undefined" && window.crypto) {
          crypto = window.crypto;
        }
        if (typeof self !== "undefined" && self.crypto) {
          crypto = self.crypto;
        }
        if (typeof globalThis !== "undefined" && globalThis.crypto) {
          crypto = globalThis.crypto;
        }
        if (!crypto && typeof window !== "undefined" && window.msCrypto) {
          crypto = window.msCrypto;
        }
        if (!crypto && typeof global !== "undefined" && global.crypto) {
          crypto = global.crypto;
        }
        if (!crypto && typeof require === "function") {
          try {
            crypto = require("crypto");
          } catch (err) {
          }
        }
        var cryptoSecureRandomInt = function() {
          if (crypto) {
            if (typeof crypto.getRandomValues === "function") {
              try {
                return crypto.getRandomValues(new Uint32Array(1))[0];
              } catch (err) {
              }
            }
            if (typeof crypto.randomBytes === "function") {
              try {
                return crypto.randomBytes(4).readInt32LE();
              } catch (err) {
              }
            }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        };
        var create2 = Object.create || function() {
          function F() {
          }
          return function(obj) {
            var subtype;
            F.prototype = obj;
            subtype = new F();
            F.prototype = null;
            return subtype;
          };
        }();
        var C = {};
        var C_lib = C.lib = {};
        var Base = C_lib.Base = function() {
          return {
            /**
             * Creates a new object that inherits from this object.
             *
             * @param {Object} overrides Properties to copy into the new object.
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         field: 'value',
             *
             *         method: function () {
             *         }
             *     });
             */
            extend: function(overrides) {
              var subtype = create2(this);
              if (overrides) {
                subtype.mixIn(overrides);
              }
              if (!subtype.hasOwnProperty("init") || this.init === subtype.init) {
                subtype.init = function() {
                  subtype.$super.init.apply(this, arguments);
                };
              }
              subtype.init.prototype = subtype;
              subtype.$super = this;
              return subtype;
            },
            /**
             * Extends this object and runs the init method.
             * Arguments to create() will be passed to init().
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var instance = MyType.create();
             */
            create: function() {
              var instance = this.extend();
              instance.init.apply(instance, arguments);
              return instance;
            },
            /**
             * Initializes a newly created object.
             * Override this method to add some logic when your objects are created.
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         init: function () {
             *             // ...
             *         }
             *     });
             */
            init: function() {
            },
            /**
             * Copies properties into this object.
             *
             * @param {Object} properties The properties to mix in.
             *
             * @example
             *
             *     MyType.mixIn({
             *         field: 'value'
             *     });
             */
            mixIn: function(properties) {
              for (var propertyName in properties) {
                if (properties.hasOwnProperty(propertyName)) {
                  this[propertyName] = properties[propertyName];
                }
              }
              if (properties.hasOwnProperty("toString")) {
                this.toString = properties.toString;
              }
            },
            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = instance.clone();
             */
            clone: function() {
              return this.init.prototype.extend(this);
            }
          };
        }();
        var WordArray = C_lib.WordArray = Base.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of 32-bit words.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.create();
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
           */
          init: function(words, sigBytes) {
            words = this.words = words || [];
            if (sigBytes != undefined2) {
              this.sigBytes = sigBytes;
            } else {
              this.sigBytes = words.length * 4;
            }
          },
          /**
           * Converts this word array to a string.
           *
           * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
           *
           * @return {string} The stringified word array.
           *
           * @example
           *
           *     var string = wordArray + '';
           *     var string = wordArray.toString();
           *     var string = wordArray.toString(CryptoJS.enc.Utf8);
           */
          toString: function(encoder) {
            return (encoder || Hex).stringify(this);
          },
          /**
           * Concatenates a word array to this word array.
           *
           * @param {WordArray} wordArray The word array to append.
           *
           * @return {WordArray} This word array.
           *
           * @example
           *
           *     wordArray1.concat(wordArray2);
           */
          concat: function(wordArray) {
            var thisWords = this.words;
            var thatWords = wordArray.words;
            var thisSigBytes = this.sigBytes;
            var thatSigBytes = wordArray.sigBytes;
            this.clamp();
            if (thisSigBytes % 4) {
              for (var i = 0; i < thatSigBytes; i++) {
                var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
              }
            } else {
              for (var j = 0; j < thatSigBytes; j += 4) {
                thisWords[thisSigBytes + j >>> 2] = thatWords[j >>> 2];
              }
            }
            this.sigBytes += thatSigBytes;
            return this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var words = this.words;
            var sigBytes = this.sigBytes;
            words[sigBytes >>> 2] &= 4294967295 << 32 - sigBytes % 

... (Content truncated - file too large)
```

---


#### 📁 Directory: src\site\notes\.obsidian

##### 📄 workspace.json
*Path: `src\site\notes\.obsidian\workspace.json`*  
*Size: 10.17 KB*

```json
{
  "main": {
    "id": "c7d30e9b97fec99e",
    "type": "split",
    "children": [
      {
        "id": "18abf28034eec826",
        "type": "tabs",
        "children": [
          {
            "id": "5d317dfd218c7071",
            "type": "leaf",
            "state": {
              "type": "markdown",
              "state": {
                "file": "ADRIENE/reforma-ad_adriene.md",
                "mode": "source",
                "source": false
              },
              "icon": "lucide-file",
              "title": "reforma-ad_adriene"
            }
          }
        ]
      }
    ],
    "direction": "vertical"
  },
  "left": {
    "id": "9ad8475d5dedca88",
    "type": "split",
    "children": [
      {
        "id": "ac9a35054d1a2913",
        "type": "tabs",
        "children": [
          {
            "id": "3e6d224aebbb97dc",
            "type": "leaf",
            "state": {
              "type": "file-explorer",
              "state": {
                "sortOrder": "alphabetical",
                "autoReveal": true
              },
              "icon": "lucide-folder-closed",
              "title": "Files"
            }
          },
          {
            "id": "373c30763f1e971a",
            "type": "leaf",
            "state": {
              "type": "search",
              "state": {
                "query": "",
                "matchingCase": false,
                "explainSearch": false,
                "collapseAll": false,
                "extraContext": false,
                "sortOrder": "alphabetical"
              },
              "icon": "lucide-search",
              "title": "Search"
            }
          },
          {
            "id": "3b8d98a0ed392a76",
            "type": "leaf",
            "state": {
              "type": "bookmarks",
              "state": {},
              "icon": "lucide-bookmark",
              "title": "Bookmarks"
            }
          }
        ]
      }
    ],
    "direction": "horizontal",
    "width": 245.5
  },
  "right": {
    "id": "24023d18c86abac7",
    "type": "split",
    "children": [
      {
        "id": "b4aef97fd367a375",
        "type": "tabs",
        "children": [
          {
            "id": "b1fa14afaa4bf854",
            "type": "leaf",
            "state": {
              "type": "backlink",
              "state": {
                "file": "30 - MPS OF CONTENT/Yoga MOC.md",
                "collapseAll": false,
                "extraContext": false,
                "sortOrder": "alphabetical",
                "showSearch": false,
                "searchQuery": "",
                "backlinkCollapsed": false,
                "unlinkedCollapsed": true
              },
              "icon": "links-coming-in",
              "title": "Backlinks for Yoga MOC"
            }
          },
          {
            "id": "22dcdd2207748ebf",
            "type": "leaf",
            "state": {
              "type": "outgoing-link",
              "state": {
                "file": "00 - INBOX/Anahata/Sistema Nadis - Completo Interativo.md",
                "linksCollapsed": false,
                "unlinkedCollapsed": false
              },
              "icon": "links-going-out",
              "title": "Outgoing links from Sistema Nadis - Completo Interativo"
            }
          },
          {
            "id": "b9c40afd727e26f1",
            "type": "leaf",
            "state": {
              "type": "outline",
              "state": {
                "file": "10 - PERMANENT/Zettels/Yoga/60-1--se-receber-uma-agressao.md",
                "followCursor": false,
                "showSearch": false,
                "searchQuery": ""
              },
              "icon": "lucide-list",
              "title": "Outline of 60-1--se-receber-uma-agressao"
            }
          },
          {
            "id": "b5321f493253d01f",
            "type": "leaf",
            "state": {
              "type": "copilot-tab",
              "state": {},
              "icon": "lucide-file",
              "title": "Plugin no longer active"
            }
          },
          {
            "id": "f1547c463ca1858d",
            "type": "leaf",
            "state": {
              "type": "copilot-tab",
              "state": {},
              "icon": "lucide-file",
              "title": "Plugin no longer active"
            }
          },
          {
            "id": "886139cb56fbba8e",
            "type": "leaf",
            "state": {
              "type": "semantic-search-tab",
              "state": {},
              "icon": "lucide-file",
              "title": "Plugin no longer active"
            }
          },
          {
            "id": "e0033084d9be9935",
            "type": "leaf",
            "state": {
              "type": "copilot-tab",
              "state": {},
              "icon": "lucide-file",
              "title": "Plugin no longer active"
            }
          },
          {
            "id": "bb0e023aa858eb7a",
            "type": "leaf",
            "state": {
              "type": "tag",
              "state": {
                "sortOrder": "frequency",
                "useHierarchy": true,
                "showSearch": false,
                "searchQuery": ""
              },
              "icon": "lucide-tags",
              "title": "Tags"
            }
          },
          {
            "id": "fd191757cac5519c",
            "type": "leaf",
            "state": {
              "type": "smart-connections-view",
              "state": {},
              "icon": "lucide-file",
              "title": "Plugin no longer active"
            }
          },
          {
            "id": "049881419eba08aa",
            "type": "leaf",
            "state": {
              "type": "copilot-chat-view",
              "state": {},
              "icon": "lucide-file",
              "title": "Plugin no longer active"
            }
          },
          {
            "id": "85816710cad55f0e",
            "type": "leaf",
            "state": {
              "type": "mxmind-view",
              "state": {},
              "icon": "lucide-file",
              "title": "Plugin no longer active"
            }
          },
          {
            "id": "98a53013ee502a68",
            "type": "leaf",
            "state": {
              "type": "semantic-search-tab",
              "state": {},
              "icon": "lucide-file",
              "title": "Plugin no longer active"
            }
          },
          {
            "id": "ef430928d50b97d1",
            "type": "leaf",
            "state": {
              "type": "copilot-tab",
              "state": {},
              "icon": "lucide-file",
              "title": "Plugin no longer active"
            }
          }
        ],
        "currentTab": 10
      }
    ],
    "direction": "horizontal",
    "width": 200,
    "collapsed": true
  },
  "left-ribbon": {
    "hiddenItems": {
      "switcher:Open quick switcher": false,
      "graph:Open graph view": false,
      "canvas:Create new canvas": false,
      "daily-notes:Open today's daily note": false,
      "templates:Insert template": false,
      "command-palette:Open command palette": false
    }
  },
  "active": "5d317dfd218c7071",
  "lastOpenFiles": [
    "REVIT/RODRIGO EMPRESA/projeto-eletrico-e-hidrossanitario-re_rodrigo-empresa.md",
    "REVIT/RODRIGO EMPRESA/Projeto Elétrico e Hidrossanitario 'RE'.md",
    "util/readme_unknown.md",
    "util/guia_rapido_unknown.md",
    "SEFERIN GT/projeto-eletrico-gt_gt.md",
    "SEFERIN GP/projeto-eletrico-gp_gp.md",
    "SEFERIN CD/projeto-eletrico-cd_cd.md",
    "REVIT/ZOTTI/projeto-eletrico-dz_zotti.md",
    "REVIT/SICREDI/projeto-eletrico-si_sicredi.md",
    "REVIT/MARISTA/projeto-eletrico-ma_marista.md",
    "REVIT/LOJAS REMIÃO/projeto-eletrico-lr._lojas-remiao.md",
    "REVIT/LOJA JOAO WALLIG/projeto-eletrico-jw_loja-joao.md",
    "REVIT/LOJA AVENIDA DO FORTE/projeto-eletrico-af_loja-avenida.md",
    "REVIT/DOM PEDRITO/projeto-eletrico-dp_dom-pedrito.md",
    "REVIT/CASA SITIO/projeto-eletrico-e-hidrosanitario-cs_casa-sitio.md",
    "REVIT/BARÃO DE UBA/projeto-eletrico-bu_barao-uba.md",
    "RAFAEL SPICKER/projeto-eletrico-e-hidrossanitario-rp_rafael.md",
    "PREDIO COM COMERCIO/projeto-eletrico-e-hidrossanitario-rmc_predio-comercio.md",
    "NAIRO/projeto-nf_nairo.md",
    "LUIZ EDUARDO E PREICILA/projeto-lep_lep.md",
    "ALEXANDRE/projeto-eletrico-e-hidrossanitario-al_alexandre.md",
    "ADRIENE/reforma-ad_adriene.md",
    "readme_unknown.md",
    "plano_unknown.md",
    "passo-a-passo_unknown.md",
    "descricao_ex_unknown.md",
    "00 - INBOX/Anahata/canvas_anahata_completo.canvas",
    "00 - INBOX/05 - CANVAS/Shuddhi Sadhana.canvas",
    "00 - INBOX/05 - CANVAS/Shuddhi Sadhana.txt",
    "00 - INBOX/05 - CANVAS/Novo(a) Documento de Texto.txt",
    "00 - INBOX/05 - CANVAS",
    "00 - INBOX/Nova pasta",
    "00 - INBOX/04 - INVESTIGAÇÕES/site personalizado.txt",
    "00 - INBOX/04 - INVESTIGAÇÕES/Novo(a) Documento de Texto.txt",
    "00 - INBOX/04 - INVESTIGAÇÕES/site shuddi.txt",
    "00 - INBOX/04 - INVESTIGAÇÕES/html suddhi.txt",
    "00 - INBOX/04 - INVESTIGAÇÕES/Shuddhi Sādhanā_ Guia Completo_.pdf",
    "00 - INBOX/04 - INVESTIGAÇÕES/Plano Completo para Material Didático de Yoga SwáSthya – Módulo __Shuddhi Sādhanā__ (Purificação dos.pdf",
    "00 - INBOX/Anahata/Anahata Simbol.jpg",
    "EXPLICAÇÃO EXPERIENCIA/20 - MPS OF CONTENTS/test.png",
    "EXPLICAÇÃO EXPERIENCIA/20 - MPS OF CONTENTS/Mapa explicação.png",
    "00 - INBOX/03 - IMAGENS_PDF/Screenshot_9.png",
    "00 - INBOX/03 - IMAGENS_PDF/Screenshot_8.png",
    "00 - INBOX/03 - IMAGENS_PDF/Screenshot_7.png",
    "00 - INBOX/03 - IMAGENS_PDF/Screenshot_6.png",
    "00 - INBOX/03 - IMAGENS_PDF/Screenshot_5.png",
    "00 - INBOX/03 - IMAGENS_PDF/Screenshot_4.png",
    "00 - INBOX/03 - IMAGENS_PDF/Screenshot_3.png",
    "00 - INBOX/Anahata/anahata sem confirmação.canvas",
    "Untitled.canvas",
    "10 - PERMANENT/01

... (Content truncated - file too large)
```

---


#### 📁 Directory: src\site\notes\ADRIENE

##### 📄 reforma-ad_adriene.md
*Path: `src\site\notes\ADRIENE\reforma-ad_adriene.md`*  
*Size: 2.87 KB*

```md
---
created: 2025-07-30T01:31
dg-publish: true
ferramentas: AutoCAD
permalink: /notes/reforma-ad-adriene-ad/
setor: Residencial
title: reforma-ad-adriene-ad
updated: 2025-07-30T03:19
---

# Reforma Casa 🏡

**Reforma elétrica completa de residência térrea** — Projeto desenvolvido para atualização total da infraestrutura elétrica de uma casa existente, com foco em funcionalidade, segurança e integração com o projeto de interiores.

- **Local:** Porto Alegre, RS  
- **Ano:** 2024  
- **Ferramentas:**, AutoCAD, Sketchup (suporte ao projeto luminotécnico por render)  

<div class="project-gallery reveal">
  <img src="/assets/imagens/capa_thumb.jpg_adriene.jpg" alt="Fachada renderizada" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/planta_thumb.jpg_adriene.jpg" alt="Planta baixa elétrica" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/detalhe_thumb.jpg_adriene.jpg" alt="Detalhamento do quadro de distribuição" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/render_thumb.jpg_adriene.jpg" alt="Render interno fornecido pelo arquiteto" class="gallery-thumb" loading="lazy">
</div>

## Descrição do Projeto

O projeto “Reforma Casa” consistiu na reestruturação completa das instalações elétricas de uma residência de dois pavimentos, integrando um novo layout de interiores proposto por arquiteto colaborador. O escopo contemplou desde o levantamento da infraestrutura existente até a elaboração de uma nova proposta técnica e estética.

### Escopo Técnico Detalhado

- **Novo Quadro de Distribuição (CD):** Readequação completa a partir da entrada existente, com reorganização dos circuitos e reserva para futuras expansões
- **Iluminação:** Redefinição dos pontos de luz com base no projeto de interiores; uso de spots, pendentes e iluminação indireta
- **Tomadas e Força:** Redistribuição total dos pontos de uso, com circuitos independentes para eletrodomésticos e climatização
- **Projeto de Comunicação:** Infraestrutura para pontos de rede e TV, com eletrocalhas e caixas de passagem bem posicionadas
- **Integração com Interiores:** Alinhamento dos pontos elétricos ao render arquitetônico, respeitando estética e funcionalidade

## Tecnologias Utilizadas

- **Software:** AutoCAD, Sketchup (referência para simulações de iluminação)
- **Normas:** NBR 5410:2004 (instalações elétricas), NBR 14565 (sistemas de cabeamento estruturado)


## Documentação

[📄 **Ver Planta Elétrica**](/assets/pdfs/reforma-casa_planta.pdf_adriene.pdf){:target="_blank" .reveal}

<div class="pdf-container reveal">
  <object data="/assets/pdfs/reforma-casa_planta.pdf#toolbar=0"
          type="application/pdf" width="100%" height="500">
    <p>PDF indisponível — <a href="/assets/pdfs/reforma-casa_planta.pdf" target="_blank">baixar</a>.</p>
  </object>
</div>
```

---


#### 📁 Directory: src\site\notes\ALEXANDRE

##### 📄 projeto-eletrico-e-hidrossanitario-al_alexandre.md
*Path: `src\site\notes\ALEXANDRE\projeto-eletrico-e-hidrossanitario-al_alexandre.md`*  
*Size: 3.52 KB*

```md
---
created: 2025-07-30T01:31
dg-publish: true
ferramentas: AutoCAD
permalink: /notes/projeto-eletrico-e-hidrossanitario-al-alexandre-al/
setor: Residencial
title: projeto-eletrico-e-hidrossanitario-al-alexandre-al
updated: 2025-07-30T03:19
---

# Projeto Elétrico e Hidrosanitário Casa AL 🏡

**Residência unifamiliar de alto padrão — 3 pavimentos / 360 m²**  
Projeto completo de instalações **elétricas e hidrossanitárias** para uma residência localizada em condomínio fechado. Desenvolvido para a família do próprio empreendedor, o projeto atendeu a altos padrões de detalhamento técnico e funcionalidade.

- **Local:** Condomínio fechado – RS  
- **Ano:** 2019  
- **Área construída:** 360 m²  
- **Ferramentas:** AutoCAD 

<div class="project-gallery reveal">
  <img src="/assets/imagens/capa_thumb.jpg_alexandre.jpg" alt="Fachada renderizada" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/planta_eletrica_thumb.jpg_alexandre.jpg" alt="Planta elétrica geral" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/planta_hidrosanitaria_thumb.jpg_alexandre.jpg" alt="Planta hidrossanitária" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/render_thumb.jpg_alexandre.jpg" alt="Render interno fornecido pelo arquiteto" class="gallery-thumb" loading="lazy">
</div>

## Descrição do Projeto

O projeto Casa AL consistiu na concepção e detalhamento completo das instalações **elétricas** e **hidrossanitárias** de uma residência com três pavimentos. Todos os subsistemas foram projetados do zero, visando confiabilidade, funcionalidade e integração com o projeto arquitetônico renderizado.

### Escopo Técnico Detalhado

#### ⚡ Instalações Elétricas
- **Três Quadros Elétricos:** Um por pavimento, com divisão inteligente de circuitos
- **Iluminação LED:** Pontos distribuídos por cômodo, incluindo áreas externas
- **Tomadas e Força:** Circuitos específicos para eletrodomésticos, climatização e bombas
- **Ar-condicionado e aquecedores:** Inclusos no dimensionamento e na infraestrutura elétrica
- **Quadro de Cargas:** Com tabela discriminativa por circuito
- **Telefonia e Internet:** Infraestrutura de cabeamento e pontos RJ instalados
- **Tubulações e embutidos:** Desenho técnico completo de eletrodutos em lajes e paredes

#### 💧 Instalações Hidrossanitárias
- **Sistema de coleta pluvial e cloacal:** Caixas de inspeção dimensionadas e bem distribuídas
- **Impermeabilização com manta bedim** para garantir estanqueidade nos pontos críticos
- **Calhas e condutores verticais:** Integrados à arquitetura
- **Aquecedor de piscina:** Dimensionado e especificado com traçado hidráulico próprio

## Tecnologias Utilizadas

- **Software:** AutoCAD (layout, detalhamento)
- **Normas:**  
  - NBR 5410:2004 (instalações elétricas de baixa tensão)  
  - NBR 8160:1999 (sistemas prediais de esgoto sanitário)  
  - NBR 5626:2020 (instalações prediais de água fria e quente)


## Documentação

[📄 **Ver Planta Elétrica**](/assets/pdfs/casa-al_eletrica.pdf_alexandre.pdf){:target="_blank" .reveal}  
[📄 **Ver Planta Hidrossanitária**](/assets/pdfs/casa-al_hidrosanitaria.pdf_alexandre.pdf){:target="_blank" .reveal}

<div class="pdf-container reveal">
  <object data="/assets/pdfs/casa-al_eletrica.pdf#toolbar=0"
          type="application/pdf" width="100%" height="500">
    <p>PDF indisponível — <a href="/assets/pdfs/casa-al_eletrica.pdf" target="_blank">baixar</a>.</p>
  </object>
</div>
```

---


#### 📁 Directory: src\site\notes\LUIZ EDUARDO E PREICILA

##### 📄 projeto-lep_lep.md
*Path: `src\site\notes\LUIZ EDUARDO E PREICILA\projeto-lep_lep.md`*  
*Size: 3.32 KB*

```md
---
created: 2025-07-30T01:31
dg-publish: true
ferramentas: AutoCAD
permalink: /notes/projeto-lep-lep/
setor: Residencial
title: projeto-lep-lep
updated: 2025-07-30T03:19
---

# Projeto Elétrico e Hidrossanitário “LEP” 🏡

**Residência de alto padrão — 3 pavimentos / 300 m²**  
Projeto completo de instalações **elétricas e hidrossanitárias** para uma residência sofisticada localizada em condomínio fechado no Rio Grande do Sul. O projeto hidrossanitário foi **aprovado junto à concessionária DMAE**, garantindo conformidade normativa e legal para execução da obra.

- **Local:** Condomínio fechado – RS  
- **Ano:** 2020  
- **Área construída:** 300 m²  
- **Ferramentas:** AutoCAD 2023  

<div class="project-gallery reveal">
  <img src="/assets/imagens/capa_thumb.jpg_lep.jpg" alt="Fachada principal LEP" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/planta_eletrica_thumb.jpg_lep.jpg" alt="Planta elétrica geral" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/planta_hidrosanitaria_thumb.jpg_lep.jpg" alt="Planta hidráulica e esgoto" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/render_thumb.jpg_lep.jpg" alt="Render arquitetônico" class="gallery-thumb" loading="lazy">
</div>

## Descrição do Projeto

O projeto “LEP” envolveu a elaboração integral dos sistemas elétrico e hidrossanitário de uma residência de alto padrão com três pavimentos. O projeto foi desenvolvido com foco na eficiência energética, no conforto e na integração com o padrão estético de alto nível definido pelos arquitetos.

### Escopo Técnico Detalhado

#### ⚡ Instalações Elétricas
- **Iluminação e Tomadas:** Distribuição completa em todos os cômodos, incluindo área gourmet e externa
- **Quadros Elétricos:** Três quadros (um por pavimento), com circuitos setorizados
- **Climatização:** Infraestrutura para splits em todos os ambientes
- **Jacuzzi Externa:** Dimensionamento específico para motor e proteção dedicada
- **Espera para Sistema Fotovoltaico:** Espaço reservado no CD e dutos preparados
- **Rede de Dados e Telefonia:** Infraestrutura completa para cabeamento estruturado

#### 💧 Instalações Hidrossanitárias
- **Água Fria e Quente:** Sistema com aquecimento por boiler
- **Esgoto:** Cloacal e pluvial, com dimensionamento completo
- **Caixas de Inspeção:** Posicionamento estratégico para manutenção
- **Aprovação DMAE:** Projeto regularizado junto à concessionária de saneamento


## Tecnologias Utilizadas

- **Software:** AutoCAD (plantas técnicas e detalhamentos)
- **Normas:**  
  - NBR 5410:2004 (elétrica baixa tensão)  
  - NBR 5626:2020 (água quente e fria)  
  - NBR 8160:1999 (esgoto sanitário)   
  - Normativas DMAE Porto Alegre


## Documentação

[📄 **Ver Planta Elétrica**](/assets/pdfs/projeto-lep_eletrica.pdf_lep.pdf){:target="_blank" .reveal}  
[📄 **Ver Planta Hidrossanitária**](/assets/pdfs/projeto-lep_hidrosanitaria.pdf_lep.pdf){:target="_blank" .reveal}

<div class="pdf-container reveal">
  <object data="/assets/pdfs/projeto-lep_eletrica.pdf#toolbar=0"
          type="application/pdf" width="100%" height="500">
    <p>PDF indisponível — <a href="/assets/pdfs/projeto-lep_eletrica.pdf" target="_blank">baixar</a>.</p>
  </object>
</div>
```

---


#### 📁 Directory: src\site\notes\NAIRO

##### 📄 projeto-nf_nairo.md
*Path: `src\site\notes\NAIRO\projeto-nf_nairo.md`*  
*Size: 3.63 KB*

```md
---
created: 2025-07-30T01:31
dg-publish: true
ferramentas: AutoCAD
permalink: /notes/projeto-nf-nairo-nf/
setor: Residencial
title: projeto-nf-nairo-nf
updated: 2025-07-30T03:06
---

# Projeto Elétrico e Hidrossanitário “NF” 🏡

**Residência de luxo — 2 pavimentos + subsolo / com piscina e garagem subterrânea**  
Projeto completo das instalações **elétricas** e **hidrossanitárias** para uma residência de alto padrão localizada em condomínio fechado. O projeto foi desenvolvido com foco em desempenho, conforto térmico, integração com áreas de lazer e detalhamento executivo de alta precisão.

- **Local:** Condomínio fechado – RS  
- **Ano:** 2018  
- **Área estimada:** 300m2 
- **Ferramentas:** AutoCAD 2023  

<div class="project-gallery reveal">
  <img src="/assets/imagens/capa_thumb.jpg_nairo.jpg" alt="Fachada renderizada do projeto NF" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/planta_eletrica_thumb.jpg_nairo.jpg" alt="Planta elétrica geral NF" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/planta_hidrosanitaria_thumb.jpg_nairo.jpg" alt="Planta hidráulica NF" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/render_thumb.jpg_nairo.jpg" alt="Render arquitetônico do projeto" class="gallery-thumb" loading="lazy">
</div>

## Descrição do Projeto

O Projeto “NF” envolveu o desenvolvimento das soluções completas para as instalações elétricas e hidrossanitárias de uma residência de alto padrão com **dois pavimentoso, garagem subterrânea e área de lazer com piscina e cascata**. O projeto priorizou conforto, sofisticação e funcionalidade, com detalhamentos técnicos compatíveis com obras de alto padrão.

### Escopo Técnico Detalhado

#### ⚡ Instalações Elétricas
- **Iluminação e Tomadas:** Layout completo de pontos em todos os ambientes internos e externos
- **Sistema de Climatização:** Infraestrutura elétrica para múltiplos aparelhos de ar-condicionado
- **Piscina com Cascata:** Inclusão de motores e dispositivos de acionamento elétrico dedicados
- **Setorização de Circuitos:** Separação estratégica por ambientes e função (lazer, garagem, área íntima)
- **Quadro de Distribuição:** Dimensionado conforme demanda específica da residência
- **Telefonia e Internet:** Infraestrutura de cabeamento e pontos de telefonia e internet.

#### 💧 Instalações Hidrossanitárias
- **Água Fria e Quente:** Sistema com aquecimento central por boiler
- **Área de Piscina:** Alimentação hidráulica para sistema de filtragem e cascata
- **Esgoto Cloacal e Pluvial:** Dimensionamento completo conforme NBR 8160
- **Telefonia e Internet:** Infraestrutura de cabeamento e pontos RJ instalados
- **Detalhamentos Isométricos:** Execução de diagramas 3D de instalações para facilitar execução em obra

## Tecnologias Utilizadas

- **Software:** AutoCAD 2023 (plantas e isométricos técnicos)
- **Normas Técnicas:**  
  - NBR 5410:2004 (instalações elétricas de baixa tensão)  
  - NBR 5626:2020 (água fria e quente)  
  - NBR 8160:1999 (esgoto sanitário)  

## Documentação

[📄 **Ver Planta Elétrica**](/assets/pdfs/projeto-nf_eletrica.pdf_nairo.pdf){:target="_blank" .reveal}  
[📄 **Ver Planta Hidrossanitária**](/assets/pdfs/projeto-nf_hidrosanitaria.pdf_nairo.pdf){:target="_blank" .reveal}

<div class="pdf-container reveal">
  <object data="/assets/pdfs/projeto-nf_eletrica.pdf#toolbar=0"
          type="application/pdf" width="100%" height="500">
    <p>PDF indisponível — <a href="/assets/pdfs/projeto-nf_eletrica.pdf" target="_blank">baixar</a>.</p>
  </object>
</div>
```

---


#### 📁 Directory: src\site\notes\PREDIO COM COMERCIO

##### 📄 projeto-eletrico-e-hidrossanitario-rmc_predio-comercio.md
*Path: `src\site\notes\PREDIO COM COMERCIO\projeto-eletrico-e-hidrossanitario-rmc_predio-comercio.md`*  
*Size: 4.32 KB*

```md
---
created: 2025-07-30T01:31
dg-publish: true
ferramentas: AutoCAD
permalink: /notes/projeto-eletrico-e-hidrossanitario-rmc-predio-comercio-rmc/
setor: Predial
title: projeto-eletrico-e-hidrossanitario-rmc-predio-comercio-rmc
updated: 2025-07-30T03:06
---

# Projeto Predial “RMC” 🏙️

**Edificação multifamiliar com comércio — 4 andares / 13 apartamentos / entrada CE Equatorial**  
Projeto técnico completo para um edifício de uso misto, com 13 unidades residenciais e espaço comercial no térreo. O escopo abrangeu as disciplinas elétrica, hidrossanitária e SPDA, com documentação executiva completa e submissão à concessionária CE Equatorial.

- **Local:** (inserir cidade/estado, se quiser)  
- **Ano:** 2024–2025  
- **Área estimada:** (opcional)  
- **Ferramentas:** AutoCAD 2023  

<div class="project-gallery reveal">
  <img src="/assets/imagens/capa_thumb.jpg_predio-comercio.jpg" alt="Fachada do edifício RMC" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/medidores_thumb.jpg_predio-comercio.jpg" alt="Detalhe técnico dos medidores" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/unifilar_thumb.jpg_predio-comercio.jpg" alt="Trecho do diagrama unifilar" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/corte_thumb.jpg_predio-comercio.jpg" alt="Corte vertical das instalações" class="gallery-thumb" loading="lazy">
</div>

## Descrição do Projeto

O Projeto “RMC” foi desenvolvido para atender às necessidades técnicas e legais de uma edificação **residencial multifamiliar com comércio integrado**, localizada em zona urbana com atendimento da **CE Equatorial**. O projeto englobou soluções completas em instalações elétricas, hidrossanitárias e de proteção contra descargas atmosféricas (SPDA), com especial atenção à individualização das unidades.

### Escopo Técnico Detalhado

#### ⚡ Instalações Elétricas
- **13 Medidores Independentes:** Infraestrutura completa com central de medição e quadro de medidores
- **Quadros de Distribuição e Cargas:** Por unidade e áreas comuns
- **Iluminação e Tomadas:** Distribuição completa por pavimento e áreas de circulação
- **Aparelhos Especiais:** Espera para aquecedores elétricos e climatização por split
- **Diagrama Unifilar e Corte Elétrico:** Documentação exigida pela concessionária
- **Entrada de Energia:** Dimensionamento e detalhamento completo conforme padrão CE Equatorial
- **Corte Elétrico:** Incluindo prumadas e detalhamentso de internet e telefonia.
- **Plantas de Situação** Para aprovação junto a concessionária com infomrações sobre transformadores utilizados s rede elétrica da vizinhança.
- **Telefonia e Internet:** Infraestrutura de cabeamento e pontos de telefonia e internet.

#### ⚡ SPDA
- **Sistema de Proteção contra Descargas Atmosféricas:** Projeto conforme NBR 5419, com malha de captores, descidas e aterramento

#### 💧 Instalações Hidrossanitárias
- **Água Fria:** Sistema de abastecimento de água fria, com medidores individuais situados na cobertura, junto as caixas da água.
- **Esgoto Cloacal e Pluvial:**Conforme exigência normativa.
- **Caixas de Inspeção e Reservatórios:** Posicionados conforme viabilidade da obra.

## Tecnologias Utilizadas

- **Software:** AutoCAD 2023 (planta baixa, cortes, diagramas e isométricos)
- **Normas Técnicas:**  
  - NBR 5410:2004 (instalações elétricas de baixa tensão)  
  - NBR 5419:2015 (SPDA)  
  - NBR 5626:2020 (instalações de água)  
  - NBR 8160:1999 (esgoto sanitário)  
  - Padrões técnicos da CEEE Equatorial (NT.01 e NT.04)

## Documentação

[📄 **Ver Planta Elétrica**](/assets/pdfs/projeto-rmc_eletrica.pdf_predio-comercio.pdf){:target="_blank" .reveal}  
[📄 **Ver Planta Hidrossanitária**](/assets/pdfs/projeto-rmc_hidrosanitaria.pdf_predio-comercio.pdf){:target="_blank" .reveal}  
[📄 **Ver Diagrama Unifilar + SPDA**](/assets/pdfs/projeto-rmc_unifilar_spda.pdf_predio-comercio.pdf){:target="_blank" .reveal}

<div class="pdf-container reveal">
  <object data="/assets/pdfs/projeto-rmc_unifilar_spda.pdf#toolbar=0"
          type="application/pdf" width="100%" height="500">
    <p>PDF indisponível — <a href="/assets/pdfs/projeto-rmc_unifilar_spda.pdf" target="_blank">baixar</a>.</p>
  </object>
</div>
```

---


#### 📁 Directory: src\site\notes\RAFAEL SPICKER

##### 📄 projeto-eletrico-e-hidrossanitario-rp_rafael.md
*Path: `src\site\notes\RAFAEL SPICKER\projeto-eletrico-e-hidrossanitario-rp_rafael.md`*  
*Size: 3.73 KB*

```md
---
created: 2025-07-30T01:31
dg-publish: true
ferramentas: AutoCAD
permalink: /notes/projeto-eletrico-e-hidrossanitario-rp-rafael-rp/
setor: Residencial
title: projeto-eletrico-e-hidrossanitario-rp-rafael-rp
updated: 2025-07-30T03:06
---

# Projeto Elétrico e Hidrossanitário “RP” 🏡

**Residência unifamiliar — 2 pavimentos / 200 m² — São Leopoldo (RS)**  
Projeto completo das instalações **elétricas** e **hidrossanitárias** de uma residência de médio porte com dois pavimentos. A proposta foi submetida e aprovada junto ao **SEMAE de São Leopoldo**, incluindo a especificação e dimensionamento de **sistema séptico individual**.

- **Local:** São Leopoldo – RS  
- **Ano:** 2020  
- **Área construída:** Aproximadamente 200 m²  
- **Ferramentas:** AutoCAD  

<div class="project-gallery reveal">
  <img src="/assets/imagens/capa_thumb.jpg_rafael.jpg" alt="Vista da fachada do projeto RP" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/planta_eletrica_thumb.jpg_rafael.jpg" alt="Planta elétrica projeto RP" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/planta_hidrosanitaria_thumb.jpg_rafael.jpg" alt="Planta hidráulica projeto RP" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/corte_thumb.jpg_rafael.jpg" alt="Corte sanitário RP" class="gallery-thumb" loading="lazy">
</div>

## Descrição do Projeto

O Projeto “RP” contemplou o desenvolvimento técnico das instalações **elétricas e hidrossanitárias** para uma residência de dois pavimentos situada em região atendida pelo SEMAE. Com foco na funcionalidade e conformidade regulatória, o projeto também previu a adoção de **solução alternativa de esgoto** com **tanque séptico**, devido à ausência de rede cloacal pública.

### Escopo Técnico Detalhado

#### ⚡ Instalações Elétricas
- **Iluminação e Tomadas:** Distribuição completa com foco em setorização funcional
- **Quadro de Cargas:** Dimensionamento por ambiente, considerando demandas específicas (climatização, cozinha, lazer)
- **Climatização:** Infraestrutura elétrica para splits em todos os ambientes principais
- **Dispositivos Especiais:** Ponto para sistema de alarme e espera técnica para roteador de internet
- **Telefonia e Internet:** Infraestrutura de cabeamento e pontos de telefonia e internet.


#### 💧 Instalações Hidrossanitárias
- **Água Fria:** Rede com reservatório superior e distribuição para os dois pavimentos
- **Esgoto Cloacal:** Direcionado a sistema séptico dimensionado com fossa e filtro
- **Águas Pluviais:** Coletores verticais, calhas e canaletas com descarga para via pública
- **Aprovação SEMAE:** Documentação técnica e aprovação legal junto ao órgão municipal de saneamento

## Tecnologias Utilizadas

- **Software:** AutoCAD 2023 (plantas, cortes, isométricos)
- **Normas Técnicas:**  
  - NBR 5410:2004 (instalações elétricas de baixa tensão)  
  - NBR 8160:1999 (sistemas de esgoto sanitário)  
  - NBR 7229:1993 e NBR 13969:1997 (sistemas de tratamento e disposição final de esgoto sanitário – tanques sépticos)  
  - Regulamentos técnicos do SEMAE São Leopoldo


## Documentação

[📄 **Ver Planta Elétrica**](/assets/pdfs/projeto-rp_eletrica.pdf_rafael.pdf){:target="_blank" .reveal}  
[📄 **Ver Planta Hidrossanitária + Sistema Séptico**](/assets/pdfs/projeto-rp_hidrosanitaria.pdf_rafael.pdf){:target="_blank" .reveal}

<div class="pdf-container reveal">
  <object data="/assets/pdfs/projeto-rp_hidrosanitaria.pdf#toolbar=0"
          type="application/pdf" width="100%" height="500">
    <p>PDF indisponível — <a href="/assets/pdfs/projeto-rp_hidrosanitaria.pdf" target="_blank">baixar</a>.</p>
  </object>
</div>
```

---


#### 📁 Directory: src\site\notes\REVIT\BARÃO DE UBA

##### 📄 projeto-eletrico-bu_barao-uba.md
*Path: `src\site\notes\REVIT\BARÃO DE UBA\projeto-eletrico-bu_barao-uba.md`*  
*Size: 4.26 KB*

```md
---
created: 2025-07-30T01:31
dg-publish: true
ferramentas: AutoCAD
permalink: /notes/projeto-eletrico-bu-barao-uba-bu/
setor: Predial
title: projeto-eletrico-bu-barao-uba-bu
updated: 2025-07-30T03:06
---

# Projeto Elétrico Predial — Edifício Residencial Vertical 🏙️

**Edifício residencial multifamiliar — 11 pavimentos / 20 apartamentos / 2 subsolos**  
Projeto elétrico completo de um edifício vertical de grande porte com **20 unidades autônomas**, distribuídas em **10 pavimentos tipo**, com **2 subsolos para garagem e infraestrutura técnica**. O escopo contemplou desde os pontos finais (iluminação e tomadas) até a **entrada de energia**, com todos os esquemas, diagramas e painéis necessários para aprovação em concessionária e execução em campo.

- **Local:** Porto Alegre 
- **Ano:** 2023
- **Ferramentas:** Revit

<div class="project-gallery reveal">
  <img src="/assets/imagens/capa_thumb.jpg_barao-uba.jpg" alt="Vista da fachada do edifício" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/esquema_vertical_thumb.jpg_barao-uba.jpg" alt="Esquema vertical das prumadas" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/medidores_thumb.jpg_barao-uba.jpg" alt="Detalhamento dos painéis de medição" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/diagrama_multifilar_thumb.jpg_barao-uba.jpg" alt="Trecho do diagrama multifilar" class="gallery-thumb" loading="lazy">
</div>

## Descrição do Projeto

O projeto elétrico deste edifício multifamiliar foi desenvolvido para garantir **eficiência execucional, organização dos projetos** e **segurança técnica**, atendendo às normas vigentes. Composto por **11 pavimentos**, sendo o térreo destinado a áreas comuns e **10 andares tipo com 2 apartamentos por andar**, o edifício totaliza **20 unidades residenciais independentes**, com infraestrutura completa para climatização, iluminação, e medição individual.

### Escopo Técnico Detalhado

#### ⚡ Instalações Elétricas
- **Medição Individualizada:** 20 unidades, com painel central de medidores detalhado e alimentadores individuais
- **Entrada de Energia:** Dimensionamento completo conforme padrão da concessionária, com proteção geral e barramentos
- **Quadros de Distribuição:** Em cada unidade e nas áreas comuns, com disjuntores e DPS
- **Iluminação e Tomadas:** Layout padrão por tipo de apartamento, além de iluminação de circulação e garagem
- **Espera para Climatização:** Infraestrutura para splits em todas as unidades
- **Subsolos S1 e S2:** Infraestrutura elétrica para iluminação, ventilação e pontos de uso técnico

#### 📊 Diagramas e Representações
- **Diagrama Unifilar e Multifilar:** Representações completas por pavimento e por sistema
- **Esquema Vertical:** Representação das prumadas e trajetos dos alimentadores até os quadros de cada unidade
- **Diagrama de Cargas:** Com balanceamento de fases e reserva técnica
- **Detalhes Construtivos dos Painéis:** Localização e dimensionamento dos painéis de medição, com legendas técnicas

## Tecnologias Utilizadas

- **Software:** Revit (planta baixa, diagramas, cortes verticais, esquemas)
- **Normas Técnicas:**  
  - NBR 5410:2004 (instalações elétricas de baixa tensão)  
  - NBR 14039:2005 (alimentação de média tensão, se aplicável)  
  - NBR 13570:1996 (entrada de energia elétrica)  
  - Normas e manuais da concessionária local (CEEE Equatorial) - NT 0.1 E NT 0.4


## Documentação

[📄 **Ver Diagrama Unifilar**](/assets/pdfs/fc-d07-e005-r00-diagrama-unifilar_recorte_p1_barao-uba.pdf){:target="_blank" .reveal}  
[📄 **Ver Esquema Vertical**](/assets/pdfs/fc-d07-e004-r00-esquema-vertical_recorte_p1_barao-uba.pdf){:target="_blank" .reveal}  
[📄 **Ver Painéis de Medição**](/assets/pdfs/fc-d07-e001-r00-paineis-de-medição_recorte_p1_barao-uba.pdf){:target="_blank" .reveal}

<div class="pdf-container reveal">
  <object data="/assets/pdfs/fc-d07-e005-r00-diagrama-unifilar_recorte_p1_barao-uba.pdf#toolbar=0"
          type="application/pdf" width="100%" height="500">
    <p>PDF indisponível — <a href="/assets/pdfs/fc-d07-e005-r00-diagrama-unifilar_recorte_p1_barao-uba.pdf" target="_blank">baixar</a>.</p>
  </object>
</div>
```

---


#### 📁 Directory: src\site\notes\REVIT\CASA SITIO

##### 📄 projeto-eletrico-e-hidrosanitario-cs_casa-sitio.md
*Path: `src\site\notes\REVIT\CASA SITIO\projeto-eletrico-e-hidrosanitario-cs_casa-sitio.md`*  
*Size: 4.12 KB*

```md
---
created: 2025-07-30T01:31
dg-publish: true
ferramentas: Revit, AutoCAD
permalink: /notes/projeto-eletrico-e-hidrosanitario-cs-casa-sitio-cs/
setor: Residencial
title: projeto-eletrico-e-hidrosanitario-cs-casa-sitio-cs
updated: 2025-07-30T03:06
---

# Projeto Elétrico e Hidrossanitário — Residência em Sítio 🏡

**Residência rural de dois pavimentos — Revit (elétrico) + AutoCAD (hidrossanitário) — Porto Alegre (RS)**  
Projeto técnico completo para residência de campo com dois pavimentos, integrando modelagem tridimensional das instalações elétricas no **Revit** e representação detalhada das redes hidráulicas em **AutoCAD**, com **sistema séptico autônomo** e foco em conforto térmico, eficiência energética e execução precisa em obra.

- **Local:** Sítio em Porto Alegre – RS  
- **Ano:** 2024  
- **Área construída:** 250m2
- **Ferramentas:** Revit  2023 (elétrico), AutoCAD  (hidrossanitário)

<div class="project-gallery reveal">
  <img src="/assets/imagens/capa_thumb.jpg_casa-sitio.jpg" alt="Render do modelo Revit 3D da residência" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/hidro_thumb.jpg_casa-sitio.jpg" alt="Trecho do isométrico hidrossanitário" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/eletrico_thumb.jpg_casa-sitio.jpg" alt="Quadro elétrico e unifilar modelado" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/fossa_thumb.jpg_casa-sitio.jpg" alt="Detalhamento do sistema séptico" class="gallery-thumb" loading="lazy">
</div>

## Descrição do Projeto

Este projeto foi desenvolvido para atender às necessidades técnicas de uma residência de sítio com dois pavimentos, contemplando **conforto moderno em um ambiente rural**. O sistema elétrico foi modelado inteiramente em **Revit 3D**, possibilitando visualizações precisas e compatibilização com arquitetura. Já o sistema hidrossanitário foi projetado em **AutoCAD 2D com isométricos**, incluindo sistema próprio de tratamento de esgoto.

### Escopo Técnico Detalhado

#### ⚡ Instalações Elétricas (Revit)
- **Iluminação e Tomadas:** Layout completo com luminárias modeladas em 3D
- **Quadro de Cargas e Diagrama Multifilar:** Gerados automaticamente a partir do modelo BIM
- **Entrada de Energia:** Detalhamento técnico da caixa de medição, eletrodutos e condutores
- **Espera para Ar-condicionado e Energia Solar:** Com dutos e quadros preparados para futuras instalações
- **Setorização por pavimento:** Com painéis modelados e distribuídos conforme uso

#### 💧 Instalações Hidrossanitárias (AutoCAD)
- **Água Fria e Quente:** Sistemas independentes com traçados em planta baixa e isométrico
- **Sistema Séptico:** Fossa + filtro anaeróbico conforme NBR 13969 e NBR 7229
- **Águas Pluviais:** Separação de redes com direcionamento para infiltração no terreno
- **Caixas de Inspeção e Reservatório Superior:** Localização otimizada para manutenção e gravidade
- **Compatibilização com arquitetura:** Via exportação coordenada entre CAD e Revit

## Tecnologias Utilizadas

- **Softwares:**  
  - Revit MEP 2023 (instalações elétricas modeladas)  
  - AutoCAD 2023 (plantas hidrossanitárias + isométricos)  
- **Normas Técnicas:**  
  - NBR 5410:2004 (elétrica)  
  - NBR 13570:1996 (entrada)  
  - NBR 5626:2020 (hidráulica)  
  - NBR 8160:1999 (esgoto)  
  - NBR 13969:1997 + NBR 7229:1993 (tanque séptico e filtro)  

## Documentação

[📄 **Ver Projeto Elétrico em PDF**](/assets/pdfs/pvp-a03-e101-r02-terreo_recorte_p1_casa-sitio.pdf){:target="_blank" .reveal}  
[📄 **Ver Isométrico Hidrossanitário e Sistema Séptico**](/assets/pdfs/pvp-a03-h100-r02-água-quente-e-fria_recorte_p1_casa-sitio.pdf){:target="_blank" .reveal}

<div class="pdf-container reveal">
  <object data="/assets/pdfs/pvp-a03-h100-r02-água-quente-e-fria_recorte_p1_casa-sitio.pdf#toolbar=0"
          type="application/pdf" width="100%" height="500">
    <p>PDF indisponível — <a href="/assets/pdfs/pvp-a03-h100-r02-água-quente-e-fria_recorte_p1_casa-sitio.pdf" target="_blank">baixar</a>.</p>
  </object>
</div>
```

---


#### 📁 Directory: src\site\notes\REVIT\DOM PEDRITO

##### 📄 projeto-eletrico-dp_dom-pedrito.md
*Path: `src\site\notes\REVIT\DOM PEDRITO\projeto-eletrico-dp_dom-pedrito.md`*  
*Size: 3.74 KB*

```md
---
created: 2025-07-30T01:31
dg-publish: true
ferramentas: Revit
permalink: /notes/projeto-eletrico-dp-dom-pedrito-dp/
setor: Predial
title: projeto-eletrico-dp-dom-pedrito-dp
updated: 2025-07-30T03:06
---

# Projeto Elétrico Predial — Edifício Multifamiliar 'DP' 🏙️

**Edifício residencial vertical — 5 pavimentos / 5 unidades / SPDA e elevador modelados em BIM**  
Projeto elétrico completo desenvolvido no **Revit (Habit)** para um edifício de cinco pavimentos com cinco unidades multifamiliares autônomas. O escopo contemplou toda a infraestrutura elétrica, comunicação, SPDA e elevador com casa de máquinas, com **modelagem tridimensional** e documentação técnica de alto nível para execução e compatibilização com outras disciplinas.

- **Local:** Dom Pedrito - RS
- **Ano:** 2024  
- **Ferramentas:** Revit  

<div class="project-gallery reveal">
  <img src="/assets/imagens/capa_thumb.jpg_dom-pedrito.jpg" alt="Fachada modelada no Revit" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/quadro_cd_thumb.jpg_dom-pedrito.jpg" alt="Detalhe do quadro de distribuição modelado" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/prumadas_thumb.jpg_dom-pedrito.jpg" alt="Prumadas elétricas e de dados" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/elevador_thumb.jpg_dom-pedrito.jpg" alt="Infraestrutura elétrica da casa de máquinas" class="gallery-thumb" loading="lazy">
</div>

## Descrição do Projeto

Este edifício multifamiliar foi modelado integralmente no **Revit**, com foco em precisão executiva e compatibilização tridimensional. O projeto contemplou **cinco unidades residenciais autônomas** (uma por pavimento), **entrada de energia com divisão individualizada**, infraestrutura para **dados e comunicação**, e um **sistema completo de proteção contra descargas atmosféricas (SPDA)**. Além disso, foi projetada a alimentação e quadro da **casa de máquinas do elevador**.

### Escopo Técnico Detalhado

#### ⚡ Instalações Elétricas (Modeladas em Revit)
- **Entrada de Energia:** Central de medidores com alimentações independentes para as cinco unidades
- **Quadro de Cargas e CD Principal(Serviço):** Modelado em 3D com componentes elétricos e etiquetas
- **Iluminação e Tomadas:** Distribuição completa por ambiente, incluindo áreas comuns
- **Diagrama Unifilar e Setorização de Circuitos:** 
- **SPDA (Proteção contra Descargas Atmosféricas):** Malha externa, descidas e interligações equipotenciais modeladas conforme NBR 5419
- **Casa de Máquinas do Elevador:** Quadro exclusivo com alimentação dedicada e proteção especial
- **Prumadas Técnicas:** Infraestrutura elétrica, dados e internet com rotas definidas verticalmente por shaft técnico

## Tecnologias Utilizadas

- **Software:** Revit 2024  
- **Normas Técnicas:**  
  - NBR 5410:2004 (instalações elétricas de baixa tensão)  
  - NBR 5419:2015 (SPDA)  
  - NBR 14565:2000 (infraestrutura de comunicação)  
  - NBR 13570:1996 (entrada de energia)  
  - Normas da concessionária local (CEEE)


## Documentação

[📄 **Ver Projeto Elétrico Revit (PDF)**](/assets/pdfs/fc-d08-wolf-e201-r05-térreo_recorte_p1_dom-pedrito.pdf){:target="_blank" .reveal}  
[📄 **Ver Prumadas Técnicas e SPDA**](/assets/pdfs/fc-d08-wolf-e999-r00-detalhe-prumada_recorte_p1_dom-pedrito.pdf){:target="_blank" .reveal}

<div class="pdf-container reveal">
  <object data="/assets/pdfs/fc-d08-wolf-e201-r05-térreo_recorte_p1_dom-pedrito.pdf#toolbar=0"
          type="application/pdf" width="100%" height="500">
    <p>PDF indisponível — <a href="/assets/pdfs/fc-d08-wolf-e201-r05-térreo_recorte_p1_dom-pedrito.pdf" target="_blank">baixar</a>.</p>
  </object>
</div>
```

---


#### 📁 Directory: src\site\notes\REVIT\LOJA AVENIDA DO FORTE

##### 📄 projeto-eletrico-af_loja-avenida.md
*Path: `src\site\notes\REVIT\LOJA AVENIDA DO FORTE\projeto-eletrico-af_loja-avenida.md`*  
*Size: 3.47 KB*

```md
---
created: 2025-07-30T01:31
dg-publish: true
ferramentas: Revit
permalink: /notes/projeto-eletrico-af-loja-avenida-af/
setor: Comercial
title: projeto-eletrico-af-loja-avenida-af
updated: 2025-07-30T03:06
---

# Projeto Elétrico Comercial  'AF'– Loja Modular em Revit 🏪⚡

**Loja comercial com quatro unidades independentes | Projeto modular com quatro medidores | Modelado em Revit 3D**

Projeto elétrico completo desenvolvido para empreendimento comercial de **dois pavimentos**, localizado em **Porto Alegre – RS**, com potencial de locação para até **quatro lojas independentes**. O projeto foi integralmente modelado em **Revit**, com estruturação elétrica modular, pronta para reformas e ampliações futuras, incluindo entrada de energia separada, quadros de cargas, espera para climatização e caixas de inspeção técnicas.

- **Local:** Porto Alegre – RS  
- **Ano:** 2024  
- **Tipo:** Comercial – Loja modular  
- **Ferramenta:** Revit

<div class="project-gallery reveal">
  <img src="/assets/imagens/capa_thumb.jpg_loja-avenida.jpg" alt="Modelo Revit 3D da loja comercial" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/planta_thumb.jpg_loja-avenida.jpg" alt="Planta baixa elétrica" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/quadro_thumb.jpg_loja-avenida.jpg" alt="Quadro de cargas e entrada de energia" class="gallery-thumb" loading="lazy">
</div>

## Descrição do Projeto

Este projeto visou a implementação de uma infraestrutura elétrica robusta e escalável para **um edifício comercial com quatro lojas independentes**. A modelagem foi executada em **BIM/Revit**, incluindo todos os pavimentos e sistemas elétricos necessários para garantir a autonomia de cada unidade.

A **modularidade do projeto** é o grande diferencial: cada loja conta com **medidor próprio, quadro individualizado**, e infraestrutura preparada para climatização, comunicação e expansão. Também foram previstas **caixas de inspeção técnicas** em pontos estratégicos para facilitar reformas ou futuras readequações do espaço.

### Escopo Técnico

#### ⚡ Elétrica
- **Planta de Situação e Terreno**
- **Dois Pavimentos (Térreo e 2º andar)**
- **Projeto completo de iluminação, tomadas e esperas**
- **4 Medidores e 4 Quadros Independentes** – um para cada loja
- **Entrada de Energia:** dimensionada para atender todas as lojas com segurança
- **Diagrama Unifilar e Quadro de Cargas**
- **Infraestrutura para Ar-condicionado e Aquecedores**
- **Caixas de Inspeção Técnica para manutenção e expansão**
- **Modelagem 3D no Revit com visibilidade executiva**

## Tecnologias e Normas

- **Software:** Autodesk Revit 2024  
- **Normas Técnicas:**  
  - NBR 5410 (instalações elétricas)  
  - NBR 13570 (entrada de energia)  
  - Normas da concessionária CEEE/Equatorial  
- **Infraestrutura para futuras automações ou controle de consumo energético individualizado**

## Documentação

[📄 **Ver Projeto Elétrico Loja Modular (PDF)**](/assets/pdfs/675_arq_av-do-forte_ex_r01_recorte_p1_loja-avenida.pdf){:target="_blank" .reveal}  

<div class="pdf-container reveal">
  <object data="/assets/pdfs/675_arq_av-do-forte_ex_r01_recorte_p1_loja-avenida.pdf#toolbar=0"
          type="application/pdf" width="100%" height="500">
    <p>PDF indisponível — <a href="/assets/pdfs/675_arq_av-do-forte_ex_r01_recorte_p1_loja-avenida.pdf" target="_blank">baixar</a>.</p>
  </object>
</div>
```

---


#### 📁 Directory: src\site\notes\REVIT\LOJA JOAO WALLIG

##### 📄 projeto-eletrico-jw_loja-joao.md
*Path: `src\site\notes\REVIT\LOJA JOAO WALLIG\projeto-eletrico-jw_loja-joao.md`*  
*Size: 3.45 KB*

```md
---
created: 2025-07-30T01:31
dg-publish: true
ferramentas: Revit
permalink: /notes/projeto-eletrico-jw-loja-joao-jw/
setor: Comercial
title: projeto-eletrico-jw-loja-joao-jw
updated: 2025-07-30T03:06
---

# Projeto Elétrico Comercial – Loja com Integração Estrutural ⚙️⚡

**Loja térrea com infraestrutura robusta | Detalhamento com SPDA e integração estrutural | Modelagem em Revit**

Projeto elétrico completo de uma loja comercial de aproximadamente **200m²**, localizada em **Porto Alegre – RS**, desenvolvido em **Revit (2024)**. O escopo contemplou desde a entrada de energia até a infraestrutura de climatização e segurança, com destaque para a **integração com elementos estruturais da edificação** e previsão de crescimento do empreendimento.

- **Local:** Porto Alegre – RS  
- **Ano:** 2024  
- **Tipo:** Comercial – Loja térrea  
- **Ferramenta:** Revit

<div class="project-gallery reveal">
  <img src="/assets/imagens/capa_thumb.jpg_loja-joao.jpg" alt="Vista do Revit 3D da loja" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/planta_thumb.jpg_loja-joao.jpg" alt="Planta elétrica da loja" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/estrutura_thumb.jpg_loja-joao.jpg" alt="Detalhamento estrutural com eletroduto" class="gallery-thumb" loading="lazy">
</div>

## Descrição do Projeto

A proposta do projeto foi desenvolver uma **infraestrutura elétrica segura, completa e flexível** para uma loja térrea de médio porte, com alto padrão de acabamento e previsibilidade para futuras expansões. A modelagem tridimensional em Revit permitiu a geração precisa das pranchas executivas, como também a **coordenação com elementos estruturais**, garantindo compatibilidade e exequibilidade em campo.

Foram previstos **furos em vigas e passagens técnicas para eletrodutos aparentes**, de forma a equilibrar eficiência técnica com estética industrial. O projeto também incluiu **SPDA (Sistema de Proteção contra Descargas Atmosféricas)** e caixas de inspeção posicionadas estrategicamente para permitir manutenções e ampliações com mínimo impacto estrutural.

### Escopo Técnico

#### ⚡ Elétrica
- **Planta de Situação**
- **Entrada de Energia completa**
- **Infraestrutura para Ar-condicionado**
- **Projeto de Iluminação e Tomadas**
- **Quadro de Cargas e Diagrama Multifilar**
- **Caixas de Inspeção Técnica para expansões futuras**
- **SPDA dimensionado conforme NBR 5419**
- **Integração com Projeto Estrutural**  
  - Passagem de eletrodutos por elementos de concreto armado
  - Furos técnicos em vigas coordenados em Revit
- **Modelagem 3D e documentação executiva em Revit**

## Tecnologias e Normas

- **Software:** Autodesk Revit 2024  
- **Normas Técnicas:**  
  - NBR 5410 (Instalações Elétricas de Baixa Tensão)  
  - NBR 5419 (SPDA)  
  - NBR 13570 (Entrada de Energia)  
  - Normas da concessionária CE Equatorial  

## Documentação

[📄 **Ver Projeto Elétrico Loja Térrea (PDF)**](/assets/pdfs/694_arq_ep_joaowallig_r04_recorte_p1_loja-joao.pdf){:target="_blank" .reveal}  

<div class="pdf-container reveal">
  <object data="/assets/pdfs/694_arq_ep_joaowallig_r04_recorte_p1_loja-joao.pdf#toolbar=0"
          type="application/pdf" width="100%" height="500">
    <p>PDF indisponível — <a href="/assets/pdfs/694_arq_ep_joaowallig_r04_recorte_p1_loja-joao.pdf" target="_blank">baixar</a>.</p>
  </object>
</div>
```

---


#### 📁 Directory: src\site\notes\REVIT\LOJAS REMIÃO

##### 📄 projeto-eletrico-lr._lojas-remiao.md
*Path: `src\site\notes\REVIT\LOJAS REMIÃO\projeto-eletrico-lr._lojas-remiao.md`*  
*Size: 3.25 KB*

```md
---
created: 2025-07-30T01:31
dg-publish: true
ferramentas: Revit
permalink: /notes/projeto-eletrico-lr-lojas-remiao-lr/
setor: Comercial
title: projeto-eletrico-lr-lojas-remiao-lr
updated: 2025-07-30T03:06
---

# Projeto Elétrico Comercial 'LR' – Loja com Mezanino e Duas Unidades ⚙️⚡

**Infraestrutura completa com compatibilização BIM | Modelagem em Revit | Integração elétrica, hidráulica e estrutural**

Projeto elétrico completo de uma loja comercial de **dois pavimentos (térreo + mezanino)**, com **duas unidades consumidoras independentes**, desenvolvido em **Revit**. O projeto abrange desde a entrada de energia até o detalhamento de distribuição elétrica, contando com **compatibilização com os projetos hidrossanitário e estrutural**, e modelagem tridimensional precisa.

- **Local:** Porto Alegre – RS  
- **Ano:** 2024  
- **Tipo:** Comercial – Loja 2 pavimentos  
- **Ferramenta:** Revit  
- **Unidades consumidoras:** 2

<div class="project-gallery reveal">
  <img src="/assets/imagens/capa_thumb.jpg_lojas-remiao.jpg" alt="Vista 3D da loja com mezanino" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/cd_thumb.jpg_lojas-remiao.jpg" alt="Detalhamento dos quadros elétricos (CDs)" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/situacao_thumb.jpg_lojas-remiao.jpg" alt="Planta de situação da entrada de energia" class="gallery-thumb" loading="lazy">
</div>

## Descrição do Projeto

Este projeto foi pensado para atender às demandas técnicas de um espaço comercial com **divisões funcionais independentes**, possibilitando que cada uma das duas unidades consumidoras tenha controle próprio de consumo e operação.

A infraestrutura contempla **entrada de energia individualizada**, **esperas para climatização**, **diagrama de cargas**, **detalhamento de quadros de distribuição (CDs)**, além de toda a infraestrutura de **iluminação e tomadas**. O projeto foi **totalmente compatibilizado em ambiente BIM** com os projetos hidrossanitário e estrutural, garantindo **precisão nas passagens de infraestrutura** e evitando conflitos construtivos.

### Escopo Técnico

#### ⚡ Elétrica
- **Planta de Situação com Entrada de Energia**
- **Dois Quadros de Medição (duas UC’s)**
- **Projeto de Iluminação e Tomadas – Térreo e Mezanino**
- **Esperas para Ar-condicionado**
- **Quadros de Cargas e Detalhamento de CDs**
- **Diagrama Unifilar e Multifilar**
- **Modelagem 3D em Revit**
- **Compatibilização com Projetos:**
  - **Hidrossanitário**
  - **Estrutural**

## Tecnologias e Normas

- **Software:** Autodesk Revit 2024  
- **Normas Técnicas:**  
  - NBR 5410 (Instalações Elétricas BT)  
  - NBR 13570 (Entrada de Serviço)  
  - Normas específicas da CEEE Equatorial.

## Documentação

[📄 **Ver Projeto Elétrico Loja Mezanino (PDF)**](/assets/pdfs/694_arq_ep_joaowallig_r04_loja-joao.pdf){:target="_blank" .reveal}  

<div class="pdf-container reveal">
  <object data="/assets/pdfs/694_arq_ep_joaowallig_r04_loja-joao.pdf#toolbar=0"
          type="application/pdf" width="100%" height="500">
    <p>PDF indisponível — <a href="/assets/pdfs/694_arq_ep_joaowallig_r04_loja-joao.pdf" target="_blank">baixar</a>.</p>
  </object>
</div>
```

---


#### 📁 Directory: src\site\notes\REVIT\MARISTA

##### 📄 projeto-eletrico-ma_marista.md
*Path: `src\site\notes\REVIT\MARISTA\projeto-eletrico-ma_marista.md`*  
*Size: 3.22 KB*

```md
---
created: 2025-07-30T01:31
dg-publish: true
ferramentas: Revit
permalink: /notes/projeto-eletrico-ma-marista-ma/
setor: Institucional
title: projeto-eletrico-ma-marista-ma
updated: 2025-07-30T03:19
---

# Reforma Elétrica Institucional 'MA' – Sala de Aula e Banheiros👨‍🏫⚡

**Infraestrutura elétrica e multimídia para ambiente educacional | Projeto modelado em Revit | Compatibilização com arquitetura existente**

Projeto elétrico desenvolvido para a reforma de uma **sala de aula institucional**, localizada em uma edificação pré-existente. A reforma envolveu **remanejamento de layout arquitetônico**, com **quebra de paredes e criação de novas salas**, exigindo um novo planejamento elétrico completo.

- **Tipo:** Institucional – Sala de Aula  
- **Local:** Porto Alegre – RS  
- **Ano:** 2023  
- **Ferramenta:** Revit  
- **Escopo:** Reforma com modernização elétrica e estrutura para comunicação audiovisual

<div class="project-gallery reveal">
  <img src="/assets/imagens/capa_thumb.jpg_marista.jpg" alt="Vista 3D das eletrocalhas da sala de aula reformada" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/cd_thumb.jpg_marista.jpg" alt="Detalhamento dos quadros e perfilados elétricos" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/situacao_thumb.jpg_marista.jpg" alt="Planta da nova situação elétrica" class="gallery-thumb" loading="lazy">
</div>

## Descrição do Projeto

O projeto foi realizado com **foco na modernização da sala de aula**, garantindo **infraestrutura robusta e adaptada ao uso educacional**, incluindo o suporte à **comunicação audiovisual (HDMI)**, iluminação eficiente e redistribuição de tomadas em função das novas divisões físicas das salas.

Foram implementadas **eletrocalhas tipo perfilado acima do forro**, em conformidade com as normas técnicas de segurança e acessibilidade. A instalação combina **infraestrutura elétrica embutida e aparente**, com roteamento inteligente dos eletrodutos e organização funcional dos pontos de consumo.

### Escopo Técnico

#### ⚡ Elétrica
- **Redistribuição de Pontos Elétricos (Tomadas e Iluminação)**
- **Eletrocalhas do tipo perfilado acima do forro**
- **Integração com sistema HDMI e multimídia da sala**
- **Banheiros com infraestrutura elétrica reformulada**
- **Projeto completo modelado em Revit**
- **Lista de Materiais para Execução**
- **Infraestrutura elétrica embutida + aparente**
- **Detalhamento técnico para obra civil adaptada**

## Tecnologias e Normas

- **Software:** Autodesk Revit   
- **Normas Técnicas Aplicadas:**
  - NBR 5410 (Instalações Elétricas de Baixa Tensão)
  - Diretrizes para instalações aparentes (escolas e espaços públicos)
  - Compatibilidade internet e de comunicação audiovisual

## Documentação

[📄 **Ver Projeto Sala de Aula (PDF)**](/assets/pdfs/sala_aula_2023.pdf_marista.pdf){:target="_blank" .reveal}

<div class="pdf-container reveal">
  <object data="/assets/pdfs/sala_aula_2023.pdf#toolbar=0"
          type="application/pdf" width="100%" height="500">
    <p>PDF indisponível — <a href="/assets/pdfs/sala_aula_2023.pdf" target="_blank">baixar</a>.</p>
  </object>
</div>
```

---


#### 📁 Directory: src\site\notes\REVIT\RODRIGO EMPRESA

##### 📄 projeto-eletrico-e-hidrossanitario-re_rodrigo-empresa.md
*Path: `src\site\notes\REVIT\RODRIGO EMPRESA\projeto-eletrico-e-hidrossanitario-re_rodrigo-empresa.md`*  
*Size: 8.57 KB*

```md
---
created: 2025-07-30T01:31
dg-publish: true
noteIcon: ''
permalink: /notes/projeto-eletrico-e-hidrossanitario-re-rodrigo-empresa-re/
tags:
- gardenEntry
title: projeto-eletrico-e-hidrossanitario-re-rodrigo-empresa-re
updated: 2025-07-30T03:19
---

---

# Edifício Comercial – Empresa de Internet 🏢🌐

**Projeto Elétrico e Hidrossanitário completo para empresa de tecnologia | Modelagem em Revit 3D**

<div class="project-header reveal">
  <div class="project-meta">
    <span class="badge badge-primary">Comercial</span>
    <span class="badge badge-secondary">Predial</span>
    <span class="badge badge-tech">Revit</span>
  </div>
  
  <div class="project-stats">
    <div class="stat">
      <span class="stat-number">3</span>
      <span class="stat-label">Pavimentos</span>
    </div>
    <div class="stat">
      <span class="stat-number">2024</span>
      <span class="stat-label">Ano</span>
    </div>
    <div class="stat">
      <span class="stat-number">100%</span>
      <span class="stat-label">3D BIM</span>
    </div>
  </div>
</div>

<div class="project-description reveal">
  <p class="lead">
    Desenvolvimento integral dos projetos <strong>elétrico e hidrossanitário</strong> de um edifício comercial, 
    sede de uma empresa de <strong>provedores de internet</strong>, com <strong>três pavimentos mais cobertura</strong>, 
    localizado em <strong>Alvorada/RS</strong>.
  </p>
</div>

## 🖼️ Galeria do Projeto

<div class="project-gallery reveal">
  <div class="gallery-item" data-pdf="terreo">
    <img src="/assets/imagens/3d_render.jpg_rodrigo-empresa.jpg" alt="Renderização 3D do edifício comercial" class="gallery-thumb" loading="lazy">
    <div class="gallery-overlay">
      <span class="gallery-title">Renderização 3D</span>
      <span class="gallery-subtitle">Visão geral do projeto</span>
    </div>
  </div>
  
  <div class="gallery-item" data-pdf="terreo">
    <img src="/assets/imagens/planta_terreo.jpg_rodrigo-empresa.jpg" alt="Planta baixa - Térreo" class="gallery-thumb" loading="lazy">
    <div class="gallery-overlay">
      <span class="gallery-title">Planta Térreo</span>
      <span class="gallery-subtitle">Instalações elétricas</span>
    </div>
  </div>
  
  <div class="gallery-item" data-pdf="segundo-pav">
    <img src="/assets/imagens/planta_2pav.jpg_rodrigo-empresa.jpg" alt="Planta baixa - 2º Pavimento" class="gallery-thumb" loading="lazy">
    <div class="gallery-overlay">
      <span class="gallery-title">2º Pavimento</span>
      <span class="gallery-subtitle">Área técnica</span>
    </div>
  </div>
  
  <div class="gallery-item" data-pdf="terceiro-pav">
    <img src="/assets/imagens/planta_3pav.jpg_rodrigo-empresa.jpg" alt="Planta baixa - 3º Pavimento" class="gallery-thumb" loading="lazy">
    <div class="gallery-overlay">
      <span class="gallery-title">3º Pavimento</span>
      <span class="gallery-subtitle">Administrativo</span>
    </div>
  </div>
</div>

## 📋 Descrição do Projeto

<div class="project-details reveal">
  <div class="detail-section">
    <h3>🏢 Características da Edificação</h3>
    <p>
      A edificação abriga uma empresa de internet, exigindo <strong>infraestrutura de comunicação</strong>, 
      aliada a um projeto elétrico e hidrossanitário completos, contemplando:
    </p>
    <ul>
      <li>Ambientes comerciais de uso comum</li>
      <li>Áreas técnicas para equipamentos de rede</li>
      <li>Ambientes internos com climatização, iluminação e tomadas</li>
      <li>Cozinha corporativa integrada</li>
    </ul>
  </div>

  <div class="detail-section">
    <h3>🎯 Metodologia BIM</h3>
    <p>
      O projeto foi modelado integralmente em <strong>Revit</strong>, com estrutura tridimensional 
      de todos os pavimentos, assegurando <strong>compatibilização de todas as disciplinas</strong>.
    </p>
  </div>
</div>

## ⚡ Escopo Técnico

<div class="technical-scope reveal">
  <div class="scope-card">
    <div class="scope-icon">⚡</div>
    <h4>Instalações Elétricas</h4>
    <ul>
      <li>Pontos de iluminação e tomadas dimensionados por pavimento</li>
      <li>Espera e infraestrutura para climatização (ar-condicionado)</li>
      <li>Diagrama unifilar e detalhamento dos <strong>três CDs independentes</strong></li>
      <li>Entrada de energia e dimensionamento dos condutores</li>
      <li>Sistema de Proteção contra Descargas Atmosféricas (SPDA)</li>
      <li>Infraestrutura para redes de comunicação interna e internet</li>
      <li>Projeto 3D com cortes verticais e prumadas</li>
    </ul>
  </div>

  <div class="scope-card">
    <div class="scope-icon">💧</div>
    <h4>Instalações Hidrossanitárias</h4>
    <ul>
      <li>Infraestrutura de água fria e esgoto sanitário</li>
      <li>Caixas de inspeção e rede de drenos para ar-condicionado</li>
      <li>Espera para condensadoras de climatização</li>
      <li>Rede hidráulica para a <strong>cozinha funcional da empresa</strong></li>
    </ul>
  </div>
</div>

## 🛠️ Tecnologias e Normas

<div class="tech-norms reveal">
  <div class="tech-section">
    <h4>Software Utilizado</h4>
    <div class="tech-badges">
      <span class="tech-badge">Revit</span>
      <span class="tech-badge">AutoCAD</span>
      <span class="tech-badge">Dialux</span>
    </div>
  </div>

  <div class="norms-section">
    <h4>Normas Técnicas Aplicadas</h4>
    <ul>
      <li><strong>NBR 5410:</strong> Instalações Elétricas de Baixa Tensão</li>
      <li><strong>NBR 5626:</strong> Instalações Prediais de Água Fria e Quente</li>
      <li><strong>NBR 5419:</strong> Sistema de Proteção contra Descargas Atmosféricas</li>
      <li><strong>TIA/EIA:</strong> Boas práticas de infraestrutura de redes estruturadas</li>
    </ul>
  </div>
</div>

## 📄 Documentação Técnica

<div class="documentation-section reveal">
  <div class="pdf-gallery">
    <div class="pdf-item" data-pdf="/assets/pdfs/rodrigo-empresa/PVP-A02-E101-R03 - TERREO_recorte_p1.pdf">
      <div class="pdf-preview">
        <img src="/assets/imagens/pdf_terreo.jpg_rodrigo-empresa.jpg" alt="Preview Planta Térreo" loading="lazy">
        <div class="pdf-overlay">
          <span class="pdf-icon">📄</span>
          <span class="pdf-title">Planta Térreo</span>
          <span class="pdf-subtitle">Instalações Elétricas</span>
        </div>
      </div>
    </div>
    
    <div class="pdf-item" data-pdf="/assets/pdfs/rodrigo-empresa/PVP-A02-E201-R02 - 2PAV_recorte_p1.pdf">
      <div class="pdf-preview">
        <img src="/assets/imagens/pdf_2pav.jpg_rodrigo-empresa.jpg" alt="Preview 2º Pavimento" loading="lazy">
        <div class="pdf-overlay">
          <span class="pdf-icon">📄</span>
          <span class="pdf-title">2º Pavimento</span>
          <span class="pdf-subtitle">Área Técnica</span>
        </div>
      </div>
    </div>
    
    <div class="pdf-item" data-pdf="/assets/pdfs/rodrigo-empresa/PVP-A02-E301-R02 - 3PAV_recorte_p1.pdf">
      <div class="pdf-preview">
        <img src="/assets/imagens/pdf_3pav.jpg_rodrigo-empresa.jpg" alt="Preview 3º Pavimento" loading="lazy">
        <div class="pdf-overlay">
          <span class="pdf-icon">📄</span>
          <span class="pdf-title">3º Pavimento</span>
          <span class="pdf-subtitle">Administrativo</span>
        </div>
      </div>
    </div>
    
    <div class="pdf-item" data-pdf="/assets/pdfs/rodrigo-empresa/PVP-A02-E401-R00 - VERTICAL_recorte_p1.pdf">
      <div class="pdf-preview">
        <img src="/assets/imagens/pdf_vertical.jpg_rodrigo-empresa.jpg" alt="Preview Corte Vertical" loading="lazy">
        <div class="pdf-overlay">
          <span class="pdf-icon">📄</span>
          <span class="pdf-title">Corte Vertical</span>
          <span class="pdf-subtitle">Prumadas e Infraestrutura</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Modal para PDFs -->
<div id="pdf-modal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 id="modal-title">Documentação Técnica</h3>
      <span id="modal-close" class="modal-close">&times;</span>
    </div>
    <div class="modal-body">
      <iframe id="pdf-iframe" src="" width="100%" height="600" frameborder="0"></iframe>
    </div>
  </div>
</div>

<!-- Modal para Imagens -->
<div id="img-modal" class="modal">
  <div class="modal-content">
    <img id="modal-img" src="" alt="Imagem Ampliada">
    <span id="img-modal-close" class="modal-close">&times;</span>
  </div>
</div>
```

---


#### 📁 Directory: src\site\notes\REVIT\SICREDI

##### 📄 projeto-eletrico-si_sicredi.md
*Path: `src\site\notes\REVIT\SICREDI\projeto-eletrico-si_sicredi.md`*  
*Size: 3.78 KB*

```md
---
created: 2025-07-30T01:31
dg-publish: true
ferramentas: Revit
permalink: /notes/projeto-eletrico-si-sicredi-si/
setor: Comercial / Corporativo
title: projeto-eletrico-si-sicredi-si
updated: 2025-07-30T03:19
---

# Estudo de Infraestrutura Elétrica 'SI' – Escritório Corporativo 🏢⚡

**Estudo Técnico para Projeto Corporativo – Infraestrutura com piso elevado e perfilados em Revit**

Este projeto representa um **estudo de viabilidade e infraestrutura elétrica** de um ambiente corporativo a ser executado futuramente. A ênfase foi dada à **infraestrutura flexível e inteligente**, contemplando **piso elevado com perfilados e tomadas baixas**, e iluminação superior também embutida em perfilados.

- **Tipo:** Estudo Elétrico Corporativo  
- **Ano:** 2024  
- **Ferramenta:** Revit  
- **Escopo:** Infraestrutura de piso elevado e teto | Compatibilização com interiores | Planejamento corporativo

<div class="project-gallery reveal">
  <img src="/assets/imagens/piso_thumb.jpg_sicredi.jpg" alt="Infraestrutura de piso elevado com perfilados" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/teto_thumb.jpg_sicredi.jpg" alt="Perfilados de iluminação no teto" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/interiores_thumb.jpg_sicredi.jpg" alt="Compatibilização com projeto de interiores" class="gallery-thumb" loading="lazy">
</div>

## Descrição do Projeto

O estudo visou **mapear a infraestrutura necessária** para a futura execução de um **espaço empresarial corporativo**, considerando a integração com:

- Projeto de interiores (layout das baias, salas, recepção)
- Equipamentos de uso comum (computadores, impressoras, cozinha)
- Soluções elétricas versáteis (perfilados em piso e teto)

A premissa era garantir **flexibilidade operacional**, permitindo adaptações no uso dos espaços e reconfiguração dos layouts sem grandes intervenções estruturais.

### Escopo Técnico

#### ⚡ Elétrica
- Infraestrutura em **perfilados** no teto e no piso elevado
- Tomadas de piso posicionadas conforme o layout corporativo
- Iluminação superior com perfilados contínuos
- Planejamento de **carga por setor** com detalhamento por bacias de computadores
- Diagrama de cargas e **detalhamento dos Centros de Distribuição (CDs)**
- Entrada de energia e dimensionamento de condutores
- Compatibilização com layout de interiores e setor de alimentação (cozinha corporativa)

### 📐 Compatibilização Estratégica
- Análise das demandas dos setores corporativos
- Estudo para adequação de pontos elétricos às **estações de trabalho móveis**
- Viabilidade técnica da instalação de eletrocalhas e perfilados em estruturas existentes

## Tecnologias e Normas

- **Software:** Autodesk Revit 2024  
- **Normas Técnicas Aplicadas:**
  - NBR 5410 (Instalações Elétricas de Baixa Tensão)  
  - NR-10 (Segurança em Instalações Elétricas)  
  - Boas práticas para ambientes corporativos: ergonomia, acessibilidade e modularidade elétrica

## Diferenciais do Projeto

- Pensado para **escalabilidade e flexibilidade** de uso
- Estrutura pronta para expansão, reorganização e realocação rápida
- Integração com mobiliário técnico e setores distintos da empresa
- Possibilidade de reconfiguração das **estações de trabalho sem obra civil**

## Documentação

[📄 **Ver Estudo Corporativo (PDF)**](/assets/pdfs/estudo_corporativo_2024.pdf_sicredi.pdf){:target="_blank" .reveal}

<div class="pdf-container reveal">
  <object data="/assets/pdfs/estudo_corporativo_2024.pdf#toolbar=0"
          type="application/pdf" width="100%" height="500">
    <p>PDF indisponível — <a href="/assets/pdfs/estudo_corporativo_2024.pdf" target="_blank">baixar</a>.</p>
  </object>
</div>
```

---


#### 📁 Directory: src\site\notes\REVIT\ZOTTI

##### 📄 projeto-eletrico-dz_zotti.md
*Path: `src\site\notes\REVIT\ZOTTI\projeto-eletrico-dz_zotti.md`*  
*Size: 3.58 KB*

```md
---
created: 2025-07-30T01:31
dg-publish: true
ferramentas: Revit
permalink: /notes/projeto-eletrico-dz-zotti-dz/
setor: Comercial
title: projeto-eletrico-dz-zotti-dz
updated: 2025-07-30T03:19
---

# Loja Comercial 'DZ' com Duas Unidades Consumidoras ⚡🏬

**Projeto elétrico de empreendimento comercial com dois pavimentos e infraestrutura mista (aparente e embutida)**

Este projeto foi desenvolvido para uma loja comercial de médio porte, localizada em **Porto Alegre**, com dois pavimentos (térreo e mezanino), e que permite a **divisão em duas unidades consumidoras**, cada uma com seu respectivo Centro de Distribuição (CD) e entrada de energia. O projeto foi inteiramente modelado em **Revit**, com enfoque na compatibilização com os projetos **hidrossanitário e estrutural**.

- **Tipo:** Projeto Elétrico Comercial  
- **Ano:** 2023  
- **Local:** Porto Alegre, RS  
- **Pavimentos:** 2 (Térreo + Mezanino)  
- **Unidades consumidoras:** 2  
- **Ferramentas:** Autodesk Revit

<div class="project-gallery reveal">
  <img src="/assets/imagens/perspectiva3d_thumb.jpg_zotti.jpg" alt="Modelo 3D no Revit – loja comercial" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/infra_aparente_thumb.jpg_zotti.jpg" alt="Infraestrutura elétrica aparente com CD exposto" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/compat_thumb.jpg_zotti.jpg" alt="Compatibilização com projetos hidrossanitário e estrutural" class="gallery-thumb" loading="lazy">
</div>

## Descrição do Projeto

O projeto foi concebido de forma a permitir **flexibilidade de uso do espaço**, podendo funcionar como **duas lojas distintas** ou uma única loja com dois ambientes. Cada unidade possui sua **entrada de energia independente**, com CDs aparentes bem localizados para facilitar manutenções futuras.

A **infraestrutura elétrica** mescla condução **aparente (com eletrocalhas e perfilados)** com partes embutidas na alvenaria, garantindo tanto a **eficiência visual quanto a funcionalidade técnica**. 

### Escopo Técnico

#### ⚡ Elétrica
- **Duas entradas de energia**, com respectivos quadros principais (CDs aparentes)
- **Diagrama unifilar** e detalhamento dos quadros de disjuntores
- **Infraestrutura elétrica mista** (aparente com perfilados e embutida em eletrodutos)
- **Pontos de iluminação, tomadas e esperas para climatização**
- **Modelagem 3D** completa no Revit
- **Compatibilização com o projeto hidrossanitário e o projeto estrutural**
- **Dimensionamento de eletrodutos, condutores e distribuição por pavimento**

## Tecnologias e Normas

- **Software:** Autodesk Revit  
- **Normas Técnicas Aplicadas:**
  - NBR 5410 – Instalações Elétricas em Baixa Tensão  
  - NBR 13570 – Instalações Elétricas – Execução de Infraestrutura  


## Diferenciais

- Projeto modular com **infraestrutura duplicada para divisão de espaços comerciais**
- Integração com layout arquitetônico e projeto estrutural para passagem de condutores
- **Visual limpo e técnico** com uso de infraestrutura aparente bem organizada
- Viabilidade de ampliação e manutenção facilitada

## Documentação

[📄 **Ver Projeto Elétrico em PDF**](/assets/pdfs/projeto_loja_duas_unidades.pdf_zotti.pdf){:target="_blank" .reveal}

<div class="pdf-container reveal">
  <object data="/assets/pdfs/projeto_loja_duas_unidades.pdf#toolbar=0"
          type="application/pdf" width="100%" height="500">
    <p>PDF indisponível — <a href="/assets/pdfs/projeto_loja_duas_unidades.pdf" target="_blank">baixar</a>.</p>
  </object>
</div>
```

---


#### 📁 Directory: src\site\notes\SEFERIN CD

##### 📄 projeto-eletrico-cd_cd.md
*Path: `src\site\notes\SEFERIN CD\projeto-eletrico-cd_cd.md`*  
*Size: 3.25 KB*

```md
---
created: 2025-07-30T01:31
dg-publish: true
ferramentas: AutoCAD
permalink: /notes/projeto-eletrico-cd-cd/
setor: Residencial
title: projeto-eletrico-cd-cd
updated: 2025-07-30T03:19
---

# Projeto Elétrico Residencial “CD” 🏡

**Residência de alto padrão — 2 pavimentos / entrada de energia detalhada**  
Projeto elétrico completo de uma residência de alto padrão com dois pavimentos, com ênfase em dimensionamentos executivos e documentação para aprovação junto à concessionária. O projeto abrange desde a entrada de energia até os pontos finais de uso.

- **Local:** Gravataí- RS
- **Ano:** 2022  
- **Ferramentas:** AutoCAD   

<div class="project-gallery reveal">
  <img src="/assets/imagens/capa_thumb.jpg_cd.jpg" alt="Vista da fachada - projeto CD" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/unifilar_thumb.jpg_cd.jpg" alt="Diagrama unifilar" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/quadro_cargas_thumb.jpg_cd.jpg" alt="Quadro de cargas detalhado" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/planta_situacao_thumb.jpg_cd.jpg" alt="Planta de situação da entrada elétrica" class="gallery-thumb" loading="lazy">
</div>

## Descrição do Projeto

O Projeto “CD” consistiu no desenvolvimento do sistema **elétrico completo** de uma residência de alto padrão com dois pavimentos. O foco técnico foi a **detalhação executiva** da infraestrutura elétrica, assegurando viabilidade de execução e conformidade com as normas e concessionária local.

### Escopo Técnico Detalhado

#### ⚡ Instalações Elétricas
- **Entrada de Energia:** Projeto completo da entrada padrão com eletrodutos, caixas de medição e dutos subterrâneos
- **Quadro de Cargas:** Balanceamento de circuitos por ambiente e função
- **Diagrama Unifilar:** Com detalhamento de disjuntores, DRs e DPS
- **Tomadas e Iluminação:** Distribuição estratégica para áreas internas e externas
- **Espera para Ar-condicionado:** Circuitos dedicados e dutos preparados
- **Dimensionamento Elétrico Completo:** Cálculo de condutores, eletrodutos, disjuntores e queda de tensão
- **Planta de Situação:** Representação da entrada da rede da rua até a edificação
- **Caixas de Inspeção Elétrica:** Localizadas para facilitar manutenções futuras
- **Telefonia e Internet:** Infraestrutura de cabeamento e pontos de telefonia e internet.

## Tecnologias Utilizadas

- **Software:** AutoCAD (plantas, diagramas, detalhamentos técnicos)
- **Normas Técnicas:**  
  - NBR 5410:2004 (instalações elétricas de baixa tensão)  
  - NBR 13570:1996 (entradas de energia)  
  - Normativos específicos da concessionária local (CEEE)


## Documentação

[📄 **Ver Planta Elétrica Geral**](/assets/pdfs/projeto-cd_eletrica.pdf_cd.pdf){:target="_blank" .reveal}  
[📄 **Ver Diagrama Unifilar e Quadro de Cargas**](/assets/pdfs/projeto-cd_unifilar.pdf_cd.pdf){:target="_blank" .reveal}

<div class="pdf-container reveal">
  <object data="/assets/pdfs/projeto-cd_unifilar.pdf#toolbar=0"
          type="application/pdf" width="100%" height="500">
    <p>PDF indisponível — <a href="/assets/pdfs/projeto-cd_unifilar.pdf" target="_blank">baixar</a>.</p>
  </object>
</div>
```

---


#### 📁 Directory: src\site\notes\SEFERIN GP

##### 📄 projeto-eletrico-gp_gp.md
*Path: `src\site\notes\SEFERIN GP\projeto-eletrico-gp_gp.md`*  
*Size: 3.62 KB*

```md
---
created: 2025-07-30T01:31
dg-publish: true
ferramentas: AutoCAD
permalink: /notes/projeto-eletrico-gp-gp/
setor: Residencial
title: projeto-eletrico-gp-gp
updated: 2025-07-30T03:19
---

# Projeto Elétrico Residencial “Casa GP” 🏡

**Residência unifamiliar — 3 pavimentos / 280 m² — com rooftop e espera fotovoltaica**  
Projeto elétrico completo para uma residência vertical de três pavimentos, incluindo **rooftop com cobertura** e infraestrutura para futura instalação de sistema fotovoltaico. Localizada em via urbana de Porto Alegre (RS), a residência conta com sistemas dedicados de energia, comunicação e climatização distribuídos por todos os pavimentos.

- **Local:** Porto Alegre – RS  
- **Ano:** 2023  
- **Área construída:** Aproximadamente 280 m²  
- **Ferramentas:** AutoCAD   

<div class="project-gallery reveal">
  <img src="/assets/imagens/capa_thumb.jpg_gp.jpg" alt="Fachada do projeto Casa GP" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/planta_eletrica_thumb.jpg_gp.jpg" alt="Planta elétrica Casa GP" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/unifilar_thumb.jpg_gp.jpg" alt="Diagrama unifilar e quadro de cargas" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/rooftop_thumb.jpg_gp.jpg" alt="Detalhamento elétrico do rooftop" class="gallery-thumb" loading="lazy">
</div>

## Descrição do Projeto

O Projeto “Casa GP” abrangeu o desenvolvimento integral do sistema **elétrico residencial** para uma residência de alto padrão com três pavimentos, sendo o terceiro um **rooftop com cobertura funcional e espera técnica para instalação de inversor solar**. O projeto foi executado com **nível executivo**, visando facilidade de implantação e compatibilidade com futuras expansões em energia e tecnologia.

### Escopo Técnico Detalhado

#### ⚡ Instalações Elétricas
- **Iluminação e Tomadas:** Pontos definidos estrategicamente para áreas internas, fachada, rooftop e área de lazer
- **Quadros Elétricos:** Divididos por pavimento e função, com quadro geral, quadros secundários e quadro específico para comunicação
- **Quadro de Cargas e Diagrama Unifilar:** Com detalhamento completo de proteção, seccionamento e balanceamento
- **Entrada de Energia:** Projeto técnico da entrada com condutores, eletrodutos, caixa de medição e proteção geral
- **Climatização:** Esperas dimensionadas para splits e aquecedores em todos os pavimentos
- **Infraestrutura de Comunicação:** Quadros específicos para rede de dados, TV e automação, com eletrocalhas independentes
- **Espera para Fotovoltaica:** Duto de reserva e espaço para inversor no terceiro pavimento.
- **Telefonia e Internet:** Infraestrutura de cabeamento e pontos de telefonia e internet.

## Tecnologias Utilizadas

- **Software:** AutoCAD (plantas, cortes, diagramas unifilares e detalhamentos)
- **Normas Técnicas:**  
  - NBR 5410:2004 (instalações elétricas de baixa tensão)  
  - NBR 13570:1996 (entrada de energia elétrica)  
  - NBR 14565:2000 (infraestrutura de comunicação)  



## Documentação

[📄 **Ver Planta Elétrica Geral**](/assets/pdfs/casa-gp_eletrica.pdf_gp.pdf){:target="_blank" .reveal}  
[📄 **Ver Quadro de Cargas + Diagrama Unifilar**](/assets/pdfs/casa-gp_unifilar.pdf_gp.pdf){:target="_blank" .reveal}

<div class="pdf-container reveal">
  <object data="/assets/pdfs/casa-gp_unifilar.pdf#toolbar=0"
          type="application/pdf" width="100%" height="500">
    <p>PDF indisponível — <a href="/assets/pdfs/casa-gp_unifilar.pdf" target="_blank">baixar</a>.</p>
  </object>
</div>
```

---


#### 📁 Directory: src\site\notes\SEFERIN GT

##### 📄 projeto-eletrico-gt_gt.md
*Path: `src\site\notes\SEFERIN GT\projeto-eletrico-gt_gt.md`*  
*Size: 3.35 KB*

```md
---
created: 2025-07-30T01:31
dg-publish: true
ferramentas: AutoCAD
permalink: /notes/projeto-eletrico-gt-gt/
setor: Residencial
title: projeto-eletrico-gt-gt
updated: 2025-07-30T03:19
---

# Projeto Elétrico Residencial “GT” 🏡

**Residência unifamiliar — projeto elétrico completo com espera para energia solar**  
Projeto desenvolvido com foco em eficiência, organização e previsibilidade. O escopo abrange desde a entrada de energia até a setorização dos quadros de distribuição, incluindo infraestrutura elétrica para climatização, aquecimento e futura instalação de sistema fotovoltaico.

- **Local:** Porto Alegre - RS
- **Ano:** 2022 
- **Área estimada:** 290m2 
- **Ferramentas:** AutoCAD 2023  

<div class="project-gallery reveal">
  <img src="/assets/imagens/capa_thumb.jpg_gt.jpg" alt="Fachada do projeto GT" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/planta_situacao_thumb.jpg_gt.jpg" alt="Planta de situação e entrada elétrica" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/unifilar_thumb.jpg_gt.jpg" alt="Diagrama unifilar" class="gallery-thumb" loading="lazy">
  <img src="/assets/imagens/quadros_thumb.jpg_gt.jpg" alt="Quadro de cargas detalhado" class="gallery-thumb" loading="lazy">
</div>

## Descrição do Projeto

O Projeto “GT” compreendeu o desenvolvimento completo das **instalações elétricas residenciais**, com foco em flexibilidade para o futuro e detalhamento técnico para execução direta em obra. A infraestrutura foi pensada para acomodar aquecedores, splits, sistemas de automação e eventual implementação de **painéis solares com inversor**.

### Escopo Técnico Detalhado

#### ⚡ Instalações Elétricas
- **Entrada de Energia:** Projeto executivo com detalhamento de eletrodutos, bitolas e caixa de medição
- **Quadros de Cargas:** Organizados por pavimento e função, com dimensionamento de disjuntores e DPS
- **Iluminação e Tomadas:** Pontos definidos com base em ergonomia e funcionalidade por ambiente
- **Climatização e Aquecimento:** Esperas elétricas para ar-condicionado split e aquecedores de água
- **Espera Fotovoltaica:** Reserva física e elétrica para futura instalação de sistema solar
- **Diagrama Unifilar:** Com identificação completa de circuitos e dispositivos de proteção
- **Planta de Situação:** Representação da entrada da rede da rua até o ponto de medição e CD
- **Telefonia e Internet:** Infraestrutura de cabeamento e pontos de telefonia e internet.

## Tecnologias Utilizadas

- **Software:** AutoCAD 2023 (plantas técnicas, diagramas, detalhamentos)
- **Normas Técnicas:**  
  - NBR 5410:2004 (instalações elétricas de baixa tensão)  
  - NBR 13570:1996 (entrada de energia elétrica)  
  - Normas complementares da concessionária local


## Documentação

[📄 **Ver Planta Elétrica Geral**](/assets/pdfs/projeto-gt_eletrica.pdf_gt.pdf){:target="_blank" .reveal}  
[📄 **Ver Diagrama Unifilar e Quadro de Cargas**](/assets/pdfs/projeto-gt_unifilar.pdf_gt.pdf){:target="_blank" .reveal}

<div class="pdf-container reveal">
  <object data="/assets/pdfs/projeto-gt_unifilar.pdf#toolbar=0"
          type="application/pdf" width="100%" height="500">
    <p>PDF indisponível — <a href="/assets/pdfs/projeto-gt_unifilar.pdf" target="_blank">baixar</a>.</p>
  </object>
</div>
```

---


#### 📁 Directory: src\site\notes

##### 📄 notes.11tydata.js
*Path: `src\site\notes\notes.11tydata.js`*  
*Size: 881 bytes*

```js
require("dotenv").config();
const settings = require("../../helpers/constants");

const allSettings = settings.ALL_NOTE_SETTINGS;

module.exports = {
  eleventyComputed: {
    layout: (data) => {
      if (data.tags.indexOf("gardenEntry") != -1) {
        return "layouts/index.njk";
      }
      return "layouts/note.njk";
    },
    permalink: (data) => {
      if (data.tags.indexOf("gardenEntry") != -1) {
        return "/";
      }
      return data.permalink || undefined;
    },
    settings: (data) => {
      const noteSettings = {};
      allSettings.forEach((setting) => {
        let noteSetting = data[setting];
        let globalSetting = process.env[setting];

        let settingValue =
          noteSetting || (globalSetting === "true" && noteSetting !== false);
        noteSettings[setting] = settingValue;
      });
      return noteSettings;
    },
  },
};
```

---

##### 📄 notes.json
*Path: `src\site\notes\notes.json`*  
*Size: 59 bytes*

```json
{
    "tags": "note",
    "templateEngineOverride": "md"
}
```

---


#### 📁 Directory: src\site

##### 📄 search-index.njk
*Path: `src\site\search-index.njk`*  
*Size: 629 bytes*

```njk
---
permalink: /searchIndex.json
eleventyExcludeFromCollections: true
---
[{% for post in collections.note %}
{
		"title": {% if post.data.title %}{{post.data.title | jsonify | safe }}{% else %}{{post.fileSlug | jsonify | safe }}{% endif %},
		"date":"{{ post.date }}",
		"url":"{{ post.url }}",
		"content": {{ post.templateContent | striptags(true) | link | jsonify | safe  }},
		"tags": [{{post.templateContent | link | searchableTags | safe }} {% if post.data.tags %}{% for tag in post.data.tags %}"{{tag|validJson}}"{% if not loop.last %},{% endif %}{% endfor %}{% endif %}]
}{% if not loop.last %},{% endif %}
{% endfor %}]
```

---

##### 📄 sitemap.njk
*Path: `src\site\sitemap.njk`*  
*Size: 388 bytes*

```njk
---
permalink: /sitemap.xml
eleventyExcludeFromCollections: true
---
<?xml version="1.0" encoding="utf-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    {% for page in collections.all %}
        <url>
            <loc>{{ meta.siteBaseUrl }}{{ page.url | url }}</loc>
            <lastmod>{{ page.date | dateToZulu }}</lastmod>
        </url>
    {% endfor %}
</urlset>
```

---


#### 📁 Directory: src\site\styles

##### 📄 custom-style.scss
*Path: `src\site\styles\custom-style.scss`*  
*Size: 299 bytes*

```scss
body {
    /***
      ADD YOUR CUSTOM STYLING HERE. (INSIDE THE body {...} section.)
      IT WILL TAKE PRECEDENCE OVER THE STYLING IN THE STYLE.CSS FILE.
   ***/
    //  background-color: white;
    //  .content {
    //   font-size: 14px;
    //  }
    //  h1 {
    //   color: black;
    //  }
}
```

---

##### 📄 digital-garden-base.scss
*Path: `src\site\styles\digital-garden-base.scss`*  
*Size: 17.54 KB*

```scss
/***
* DO NOT ADD/MODIFY STYLING HERE. IT WILL BE OVERWRITTEN IF YOU UPDATE THE TEMPLATE VERSION.
* MODIFY THE custom-style.scss FILE INSTEAD.
***/

body {
    overflow-x: hidden;
    --note-icon-1: url(/img/tree-1.svg);
    --note-icon-2: url(/img/tree-2.svg);
    --note-icon-3: url(/img/tree-3.svg);
    --note-icon-fallback: url(/img/default-note-icon.svg);
    --graph-main: var(--text-accent);
    --graph-muted: var(--text-muted);
}

img {
    max-width: 100%;
}

.content {
    max-width: 700px;
    margin: auto;
    font-size: 18px;
    line-height: 1.5;
    margin-top: 90px;
    position: relative;

    @media (max-width: 800px) {
        margin-top: 75px;
    }
}

.external-link {
    background-position: center right;
    background-repeat: no-repeat;
    background-image: linear-gradient(transparent, transparent), url("/img/outgoing.svg");
    background-size: 13px;
    padding-right: 16px;
    background-position-y: 4px;
    cursor: pointer;
}

.markdown-preview-view pre.mermaid {
    background: white;
    border-radius: 25px;
    padding: 10px;
}

div.transclusion {
    position: relative;
    padding: 8px;
    .markdown-embed-link {
        z-index: 99;
        display: block;
        width: auto !important;
    }
}

ul.task-list {
    list-style: none;
    padding-left: 15px;
}

.sidebar {
    position: fixed;
    top: 75px;
    right: 17px;
    height: 100%;
    min-width: 25px;
    display: flex;
    z-index: 3;
    max-width: 350px;

    .graph {
        width: 320px;
        min-height: 320px;

        #link-graph {
            width: 320px;
            height: 320px;
        }

        #graph-fs-btn {
            margin-right: 10px;
        }
    }
    .graph-fs {
        position: fixed;
        top: 50%;
        left: 50%;
        height: calc(100vmin - 100px);
        width: calc(100vmin - 100px);
        min-height: 350px;
        min-width: 350px;
        transform: translate(-50%, -50%);
        z-index: 9999;
        display: block;
        background-color: var(--background-secondary);
        border: 1px solid var(--text-accent);
        border-radius: 5px;
        padding-top: 5px;

        #link-graph {
            width: 100%;
            height: 100%;
        }

        #graph-controls {
            margin-top: 10px;
        }

        .graph-title {
            display: none;
        }
    }
}

.expand-line {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.sidebar-container {
    padding-right: 20px;
    width: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 87%;
}

.toc {
    padding-right: 5px;
    background-color: var(--background-primary);
    padding: 10px;
    border-radius: 10px;

    ol {
        list-style: none;
        padding-left: 10px;
        border-left: 2px solid var(--background-secondary);
    }

    & > ol {
        padding-left: 0;
        border-left: none;
    }
}

.toc-container {
    font-size: 1rem;
    max-height: 220px;
    overflow-y: auto;
    margin-bottom: 10px;
    border-left: 1px solid var(--text-accent);
    ul {
        list-style-type: none;
        padding-inline-start: 15px !important;
        margin-top: 0;
        margin-bottom: 0;
    }
    ul:not(:first-child) {
        margin-bottom: 3px;
    }

    li {
        padding-top: 4px;
        &::before {
            content: "# " !important;
            color: var(--text-accent);
            font-size: 0.8rem;
        }
        a {
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
    }
}

.toc-title-container {
    display: flex;
    justify-content: flex-start;
    .toc-title {
        font-size: 1.2rem !important;
        color: var(--h6-color);
        width: fit-content;
        padding: 3px 7px 3px 0;
        border-radius: 10px 10px 0 0;
    }
}

.backlinks {
    flex: 1;
    margin-top: 10px;
    background-color: var(--background-primary);
    border-radius: 10px;
    padding: 10px;

    .backlink-title {
        margin: 4px 0;
        font-size: 18px !important;
        color: var(--h6-color);
    }
}

.backlink-list {
    border-left: 1px solid var(--text-accent);
    max-height: 200px;
    overflow-y: auto;
    overflow-x: hidden;
}

.backlink-card {
    padding-bottom: 8px;
    border-radius: 4px;
    width: 100%;
    font-size: 1rem;
    margin-left: 10px;
    color: var(--text-accent);
    i {
        font-size: 0.8rem;
    }

    .backlink {
        margin-left: 5px;
    }
}

.no-backlinks-message {
    font-size: 0.8rem;
    color: var(--text-normal);
}

.graph {
    .graph-title-container {
        display: flex;
        justify-content: flex-end;
        width: 100%;
    }

    .graph-title {
        width: fit-content;
        background-color: var(--background-secondary);
        margin: 10px 0 0 0;
        padding: 3px 7px;
        font-size: 1.2rem !important;
        border-radius: 10px 10px 0 0;
        color: var(--h6-color);
    }
}

#link-graph {
    background-color: var(--background-secondary);
    margin-bottom: 20px;
    border-radius: 10px 0 10px 10px;
    width: fit-content;
}

@media (max-width: 1400px) {
    #link-graph {
        border-radius: 0 10px 10px 10px;
    }
    .sidebar {
        position: relative;
        transform: none;
        border-radius: 4px;
        margin-top: 50px;
        max-width: 700px;
        margin: auto;
        border-radius: 0;
        border-top: 2px solid var(--background-secondary);
        justify-content: space-between;
    }

    .sidebar-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .graph {
        flex: 1;
        .graph-title-container {
            justify-content: flex-start;
        }
    }

    .toc {
        display: none;
    }
}
@media (max-width: 800px) {
    .sidebar-container {
        display: flex;
        flex-direction: column-reverse;
    }
}

.filetree-sidebar {
    margin: 0;
    z-index: 10;
    padding: 10px;
    top: 0px;
    left: 0;
    position: fixed;
    height: 100%;
    background-color: var(--background-secondary);
    color: var(--text-muted);
    overflow-y: auto;
    width: 250px;
    h1 {
        font-size: 32px !important;
    }
    @media (max-width: 800px) {
        h1 {
            display: none;
        }

        .search-button {
            width: 100%;
            margin: 2px;
        }
    }
}

.empty-navbar {
    display: flex;
    justify-content: flex-end;
    margin-bottom: -60px;

    @media (max-width: 800px) {
        justify-content: center;
    }

    .search-button {
        margin: 10px 65px 10px 65px;
    }
}

.navbar {
    background-color: var(--background-secondary);
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
    padding-left: var(--file-margins);
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1400px) {
        position: fixed;
    }

    @media (max-width: 800px) {
        h1 {
            font-size: 18px !important;
        }
    }

    .navbar-inner {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .search-button {
        @media (max-width: 800px) {
            min-width: 36px;
            margin: 10px 25px 10px 25px;
        }
    }

    .search-text {
        display: flex;
        justify-content: center;
        @media (max-width: 800px) {
            display: none;
        }
    }
}

.notelink {
    padding: 5px 0 5px 25px;
    display: flex;
    align-items: center;
    a {
        &:hover {
            text-decoration: underline !important;
        }
    }
    svg {
        flex-shrink: 0;
    }
}

.foldername-wrapper {
    cursor: pointer;
    margin: 4px 0 4px 2px;
}

.inner-folder {
    padding: 3px 0 3px 10px;
}

.filename {
    margin-left: 5px;
}

.notelink.active-note {
    a {
        color: var(--text-accent);
    }

    color: var(--text-accent);
    background-color: var(--background-primary);
    transform: translateX(10px);
}

.fullpage-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 5;
}

.search-container {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 15;
    height: 100%;
    justify-content: center;
    display: none;
}

.search-container.active {
    display: flex;
}

.search-box {
    transform: translateY(100px);
    background-color: var(--background-primary);
    max-width: 80%;
    width: 900px;
    border-radius: 15px;
    padding: 10px;
    height: fit-content;
}

.search-box input {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 2rem;
    background-color: var(--background-primary);
    color: var(--text-primary);
}

.search-box input:focus {
    outline: none;
}

#search-results {
    margin-top: 20px;
    overflow-y: auto;
    padding: 20px;
    display: flex;
    justify-content: center;
    max-height: 50vh;
}

#search-results .searchresult {
    margin-bottom: 15px;
    list-style: none;
    background-color: var(--background-secondary);
    padding: 10px;
    border-radius: 10px;
    font-size: 1.2rem;
    cursor: pointer;

    &.active {
        border: 2px solid var(--text-accent);
    }
}

.search-box-footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
}

.navigation-hint {
    font-size: 1rem;
    color: var(--text-secondary);
    margin-right: 20px;
}

.search-link {
    display: block;
    margin-bottom: 4px;
    font-size: 1.4rem;
}

.search-button {
    background-color: var(--background-primary);
    border-radius: 20px;
    height: 2em;
    display: flex;
    align-items: center;
    min-width: 150px;
    margin: 10px 40px;
    border: 1px solid var(--text-normal)

... (Content truncated - file too large)
```

---

##### 📄 obsidian-base.scss
*Path: `src\site\styles\obsidian-base.scss`*  
*Size: 295.53 KB*

```scss
/***
* DO NOT ADD/MODIFY STYLING HERE. IT WILL BE OVERWRITTEN IF YOU UPDATE THE TEMPLATE VERSION.
* MODIFY THE custom-style.scss FILE INSTEAD.
***/

body {
    /* Animations */
    --anim-duration-none: 0;
    --anim-duration-superfast: 70ms;
    --anim-duration-fast: 140ms;
    --anim-duration-moderate: 300ms;
    --anim-duration-slow: 560ms;
    --anim-motion-smooth: cubic-bezier(0.45, 0.05, 0.55, 0.95);
    --anim-motion-delay: cubic-bezier(0.65, 0.05, 0.36, 1);
    --anim-motion-jumpy: cubic-bezier(0.68, -0.55, 0.27, 1.55);
    --anim-motion-swing: cubic-bezier(0, 0.55, 0.45, 1);
    /* Blockquotes */
    --blockquote-border-thickness: 2px;
    --blockquote-border-color: var(--interactive-accent);
    --blockquote-font-style: normal;
    --blockquote-color: inherit;
    --blockquote-background-color: transparent;
    /* Bold */
    --bold-weight: var(--font-semibold);
    --bold-color: inherit;
    /* Borders */
    --border-width: 1px;
    /* Buttons */
    --button-radius: var(--input-radius);
    /* Callouts */
    --callout-border-width: 0px;
    --callout-border-opacity: 0.25;
    --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6);
    --callout-radius: var(--radius-s);
    --callout-blend-mode: var(--highlight-mix-blend-mode);
    --callout-title-padding: 0;
    --callout-title-size: inherit;
    --callout-content-padding: 0;
    /* Checkboxes */
    --checkbox-radius: var(--radius-s);
    --checkbox-size: 15px;
    --checkbox-marker-color: var(--background-primary);
    --checkbox-color: var(--interactive-accent);
    --checkbox-color-hover: var(--interactive-accent-hover);
    --checkbox-border-color: var(--text-faint);
    --checkbox-border-color-hover: var(--text-muted);
    --checklist-done-decoration: line-through;
    --checklist-done-color: var(--text-muted);
    /* Code */
    --code-size: var(--font-smaller);
    --code-background: var(--background-primary-alt);
    --code-normal: var(--text-muted);
    --code-comment: var(--text-faint);
    --code-function: var(--color-yellow);
    --code-important: var(--color-orange);
    --code-keyword: var(--color-pink);
    --code-property: var(--color-cyan);
    --code-punctuation: var(--text-muted);
    --code-string: var(--color-green);
    --code-tag: var(--color-red);
    --code-value: var(--color-purple);
    /* Collapse icons */
    --collapse-icon-color: var(--text-faint);
    --collapse-icon-color-collapsed: var(--text-accent);
    /* Cursor */
    --cursor: default;
    --cursor-link: pointer;
    /* Dialogs - e.g. small modals, confirmations */
    --dialog-width: 560px;
    --dialog-max-width: 80vw;
    --dialog-max-height: 85vh;
    /* Dividers â€” between panes */
    --divider-color: var(--background-modifier-border);
    --divider-color-hover: var(--interactive-accent);
    --divider-width: 1px;
    --divider-width-hover: 3px;
    --divider-vertical-height: calc(100% - var(--header-height));
    /* Dragging */
    --drag-ghost-background: rgba(0, 0, 0, 0.85);
    --drag-ghost-text-color: #fff;
    /* Embeds */
    --embed-background: inherit;
    --embed-border-left: 2px solid var(--interactive-accent);
    --embed-border-right: none;
    --embed-border-top: none;
    --embed-border-bottom: none;
    --embed-padding: 0 0 0 var(--size-4-6);
    --embed-font-style: inherit;
    /* Blocks */
    --embed-block-shadow-hover: 0 0 0 1px var(--background-modifier-border),
      inset 0 0 0 1px var(--background-modifier-border);
    /* File layout */
    --file-line-width: 700px;
    --file-folding-offset: 24px;
    --file-margins: var(--size-4-8);
    --file-header-font-size: var(--font-ui-small);
    --file-header-font-weight: 400;
    --file-header-border: var(--border-width) solid transparent;
    --file-header-justify: center;
    /* Relative font sizes */
    --font-smallest: 0.8em;
    --font-smaller: 0.875em;
    --font-small: 0.933em;
    /* UI font sizes */
    --font-ui-smaller: 12px;
    --font-ui-small: 13px;
    --font-ui-medium: 15px;
    --font-ui-large: 20px;
    /* Font weights */
    --font-thin: 100;
    --font-extralight: 200;
    --font-light: 300;
    --font-normal: 400;
    --font-medium: 500;
    --font-semibold: 600;
    --font-bold: 700;
    --font-extrabold: 800;
    --font-black: 900;
    /* Footnotes */
    --footnote-size: var(--font-smaller);
    /* Graphs */
    --graph-controls-width: 240px;
    --graph-text: var(--text-normal);
    --graph-line: var(--color-base-35, var(--background-modifier-border-focus));
    --graph-node: var(--text-muted);
    --graph-node-unresolved: var(--text-faint);
    --graph-node-focused: var(--text-accent);
    --graph-node-tag: var(--color-green);
    --graph-node-attachment: var(--color-yellow);
    /* Headings */
    --heading-formatting: var(--text-faint);
    --h1-color: inherit;
    --h2-color: inherit;
    --h3-color: inherit;
    --h4-color: inherit;
    --h5-color: inherit;
    --h6-color: inherit;
    --h1-font: inherit;
    --h2-font: inherit;
    --h3-font: inherit;
    --h4-font: inherit;
    --h5-font: inherit;
    --h6-font: inherit;
    --h1-line-height: 1.2;
    --h2-line-height: 1.2;
    --h3-line-height: 1.3;
    --h4-line-height: 1.4;
    --h5-line-height: var(--line-height-normal);
    --h6-line-height: var(--line-height-normal);
    --h1-size: 2em;
    --h2-size: 1.6em;
    --h3-size: 1.37em;
    --h4-size: 1.25em;
    --h5-size: 1.12em;
    --h6-size: 1.12em;
    --h1-style: normal;
    --h2-style: normal;
    --h3-style: normal;
    --h4-style: normal;
    --h5-style: normal;
    --h6-style: normal;
    --h1-variant: normal;
    --h2-variant: normal;
    --h3-variant: normal;
    --h4-variant: normal;
    --h5-variant: normal;
    --h6-variant: normal;
    --h1-weight: 700;
    --h2-weight: 600;
    --h3-weight: 600;
    --h4-weight: 600;
    --h5-weight: 600;
    --h6-weight: 600;
    /* View header */
    --header-height: 40px;
    /* Horizontal rules */
    --hr-color: var(--background-modifier-border);
    --hr-thickness: 2px;
    /* Icons */
    --icon-size: var(--icon-m);
    --icon-stroke: var(--icon-m-stroke-width);
    --icon-xs: 14px;
    --icon-s: 16px;
    --icon-m: 18px;
    --icon-l: 18px;
    --icon-xs-stroke-width: 2px;
    --icon-s-stroke-width: 2px;
    --icon-m-stroke-width: 1.75px;
    --icon-l-stroke-width: 1.75px;
    --icon-color: var(--text-muted);
    --icon-color-hover: var(--text-muted);
    --icon-color-active: var(--text-accent);
    --icon-color-focused: var(--text-normal);
    --icon-opacity: 0.85;
    --icon-opacity-hover: 1;
    --icon-opacity-active: 1;
    --clickable-icon-radius: var(--radius-s);
    /* Indentation guide */
    --indentation-guide-width: 1px;
    --indentation-guide-color: rgba(var(--mono-rgb-100), 0.12);
    --indentation-guide-color-active: rgba(var(--mono-rgb-100), 0.3);
    /* Inline title */
    --inline-title-color: var(--h1-color);
    --inline-title-font: var(--h1-font);
    --inline-title-line-height: var(--h1-line-height);
    --inline-title-size: var(--h1-size);
    --inline-title-style: var(--h1-style);
    --inline-title-variant: var(--h1-variant);
    --inline-title-weight: var(--h1-weight);
    /* Inputs */
    --input-height: 30px;
    --input-radius: 5px;
    --input-font-weight: var(--font-normal);
    --input-border-width: 1px;
    /* Italic */
    --italic-color: inherit;
    /* Z-index */
    --layer-cover: 5;
    --layer-sidedock: 10;
    --layer-status-bar: 15;
    --layer-popover: 30;
    --layer-slides: 45;
    --layer-modal: 50;
    --layer-notice: 60;
    --layer-menu: 65;
    --layer-tooltip: 70;
    --layer-dragged-item: 80;
    /* Line heights */
    --line-height-normal: 1.5;
    --line-height-tight: 1.3;
    /* Links */
    --link-color: var(--text-accent);
    --link-color-hover: var(--text-accent-hover);
    --link-decoration: underline;
    --link-decoration-hover: underline;
    --link-decoration-thickness: auto;
    --link-external-color: var(--text-accent);
    --link-external-color-hover: var(--text-accent-hover);
    --link-external-decoration: underline;
    --link-external-decoration-hover: underline;
    --link-external-filter: none;
    --link-unresolved-color: var(--text-accent);
    --link-unresolved-opacity: 0.7;
    --link-unresolved-filter: none;
    --link-unresolved-decoration-style: solid;
    --link-unresolved-decoration-color: hsla(var(--interactive-accent-hsl), 0.3);
    /* Lists */
    --list-indent: 2em;
    --list-spacing: 0.075em;
    --list-marker-color: var(--text-faint);
    --list-marker-color-hover: var(--text-muted);
    --list-marker-color-collapsed: var(--text-accent);
    --list-bullet-border: none;
    --list-bullet-radius: 50%;
    --list-bullet-size: 5px;
    --list-bullet-transform: none;
    /* File navigator */
    --nav-item-size: var(--font-ui-small);
    --nav-item-color: var(--text-muted);
    --nav-item-color-hover: var(--text-normal);
    --nav-item-color-active: var(--text-normal);
    --nav-item-color-selected: var(--text-normal);
    --nav-item-color-highlighted: var(--text-accent-hover);
    --nav-item-background-hover: var(--background-modifier-hover);
    --nav-item-background-active: var(--background-modifier-hover);
    --nav-item-background-selected: hsla(var(--color-accent-hsl), 0.2);
    --nav-item-padding: var(--size-4-1) var(--size-4-2);
    --nav-item-weight: inherit;
    --nav-item-weight-hover: inherit;
    --nav-item-weight-active: inherit;
    --nav-item-white-space: nowrap;
    --nav-indentation-guide-width: var(--indentation-guide-width);
    --nav-indentation-guide-color: var(--indentation-guide-color);
    --nav-collapse-icon-color: var(--collapse-icon-color);
    --nav-collapse-icon-color-collapsed: var(--text-faint);
    /* Modals - e.g. settings, community themes, community plugins */
    --modal-background: var(--background-primary);
    --modal-width: 90vw;
    --modal-height: 85vh;
    --modal-max-width: 1100px;
    --modal-max-height: 1000px;
    --modal-max-width-na

... (Content truncated - file too large)
```

---

##### 📄 style.scss
*Path: `src\site\styles\style.scss`*  
*Size: 4.66 KB*

```scss
/***
* DO NOT ADD/MODIFY STYLING HERE. IT WILL BE OVERWRITTEN IF YOU UPDATE THE TEMPLATE VERSION.
* MODIFY THE custom-style.scss FILE INSTEAD.
***/

:root {
    --background-primary: rgb(32, 31, 31);
    --background-secondary: rgb(57, 56, 56);
    --text-normal: #dcddde;
    --text-accent: rgb(97, 186, 245);
    --file-margins: 32px;

    --callout-border-width: 0px;
    --callout-border-opacity: 0.25;
    --callout-padding: 12px 12px 12px 24px;
    --callout-radius: 4px;
    --callout-blend-mode: lighten;
    --callout-title-padding: 0;
    --callout-title-size: inherit;
    --callout-content-padding: 0;
}

h1 {
    color: #ffef60;
}

h2 {
    color: #f06449;
}

h3 {
    color: #d4fcc3;
}

h4 {
    color: #72dcff;
}

button {
    border: none;
    color: white;
    padding: 5px 15px;
}

.centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.theme-dark {
    background: var(--background-primary);
    color: var(--text-normal);
    font-family: var(--font-default);
}

.theme-light {
    background: white;
    color: black;
    font-family: var(--font-default);
}

a.is-unresolved {
    color: rgb(97 186 245 / 65%);
}
a {
    text-decoration: underline;
    color: var(--text-accent);
}

.font-bg {
    font-size: 92px;
}

blockquote {
    background: #ffffff17;
    border-left: 10px solid #c1dbe3;
    margin: 1.5em 10px;
    padding: 0.5em 10px;
    quotes: "\201C""\201D""\2018""\2019";
}

blockquote:before {
    color: #ccc;
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.1em;
    vertical-align: -0.4em;
}

blockquote p {
    display: inline;
}

p > code {
    //Inline code
    color: #c7254e;
    background-color: #1a1a1a;
}

.callout {
    --callout-color: 68, 138, 255;
    --callout-icon: lucide-pencil;
}
.callout[data-callout="abstract"],
.callout[data-callout="summary"],
.callout[data-callout="tldr"] {
    --callout-color: 0, 176, 255;
    --callout-icon: lucide-clipboard-list;
}
.callout[data-callout="info"],
.callout[data-callout="todo"] {
    --callout-color: 0, 184, 212;
}
.callout[data-callout="info"] {
    --callout-icon: lucide-info;
}
.callout[data-callout="todo"] {
    --callout-icon: lucide-check-circle-2;
}
.callout[data-callout="tip"],
.callout[data-callout="hint"],
.callout[data-callout="important"] {
    --callout-color: 0, 191, 165;
    --callout-icon: lucide-flame;
}
.callout[data-callout="success"],
.callout[data-callout="check"],
.callout[data-callout="done"] {
    --callout-color: 0, 200, 83;
    --callout-icon: lucide-check;
}
.callout[data-callout="question"],
.callout[data-callout="help"],
.callout[data-callout="faq"] {
    --callout-color: 100, 221, 23;
    --callout-icon: help-circle;
}
.callout[data-callout="warning"],
.callout[data-callout="caution"],
.callout[data-callout="attention"] {
    --callout-color: 255, 145, 0;
    --callout-icon: lucide-alert-triangle;
}
.callout[data-callout="failure"],
.callout[data-callout="fail"],
.callout[data-callout="missing"] {
    --callout-color: 255, 82, 82;
    --callout-icon: lucide-x;
}
.callout[data-callout="danger"],
.callout[data-callout="error"] {
    --callout-color: 255, 23, 68;
    --callout-icon: lucide-zap;
}
.callout[data-callout="bug"] {
    --callout-color: 245, 0, 87;
    --callout-icon: lucide-bug;
}
.callout[data-callout="example"] {
    --callout-color: 124, 77, 255;
    --callout-icon: lucide-list;
}
.callout[data-callout="quote"],
.callout[data-callout="cite"] {
    --callout-color: 158, 158, 158;
    --callout-icon: lucide-quote;
}
.callout {
    overflow: hidden;
    border-style: solid;
    border-color: rgba(var(--callout-color), var(--callout-border-opacity));
    border-width: var(--callout-border-width);
    border-radius: var(--callout-radius);
    margin: 1em 0;
    mix-blend-mode: var(--callout-blend-mode);
    background-color: rgba(var(--callout-color), 0.1);
    padding: var(--callout-padding);
}
.callout.is-collapsible .callout-title {
    cursor: default;
}
.callout-title {
    padding: var(--callout-title-padding);
    display: flex;
    gap: 4px;
    font-size: var(--callout-title-size);
    color: rgb(var(--callout-color));
    line-height: 1.3;
}
.callout-content {
    overflow-x: auto;
    padding: var(--callout-content-padding);
}
.callout-icon {
    flex: 0 0 auto;
    display: flex;
    align-self: center;
}
.callout-icon .svg-icon {
    color: rgb(var(--callout-color));
}
.callout-title-inner {
    font-weight: 600;
}
.callout-fold {
    display: flex;
    align-items: center;
    padding-right: 8px;
}
.callout-fold .svg-icon {
    transition: transform 100ms ease-in-out;
}
.callout.is-collapsed .callout-fold .svg-icon {
    transform: rotate(-90deg);
}
```

---

##### 📄 vercel.json
*Path: `vercel.json`*  
*Size: 261 bytes*

```json
{
    "outputDirectory": "dist",
    "installCommand": "npm install",
    "buildCommand": "npm run build",
    "devCommand": "npm run start",
    "routes": [
        { "handle": "filesystem" },
        { "src": "/(.*)", "status": 404, "dest": "/404" }
      ]
}
```

---

