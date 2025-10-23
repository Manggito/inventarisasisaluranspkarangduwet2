var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_JALAN_1 = new ol.format.GeoJSON();
var features_JALAN_1 = format_JALAN_1.readFeatures(json_JALAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_1.addFeatures(features_JALAN_1);
var lyr_JALAN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_1, 
                style: style_JALAN_1,
                popuplayertitle: 'JALAN',
                interactive: false,
                title: '<img src="styles/legend/JALAN_1.png" /> JALAN'
            });
var format_SUNGAI_2 = new ol.format.GeoJSON();
var features_SUNGAI_2 = format_SUNGAI_2.readFeatures(json_SUNGAI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_2.addFeatures(features_SUNGAI_2);
var lyr_SUNGAI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_2, 
                style: style_SUNGAI_2,
                popuplayertitle: 'SUNGAI',
                interactive: false,
                title: '<img src="styles/legend/SUNGAI_2.png" /> SUNGAI'
            });
var format_AREAFUNGSIONAL_QGIS_3 = new ol.format.GeoJSON();
var features_AREAFUNGSIONAL_QGIS_3 = format_AREAFUNGSIONAL_QGIS_3.readFeatures(json_AREAFUNGSIONAL_QGIS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREAFUNGSIONAL_QGIS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREAFUNGSIONAL_QGIS_3.addFeatures(features_AREAFUNGSIONAL_QGIS_3);
var lyr_AREAFUNGSIONAL_QGIS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREAFUNGSIONAL_QGIS_3, 
                style: style_AREAFUNGSIONAL_QGIS_3,
                popuplayertitle: 'AREA FUNGSIONAL_QGIS',
                interactive: true,
                title: '<img src="styles/legend/AREAFUNGSIONAL_QGIS_3.png" /> AREA FUNGSIONAL_QGIS'
            });
var format_JalurPipa_4 = new ol.format.GeoJSON();
var features_JalurPipa_4 = format_JalurPipa_4.readFeatures(json_JalurPipa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalurPipa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalurPipa_4.addFeatures(features_JalurPipa_4);
var lyr_JalurPipa_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalurPipa_4, 
                style: style_JalurPipa_4,
                popuplayertitle: 'Jalur Pipa',
                interactive: true,
                title: '<img src="styles/legend/JalurPipa_4.png" /> Jalur Pipa'
            });
var format_KETERANGAN_KERUSAKAN_SALURAN_5 = new ol.format.GeoJSON();
var features_KETERANGAN_KERUSAKAN_SALURAN_5 = format_KETERANGAN_KERUSAKAN_SALURAN_5.readFeatures(json_KETERANGAN_KERUSAKAN_SALURAN_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KETERANGAN_KERUSAKAN_SALURAN_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KETERANGAN_KERUSAKAN_SALURAN_5.addFeatures(features_KETERANGAN_KERUSAKAN_SALURAN_5);
var lyr_KETERANGAN_KERUSAKAN_SALURAN_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KETERANGAN_KERUSAKAN_SALURAN_5, 
                style: style_KETERANGAN_KERUSAKAN_SALURAN_5,
                popuplayertitle: 'KETERANGAN_KERUSAKAN_SALURAN',
                interactive: true,
    title: 'KETERANGAN_KERUSAKAN_SALURAN<br />\
    <img src="styles/legend/KETERANGAN_KERUSAKAN_SALURAN_5_0.png" /> Baik<br />\
    <img src="styles/legend/KETERANGAN_KERUSAKAN_SALURAN_5_1.png" /> Rusak Ringan<br />\
    <img src="styles/legend/KETERANGAN_KERUSAKAN_SALURAN_5_2.png" /> Rusak Sedang<br />\
    <img src="styles/legend/KETERANGAN_KERUSAKAN_SALURAN_5_3.png" /> Rusak Berat<br />' });
var format_JENIS_SALURAN_6 = new ol.format.GeoJSON();
var features_JENIS_SALURAN_6 = format_JENIS_SALURAN_6.readFeatures(json_JENIS_SALURAN_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JENIS_SALURAN_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JENIS_SALURAN_6.addFeatures(features_JENIS_SALURAN_6);
var lyr_JENIS_SALURAN_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JENIS_SALURAN_6, 
                style: style_JENIS_SALURAN_6,
                popuplayertitle: 'JENIS_SALURAN',
                interactive: true,
    title: 'JENIS_SALURAN<br />\
    <img src="styles/legend/JENIS_SALURAN_6_0.png" /> Saluran Sekunder<br />' });
