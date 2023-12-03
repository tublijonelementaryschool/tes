class MyHeader extends HTMLElement{
	connectedCallback(){
		this.innerHTML = `
			<header>
				
				

							

			</header>
		`
	}
}

customElements.define('my-header', MyHeader)


class MyAgencyFooter extends HTMLElement{
	connectedCallback(){
		this.innerHTML = `
			<footer>

				<!-- agency footer -->
				<div id="footer" class="anchor" name="agencyfooter">
				  <div id="supplementary" class="row">
				        <div class="large-3 columns" role="complementary">
				            <aside id="text-4" class="widget widget_text">
				            	<h3 class="widget-title">Tublijon Elementary School</h3>			
				            	<div class="textwidget"><p></p>
				            		<center>
				            		<img decoding="async" loading="lazy" class="size-full wp-image-36 alignleft" src="./tublijon_files/download.png" alt="" width="120" height="120" ></center>
				            		

				            		<p></p>
				</div>
						</aside><aside id="custom_html-7" class="widget_text widget widget_custom_html"><div class="textwidget custom-html-widget"></div></aside>    </div>
				    
				        <div class="large-3 columns" role="complementary">
				            <aside id="text-5" class="widget widget_text"><h3 class="widget-title">Connect With Us</h3>			<div class="textwidget"><p><strong><strong>SDO Sorsogon City<br>
				</strong>09123456789</strong><br>
				114583@deped.gov.ph</p>
				</div>
						</aside>    </div>
				    
				        <div class="large-3 columns" role="complementary">
				            <aside id="text-6" class="widget widget_text">
				            	<h3 class="widget-title">ISO non-yet</h3>			
				            	<div class="textwidget"></div>
							</aside>    
						</div>
				    
				        <div class="large-3 columns" role="complementary">
				            <div id="text-9" class="widget widget_text">
				            	<h3 class="widget-title">OUR LOCATION</h3>			
				            	<div class="textwidget">
				            		<!-- <p><iframe loading="lazy" style="border: 0;" src="./tublijon_files/embed.html" frameborder="0" allowfullscreen=""></iframe></p> -->

				            		<p><iframe loading="lazy" style="border: 0;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120874.78886172744!2d123.90382540130692!3d12.970472652340636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0e469ac906e79%3A0x4b8a7e04d9c568ab!2sTublijon%20Elementary%20School!5e0!3m2!1sen!2sph!4v1701080588982!5m2!1sen!2sph" width="300" height="150" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" frameborder="0" allowfullscreen=""></iframe></p>
								</div>
							</div>    
						</div>
					</div>
				</div>

				<!-- standard footer -->
				<script id="gwt-footer-jsdk" src="./tublijon_files/footer.js.download"></script><div id="gwt-standard-footer"><iframe src="./tublijon_files/footer-source.html" id="footer-gwt-frame" width="100%" scrolling="no" style="border: 0px; min-height: 188px; margin-bottom: -3px; overflow: hidden; height: 193px;"></iframe></div>
				<!-- end standard footer -->

				<div class="js-off-canvas-exit"></div></div><!-- #off-canvass-content -->
				</div><!-- #off-canvass-wrapper inner -->
				</div><!-- #off-canvass-wrapper -->

				<!-- standard footer script -->
				<script type="text/javascript">
				(function(d, s, id) {
				  var js, gjs = d.getElementById('gwt-standard-footer');

				  js = d.createElement(s); js.id = id;
				  js.src = "//gwhs.i.gov.ph/gwt-footer/footer.js";
				  gjs.parentNode.insertBefore(js, gjs);
				}(document, 'script', 'gwt-footer-jsdk'));
				</script>


				<!-- philippine standard time script-->
				<script id="gwt-pst-jsdk" src="./tublijon_files/gwtpst.js.download"></script><script type="text/javascript" id="gwt-pst">
				(function(d, eId) {
					var js, gjs = d.getElementById(eId);
					js = d.createElement('script'); js.id = 'gwt-pst-jsdk';
					js.src = "//gwhs.i.gov.ph/pst/gwtpst.js?"+new Date().getTime();
					gjs.parentNode.insertBefore(js, gjs);
				}(document, 'gwt-pst'));

				var gwtpstReady = function(){
					var firstPst = new gwtpstTime('pst-time');
				}
				</script><script id="gwt-pst-jsonp-time" src="./tublijon_files/jsonp_unix.php"></script>
				<!-- end philippine standard time -->

				<script type="text/javascript" id="eael-general-js-extra">
				/* <![CDATA[ */
				var localize = {"ajaxurl":"","nonce":"58f21ab332","i18n":{"added":"Added ","compare":"Compare","loading":"Loading..."},"eael_translate_text":{"required_text":"is a required field","invalid_text":"Invalid","billing_text":"Billing","shipping_text":"Shipping","fg_mfp_counter_text":"of"},"page_permalink":"","cart_redirectition":"","cart_page_url":"","el_breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet Portrait","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}}};
				/* ]]> */
				</script>
				<script type="text/javascript" src="./tublijon_files/general.min.js.download" id="eael-general-js"></script>
				<script type="text/javascript" src="./tublijon_files/eael-6.js.download" id="eael-6-js"></script>
				<script type="text/javascript" src="./tublijon_files/webpack.runtime.min.js.download" id="elementor-webpack-runtime-js"></script>
				<script type="text/javascript" src="./tublijon_files/frontend-modules.min.js.download" id="elementor-frontend-modules-js"></script>
				<script type="text/javascript" src="./tublijon_files/waypoints.min.js.download" id="elementor-waypoints-js"></script>
				<script type="text/javascript" src="./tublijon_files/core.min.js.download" id="jquery-ui-core-js"></script>
				<script id="elementor-frontend-js-before" type="text/javascript">
				var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close","a11yCarouselWrapperAriaLabel":"Carousel | Horizontal scrolling: Arrow Left & Right","a11yCarouselPrevSlideMessage":"Previous slide","a11yCarouselNextSlideMessage":"Next slide","a11yCarouselFirstSlideMessage":"This is the first slide","a11yCarouselLastSlideMessage":"This is the last slide","a11yCarouselPaginationBulletMessage":"Go to slide"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet Portrait","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}}},
				"version":"3.17.3","is_static":false,"experimentalFeatures":{"e_dom_optimization":true,"e_optimized_assets_loading":true,"additional_custom_breakpoints":true,"landing-pages":true},"urls":{"assets":""},"swiperClass":"swiper-container","settings":{"page":[],"editorPreferences":[]},"kit":{"active_breakpoints":["viewport_mobile","viewport_tablet"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":6,"title":"Deped%20Makati%20City%20%E2%80%93%20Deped%20Makati%20City","excerpt":"","featuredImage":false}};
				</script>
				<script type="text/javascript" src="./tublijon_files/frontend.min.js.download" id="elementor-frontend-js"></script><span id="elementor-device-mode" class="elementor-screen-only"></span>
				        <script type="text/javascript">
				            /* <![CDATA[ */
				           document.querySelectorAll("ul.nav-menu").forEach(
				               ulist => { 
				                    if (ulist.querySelectorAll("li").length == 0) {
				                        ulist.style.display = "none";

				                                            } 
				                }
				           );
				            /* ]]> */
				        </script>
				        
				<div><a href="https://static.vecteezy.com/system/resources/previews/000/615/375/original/vector-up-arrow-icon.jpg" id="back-to-top" style="display: none;"><i class="fa fa-arrow-circle-up fa-2x"></i></a></div>



			</footer>
		`
	}
}

customElements.define('my-agencyfooter', MyAgencyFooter)