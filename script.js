// ==========================================================================
// K-MOVE Co.Ltd. - Main JavaScript (script.js)
// Separated directly from k_move_co_ltd_2.html
// ==========================================================================

// Complete 88 Crane Manuals Dataset from K-MOVE Google Drive Repository
        const CRANE_MANUALS = [
            // TADANO Rough Terrain (15 files)
            { name: "Tadano GR-700E-1.pdf", brand: "TADANO", type: "Rough Terrain", tons: 70, size: "1.26 MB", id: "1pIklN1ZhGZXBxkaR1xwXCv18zMUT-p1W" },
            { name: "Tadano TR-500M-1.pdf", brand: "TADANO", type: "Rough Terrain", tons: 50, size: "402 KB", id: "14kMU8uASEAie9hBFTs0PlR_i9xPnCLJ8" },
            { name: "Tadano TR-500M-2.pdf", brand: "TADANO", type: "Rough Terrain", tons: 50, size: "444 KB", id: "1u1w1pE5Tcrr0ZZPVF3Mm0z2agLYPDTtM" },
            { name: "Tadano TR-500M-3.pdf", brand: "TADANO", type: "Rough Terrain", tons: 50, size: "441 KB", id: "1fJ6Y7YJtuJ08VvDHo9kkRvryU5yzVxv0" },
            { name: "Tadano TR-400M-1.pdf", brand: "TADANO", type: "Rough Terrain", tons: 40, size: "340 KB", id: "14L-6IQyMH0-y-IQu3zOVkLZ2bw5qWP2Q" },
            { name: "Tadano TR-350M-1.pdf", brand: "TADANO", type: "Rough Terrain", tons: 35, size: "344 KB", id: "1MTAzQak4GyyyJTmumjdMOyUsjno7XTcQ" },
            { name: "Tadano TR-350M-2.pdf", brand: "TADANO", type: "Rough Terrain", tons: 35, size: "378 KB", id: "1YLgslCajuUcKNj4ehQNpsBvFe8GXJtPx" },
            { name: "Tadano TR-250M-3.pdf", brand: "TADANO", type: "Rough Terrain", tons: 25, size: "267 KB", id: "1_1Qpoxc3ZJtOEUJLmy3As24ST-g_PJKy", kmove: true },
            { name: "Tadano TR-250M-4.pdf", brand: "TADANO", type: "Rough Terrain", tons: 25, size: "336 KB", id: "1Sj5KsENLUnJp8BTSTDCaStTJjGTDj7x7", kmove: true },
            { name: "Tadano TR-250M-5.pdf", brand: "TADANO", type: "Rough Terrain", tons: 25, size: "353 KB", id: "1bwtVxVQeXGNMY-Ref0iIVJOw0rBMxnZ7", kmove: true },
            { name: "Tadano TR-250M-6.pdf", brand: "TADANO", type: "Rough Terrain", tons: 25, size: "610 KB", id: "1F6OHqTcxHsoKAmhIu5He2N1kjWDnvNRd", kmove: true },
            { name: "Tadano TR-250M-7.pdf", brand: "TADANO", type: "Rough Terrain", tons: 25, size: "681 KB", id: "11LiR7snZFbjpOrIlMa4xEbElAkUdZm8k", kmove: true },
            { name: "Tadano TR-200M-2.pdf", brand: "TADANO", type: "Rough Terrain", tons: 20, size: "343 KB", id: "19UN3z49V0nwUSwPBmK5iGd-hzEkjWj07", kmove: true },
            { name: "Tadano TR-200M-3.pdf", brand: "TADANO", type: "Rough Terrain", tons: 20, size: "258 KB", id: "1GKTDHnEfHGidvovgEVMahl_wKfLR72uv", kmove: true },
            { name: "Tadano TR-200M-4.pdf", brand: "TADANO", type: "Rough Terrain", tons: 20, size: "318 KB", id: "1fGUrYVklFYHmJrUTUwn1WOpVtlAUUHxB", kmove: true },

            // TADANO Truck Cranes (33 files)
            { name: "Tadano TG-3600M-1.pdf", brand: "TADANO", type: "Truck Crane", tons: 360, size: "391 KB", id: "1xfis4IalhIHg7npFetXXQo10a4spgoN7" },
            { name: "Tadano TG-1600M-1.pdf", brand: "TADANO", type: "Truck Crane", tons: 160, size: "1.23 MB", id: "16RrBau_EWSex1jRgRbm2CA8V657HfSWm" },
            { name: "Tadano TG-1600M-4.pdf", brand: "TADANO", type: "Truck Crane", tons: 160, size: "1.13 MB", id: "1krVB1My5l7STReU8OrKOk_cpkXxWABIF" },
            { name: "Tadano TG-1200M-1.pdf", brand: "TADANO", type: "Truck Crane", tons: 120, size: "560 KB", id: "1CnQsG81LqMsmsGWPmPTaufeKAqDh4rKk" },
            { name: "Tadano TG-1200M-2.pdf", brand: "TADANO", type: "Truck Crane", tons: 120, size: "522 KB", id: "1mzR8Fw7RyXHcwf_H2KFn63jd6Z0epLsl" },
            { name: "Tadano TG-1200M-4.pdf", brand: "TADANO", type: "Truck Crane", tons: 120, size: "498 KB", id: "1Wf24h9aQWr0DBsiHIU4S7Vd_vsjAs37T" },
            { name: "Tadano TG-1000M-1.pdf", brand: "TADANO", type: "Truck Crane", tons: 100, size: "478 KB", id: "1OBqYSdM-9SpfCE9brZ_6BxE78vlIddGB" },
            { name: "Tadano TG-1000R-1.pdf", brand: "TADANO", type: "Truck Crane", tons: 100, size: "388 KB", id: "1L-xpVRWZDioTBs2vKbN-kB95otC56-cw" },
            { name: "Tadano TG-800M-1.pdf", brand: "TADANO", type: "Truck Crane", tons: 80, size: "547 KB", id: "1ZYRFB4C2oBGFNu34zsSiC0TbZ855inly" },
            { name: "Tadano TG-800R-1.pdf", brand: "TADANO", type: "Truck Crane", tons: 80, size: "1.13 MB", id: "1ss0Fq4gOl2t3OGeQPJB-UYw-2uJ0OG7o" },
            { name: "Tadano TG-600M-1.pdf", brand: "TADANO", type: "Truck Crane", tons: 60, size: "374 KB", id: "1Hda4-F8rMXOOw7zpQYWaKhT3xI9h0lAI" },
            { name: "Tadano TG-600M-4.pdf", brand: "TADANO", type: "Truck Crane", tons: 60, size: "462 KB", id: "1AzHKJrjuLGE6EpIlX6TdhquoSDDFf9NU" },
            { name: "Tadano TG-500M-4.pdf", brand: "TADANO", type: "Truck Crane", tons: 50, size: "519 KB", id: "1a1yVteGTGL0e0NrrTF2r7xGz9C1ktN0Q" },
            { name: "Tadano TG-450M-1.pdf", brand: "TADANO", type: "Truck Crane", tons: 45, size: "276 KB", id: "1dNffqViSdidIwW_dYPZo-cx-PI90g1DG" },
            { name: "Tadano TG-450M-2.pdf", brand: "TADANO", type: "Truck Crane", tons: 45, size: "383 KB", id: "1qfeMjcVfERBAN68473WR7scNJSwweqdZ" },
            { name: "Tadano TG-450M-3.pdf", brand: "TADANO", type: "Truck Crane", tons: 45, size: "494 KB", id: "1k56J-ISOjBVX42siVmeziAhg7chS7gcS" },
            { name: "Tadano TG-350M-1.pdf", brand: "TADANO", type: "Truck Crane", tons: 35, size: "263 KB", id: "1DLDyMdTjxK8PhDX0kVCCpeGhbG5ztP4o" },
            { name: "Tadano TG-350M-3.pdf", brand: "TADANO", type: "Truck Crane", tons: 35, size: "552 KB", id: "1nuCqW23atB4tHdED_UZHjNMy4dMHI636" },
            { name: "Tadano TL-300E-3.pdf", brand: "TADANO", type: "Truck Crane", tons: 30, size: "234 KB", id: "1dz_rOYEEkP56IdPWTLGFpel4V68Ac5eq", kmove: true },
            { name: "Tadano TL-300M-1.pdf", brand: "TADANO", type: "Truck Crane", tons: 30, size: "292 KB", id: "1TVAdQ5Vil4VYHIjBkLqvHS7fapekPHHp", kmove: true },
            { name: "Tadano TL-300M-2.pdf", brand: "TADANO", type: "Truck Crane", tons: 30, size: "400 KB", id: "1mb7IGPHTs5swhizkub-HtEMTcdEG91uG", kmove: true },
            { name: "Tadano TL-250M-1.pdf", brand: "TADANO", type: "Truck Crane", tons: 25, size: "289 KB", id: "1oOHSSvy24R9M2bj3J8cnCdmom4_LbZW3", kmove: true },
            { name: "Tadano TL-250M-2.pdf", brand: "TADANO", type: "Truck Crane", tons: 25, size: "296 KB", id: "1-Qm7KFiV8TOzb3CA7EBrBKW7FTLzNA1w", kmove: true },
            { name: "Tadano TL-250M-3.pdf", brand: "TADANO", type: "Truck Crane", tons: 25, size: "391 KB", id: "1jKqRjOpNhJm3cZpiP5fsIH8KGCYQcNA2", kmove: true },
            { name: "Tadano TL-250M-4.pdf", brand: "TADANO", type: "Truck Crane", tons: 25, size: "373 KB", id: "1A47KVq80X0R5aVRj4SyhrrYGkwQuip6X", kmove: true },
            { name: "Tadano TL-200M-1.pdf", brand: "TADANO", type: "Truck Crane", tons: 20, size: "235 KB", id: "149cXaV2EG99I5_xR04S9uyQx9XZumlby", kmove: true },
            { name: "Tadano TL-200M-3.pdf", brand: "TADANO", type: "Truck Crane", tons: 20, size: "324 KB", id: "1_PJh_nHIJhknj2O10jsywamgUWtyT-Xb", kmove: true },
            { name: "Tadano TL-200M-4.pdf", brand: "TADANO", type: "Truck Crane", tons: 20, size: "311 KB", id: "1XA4ESG3yLa4H7bOO93F-Qi3XKy3kHf4f", kmove: true },
            { name: "Tadano TL-160M-1.pdf", brand: "TADANO", type: "Truck Crane", tons: 16, size: "237 KB", id: "1w2T7rN_9EYtFmcW6EF5mp2nM7ONSwWvR", kmove: true },
            { name: "Tadano TL-160M-3.pdf", brand: "TADANO", type: "Truck Crane", tons: 16, size: "314 KB", id: "1HSG2ljzmaagZaFsPYxI9ww9zP6kPzNML", kmove: true },
            { name: "Tadano OC-160M-1.pdf", brand: "TADANO", type: "Truck Crane", tons: 16, size: "129 KB", id: "165f4qGIIktoGoOMllOfALvx8CJFyBkno", kmove: true },
            { name: "Tadano OC-160M-2.pdf", brand: "TADANO", type: "Truck Crane", tons: 16, size: "126 KB", id: "1MD3la-tL3dMLmWObb4mZ2KtUlRGWczVb", kmove: true },
            { name: "Tadano TS-55M-1.pdf", brand: "TADANO", type: "Truck Crane", tons: 5.5, size: "146 KB", id: "1QoerkiB0m1z3Wu4BQzhKavudRZoJ1owz" },

            // TADANO All-Terrain (9 files)
            { name: "Tadano AR-5500M-1.pdf", brand: "TADANO", type: "All-Terrain", tons: 550, size: "3.38 MB", id: "1ZWmFoJ7oRwzdZBlP5Y018-jcY_zxnSK2" },
            { name: "Tadano ATF 220G-5.pdf", brand: "TADANO", type: "All-Terrain", tons: 220, size: "8.57 MB", id: "1rPD9NpdU50hiSNC4LUjJ3981sJDwe26v" },
            { name: "Tadano ATF 160G-5.pdf", brand: "TADANO", type: "All-Terrain", tons: 160, size: "3.41 MB", id: "1ZyJKWqSi_kswzOg24_Jb8KP9IAl4CXKy" },
            { name: "Tadano ATF 110G-5.pdf", brand: "TADANO", type: "All-Terrain", tons: 110, size: "3.44 MB", id: "1nbxny3TGZgG04OmWC4SuR5G3yDAb0LtD" },
            { name: "Tadano ATF 90G-4.pdf", brand: "TADANO", type: "All-Terrain", tons: 90, size: "22.76 MB", id: "1PJYRm2Tt5xBGH800cH9BLVwZLG4aCpto" },
            { name: "Tadano ATF 65G-4.pdf", brand: "TADANO", type: "All-Terrain", tons: 65, size: "4.25 MB", id: "1_1ZUIJFZdzXlP4P3_CKf4HrcyIJj2_iE" },
            { name: "Tadano ATF 60-3.pdf", brand: "TADANO", type: "All-Terrain", tons: 60, size: "1.29 MB", id: "1xbTk2LOA-Z_IPxnDfec7zEENCb1OP2Ho" },
            { name: "Tadano ATF 50G-3.pdf", brand: "TADANO", type: "All-Terrain", tons: 50, size: "10.26 MB", id: "1NyxbWzU3TyjTlD3QDdh5ZJ5Nzh5zcMLS" },
            { name: "Tadano ATF 40G-2.pdf", brand: "TADANO", type: "All-Terrain", tons: 40, size: "8.11 MB", id: "1BbCl-_5dBcqLYdTk5Dm6-ROWT6Kh1liJ" },

            // LIEBHERR (9 files)
            { name: "Liebherr LTM11200-9.1.pdf", brand: "LIEBHERR", type: "All-Terrain", tons: 1200, size: "2.58 MB", id: "1tmJMFHKKXE5clA7cM_aD06QvaZythBDV" },
            { name: "Liebherr LG1750.pdf", brand: "LIEBHERR", type: "All-Terrain", tons: 750, size: "3.89 MB", id: "1xSzfWzI96vVjintqsMm_9aKOijGTHgRP" },
            { name: "Liebherr LTM1500-8.1.pdf", brand: "LIEBHERR", type: "All-Terrain", tons: 500, size: "4.20 MB", id: "1Jzj-aVaOW1Vy5MjA6-WFchlnFO3I-BA4" },
            { name: "Liebherr LTM1400-7.1.pdf", brand: "LIEBHERR", type: "All-Terrain", tons: 400, size: "1.13 MB", id: "1Eyzc9DJzwsyir-IHC85qU8kOzBaC3wIM" },
            { name: "Liebherr LR1400-2.pdf", brand: "LIEBHERR", type: "Crawler Crane", tons: 400, size: "1.23 MB", id: "1SqJIUqvCLuYxRHLhA0UjXOYc208s5xxz" },
            { name: "Liebherr LTM1220-5.2.pdf", brand: "LIEBHERR", type: "All-Terrain", tons: 220, size: "1.71 MB", id: "1FpraaXa-Q6hn2YGX-xfP1St--e_u9cNH" },
            { name: "Liebherr LTM1200-5.1.pdf", brand: "LIEBHERR", type: "All-Terrain", tons: 200, size: "1.10 MB", id: "1roLbPi4eHVJpbbfUdaegbO8phKjyvLCj" },
            { name: "Liebherr LTM1130-5.1.pdf", brand: "LIEBHERR", type: "All-Terrain", tons: 130, size: "1.12 MB", id: "1eeKtOzoqK8EMbgI53u4nijXvVMtRhxxd" },
            { name: "Liebherr LTM1100-5.2.pdf", brand: "LIEBHERR", type: "All-Terrain", tons: 100, size: "1.36 MB", id: "1AztxFI1xpZhNr8sT3tjSQ4nVA-0HcxOP" },

            // DEMAG (12 files)
            { name: "Demag CC 12600.pdf", brand: "DEMAG", type: "Crawler Crane", tons: 1600, size: "2.72 MB", id: "10ewRJQW3bLsq4J9xGlRd9uFkdDJipzjG" },
            { name: "Demag CC 8800-1.pdf", brand: "DEMAG", type: "Crawler Crane", tons: 1600, size: "4.51 MB", id: "1VyOqHfU-CaqwpbF1AdWHS7bhEqPJxeKM" },
            { name: "Demag CC 6800.pdf", brand: "DEMAG", type: "Crawler Crane", tons: 1250, size: "5.52 MB", id: "1fOa8Nsi1VYy_No3E1p7XMJuxrXT2P2oJ" },
            { name: "Demag CC 5800.pdf", brand: "DEMAG", type: "Crawler Crane", tons: 1000, size: "5.35 MB", id: "15se_vR8GVJd5YiSEWvV44GjpOqeXud29" },
            { name: "Demag TC-2800-1.pdf", brand: "DEMAG", type: "Truck Crane", tons: 600, size: "5.10 MB", id: "1DlJQa_dTU1C3UEww5wlDeE56HortKi-N" },
            { name: "Demag CC 2800-1.pdf", brand: "DEMAG", type: "Crawler Crane", tons: 600, size: "4.37 MB", id: "1ecXeprPq2AzoQrnBvYWCmJmdwhYhYuVC" },
            { name: "Demag CC 2500-1.pdf", brand: "DEMAG", type: "Crawler Crane", tons: 500, size: "5.55 MB", id: "16zCFQirof_qI_yA81ln-QORp22kM9YB2" },
            { name: "Demag CC 2400-1.pdf", brand: "DEMAG", type: "Crawler Crane", tons: 400, size: "6.09 MB", id: "12JiDe1zJkJ-vAjOSnEliSbkGM5Rlr19-" },
            { name: "Demag CC 2200.pdf", brand: "DEMAG", type: "Crawler Crane", tons: 350, size: "5.93 MB", id: "14voUM0mslBv-juxsmgr9Zz5K-k96jSNo" },
            { name: "Demag CC 2000-1.pdf", brand: "DEMAG", type: "Crawler Crane", tons: 300, size: "4.14 MB", id: "1Toqy8UGrnYRTGCWNce2soR8Pbrbfd4YF" },
            { name: "Demag AC 200-1.pdf", brand: "DEMAG", type: "All-Terrain", tons: 200, size: "3.62 MB", id: "1aIsHsqfHiJ-erA7PWr8Pd_kglsRH0iv1" },
            { name: "Demag AC 160-2.pdf", brand: "DEMAG", type: "All-Terrain", tons: 160, size: "2.40 MB", id: "1IGFSZFg0MYVP6X20zCUqWYNf7xBDYCEN" },

            // KATO (7 files)
            { name: "Kato NK-1600.pdf", brand: "KATO", type: "Truck Crane", tons: 160, size: "1.75 MB", id: "128WBrWDBZP3HG_aiyb_KqT5obJcjNoTy" },
            { name: "Kato NK-1200.pdf", brand: "KATO", type: "Truck Crane", tons: 120, size: "1.05 MB", id: "1sKr-B9-i0EhNFry8h3lOz94dyIUu_2_w" },
            { name: "Kato KA-900.pdf", brand: "KATO", type: "All-Terrain", tons: 90, size: "1.92 MB", id: "1a813KimssYAyFGOn6uz1tasMK_9xQ7zi" },
            { name: "Kato NK-800.pdf", brand: "KATO", type: "Truck Crane", tons: 80, size: "1.14 MB", id: "1GHxaaAq5Ns9Ohqsja6OmQ0DaNF0OLaKy" },
            { name: "Kato NK-550VR.pdf", brand: "KATO", type: "Truck Crane", tons: 55, size: "1.09 MB", id: "1S6uie05jSglun-rM1XV0yIEazS30u0B8" },
            { name: "Kato NK-500E-v.pdf", brand: "KATO", type: "Truck Crane", tons: 50, size: "1.14 MB", id: "12O819PLJjbkWbF_nYC4BdAOKnZeg3PB8" },
            { name: "Kato KR-500.pdf", brand: "KATO", type: "Rough Terrain", tons: 50, size: "1.67 MB", id: "1QxS1C4s-8wQstrWZEHBQppHzu07OnuGN" },

            // MANITOWOC & KOBELCO (3 files)
            { name: "Manitowoc 16000.pdf", brand: "MANITOWOC", type: "Crawler Crane", tons: 400, size: "20.56 MB", id: "1-_dGbo0uApmXLZWjQ6flRyuelSjL8x9W" },
            { name: "Kobelco CKE 2500-2.pdf", brand: "KOBELCO", type: "Crawler Crane", tons: 250, size: "3.27 MB", id: "1KTytQzQER1qApdTxGG-yecq4MgDCFzqp" },
            { name: "Manitowoc 8000.pdf", brand: "MANITOWOC", type: "Crawler Crane", tons: 80, size: "1.90 MB", id: "1WV9ebNFKQGsZ2LBuROFH8ldPwVYMHdNa" }
        ];

        let currentManualBrand = 'ALL';
        let currentManualView = 'grid';
        let onlyKmoveRange = false;

        function setManualBrand(brand) {
            currentManualBrand = brand;
            document.querySelectorAll('.manual-brand-btn').forEach(btn => {
                if (btn.getAttribute('data-brand') === brand) {
                    btn.classList.add('bg-brand-navy', 'text-white', 'border-brand-navy');
                    btn.classList.remove('bg-white', 'text-brand-navy', 'border-slate-200');
                } else {
                    btn.classList.remove('bg-brand-navy', 'text-white', 'border-brand-navy');
                    btn.classList.add('bg-white', 'text-brand-navy', 'border-slate-200');
                }
            });
            renderManuals();
        }

        function toggleKmoveRange() {
            onlyKmoveRange = !onlyKmoveRange;
            const btn = document.getElementById('kmove-range-btn');
            const badge = document.getElementById('kmove-filter-badge');
            if (onlyKmoveRange) {
                btn.classList.add('bg-brand-red', 'text-white', 'border-brand-red');
                btn.classList.remove('text-slate-700', 'border-slate-300', 'hover:bg-slate-50');
                badge.classList.remove('hidden');
            } else {
                btn.classList.remove('bg-brand-red', 'text-white', 'border-brand-red');
                btn.classList.add('text-slate-700', 'border-slate-300', 'hover:bg-slate-50');
                badge.classList.add('hidden');
            }
            renderManuals();
        }

        function setManualViewMode(mode) {
            currentManualView = mode;
            const gridContainer = document.getElementById('manuals-grid-container');
            const tableContainer = document.getElementById('manuals-table-container');
            const gridBtn = document.getElementById('view-grid-btn');
            const tableBtn = document.getElementById('view-table-btn');

            if (mode === 'grid') {
                gridContainer.classList.remove('hidden');
                tableContainer.classList.add('hidden');
                gridBtn.classList.add('bg-brand-navy', 'text-white');
                gridBtn.classList.remove('text-slate-500');
                tableBtn.classList.remove('bg-brand-navy', 'text-white');
                tableBtn.classList.add('text-slate-500');
            } else {
                gridContainer.classList.add('hidden');
                tableContainer.classList.remove('hidden');
                tableBtn.classList.add('bg-brand-navy', 'text-white');
                tableBtn.classList.remove('text-slate-500');
                gridBtn.classList.remove('bg-brand-navy', 'text-white');
                gridBtn.classList.add('text-slate-500');
            }
        }

        function resetManualFilters() {
            document.getElementById('manual-search-input').value = '';
            document.getElementById('manual-type-select').value = 'ALL';
            if (onlyKmoveRange) toggleKmoveRange();
            setManualBrand('ALL');
        }

        function openPdfModal(id, name, brand, type, tons) {
            const modal = document.getElementById('pdf-preview-modal');
            const iframe = document.getElementById('modal-pdf-iframe');
            document.getElementById('modal-pdf-title').textContent = name;
            document.getElementById('modal-pdf-subtitle').textContent = `${brand} • ${type} • พิกัดยกสูงสุด ${tons.toLocaleString()} ตัน`;
            document.getElementById('modal-pdf-external').href = `https://drive.google.com/file/d/${id}/view?usp=drivesdk`;
            iframe.src = `https://drive.google.com/file/d/${id}/preview`;
            modal.classList.remove('hidden');
        }

        function closePdfModal() {
            const modal = document.getElementById('pdf-preview-modal');
            const iframe = document.getElementById('modal-pdf-iframe');
            iframe.src = 'about:blank';
            modal.classList.add('hidden');
        }

        function renderManuals() {
            const searchQuery = (document.getElementById('manual-search-input')?.value || '').trim().toLowerCase();
            const selectedType = document.getElementById('manual-type-select')?.value || 'ALL';

            const filtered = CRANE_MANUALS.filter(item => {
                // Brand filter
                if (currentManualBrand !== 'ALL') {
                    if (currentManualBrand === 'OTHER') {
                        if (item.brand !== 'MANITOWOC' && item.brand !== 'KOBELCO') return false;
                    } else if (item.brand !== currentManualBrand) {
                        return false;
                    }
                }
                // Type filter
                if (selectedType !== 'ALL' && item.type !== selectedType) return false;
                // K-MOVE 10-30T filter
                if (onlyKmoveRange && !item.kmove) return false;
                // Search query
                if (searchQuery) {
                    const haystack = `${item.name} ${item.brand} ${item.type} ${item.tons} ตัน ton`.toLowerCase();
                    if (!haystack.includes(searchQuery)) return false;
                }
                return true;
            });

            document.getElementById('manual-count-label').textContent = filtered.length;

            const gridEl = document.getElementById('manuals-grid-container');
            const tableBodyEl = document.getElementById('manuals-table-body');

            if (filtered.length === 0) {
                gridEl.innerHTML = `
                    <div class="col-span-full bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
                        <p class="text-base font-bold text-brand-navy">ไม่พบไฟล์คู่มือรถเครนที่ตรงกับเงื่อนไขการค้นหา</p>
                        <p class="text-xs text-slate-500">ลองเปลี่ยนคำค้นหา หรือกดล้างตัวกรองทั้งหมดเพื่อดูไฟล์ทั้ง 88 รุ่น</p>
                        <button onclick="resetManualFilters()" class="px-4 py-2 rounded-lg bg-brand-navy text-white text-xs font-medium">แสดงทั้งหมด 88 ไฟล์</button>
                    </div>
                `;
                tableBodyEl.innerHTML = `<tr><td colspan="6" class="p-8 text-center text-slate-500">ไม่พบข้อมูลที่ค้นหา</td></tr>`;
                return;
            }

            // Render Grid Cards
            gridEl.innerHTML = filtered.map(item => {
                const driveUrl = `https://drive.google.com/file/d/${item.id}/view?usp=drivesdk`;
                const kmoveBadge = item.kmove
                    ? `<span class="px-2 py-0.5 rounded bg-red-50 text-brand-red border border-red-200 text-[10px] font-bold">ขนาดเช่า K-MOVE</span>`
                    : `<span class="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-semibold">${item.brand}</span>`;

                return `
                    <div class="bg-white rounded-xl border ${item.kmove ? 'border-red-200/90' : 'border-slate-200'} p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                        <div>
                            <div class="flex items-center justify-between gap-2 mb-3">
                                ${kmoveBadge}
                                <span class="text-[11px] text-slate-400 font-medium">${item.size}</span>
                            </div>
                            <h3 class="font-bold text-brand-navy text-base truncate" title="${item.name}">
                                ${item.name.replace('.pdf', '')}
                            </h3>
                            <p class="text-xs text-slate-500 mt-0.5">${item.type}</p>

                            <div class="mt-4 pt-3 border-t border-slate-100 flex items-baseline justify-between">
                                <span class="text-[11px] text-slate-400">พิกัดยกสูงสุด</span>
                                <span class="text-lg font-bold text-brand-navy">${item.tons.toLocaleString()} <span class="text-xs font-normal text-brand-red">ตัน</span></span>
                            </div>
                        </div>

                        <div class="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
                            <button onclick="openPdfModal('${item.id}', '${item.name}', '${item.brand}', '${item.type}', ${item.tons})" class="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-brand-navy text-xs font-semibold transition text-center">
                                ดูตัวอย่าง PDF
                            </button>
                            <a href="${driveUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-2 rounded-lg bg-brand-navy hover:bg-slate-800 text-white text-xs font-semibold transition text-center">
                                เปิดไฟล์ / โหลด
                            </a>
                        </div>
                    </div>
                `;
            }).join('');

            // Render Table Rows
            tableBodyEl.innerHTML = filtered.map(item => {
                const driveUrl = `https://drive.google.com/file/d/${item.id}/view?usp=drivesdk`;
                return `
                    <tr class="hover:bg-slate-50 transition">
                        <td class="p-3.5 font-semibold text-brand-navy">
                            <div class="flex items-center gap-2">
                                <span>${item.name}</span>
                                ${item.kmove ? '<span class="px-1.5 py-0.5 rounded bg-red-50 text-brand-red text-[10px] font-bold border border-red-200">K-MOVE</span>' : ''}
                            </div>
                        </td>
                        <td class="p-3.5 font-medium">${item.brand}</td>
                        <td class="p-3.5 text-slate-500">${item.type}</td>
                        <td class="p-3.5 font-bold text-brand-navy">${item.tons.toLocaleString()} ตัน</td>
                        <td class="p-3.5 text-slate-400">${item.size}</td>
                        <td class="p-3.5 text-right space-x-1.5 whitespace-nowrap">
                            <button onclick="openPdfModal('${item.id}', '${item.name}', '${item.brand}', '${item.type}', ${item.tons})" class="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-brand-navy font-semibold transition">
                                ดูตัวอย่าง
                            </button>
                            <a href="${driveUrl}" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 rounded bg-brand-navy hover:bg-slate-800 text-white font-semibold transition inline-block">
                                เปิด Drive
                            </a>
                        </td>
                    </tr>
                `;
            }).join('');
        }

        // Initialize Lucide icons & initial render
        lucide.createIcons();
        renderManuals();

        // Tab Switching Logic
        function switchTab(tabId) {
            // Hide all tabs
            document.querySelectorAll('.tab-content').forEach(section => {
                section.classList.remove('active');
            });
            // Show target tab
            const target = document.getElementById('tab-' + tabId);
            if (target) {
                target.classList.add('active');
            }

            // Update desktop nav active state
            document.querySelectorAll('.nav-btn').forEach(btn => {
                if (btn.getAttribute('data-tab') === tabId) {
                    btn.classList.add('text-brand-red', 'bg-red-50/80');
                    btn.classList.remove('text-slate-600');
                } else {
                    btn.classList.remove('text-brand-red', 'bg-red-50/80');
                    btn.classList.add('text-slate-600');
                }
            });

            // Update mobile nav active state
            document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
                if (btn.getAttribute('data-tab') === tabId) {
                    btn.classList.add('text-brand-red', 'bg-red-50');
                    btn.classList.remove('text-slate-700');
                } else {
                    btn.classList.remove('text-brand-red', 'bg-red-50');
                    btn.classList.add('text-slate-700');
                }
            });

            // Scroll to top smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Toggle Mobile Menu
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        // Portfolio Category Filter
        function filterPortfolio(category) {
            const cards = document.querySelectorAll('.portfolio-card');
            cards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });

            // Update filter buttons
            document.querySelectorAll('.portfolio-filter-btn').forEach(btn => {
                if (btn.getAttribute('data-filter') === category) {
                    btn.classList.add('bg-brand-navy', 'text-white');
                    btn.classList.remove('bg-white', 'text-slate-600', 'border', 'border-slate-200');
                } else {
                    btn.classList.remove('bg-brand-navy', 'text-white');
                    btn.classList.add('bg-white', 'text-slate-600', 'border', 'border-slate-200');
                }
            });
        }

        // Total Loads Calculator (Section 17.3)
        function calculateTotalLoad() {
            const itemWeight = parseFloat(document.getElementById('calc-item-weight').value) || 0;
            const hookWeight = parseFloat(document.getElementById('calc-hook-weight').value) || 0;
            const equipWeight = parseFloat(document.getElementById('calc-equip-weight').value) || 0;
            const height = parseFloat(document.getElementById('calc-height').value) || 0;
            const ropeKgPerM = parseFloat(document.getElementById('calc-rope-kg').value) || 0;
            const parts = parseFloat(document.getElementById('calc-parts').value) || 0;

            const ropeWeightKg = height * ropeKgPerM * parts;
            const ropeWeightTon = ropeWeightKg / 1000;
            const totalLoad = itemWeight + hookWeight + equipWeight + ropeWeightTon;

            document.getElementById('res-rope-weight').textContent = `${ropeWeightTon.toFixed(3)} ตัน (${ropeWeightKg.toFixed(1)} กก.)`;
            document.getElementById('res-total-load').textContent = `${totalLoad.toFixed(2)} ตัน`;
        }

        // Contact Form Handler
        function handleContactSubmit(e) {
            e.preventDefault();
            const msg = document.getElementById('form-success-msg');
            msg.classList.remove('hidden');
            e.target.reset();
        }