var format_Tikungan_7 = new ol.format.GeoJSON();
var features_Tikungan_7 = format_Tikungan_7.readFeatures(json_Tikungan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tikungan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tikungan_7.addFeatures(features_Tikungan_7);
var lyr_Tikungan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tikungan_7, 
                style: style_Tikungan_7,
                popuplayertitle: 'Tikungan',
                interactive: true,
                title: '<img src="styles/legend/Tikungan_7.png" /> Tikungan'
            });
var format_Beda_Pasangan_8 = new ol.format.GeoJSON();
var features_Beda_Pasangan_8 = format_Beda_Pasangan_8.readFeatures(json_Beda_Pasangan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Beda_Pasangan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Beda_Pasangan_8.addFeatures(features_Beda_Pasangan_8);
var lyr_Beda_Pasangan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Beda_Pasangan_8, 
                style: style_Beda_Pasangan_8,
                popuplayertitle: 'Beda_Pasangan',
                interactive: true,
                title: '<img src="styles/legend/Beda_Pasangan_8.png" /> Beda_Pasangan'
            });
var format_Gorong__Gorong_9 = new ol.format.GeoJSON();
var features_Gorong__Gorong_9 = format_Gorong__Gorong_9.readFeatures(json_Gorong__Gorong_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gorong__Gorong_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gorong__Gorong_9.addFeatures(features_Gorong__Gorong_9);
var lyr_Gorong__Gorong_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gorong__Gorong_9, 
                style: style_Gorong__Gorong_9,
                popuplayertitle: 'Gorong_-_Gorong',
                interactive: true,
                title: '<img src="styles/legend/Gorong__Gorong_9.png" /> Gorong_-_Gorong'
            });
var format_Titik_Per_50_m_10 = new ol.format.GeoJSON();
var features_Titik_Per_50_m_10 = format_Titik_Per_50_m_10.readFeatures(json_Titik_Per_50_m_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titik_Per_50_m_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titik_Per_50_m_10.addFeatures(features_Titik_Per_50_m_10);
var lyr_Titik_Per_50_m_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Titik_Per_50_m_10, 
                style: style_Titik_Per_50_m_10,
                popuplayertitle: 'Titik_Per_50_m',
                interactive: true,
                title: '<img src="styles/legend/Titik_Per_50_m_10.png" /> Titik_Per_50_m'
            });
var format_Box_Alva_Valve_11 = new ol.format.GeoJSON();
var features_Box_Alva_Valve_11 = format_Box_Alva_Valve_11.readFeatures(json_Box_Alva_Valve_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Box_Alva_Valve_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Box_Alva_Valve_11.addFeatures(features_Box_Alva_Valve_11);
var lyr_Box_Alva_Valve_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Box_Alva_Valve_11, 
                style: style_Box_Alva_Valve_11,
                popuplayertitle: 'Box_Alva_Valve',
                interactive: true,
                title: '<img src="styles/legend/Box_Alva_Valve_11.png" /> Box_Alva_Valve'
            });
var format_BokGateValve_12 = new ol.format.GeoJSON();
var features_BokGateValve_12 = format_BokGateValve_12.readFeatures(json_BokGateValve_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BokGateValve_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BokGateValve_12.addFeatures(features_BokGateValve_12);
var lyr_BokGateValve_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BokGateValve_12, 
                style: style_BokGateValve_12,
                popuplayertitle: 'Bok Gate Valve',
                interactive: true,
                title: '<img src="styles/legend/BokGateValve_12.png" /> Bok Gate Valve'
            });
var format_Bangunan_Air_13 = new ol.format.GeoJSON();
var features_Bangunan_Air_13 = format_Bangunan_Air_13.readFeatures(json_Bangunan_Air_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_Air_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_Air_13.addFeatures(features_Bangunan_Air_13);
var lyr_Bangunan_Air_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_Air_13, 
                style: style_Bangunan_Air_13,
                popuplayertitle: 'Bangunan_Air',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_Air_13.png" /> Bangunan_Air'
            });
var format_Bangunan_Bagi_14 = new ol.format.GeoJSON();
var features_Bangunan_Bagi_14 = format_Bangunan_Bagi_14.readFeatures(json_Bangunan_Bagi_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_Bagi_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_Bagi_14.addFeatures(features_Bangunan_Bagi_14);
var lyr_Bangunan_Bagi_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_Bagi_14, 
                style: style_Bangunan_Bagi_14,
                popuplayertitle: 'Bangunan_Bagi',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_Bagi_14.png" /> Bangunan_Bagi'
            });
