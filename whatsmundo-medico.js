
					function createButton(context){
						var y = document.createElement("IMG");
						y.setAttribute("src", "https://warm-island-87324.herokuapp.com/images/whatsappcircular1.png");
						y.setAttribute("width", "60");
						y.setAttribute("height", "60");
						y.setAttribute("alt", "Whatsapp For Order Now");
						document.body.appendChild(y);
					    var urls = window.location.href;
					    function myFunction(x) {
							var x = window.matchMedia('(max-width: 700px)')
							if (x.matches) 
								{ 
						    		y.style.display = 'block';
								} 
							else 
								{
									y.style.display = 'block';
								}
						}
						var x = window.matchMedia('(max-width: 700px)')
						myFunction(x) // Call listener function at run time
						x.addListener(myFunction) // Attach listener function on state changes
					    y.style.position = 'fixed';
					    y.style.bottom = '1%';
					    y.style.left = '1%';
					    y.style.padding = '9px 10px 9px 10px';
					    y.style.cursor = 'pointer';
					    y.style.boxshadow = 'rgb(77, 77, 77) 2px 2px 6px';
					    y.style.zindex = '2147483647 !important';
					    y.style.webkitAppearance = 'none';
					    y.style.zIndex = '99999999999999';
					    y.onclick = function() {functienaam(y)};
					    context.appendChild(y);
					}
					function functienaam(y){

					  	var userAgent = navigator.userAgent || navigator.vendor || window.opera;

				      	
					    if (/windows phone/i.test(userAgent)) {
					        str1 = 'https://api.whatsapp.com/send?phone=529992973408&text='
					    }

					    else if (/android/i.test(userAgent)) {
					        str1 = 'https://api.whatsapp.com/send?phone=529992973408&text='
					    }

					    // iOS detection from: http://stackoverflow.com/a/9039885/177710
					    else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
					        str1 = 'https://api.whatsapp.com/send?phone=529992973408&text='
					    }

						else {
							str1 = 'https://web.whatsapp.com/send?phone=529992973408&text='
						}
						str2 = window.location.href
						str3 = ' ¡Hola! estoy interesado(a) en este producto'
						var res = str1.concat(str2)
						var links = res.concat(str3)
						window.open(links,'_blank');
				 	}
					createButton(document.body);
					