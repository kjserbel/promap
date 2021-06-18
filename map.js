window.onload = function(){
    var options = {
        zoom: 12
        , center: new google.maps.LatLng(20.62975803818514, -103.34718294688588)
        , mapTypeId: google.maps.MapTypeId.ROADMAP
        ,mapId: '9da2dff3f618f30f'
        ,clickableIcons: true
        , disableDoubleClickZoom: false
    };
    var map = new google.maps.Map(document.getElementById('map'), options);
 
    var n=1;
    var markers = [
        //01//
        {
            'position01':new google.maps.LatLng(20.674580304610494, -103.36868103177848)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                         <div class="contentTxt">\
                        <h2>Av. Chapultepec</h2>\
                        <div class="contentImg">\
                            <img src="11.jpg" \ title="Chapultepec" />\
                            <a href="http://localhost/ultrior/ulterior1/about">Av. Chapultepec</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                                En esta zona, a toda hora circula un aire que desacelera el paso,\
                                 invita a la contemplación, abre apetitos gastronómicos, culturales y literarios.\
                                  Está llena de posibilidades para el día y la noche. Vale la pena tomarse un tiempo,\
                                 caminar Av. Vallarta desde la Minerva hacia Chapultepec,\
                                  admirar sus casonas diseñadas por reconocidos arquitectos y descubrir entre sus calles aledañas,\
                                   tiendas de diseñadores mexicanos que van desde ropa hasta tapetes,\
                                    diferentes curiosidades, restaurantes, bares y cafés.\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //02//
        {
            'position02':new google.maps.LatLng(20.674867659470515, -103.35584348882288)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>Juarez</h2>\
                        <div class="contentImg">\
                            <img src=" " title="Juarez"/>\
                            <a href="http://localhost/ulterior1/about">Juarez</a>\
                        </div>\
                        <div class="contentTxt">\
                        <h2>Juarez</h2>\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //03//
        {
            'position03':new google.maps.LatLng(20.675224685701135, -103.34700340497662)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>Centro Historico</h2>\
                        <div class="contentImg">\
                            <img src=" " title="Centro Historico"/>\
                            <a href="http://localhost/ulterior1/about">Centro Historico</a>\
                        </div>\
                        <div class="contentTxt">\
                        <h2>Juarez</h2>\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //04  //
        {
            'position04':new google.maps.LatLng(20.67541200579239, -103.34133573665966)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>San Juan de Dios</h2>\
                        <div class="contentImg">\
                            <img src=" " title="San Juan de Dios"/>\
                            <a href="http://localhost/ulterior1/about">San Juan de Dios</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //05//
        {
            'position05':new google.maps.LatLng(20.6845797,-103.367393)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>Sta. Tere</h2>\
                        <div class="contentImg">\
                            <img src=" " title="Sta. Tere"/>\
                            <a href="http://localhost/ulterior1/about">Sta. Tere</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //06//
        {
            'position06':new google.maps.LatLng(20.7016359,-103.3821756)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>Providencia</h2>\
                        <div class="contentImg">\
                            <img src=" " title="Providencia"/>\
                            <a href="http://localhost/ulterior1/about">Providencia</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //07//
        {
            'position07':new google.maps.LatLng(20.701495727072516, -103.3669274534735)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>Country</h2>\
                        <div class="contentImg">\
                            <img src=" " title="Country"/>\
                            <a href="http://localhost/ulterior1/about">Country</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //08//
        {
            'position08':new google.maps.LatLng(20.6948808,-103.3520922)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>Normal</h2>\
                        <div class="contentImg">\
                            <img src=" " title="Normal"/>\
                            <a href="http://localhost/ulterior1/about">Normal</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //09//
        {
            'position09':new google.maps.LatLng(20.7049997,-103.3303656)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>Estadio Jalisco</h2>\
                        <div class="contentImg">\
                            <img src=" " title="Estadio Jalisco"/>\
                            <a href="http://localhost/ulterior1/about">Estadio Jalisco</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //10//
        {
            'position10':new google.maps.LatLng(20.69343786202929, -103.32142442496277)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>Centro Medico</h2>\
                        <div class="contentImg">\
                            <img src=" " title="Centro Medico"/>\
                            <a href="http://localhost/ulterior1/about">Centro Medico</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //11//
        {
            'position11':new google.maps.LatLng(20.659507442858764, -103.34896023604607)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>Agua Azul</h2>\
                        <div class="contentImg">\
                            <img src=" " title="Agua Azul"/>\
                            <a href="http://localhost/ulterior1/about">Agua Azul</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //12//
        {
            'position12':new google.maps.LatLng(20.674564930729016, -103.38742353143284)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>La Minerva</h2>\
                        <div class="contentImg">\
                            <img src=" " title="La Minerva"/>\
                            <a href="http://localhost/ulterior1/about">La Minerva</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //13//
        {
            'position13':new google.maps.LatLng(20.653341693903705, -103.39162555841908)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>Expo Guadalajara</h2>\
                        <div class="contentImg">\
                            <img src=" " title="Expo Guadalajara"/>\
                            <a href="http://localhost/ulterior1/about">Expo Guadalajara</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //14//
        {
            'position14':new google.maps.LatLng(20.650625094651684, -103.40166797376182)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>Plaza del Sol</h2>\
                        <div class="contentImg">\
                            <img src=" " title="Plaza del Sol"/>\
                            <a href="http://localhost/ulterior1/about">Plaza del Sol</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //15//
        {
            'position15':new google.maps.LatLng(20.664917692244103, -103.39517470994917)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>Chapalita</h2>\
                        <div class="contentImg">\
                            <img src=" " title="Chapalita"/>\
                            <a href="http://localhost/ulterior1/about">Chapalita</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //16//
        {
            'position16':new google.maps.LatLng(20.660253185681935, -103.41869936026865)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>UNIVA</h2>\
                        <div class="contentImg">\
                            <img src=" " title="UNIVA"/>\
                            <a href="http://localhost/ulterior1/about">UNIVA</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //17//
        {
            'position17':new google.maps.LatLng(20.67766941581649, -103.4164524025971)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>Los Cubos</h2>\
                        <div class="contentImg">\
                            <img src=" " title="Los Cubos"/>\
                            <a href="http://localhost/ulterior1/about">Los Cubos</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //18//
        {
            'position18':new google.maps.LatLng(20.670554927455814, -103.43902160527274)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>Parque Metropolitano</h2>\
                        <div class="contentImg">\
                            <img src=" " title="Parque Metropolitano"/>\
                            <a href="http://localhost/ulterior1/about">Parque Metropilitano</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //19//
        {
            'position19':new google.maps.LatLng(20.677945526927534, -103.37996717376147)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>UAG</h2>\
                        <div class="contentImg">\
                            <img src=" " title="UAG"/>\
                            <a href="http://localhost/ulterior/ulterior1/about">UAG</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //20//
        {
            'position20':new google.maps.LatLng(20.71561253699452, -103.41990216967471)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>Puerta de Hieroo</h2>\
                        <div class="contentImg">\
                            <img src=" " title="Puerta de Hierro"/>\
                            <a href="http://localhost/ulterior1/about">Puerta de Hierro</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //21//
        {
            'position21':new google.maps.LatLng(20.709038343843467, -103.39360534193608)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>Colomos</h2>\
                        <div class="contentImg">\
                            <img src=" " title="Colomos"/>\
                            <a href="http://localhost/ulterior1/about">Colomos</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //22//
        {
            'position22':new google.maps.LatLng(20.72429667933054, -103.38842205131213)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>Zapopan Centro</h2>\
                        <div class="contentImg">\
                            <img src=" " title="Zapopan Centro"/>\
                            <a href="http://localhost/ulterior1/about">Zapopan Centro</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //23//
        {
            'position23':new google.maps.LatLng(20.750874010505058, -103.37336513143188)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>Belenes</h2>\
                        <div class="contentImg">\
                            <img src=" " title="Belenes"/>\
                            <a href="http://localhost/ulterior1/about">Belenes</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //24//
        {
            'position24':new google.maps.LatLng(20.745944875803477, -103.31003038251566)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>Mirador</h2>\
                        <div class="contentImg">\
                            <img src=" " title="Mirador"/>\
                            <a href="http://localhost/ulterior1/about">Mirador</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //25//
        {
            'position25':new google.maps.LatLng(20.677499400186154, -103.32577716105082)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>Oblatos</h2>\
                        <div class="contentImg">\
                            <img src=" " title="Oblatos"/>\
                            <a href="http://localhost/ulterior1/about">Oblatos</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //26//
        {
            'position26':new google.maps.LatLng(20.671342050564995, -103.2841659520524)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>Hermosa Provincia</h2>\
                        <div class="contentImg">\
                            <img src=" " title="Hermosa Provincia"/>\
                            <a href="http://localhost/ulterior1/about">Hermosa Provincia</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //27//
        {
            'position27':new google.maps.LatLng(20.663451888611846, -103.29789007376158)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>San Jacinto</h2>\
                        <div class="contentImg">\
                            <img src=" " title="San Jacinto"/>\
                            <a href="http://localhost/ulterior1/about">San Jacinto</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //28//
        {
            'position28':new google.maps.LatLng(20.661832437485266, -103.26866430074763)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>Parque Solidaridad</h2>\
                        <div class="contentImg">\
                            <img src=" " title="Parque Solidaridad"/>\
                            <a href="http://localhost/ulterior1/about">Parque Solidaridad</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //29//
        {
            'position29':new google.maps.LatLng(20.652934885690613, -103.29792469352977)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>San Rafael</h2>\
                        <div class="contentImg">\
                            <img src=" " title="San Rafael"/>\
                            <a href="http://localhost/ulterior1/about">San Rafael</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //30//
        {
            'position30':new google.maps.LatLng(20.639495590841122, -103.31206211609059)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>Tlaquepaque Centro</h2>\
                        <div class="contentImg">\
                            <img src=" " title="Tlaquepaque Centro"/>\
                            <a href="http://localhost/ulterior1/about">Tlaquepaque Centro</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //31//
        {
            'position31':new google.maps.LatLng(20.655338576412205, -103.3266354718778)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>Olimpica</h2>\
                        <div class="contentImg">\
                            <img src=" " title="Olimpica"/>\
                            <a href="http://localhost/ulterior1/about">Olimpica</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //32//
        {
            'position32':new google.maps.LatLng(20.637466267946536, -103.34756652133389)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>El Dean</h2>\
                        <div class="contentImg">\
                            <img src=" " title="El Dean"/>\
                            <a href="http://localhost/ulterior1/about">El Dean</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //33//
        {
            'position33':new google.maps.LatLng(20.6019721929324, -103.34467922226733)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>Cerro del 4</h2>\
                        <div class="contentImg">\
                            <img src=" " title="Cerro del 4"/>\
                            <a href="http://localhost/ulterior1/about">Cerro del 4</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //34//
        {
            'position34':new google.maps.LatLng(20.646766461966735, -103.36846981609051)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>Polideportivo Lopez Mateos</h2>\
                        <div class="contentImg">\
                            <img src=" " title="Polideportivo Lopez Mateos"/>\
                            <a href="http://localhost/ulterior1/about">Polideportivo Lopez Mateos</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //35//
        {
            'position35':new google.maps.LatLng(20.608849736064734, -103.41471552366421)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>ITESO</h2>\
                        <div class="contentImg">\
                            <img src=" " title="ITESO"/>\
                            <a href="http://localhost/ulterior1/about">ITESO</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //36//
        {
            'position36':new google.maps.LatLng(20.710536718526136, -103.46220511860668)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>Bajio</h2>\
                        <div class="contentImg">\
                            <img src=" " title="Bajio"/>\
                            <a href="http://localhost/ulterior1/about">Bajio</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //37//
        {
            'position37':new google.maps.LatLng(20.70283235137847, -103.46100755670784)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>Aviación</h2>\
                        <div class="contentImg">\
                            <img src=" " title="Aviación"/>\
                            <a href="http://localhost/ulterior1/about">Aviación</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //38//
        {
            'position38':new google.maps.LatLng(20.63267366184759, -103.26572919446733)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>Loma Dorada</h2>\
                        <div class="contentImg">\
                            <img src=" " title="Loma Dorada"/>\
                            <a href="http://localhost/ulterior1/about">Loma Dorada</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //39//
        {
            'position39':new google.maps.LatLng(20.624802134476493, -103.24397190544005)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>Tonalá Centro</h2>\
                        <div class="contentImg">\
                            <img src=" " title="Tonalá Centro"/>\
                            <a href="http://localhost/ulterior1/about">Tonalá Centro</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //40//
        {
            'position40':new google.maps.LatLng(20.474976513278826, -103.4475697081208)
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2>Tlajomulco</h2>\
                        <div class="contentImg">\
                            <img src=" " title="Tlajomulco"/>\
                            <a href="http://localhost/ulterior1/about">Tlajomulco</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //41//
        /*{
            'position41':new google.maps.LatLng()
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2> Nombre </h2>\
                        <div class="contentImg">\
                            <img src=" Agregar Imagen Aqui " title=" Nombre "/>\
                            <a href="http://localhost/ulterior1/about"> Nombre</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //42//
        {
            'position42':new google.maps.LatLng()
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2> Nombre </h2>\
                        <div class="contentImg">\
                            <img src=" Agregar Imagen Aqui " title=" Nombre "/>\
                            <a href="http://localhost/ulterior1/about"> Nombre</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //43//
        {
            'position43':new google.maps.LatLng()
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2> Nombre </h2>\
                        <div class="contentImg">\
                            <img src=" Agregar Imagen Aqui " title=" Nombre "/>\
                            <a href="http://localhost/ulterior1/about"> Nombre</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //44//
        {
            'position44':new google.maps.LatLng()
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2> Nombre </h2>\
                        <div class="contentImg">\
                            <img src=" Agregar Imagen Aqui " title=" Nombre "/>\
                            <a href="http://localhost/ulterior1/about"> Nombre</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //45//
        {
            'position45':new google.maps.LatLng()
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2> Nombre </h2>\
                        <div class="contentImg">\
                            <img src=" Agregar Imagen Aqui " title=" Nombre "/>\
                            <a href="http://localhost/ulterior1/about"> Nombre</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //46//
        {
            'position46':new google.maps.LatLng()
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2> Nombre </h2>\
                        <div class="contentImg">\
                            <img src=" Agregar Imagen Aqui " title=" Nombre "/>\
                            <a href="http://localhost/ulterior1/about"> Nombre</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //47//
        {
            'position47':new google.maps.LatLng()
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2> Nombre </h2>\
                        <div class="contentImg">\
                            <img src=" Agregar Imagen Aqui " title=" Nombre "/>\
                            <a href="http://localhost/ulterior1/about"> Nombre</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //48//
        {
            'position48':new google.maps.LatLng()
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2> Nombre </h2>\
                        <div class="contentImg">\
                            <img src=" Agregar Imagen Aqui " title=" Nombre "/>\
                            <a href="http://localhost/ulterior1/about"> Nombre</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //49//
        {
            'position49':new google.maps.LatLng()
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2> Nombre </h2>\
                        <div class="contentImg">\
                            <img src=" Agregar Imagen Aqui " title=" Nombre "/>\
                            <a href="http://localhost/ulterior1/about"> Nombre</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },
        //50//
        {
            'position50':new google.maps.LatLng()
            , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                        <div class="contentTxt">\
                        <h2> Nombre </h2>\
                        <div class="contentImg">\
                            <img src=" " title="Nombre"/>\
                            <a href="http://localhost/ulterior1/about">Nombre</a>\
                        </div>\
                        <div class="contentTxt">\
                            <p>\
                               .\
                            </p>\
                        </div>\
                        <div class="clear"></div>\
                    </div>'
        },*/
    ];
 //Aqui comienzan las Funciones//
    n=1;
    for(var i in markers){
        marker = new google.maps.Marker({title: "Chapultepec", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position01']
            , map: map
            , zIndex: n
        });                                                                                                                                                                                                                                                                                                             
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);
        

           /*marker = new google.maps.Marker({title: "Juarez", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position02']
            , map: map
            , zIndex: n
        });
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);
          marker = new google.maps.Marker({title: "Centro Historico", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position03']
            , map: map
            , zIndex: n
        });
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);
           marker = new google.maps.Marker({title: "San Juan de Dios", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position04']
            , map: map
            , zIndex: n
        });
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: "Sta. Tere", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position05']
            , map: map
            , zIndex: n
        });
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: "Providencia", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position06']
            , map: map
            , zIndex: n
        });
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: "Country", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position07']
            , map: map
            , zIndex: n
        });
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: "Normal", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position08']
            , map: map
            , zIndex: n
        });
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: "Estadio Jalisco", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position09']
            , map: map
            , zIndex: n
        });
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: "Centro Medico", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position10']
            , map: map
            , zIndex: n
        });
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: "Agua Azul", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position11']
            , map: map
            , zIndex: n
        });
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: "La Minerva", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position12']
            , map: map
            , zIndex: n
        });
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: "Expo Guadalajara", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position13']
            , map: map
            , zIndex: n
        });
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: "Plaza del Sol", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position14']
            , map: map
            , zIndex: n
        });
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: "Chapalita", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position15']
            , map: map
            , zIndex: n
        });
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: "UNIVA", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position16']
            , map: map
            , zIndex: n
        });
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: "Los Cubos", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position17']
            , map: map
            , zIndex: n
        });
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: "Parque Metropolitano", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position18']
            , map: map
            , zIndex: n
        });
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: "UAG", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position19']
            , map: map
            , zIndex: n
        });
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: "Puerta de Hierro", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position20']
            , map: map
            , zIndex: n
        });
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: "Colomos", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position21']
            , map: map
            , zIndex: n
        });
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: "Zapopan Centro", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position22']
            , map: map
            , zIndex: n
        });
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: "Belenes", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position23']
            , map: map
            , zIndex: n
        });   
                          popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: "Mirador", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position24']
            , map: map
            , zIndex: n
        });   
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: "Oblatos", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position25']
            , map: map
            , zIndex: n
        });  
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: "Hermosa Provincia", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position26']
            , map: map
            , zIndex: n
        });        
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: "San Jacinto", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position27']
            , map: map
            , zIndex: n
        }); 
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: "Parque Solidaridad", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position28']
            , map: map
            , zIndex: n
        });  
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: "San Rafael", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position29']
            , map: map
            , zIndex: n
        });     
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: "Tlaquepaque Centro", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position30']
            , map: map
            , zIndex: n
        });            
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: "Olimpica", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position31']
            , map: map
            , zIndex: n
        });      
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: "El Dean", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position32']
            , map: map
            , zIndex: n
        });      
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: "Cerro del 4", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position33']
            , map: map
            , zIndex: n
        });            
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: "Polideportivo Lopez Mateos", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position34']
            , map: map
            , zIndex: n
        });   
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: "ITESO", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position35']
            , map: map
            , zIndex: n
        });          
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: "Bajio", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position36']
            , map: map
            , zIndex: n
        });          
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: "Aviación", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position37']
            , map: map
            , zIndex: n
        });     
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: "Loma Dorada", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position38']
            , map: map
            , zIndex: n
        });           
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: "Tonala Centro", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position39']
            , map: map
            , zIndex: n
        });            
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

        /*    marker = new google.maps.Marker({title: "Tlajomulco", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position40']
            , map: map
            , zIndex: n
        });          
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

           marker = new google.maps.Marker({title: " ", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position41']
            , map: map
            , zIndex: n
        });
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: " ", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position42']
            , map: map
            , zIndex: n
        }); 
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: " ", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position43']
            , map: map
            , zIndex: n
        });        
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: " ", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position44']
            , map: map
            , zIndex: n
        });         
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: " ", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position45']
            , map: map
            , zIndex: n
        });      
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: " ", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position46']
            , map: map
            , zIndex: n
        });   
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: " ", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position47']
            , map: map
            , zIndex: n
        });        
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: " ", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position48']
            , map: map
            , zIndex: n
        });      
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: " ", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position49']
            , map: map
            , zIndex: n
        });         
        popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);

            marker = new google.maps.Marker({title: " ", icon: "C:/Users/Susy/Desktop/MAS_TI/punto.png",
            position: markers[i]['position50']
            , map: map
            , zIndex: n
        }); 
                popup = new google.maps.InfoWindow({
            content: markers[i]['info']
            , zIndex: n
        });
        popup.open(map, marker);
        (function(id, popup){
            google.maps.event.addListener(popup, 'domready', function(){
                google.maps.event.addDomListener(document.getElementById('contentInfoWindow' + id), 'click', function(){
                    popup.setZIndex(n++);
                });
            })
        })(n++, popup);*/
    }
};