var format_Bangunan_Sadap_15 = new ol.format.GeoJSON();
var features_Bangunan_Sadap_15 = format_Bangunan_Sadap_15.readFeatures(json_Bangunan_Sadap_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_Sadap_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_Sadap_15.addFeatures(features_Bangunan_Sadap_15);
var lyr_Bangunan_Sadap_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_Sadap_15, 
                style: style_Bangunan_Sadap_15,
                popuplayertitle: 'Bangunan_Sadap',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_Sadap_15.png" /> Bangunan_Sadap'
            });
var format_Rumah_Pompa_16 = new ol.format.GeoJSON();
var features_Rumah_Pompa_16 = format_Rumah_Pompa_16.readFeatures(json_Rumah_Pompa_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_Pompa_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_Pompa_16.addFeatures(features_Rumah_Pompa_16);
var lyr_Rumah_Pompa_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_Pompa_16, 
                style: style_Rumah_Pompa_16,
                popuplayertitle: 'Rumah_Pompa',
                interactive: true,
                title: '<img src="styles/legend/Rumah_Pompa_16.png" /> Rumah_Pompa'
            });
var group_TITIKAKSESSORIS = new ol.layer.Group({
                                layers: [lyr_Box_Alva_Valve_11,lyr_BokGateValve_12,lyr_Bangunan_Air_13,lyr_Bangunan_Bagi_14,lyr_Bangunan_Sadap_15,lyr_Rumah_Pompa_16,],
                                fold: 'open',
                                title: 'TITIK AKSESSORIS'});
var group_TITIKKETERANGAN = new ol.layer.Group({
                                layers: [lyr_Tikungan_7,lyr_Beda_Pasangan_8,lyr_Gorong__Gorong_9,lyr_Titik_Per_50_m_10,],
                                fold: 'open',
                                title: 'TITIK KETERANGAN'});

