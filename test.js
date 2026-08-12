
        const projectData = {
            1: {
                title: "Antimicrobial Resistance Profiling",
                tags: ["Genomics", "CARD/ResFinder", "Microbiology"],
                overview: "Identification of drug-resistant genes in bacterial genomes using high-throughput screening against CARD/ResFinder databases. Automated extraction of FASTA/FASTQ reads, assembly, and alignment mapping to identify exact resistance mechanisms (efflux pumps, target mutation, enzymatic inactivation).",
                methodology: "CARD database integration, BLAST alignment matching, E-value scoring, heatmap generation mapping resistance mechanisms to drug classes.",
                input: "Raw bacterial FASTA/FASTQ genomic sequences.",
                output: "Annotated table of resistance genes, identity %, coverage, and high-contrast resistance heatmap.",
                value: "Enables clinical microbiologists to instantly identify drug-resistant strains (MRSA etc.) and guide targeted treatment.",
                images: ["case1.png", "case1_2.png"],
                captions: [
                    "AMR gene heatmap — resistance mechanisms mapped to drug classes across bacterial samples.",
                    "Resistance gene table — identity scores, coverage, and drug class annotations per isolate."
                ]
            },
            2: {
                title: "Automated Systematic Reviews",
                tags: ["NLP / RAG", "Medical Writing", "NCBI API"],
                overview: "LLM-powered Retrieval-Augmented Generation (RAG) system integrated with NCBI PubMed API to automate scientific literature search, cohort data extraction, and systematic review writing.",
                methodology: "Semantic retrieval, PubMed API mining, PDF table parsing, structured LLM prompts for zero-hallucination synthesis.",
                input: "Search terms, target patient cohort parameters, study inclusion criteria.",
                output: "Synthesized clinical meta-analysis, tabular cohort statistics, formatted citations.",
                value: "Reduces clinical research timelines from months of manual reading to minutes.",
                images: ["case2.png", "case2_1.png", "case2_3.png", "case2_4.png", "case2_5.png", "case2_6.png", "case2_7.png", "case2_8.png"],
                captions: [
                    "Precision Oncology Links panel — LLM-retrieved live drug approvals and clinical trials per gene variant.",
                    "PubMed search interface — automated query results with ranked abstracts by semantic relevance.",
                    "Literature extraction — structured data pulled from retrieved papers into a comparison table.",
                    "Cohort statistics synthesis — patient demographics and outcomes auto-summarized across studies.",
                    "Meta-analysis report — synthesized findings with effect sizes and confidence intervals.",
                    "Citation manager — automatically formatted references in clinical journal style.",
                    "RAG pipeline overview — document retrieval, embedding, and LLM answer generation flow.",
                    "Final systematic review output — ready-to-submit manuscript section with full citations."
                ]
            },
            3: {
                title: "Gene Expression Profiling",
                tags: ["RNA-Seq", "DESeq2", "limma", "DataViz"],
                overview: "Complete differential gene expression (DGE) pipeline transforming raw transcriptomic counts into publication-ready statistical insights and visualizations.",
                methodology: "TMM normalization, limma/DESeq2 linear modeling, Benjamini-Hochberg FDR correction, interactive volcano and heatmap plotting.",
                input: "Raw RNA-Seq counts matrix + experimental metadata.",
                output: "DEGs reports, high-resolution Volcano plots, clustered heatmaps.",
                value: "Enables key biomarker discovery and target identification for drug development and oncology research.",
                images: ["case3.png", "case3_1.png"],
                captions: [
                    "Volcano plot — significantly up/downregulated genes highlighted by fold-change and p-value thresholds.",
                    "Heatmap — top 50 DEGs clustered by expression pattern across sample conditions."
                ]
            },
            4: {
                title: "Single-Cell Subpopulation Discovery",
                tags: ["scRNA-Seq", "Scanpy", "UMAP", "Clustering"],
                overview: "High-resolution scRNA-seq processing to identify individual cell types, immune microenvironments, and developmental trajectories from 10X Genomics data.",
                methodology: "QC filtering (mitochondrial thresholds), normalization, PCA, UMAP/t-SNE, Leiden clustering, marker-gene based cell type annotation.",
                input: "10X Genomics Cell Ranger output (filtered_feature_bc_matrix).",
                output: "UMAP plots with annotated cell subpopulations, cluster frequency tables, differential marker gene lists.",
                value: "Maps tumor microenvironment, identifies cancer stem cells, and analyzes drug-resistant cell fractions.",
                images: ["case4.png", "case4._1.png", "case4._2.png"],
                captions: [
                    "UMAP projection — distinct immune cell clusters colored by Leiden cluster assignment.",
                    "Cell type annotation — top marker genes per cluster used for biological labeling.",
                    "Cluster frequency table — relative abundance of each cell population per sample group."
                ]
            },
            5: {
                title: "3D Protein Binding Pocket Analysis",
                tags: ["AlphaFold DB", "py3Dmol", "Structural Biology"],
                overview: "Structural biology analysis evaluating the impact of clinical missense mutations on protein structure and drug-binding pocket geometry using AlphaFold2 models.",
                methodology: "AlphaFold model retrieval, pocket volume/surface calculation, mutation modeling, interactive WebGL molecular rendering via py3Dmol.",
                input: "UniProt ID or PDB code + clinical mutation variants list.",
                output: "Interactive 3D molecular model highlighting mutation hotspots, binding pockets, and affinity comparison report.",
                value: "Helps computational chemists understand why mutations cause drug resistance and design better binders.",
                images: ["case5.png", "case5_1.png", "case5_2.png"],
                captions: [
                    "3D protein structure — AlphaFold model with binding pocket highlighted and mutation site marked.",
                    "Pocket residues view — key amino acids involved in ligand coordination visualized in stick mode.",
                    "Mutation comparison — wild-type vs. mutant binding pocket overlay showing structural shift."
                ]
            },
            6: {
                title: "Clinical VCF Variant Annotation",
                tags: ["VCF Parsing", "Ensembl VEP", "Oncology", "Precision Medicine"],
                overview: "Annotation of Whole Exome Sequencing (WES) variant files to identify pathogenic mutations and actionable pharmacogenomics targets for precision oncology.",
                methodology: "Ensembl VEP API queries, ClinVar pathogenic classification, gnomAD allele frequency filtering, drug-target interaction mapping via Open Targets.",
                input: "Raw patient VCF files from WGS/WES sequencing.",
                output: "Filtered clinical report: pathogenic variants, phenotype links, FDA-approved drugs, active clinical trials.",
                value: "Enables clinicians to select targeted therapies based on each patient's individual genomic mutations.",
                images: ["case6.png", "case6_1.png"],
                captions: [
                    "Variant annotation report — BRAF/BRCA1/NRAS pathogenic variants with linked drug approvals from Open Targets.",
                    "Clinical trials panel — automatically retrieved active ClinicalTrials.gov studies per detected variant."
                ]
            },
            7: {
                title: "Interactive Genomics Viewer (IGV)",
                tags: ["IGV.js", "BAM Alignment", "Visualization"],
                overview: "Web-based integration of IGV.js for visual validation of alignment BAM files and variant calls directly in the browser — no software installation needed.",
                methodology: "IGV.js integration, custom track creation, BAM/BAI indexing, visual genomic coordinates rendering (hg19/hg38).",
                input: "BAM alignment files, VCF variant files, reference genome coordinates.",
                output: "Interactive genomic track browser: read coverage, split reads, mismatches, SNP visualization.",
                value: "Allows pathologists to visually confirm bioinformatics variant calls, eliminating false positives before clinical decisions.",
                images: ["case7.png"],
                captions: [
                    "IGV browser view — BAM read pileup at a somatic mutation site with variant allele frequency display."
                ]
            },
            8: {
                title: "NCBI GEO Mining & GSEA",
                tags: ["NCBI GEO", "GSEA", "KEGG Pathways", "R"],
                overview: "Automated retrieval and re-analysis of public GEO gene expression datasets, followed by GSEA to map enriched biological pathways in disease vs. control comparisons.",
                methodology: "GEOquery downloading, limma differential analysis, fgsea pathway enrichment, Ridge plot and Volcano plot generation via enrichplot.",
                input: "NCBI GEO accession number (e.g. GSE25507) — fully automated download.",
                output: "GSEA Ridge plot, enriched pathway table, annotated Volcano plot, Bioconductor R scripts.",
                value: "Validate lab hypotheses against thousands of public datasets in minutes — no coding required from the client.",
                images: ["case8.png", "case8_1.png"],
                captions: [
                    "GSEA Ridge plot — top enriched KEGG pathways ranked by Normalized Enrichment Score (NES).",
                    "Volcano plot — GEO dataset DEGs with GSEA pathway membership color overlay."
                ]
            },
            9: {
                title: "Cloud-Native Bioinformatics Pipelines",
                tags: ["Nextflow", "WDL / Cromwell", "GATK", "Cloud"],
                overview: "Design and generation of scalable HPC bioinformatics workflows for large-scale genomic data analysis on AWS and Google Cloud Life Sciences.",
                methodology: "Nextflow / WDL script generation, Docker/Singularity containerization, GATK Best Practices, AWS Batch and GCP config files.",
                input: "Target pipeline steps (QC → alignment → variant calling → reporting).",
                output: "Executable main.nf / workflow.wdl scripts, Docker images, cloud config files, deployment guide.",
                value: "Scales analysis from a laptop to thousands of cloud nodes — standardizes biotech production workflows.",
                images: ["case9.png", "case9_1.png"],
                captions: [
                    "Pipeline architecture diagram — Nextflow workflow DAG for GATK somatic variant calling.",
                    "Cloud deployment config — AWS Batch executor settings and resource allocation per pipeline step."
                ]
            },
            10: {
                title: "Metagenomic Dysbiosis Profiling",
                tags: ["16S rRNA", "Microbiome", "QIIME2", "Diversity Stats"],
                overview: "Analysis of 16S rRNA sequencing to profile microbial communities, calculate diversity statistics, and detect disease-associated dysbiosis signatures.",
                methodology: "ASV table parsing, Alpha diversity (Shannon/Simpson), Beta diversity (Bray-Curtis/UniFrac), 3D PCoA projection, taxonomic grouping and stacked bar charts.",
                input: "Microbial abundance matrix (ASV/OTU table) + sample grouping metadata.",
                output: "Alpha/Beta diversity charts, 3D PCoA plots, taxonomic abundance bar charts.",
                value: "Essential for microbiome therapeutic development, dietary clinical trials, and personalized probiotic formulations.",
                images: ["case10.png", "case10_1.png", "case10_2.png"],
                captions: [
                    "Alpha diversity — Shannon index distribution comparing healthy vs. dysbiosis patient groups.",
                    "Beta diversity PCoA — Bray-Curtis distance 3D projection showing community separation between groups.",
                    "Taxonomy stacked bar chart — relative genus-level abundance across all samples."
                ]
            }
        };

        function switchSlide(cardId, slideIndex) {
            const container = document.getElementById('gallery-' + cardId);
            const images = container.querySelectorAll('img');
            const dots = container.querySelectorAll('.gallery-dot');
            
            for (let i = 0; i < images.length; i++) {
                images[i].classList.remove('active');
            }
            for (let i = 0; i < dots.length; i++) {
                dots[i].classList.remove('active');
            }
            
            images[slideIndex].classList.add('active');
            dots[slideIndex].classList.add('active');
        }

        function openProjectModal(id) {
            // Support for hardcoded custom modals (like case 11 and 12)
            const hardcodedModal = document.getElementById('modal-' + id);
            if (hardcodedModal) {
                hardcodedModal.style.display = 'flex';
                hardcodedModal.scrollTop = 0;
                document.body.style.overflow = 'hidden';
                return;
            }

            const data = projectData[id];
            if (!data) return;

            document.getElementById('modal-title').innerText = data.title;
            document.getElementById('modal-subtitle').innerText = data.tags.join(' · ');
            document.getElementById('modal-overview').innerText = data.overview;
            document.getElementById('modal-value').innerText = data.value;

            // Tags
            document.getElementById('modal-tags').innerHTML =
                data.tags.map(t => `<span class="tag">${t}</span>`).join('');

            // Input / Output / Methodology box
            document.getElementById('modal-data-box').innerHTML = `
                <div class="row"><i class="fa-solid fa-database"></i><span><strong>Input: </strong>${data.input}</span></div>
                <div class="row"><i class="fa-solid fa-chart-bar"></i><span><strong>Output: </strong>${data.output}</span></div>
                <div class="row"><i class="fa-solid fa-gear"></i><span><strong>Methods: </strong>${data.methodology}</span></div>`;

            // Photos grid — all images visible at once with captions
            const photosContainer = document.getElementById('modal-photos');
            photosContainer.innerHTML = '';
            data.images.forEach((imgSrc, i) => {
                const caption = data.captions ? data.captions[i] : '';
                const item = document.createElement('div');
                item.className = 'photo-item';
                item.onclick = () => openLightbox(imgSrc);
                item.innerHTML = `
                    <img src="${imgSrc}" alt="Screenshot ${i+1}" loading="lazy">
                    <div class="photo-caption">
                        <span class="photo-num">${i+1}</span>${caption}
                    </div>`;
                photosContainer.appendChild(item);
            });

            document.getElementById('project-modal').style.display = 'flex';
            document.getElementById('project-modal').scrollTop = 0;
            document.body.style.overflow = 'hidden';
        }

        function closeProjectModal(id, event) {
            if (event && event.target && event.target.closest && event.target.closest('.modal-card') && !event.target.closest('.modal-close')) {
                return;
            }
            if (id) {
                const hardcodedModal = document.getElementById('modal-' + id);
                if (hardcodedModal) {
                    hardcodedModal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                    return;
                }
            }
            document.getElementById('project-modal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        function openLightbox(imgSrc) {
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');
            lightboxImg.src = imgSrc;
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // block page scroll when zoom active
        }

        function closeLightbox() {
            document.getElementById('lightbox').style.display = 'none';
            // Only restore body overflow if the project details modal is NOT open
            if (document.getElementById('project-modal').style.display !== 'flex') {
                document.body.style.overflow = 'auto'; // enable scroll
            }
        }

        // Close on Esc key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeLightbox();
                closeProjectModal();
            }
        });
    