lyr_GoogleSatellite_0.setVisible(true);lyr_JALAN_1.setVisible(true);lyr_SUNGAI_2.setVisible(true);lyr_AREAFUNGSIONAL_QGIS_3.setVisible(true);lyr_JalurPipa_4.setVisible(true);lyr_KETERANGAN_KERUSAKAN_SALURAN_5.setVisible(true);lyr_JENIS_SALURAN_6.setVisible(true);lyr_Tikungan_7.setVisible(true);lyr_Beda_Pasangan_8.setVisible(true);lyr_Gorong__Gorong_9.setVisible(true);lyr_Titik_Per_50_m_10.setVisible(true);lyr_Box_Alva_Valve_11.setVisible(true);lyr_BokGateValve_12.setVisible(true);lyr_Bangunan_Air_13.setVisible(true);lyr_Bangunan_Bagi_14.setVisible(true);lyr_Bangunan_Sadap_15.setVisible(true);lyr_Rumah_Pompa_16.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_JALAN_1,lyr_SUNGAI_2,lyr_AREAFUNGSIONAL_QGIS_3,lyr_JalurPipa_4,lyr_KETERANGAN_KERUSAKAN_SALURAN_5,lyr_JENIS_SALURAN_6,group_TITIKKETERANGAN,group_TITIKAKSESSORIS];
lyr_JALAN_1.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SUNGAI_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_AREAFUNGSIONAL_QGIS_3.set('fieldAliases', {'Id': 'Id', 'layer': 'layer', 'path': 'path', 'LUAS': 'LUAS', });
lyr_JalurPipa_4.set('fieldAliases', {'Id': 'Id', });
lyr_KETERANGAN_KERUSAKAN_SALURAN_5.set('fieldAliases', {'Id': 'Id', 'KATEGORI': 'KATEGORI', 'KETERANGAN': 'KETERANGAN', 'PANJANG': 'PANJANG', });
lyr_JENIS_SALURAN_6.set('fieldAliases', {'Id': 'Id', 'JENIS': 'JENIS', 'PANJANG': 'PANJANG', });
lyr_Tikungan_7.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'PANJANG': 'PANJANG', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Beda_Pasangan_8.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'PANJANG': 'PANJANG', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Gorong__Gorong_9.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'PANJANG': 'PANJANG', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Titik_Per_50_m_10.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'PANJANG': 'PANJANG', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Box_Alva_Valve_11.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'PANJANG': 'PANJANG', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_BokGateValve_12.set('fieldAliases', {'Id': 'Id', 'NAMA': 'NAMA', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'PANJANG': 'PANJANG', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', });
lyr_Bangunan_Air_13.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'PANJANG': 'PANJANG', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Bangunan_Bagi_14.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'PANJANG': 'PANJANG', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Bangunan_Sadap_15.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'PANJANG': 'PANJANG', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Rumah_Pompa_16.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'PANJANG': 'PANJANG', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_JALAN_1.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_SUNGAI_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_AREAFUNGSIONAL_QGIS_3.set('fieldImages', {'Id': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', 'LUAS': 'TextEdit', });
lyr_JalurPipa_4.set('fieldImages', {'Id': 'Range', });
lyr_KETERANGAN_KERUSAKAN_SALURAN_5.set('fieldImages', {'Id': 'Range', 'KATEGORI': 'TextEdit', 'KETERANGAN': 'TextEdit', 'PANJANG': 'TextEdit', });
lyr_JENIS_SALURAN_6.set('fieldImages', {'Id': 'Range', 'JENIS': 'TextEdit', 'PANJANG': 'TextEdit', });
lyr_Tikungan_7.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'PANJANG': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'TextEdit', 'FOTO_6': 'TextEdit', 'FOTO_7': 'TextEdit', 'FOTO_8': 'TextEdit', });
lyr_Beda_Pasangan_8.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'PANJANG': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'TextEdit', 'FOTO_6': 'TextEdit', 'FOTO_7': 'TextEdit', 'FOTO_8': 'TextEdit', });
lyr_Gorong__Gorong_9.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'PANJANG': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'TextEdit', 'FOTO_6': 'TextEdit', 'FOTO_7': 'TextEdit', 'FOTO_8': 'TextEdit', });
lyr_Titik_Per_50_m_10.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'PANJANG': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'TextEdit', 'FOTO_6': 'TextEdit', 'FOTO_7': 'TextEdit', 'FOTO_8': 'TextEdit', });
lyr_Box_Alva_Valve_11.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'PANJANG': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'TextEdit', 'FOTO_7': 'TextEdit', 'FOTO_8': 'TextEdit', });
lyr_BokGateValve_12.set('fieldImages', {'Id': 'Range', 'NAMA': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'PANJANG': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', });
lyr_Bangunan_Air_13.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'PANJANG': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'TextEdit', 'FOTO_7': 'TextEdit', 'FOTO_8': 'TextEdit', });
lyr_Bangunan_Bagi_14.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'PANJANG': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'TextEdit', 'FOTO_7': 'TextEdit', 'FOTO_8': 'TextEdit', });
lyr_Bangunan_Sadap_15.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'PANJANG': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'TextEdit', 'FOTO_7': 'TextEdit', 'FOTO_8': 'TextEdit', });
lyr_Rumah_Pompa_16.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'PANJANG': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'TextEdit', 'FOTO_8': 'TextEdit', });
lyr_JALAN_1.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SUNGAI_2.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_AREAFUNGSIONAL_QGIS_3.set('fieldLabels', {'Id': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'LUAS': 'no label', });
lyr_JalurPipa_4.set('fieldLabels', {'Id': 'hidden field', });
lyr_KETERANGAN_KERUSAKAN_SALURAN_5.set('fieldLabels', {'Id': 'hidden field', 'KATEGORI': 'inline label - visible with data', 'KETERANGAN': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', });
lyr_JENIS_SALURAN_6.set('fieldLabels', {'Id': 'hidden field', 'JENIS': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', });
lyr_Tikungan_7.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'inline label - visible with data', 'pdfmaps_ph': 'hidden field', 'PANJANG': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Beda_Pasangan_8.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'inline label - visible with data', 'pdfmaps_ph': 'hidden field', 'PANJANG': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Gorong__Gorong_9.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'inline label - visible with data', 'pdfmaps_ph': 'hidden field', 'PANJANG': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Titik_Per_50_m_10.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'inline label - visible with data', 'pdfmaps_ph': 'hidden field', 'PANJANG': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Box_Alva_Valve_11.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'inline label - visible with data', 'pdfmaps_ph': 'hidden field', 'PANJANG': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_BokGateValve_12.set('fieldLabels', {'Id': 'hidden field', 'NAMA': 'inline label - visible with data', 'Descriptio': 'inline label - visible with data', 'pdfmaps_ph': 'hidden field', 'PANJANG': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', });
lyr_Bangunan_Air_13.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'inline label - visible with data', 'pdfmaps_ph': 'hidden field', 'PANJANG': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Bangunan_Bagi_14.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'inline label - visible with data', 'pdfmaps_ph': 'hidden field', 'PANJANG': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Bangunan_Sadap_15.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'inline label - visible with data', 'pdfmaps_ph': 'hidden field', 'PANJANG': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Rumah_Pompa_16.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'PANJANG': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Rumah_Pompa_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});