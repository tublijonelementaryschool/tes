class MyHeader extends HTMLElement{
	connectedCallback(){
		this.innerHTML = `
			<header>
				
				<div id="accessibility-shortcuts">
					<ul>
						<li><a href="" class="skips toggle-statement" title="Toggle Accessibility Statement" accesskey="0" data-toggle="a11y-modal" aria-controls="a11y-modal" aria-haspopup="true" tabindex="0">Toggle Accessibility Statement</a>
						</li>
						<li><a href="" accesskey="h">Home</a>
						</li>
						<li><a href="" accesskey="R">Skip to Main Content</a></li>
						<li><a href="" accesskey="M">Sitemap</a></li>
					</ul>
				</div>

				<div class="off-canvas-wrapper">
					<div class="off-canvas-wrapper-inner" data-off-canvas-wrapper="">
						<!-- off-canvas title bar for 'small' screen -->
						<div id="off-canvas-container" class="title-bar columns hide-for-large" data-responsive-toggle="main-nav" data-hide-for="large" style="display: none;">
							<div class="title-bar-right">
								<span class="title-bar-title">Menu</span>
								<button class="menu-icon" type="button" data-open="offCanvasRight" aria-expanded="false" aria-controls="offCanvasRight"></button>
							</div>
							<div class="title-bar-left">
								<span class="title-bar-title name"><a href="http://www.gov.ph/">GOVPH</a></span>
							</div>
						</div>

						<!-- off-canvas right menu -->
						<nav id="offCanvasRight" class="off-canvas position-right hide-for-large" data-off-canvas="0aizy2-off-canvas" data-position="right" aria-hidden="true">
							<div class="list-item">					
								<form role="search" method="get" class="search-form" action="/">
									<input type="search" class="search-field" placeholder="Search …" value="" name="s" title="Search for:">
								</form>
							</div>
							<div class="is-drilldown" style="min-height: 0px; max-width: 0px;">
								<ul class="vertical menu" data-drilldown="9m1w8h-drilldown" data-parent-link="true" role="menubar">
									<li id="menu-item-30" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-6 current_page_item menu-item-30" role="menuitem"><a  tabindex="0">Home</a>	
									</li>
									<li id="menu-item-31" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-31 is-drilldown-submenu-parent" role="menuitem" aria-haspopup="true" aria-expanded="false" aria-label="About Us"><a href="./organizationalstructure.html">About Us</a>
										<ul class="vertical menu submenu is-drilldown-submenu" data-submenu="" aria-hidden="true" role="menu">
											<li class="js-drilldown-back"><a tabindex="0">Back</a>
											</li>
											<li class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menu-item"><a >About Us</a>
											</li>
											<li id="menu-item-150" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-150 is-submenu-item is-drilldown-submenu-item" role="menuitem"><a>Organizational Structure</a>						
											</li>
											<li id="menu-item-26" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-26 is-submenu-item is-drilldown-submenu-item" role="menuitem"><a >Our History</a>		</li>
											<li id="menu-item-203" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-203 is-submenu-item is-drilldown-submenu-item" role="menuitem"><a >Mission, Vision, Core Values</a>						
											</li>
											<li id="menu-item-80201" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-80201 is-submenu-item is-drilldown-submenu-item" role="menuitem"><a href="https://depedsorsogoncity.com/" target="_blank">Schools Division Office - Websites</a>	
											</li>
											<li id="menu-item-96682" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-96682 is-drilldown-submenu-parent is-submenu-item is-drilldown-submenu-item" role="menuitem" aria-haspopup="true" aria-expanded="false" aria-label="Public Schools Directory"><a>Public Schools Directory</a>
												
											</li>

										</ul>
									</li>
									<li id="menu-item-217" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-217 is-drilldown-submenu-parent" role="menuitem" aria-haspopup="true" aria-expanded="false" aria-label="BAC"><a>BAC</a>
										<ul class="vertical menu submenu is-drilldown-submenu" data-submenu="" aria-hidden="true" role="menu">
											<li class="js-drilldown-back">
												<a tabindex="0">Back</a>
											</li>
											<li class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menu-item"><a >BAC</a>
											</li>
											<li id="menu-item-156" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-156 is-submenu-item is-drilldown-submenu-item" role="menuitem">
												<a href="https://philgeps.gov.ph/?fbclid=IwAR2ex5fRnBPSkhU7hHberrwTWix5L8atUPbJ3CDZfSRcIVc-URfesbHMpUk">PhilGEPS</a>			
											</li>
											<li id="menu-item-155" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-155 is-submenu-item is-drilldown-submenu-item" role="menuitem"><a>Invitation to Bid</a>
											</li>
											<li id="menu-item-159" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-159 is-submenu-item is-drilldown-submenu-item" role="menuitem">
												<a>Request for Quotation</a>			
											</li>
											<li id="menu-item-154" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-154 is-submenu-item is-drilldown-submenu-item" role="menuitem"><a href="">Bid Bulletin</a>	
											</li>
											<li id="menu-item-153" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-153 is-drilldown-submenu-parent is-submenu-item is-drilldown-submenu-item" role="menuitem" aria-haspopup="true" aria-expanded="false" aria-label="Awarded"><a>Awarded</a>
												<ul class="vertical menu submenu is-drilldown-submenu" data-submenu="" aria-hidden="true" role="menu">
													<li class="js-drilldown-back"><a tabindex="0">Back</a>
													</li>
													<li class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menu-item"><a >Awarded</a>
													</li>
													<li id="menu-item-13306" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13306 is-submenu-item is-drilldown-submenu-item" role="menuitem">
													<a >Notice of Award</a>							
													</li>
													<li id="menu-item-13305" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13305 is-submenu-item is-drilldown-submenu-item" role="menuitem">
														<a >Contract/Purchase Order</a>		
													</li>
													<li id="menu-item-13304" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13304 is-submenu-item is-drilldown-submenu-item" role="menuitem">
														<a >Notice to Proceed</a>							
													</li>
												</ul>
											</li>
											<li id="menu-item-152" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-152 is-drilldown-submenu-parent is-submenu-item is-drilldown-submenu-item" role="menuitem" aria-haspopup="true" aria-expanded="false" aria-label="Annual Procurement Plan"><a>Annual Procurement Plan</a>
												<ul class="vertical menu submenu is-drilldown-submenu" data-submenu="" aria-hidden="true" role="menu">
													<li class="js-drilldown-back"><a tabindex="0">Back</a>
													</li>
													<li class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menu-item"><a href="">Annual Procurement Plan</a>
													</li>
													<li id="menu-item-13312" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13312 is-submenu-item is-drilldown-submenu-item" role="menuitem"><a href="">APP CSE</a>							
													</li>
													<li id="menu-item-13311" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13311 is-submenu-item is-drilldown-submenu-item" role="menuitem"><a href="">APP Non- CSE</a>							
													</li>

												</ul>
											</li>
											<li id="menu-item-158" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-158 is-submenu-item is-drilldown-submenu-item" role="menuitem"><a href="">Project Procurement Management Plan</a>						
											</li>
											<li id="menu-item-157" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-157 is-submenu-item is-drilldown-submenu-item" role="menuitem"><a href="">Procurement Monitoring Report</a>						
											</li>
											<li id="menu-item-13297" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13297 is-submenu-item is-drilldown-submenu-item" role="menuitem"><a href="">Agency Procurement Compliance and Performance Indicators</a>				</li>

										</ul>
									</li>

									<li id="menu-item-160" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-160 is-drilldown-submenu-parent" role="menuitem" aria-haspopup="true" aria-expanded="false" aria-label="Issuances"><a>Issuances</a>
										<ul class="vertical menu submenu is-drilldown-submenu" data-submenu="" aria-hidden="true" role="menu">
											<li class="js-drilldown-back"><a tabindex="0">Back</a>
											</li>
											<li class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menu-item"><a >Issuances</a>
											</li>
											<li id="menu-item-166" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-166 is-submenu-item is-drilldown-submenu-item" role="menuitem"><a href="">Memorandum</a>				</li>
											<li id="menu-item-167" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-167 is-submenu-item is-drilldown-submenu-item" role="menuitem"><a href="">Unnumbered Memo</a>		
											</li>
											<li id="menu-item-163" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-163 is-submenu-item is-drilldown-submenu-item" role="menuitem"><a href="">Advisory</a>		
											</li>
											<li id="menu-item-165" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-165 is-submenu-item is-drilldown-submenu-item" role="menuitem"><a href="">Endorsement</a>				</li>
										</ul>
									</li>

									<li id="menu-item-168" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-168 is-drilldown-submenu-parent" role="menuitem" aria-haspopup="true" aria-expanded="false" aria-label="Careers"><a>Careers</a>
										<ul class="vertical menu submenu is-drilldown-submenu" data-submenu="" aria-hidden="true" role="menu">
											<li class="js-drilldown-back"><a tabindex="0">Back</a>
											</li>
											<li class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menu-item"><a href="">Careers</a>
											</li>
											<li id="menu-item-169" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-169 is-submenu-item is-drilldown-submenu-item" role="menuitem"><a href="">Division Office</a>		</li>
											<li id="menu-item-170" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-170 is-submenu-item is-drilldown-submenu-item" role="menuitem"><a href="">Elementary</a>	
											</li>
											
											<li id="menu-item-172" class="menu-item menu-item-type-post_type 	menu-item-object-page menu-item-172 is-submenu-item 	is-drilldown-submenu-item" role="menuitem"><a href="">Newly Hired</a>				
											</li>
											<li id="menu-item-173" class="menu-item menu-item-type-post_type 	menu-item-object-page menu-item-173 is-submenu-item 	is-drilldown-submenu-item" role="menuitem"><a href="">Result</a>						
											</li>

										</ul>
									</li>

									<li id="menu-item-82817" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-82817 is-drilldown-submenu-parent" role="menuitem" aria-haspopup="true" aria-expanded="false" aria-label="Services"><a>Services</a>
										<ul class="vertical menu submenu is-drilldown-submenu" data-submenu="" aria-hidden="true" role="menu">
											<li class="js-drilldown-back"><a tabindex="0">Back</a>
											</li>
											<li class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menu-item"><a href="">Services</a>
											</li>
											<li id="menu-item-181" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-181 is-submenu-item is-drilldown-submenu-item" role="menuitem"><a href="">Learning Resources Portal</a>						
											</li>
											<li id="menu-item-77298" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-77298 is-submenu-item is-drilldown-submenu-item" role="menuitem"><a href="">School Governance and Operations Division</a>						
											</li>
											<li id="menu-item-179" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-179 is-submenu-item is-drilldown-submenu-item" role="menuitem"><a href="">Curriculum and Implementation Division</a>						
											</li>
											<li id="menu-item-78247" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-78247 is-submenu-item is-drilldown-submenu-item" role="menuitem"><a href="">Office of the Schools Division Superintendent</a>						
											</li>
											<li id="menu-item-79941" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-79941 is-submenu-item is-drilldown-submenu-item" role="menuitem"><a href="">Legal Unit</a>				</li>
											<li id="menu-item-79940" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-79940 is-submenu-item is-drilldown-submenu-item" role="menuitem"><a href="">Accounting Unit</a>		</li>
										</ul>
									</li>

									<li id="menu-item-187" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-187 is-drilldown-submenu-parent" role="menuitem" aria-haspopup="true" aria-expanded="false" aria-label="Resources"><a>Resources</a>
										<ul class="vertical menu submenu is-drilldown-submenu" data-submenu="" aria-hidden="true" role="menu">
											<li class="js-drilldown-back"><a tabindex="0">Back</a>
											</li>
											<li class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menu-item"><a href="">Resources</a>
											</li>
											
											<!-- <li id="menu-item-83566" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-83566 is-drilldown-submenu-parent is-submenu-item is-drilldown-submenu-item" role="menuitem" aria-haspopup="true" aria-expanded="false" aria-label="Annual Accomplishment Report"><a>Annual Accomplishment Report</a>
												<ul class="vertical menu submenu is-drilldown-submenu" data-submenu="" aria-hidden="true" role="menu">
													<li class="js-drilldown-back"><a tabindex="0">Back</a>
													</li>
													<li class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menu-item"><a href="">Annual Accomplishment Report</a>
													</li>
													<li id="menu-item-83563" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-83563 is-submenu-item is-drilldown-submenu-item" role="menuitem"><a href="">2021</a>			</li>
													<li id="menu-item-83564" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-83564 is-submenu-item is-drilldown-submenu-item" role="menuitem"><a href="">2020</a>			</li>
													<li id="menu-item-83565" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-83565 is-submenu-item is-drilldown-submenu-item" role="menuitem"><a href="">2019</a>			
													</li>
												</ul>
											</li> -->
											<li id="menu-item-188" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-188 is-submenu-item is-drilldown-submenu-item" role="menuitem"><a href="">Division Education Development Plan(DEDP)</a>						
											</li>
											<li id="menu-item-77364" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-77364 is-submenu-item is-drilldown-submenu-item" role="menuitem"><a href="">Research</a>						
											</li>
											<li id="menu-item-194" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-194 is-drilldown-submenu-parent is-submenu-item is-drilldown-submenu-item" role="menuitem" aria-haspopup="true" aria-expanded="false" aria-label="Downloads"><a>Downloads</a>
												<ul class="vertical menu submenu is-drilldown-submenu" data-submenu="" aria-hidden="true" role="menu">
													<li class="js-drilldown-back"><a tabindex="0">Back</a>
													</li>
													<li class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menu-item"><a href="">Downloads</a>
													</li>
													<li id="menu-item-76533" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-76533 is-submenu-item is-drilldown-submenu-item" role="menuitem"><a href="">Personnel Unit Forms</a>							
													</li>
													<li id="menu-item-79196" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-79196 is-submenu-item is-drilldown-submenu-item" role="menuitem"><a href="">Supply and Property Forms</a>							
													</li>
												</ul>
											</li>
											<li id="menu-item-193" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-193 is-submenu-item is-drilldown-submenu-item" role="menuitem"><a href="">News letter</a>			</li>
										</ul>
									</li>

									<li id="menu-item-93386" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-93386" role="menuitem"><a href="">Transparency</a>					
									</li>
									<li id="menu-item-80953" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-80953" role="menuitem"><a href="https://online.fliphtml5.com/xnzhh/zion/#p=1">Citizens Charter</a>				
									</li>
				 					<li id="aux-offmenu" class="list-item" role="menuitem">AUXILIARY MENU
				 					</li>
								</ul>
							</div>
						</nav>

						<!-- "main-nav" top-bar menu for 'medium' and up -->
						<div id="main-nav">
							<div class="row">
								<div class="large-12 columns">
									<nav class="top-bar-left">
										<ul class="dropdown menu" data-dropdown-menu="aq18g1-dropdown-menu" role="menubar">
											<li class="name" role="menuitem"><a href="http://www.gov.ph/" tabindex="0">GOVPH</a>
											</li>
											<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-6 current_page_item menu-item-30" role="menuitem"><a href="./index.html">Home</a>
											</li>
											<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children 							has-dropdown menu-item-31 is-dropdown-submenu-parent opens-right" role="menuitem" aria-haspopup=							"true" aria-expanded="false" aria-label="About Us"><a >About Us</a>
												<ul class="dropdown vertical menu submenu is-dropdown-submenu first-sub" data-submenu="" 							aria-hidden="true" role="menu">
													<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-150 							is-submenu-item is-dropdown-submenu-item" role="menuitem">
														<a href="./organizationalstructure.html">Organizational Structure</a>
													</li>
													<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-26 							is-submenu-item is-dropdown-submenu-item" role="menuitem">
														<a href="http://bdp.bgas-phil.net/pdf/bdp/20894" target="_blank">Our History</a>
													</li>
													<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-203 							is-submenu-item is-dropdown-submenu-item" role="menuitem"><a href="missionvisioncorevalues.html">Mission, Vision, Core Values</a>
													</li>
													<li class="menu-item menu-item-type-post_type 	menu-item-object-page menu-item-80201 								is-submenu-item is-dropdown-submenu-item" role="menuitem"><a href="https://depedsorsogoncity.com/" target="_blank">Schools Division Office - Websites</a>
													</li>
													
												</ul>
											</li>

											<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children 							has-dropdown menu-item-217 is-dropdown-submenu-parent opens-right" role="menuitem" aria-haspopup							="true" aria-expanded="false" aria-label="BAC"><a>BAC</a>
												<ul class="dropdown vertical menu submenu is-dropdown-submenu first-sub" data-submenu="" 							aria-hidden="true" role="menu">
													<li class="menu-item menu-item-type-post_type 	menu-item-object-page menu-item-156 								is-submenu-item is-dropdown-submenu-item" role="menuitem"><a 	href="https://philgeps.gov.ph/?							fbcli	d=IwAR2ex5fRnBPSkhU7hHberrwTWix5L8atUPbJ3CDZfSRcIVc-URfesbHMpUk"	>PhilGEPS</a>
													</li>
													<li class="menu-item menu-item-type-post_type 	menu-item-object-page menu-item-155 								is-submenu-item is-dropdown-submenu-item" role="menuitem"><a >	Invitation to Bid</a>
													</li>
													<li class="menu-item menu-item-type-post_type 	menu-item-object-page menu-item-159 								is-submenu-item is-dropdown-submenu-item" role="menuitem"><a >	Request for Quotation</a>
													</li>
													<li class="menu-item menu-item-type-post_type 	menu-item-object-page menu-item-154 								is-submenu-item is-dropdown-submenu-item" role="menuitem"><a >	Bid Bulletin</a>
													</li>
													<li class="menu-item menu-item-type-post_type 	menu-item-object-page menu-item-has-children 								has-dropdown menu-item-153 is-dropdown-submenu-parent 	is-submenu-item 								is-dropdown-submenu-item opens-right" role="menuitem" 	aria-haspopup="true" aria-expanded="								false" aria-label="Awarded"><a>Awarded</a>
														<ul class="dropdown vertical menu submenu 	is-dropdown-submenu" 	data-submenu="" aria-hidden="								true" 	role="menu">
															<li class="menu-item menu-item-type-post_type 		menu-item-object-page menu-item-13306 									is-submenu-item is-dropdown-submenu-item" 	role="	menuitem"><a>Notice of Award</a>
															</li>
															<li class="menu-item menu-item-type-post_type 		menu-item-object-page menu-item-13305 									is-submenu-item is-dropdown-submenu-item" 	role="	menuitem"><a>Contract/Purchase Order</a>
															</li>
															<li class="menu-item menu-item-type-post_type 		menu-item-object-page menu-item-13304 									is-submenu-item is-dropdown-submenu-item" 	role="	menuitem"><a>Notice to Proceed</a>
															</li>
														</ul>
													</li>
													<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children 								has-dropdown menu-item-152 is-dropdown-submenu-parent is-submenu-item 								is-dropdown-submenu-item opens-right" role="menuitem" aria-haspopup="true" aria-expanded="								false" aria-label="Annual Procurement Plan">	<a>Annual Procurement Plan</a>
														<ul class="dropdown vertical menu submenu is-dropdown-submenu" data-submenu="" aria-hidden="								true" role="menu">
															<li class="menu-item menu-item-type-post_type 	menu-item-object-page menu-item-13312 									is-submenu-item is-dropdown-submenu-item	" role="menuitem"><a >APP CSE</a>
															</li>
															<li class="menu-item menu-item-type-post_type 	menu-item-object-page menu-item-13311 									is-submenu-item is-dropdown-submenu-item	" role="menuitem"><a >APP Non- CSE</a>
															</li>
														</ul>
													</li>
													<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-158 								is-submenu-item is-dropdown-submenu-item" role="menuitem"><a >Project Procurement 								Management Plan</a>
													</li>
													<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-157 								is-submenu-item is-dropdown-submenu-item" role="menuitem"><a >Procurement Monitoring Report								</a>
													</li>
													<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13297 								is-submenu-item is-dropdown-submenu-item" role="menuitem"><a >Agency Procurement Compliance 								and Performance Indicators</a>
													</li>
												</ul>
											</li>
											<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children 								has-dropdown menu-item-160 is-dropdown-submenu-parent opens-right" role="menuitem" aria-haspopup								="true" aria-expanded="false" aria-label="Issuances"><a >Issuances</a>
												<ul class="dropdown vertical menu submenu is-dropdown-submenu first-sub" data-submenu="" 								aria-hidden="true" role="menu">
													<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-166 								is-submenu-item is-dropdown-submenu-item" role="menuitem"><a >Memorandum</a>
													</li>
													<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-167 								is-submenu-item is-dropdown-submenu-item" role="menuitem"><a >Unnumbered Memo</a>
													</li>
													<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-163 								is-submenu-item is-dropdown-submenu-item" role="menuitem"><a >Advisory</a>
													</li>
													<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-165 								is-submenu-item is-dropdown-submenu-item" role="menuitem"><a >Endorsement</a>
													</li>
												</ul>
											</li>
											<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children 								has-dropdown menu-item-168 is-dropdown-submenu-parent opens-right" role="menuitem" aria-haspopup								="true" aria-expanded="false" aria-label="Careers"><a >Careers</a>
												<ul class="dropdown vertical menu submenu is-dropdown-submenu first-sub" data-submenu="" 								aria-hidden="true" role="menu">
													<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-169 								is-submenu-item is-dropdown-submenu-item" role="menuitem"><a >Division Office</a>
													</li>
													<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-170 								is-submenu-item is-dropdown-submenu-item" role="menuitem"><a >Elementary</a>
													</li>
													
													<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-172 								is-submenu-item is-dropdown-submenu-item" role="menuitem"><a >Newly Hired</a>
													</li>
													<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-173 								is-submenu-item is-dropdown-submenu-item" role="menuitem"><a >Result</a>
													</li>
												</ul>
											</li>
											<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has-dropdown menu-item-82817 is-dropdown-submenu-parent opens-right" role="menuitem" 				aria-haspopup="true" aria-expanded="false" aria-label="Services">
												<a>Services</a>
												<ul class="dropdown vertical menu submenu is-dropdown-submenu first-sub" data-submenu="" 						aria-hidden="true" role="menu">
													<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-181 						is-submenu-item is-dropdown-submenu-item" role="menuitem"><a >Learning Resources Portal</a>						
													</li>
													<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-77298 						is-submenu-item is-dropdown-submenu-item" role="menuitem"><a>School Governance and Operations Division</a>
													</li>
													<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-179 						is-submenu-item is-dropdown-submenu-item" role="menuitem"><a >Curriculum and Implementation Division</a>
													</li>
													<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-78247 						is-submenu-item is-dropdown-submenu-item" role="menuitem"><a>Office of the Schools Division Superintendent</a>
													</li>
													<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-79941 						is-submenu-item is-dropdown-submenu-item" role="menuitem"><a >Legal Unit</a>
													</li>
													<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-79940 						is-submenu-item is-dropdown-submenu-item" role="menuitem"><a >Accounting Unit</a>
													</li>
												</ul>
											</li>
											<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has-dropdown menu-item-187 is-dropdown-submenu-parent opens-right" role="menuitem" aria-haspopup="true" aria-expanded="false" aria-label="Resources"><a >Resources</a>
												<ul class="dropdown vertical menu submenu is-dropdown-submenu first-sub" data-submenu="" aria-hidden="true" role="menu">
													<!-- <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-dropdown menu-item-83566 is-dropdown-submenu-parent is-submenu-item is-dropdown-submenu-item opens-right" role="menuitem" aria-haspopup="true" aria-expanded="false" aria-label="Annual Accomplishment Report"><a >Annual Accomplishment Report</a>
													<ul class="dropdown vertical menu submenu is-dropdown-submenu" data-submenu="" aria-hidden="true" role="menu">
														<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-83563 is-submenu-item is-dropdown-submenu-item" role="menuitem"><a href="">2021</a></li>
														<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-83564 is-submenu-item is-dropdown-submenu-item" role="menuitem"><a href="">2020</a></li>
														<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-83565 is-submenu-item is-dropdown-submenu-item" role="menuitem"><a href="">2019</a></li>
													</ul>
													</li> -->
													<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-188 							is-submenu-item is-dropdown-submenu-item" role="menuitem"><a >Division Education Development Plan(DEDP)</a>
													</li>
													<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-77364 is-submenu-item is-dropdown-submenu-item" role="menuitem"><a >Research</a>
													</li>
													<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children 					has-dropdown menu-item-194 is-dropdown-submenu-parent is-submenu-item 							is-dropdown-submenu-item opens-right" role="menuitem" aria-haspopup="true" aria-expanded="							false" aria-label="Downloads"><a >Downloads</a>
														<ul class="dropdown vertical menu submenu is-dropdown-submenu" data-submenu="" aria-hidden="true" role="menu">
															<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-76533 is-submenu-item is-dropdown-submenu-item" role="menuitem"><a >Personnel Unit Forms</a>
															</li>
															<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-79196 is-submenu-item is-dropdown-submenu-item" role="menuitem"><a >Supply and Property Forms</a>
															</li>
														</ul>
													</li>
													<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-193 is-submenu-item is-dropdown-submenu-item" role="menuitem"><a >News letter</a>
													</li>
												</ul>
											</li>
											<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-93386" role="menuitem"><a >Transparency</a>
											</li>
											<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-80953" role="menuitem"><a >Citizens Charter</a>
											</li>
										</ul>
									</nav>

									
								</div>
							</div>
						</div>

						<!-- original content goes in this container -->
						<div class="off-canvas-content" data-off-canvas-content="">
							
							<!-- masthead -->
							<header class="container-masthead">
								<div class="row">
									<div class="large-9  columns">
										<h1 class="logo">
											<a>
										<div id="textlogo-wrapper">
				        					<div id="textlogo-image"><img alt="Tublijon Elementary School Official Logo" src="./tublijon_files/download.png" height="100px" width="100px">
				        					</div>
				        					<div id="textlogo-inner-wrapper">
				          						<div id="agency-heading">Republic of the Philippines</div>
				          						<div id="agency-name">Tublijon Elementary School</div>
				          						<div id="agency-tagline">Department of Education</div>
				        					</div>
				       					</div></a></h1>
									</div>

									
									<div class="large-3  columns">
										<div id="text-2" class="ear-content widget anchor widget_text">				<div class="textwidget">
												<div id="pst-container">
													<div>Philippine Standard Time:</div>
													<div id="pst-time"><a style="text-decoration: none; color: inherit !important;"></a></div>
													<div>louie r. franco</div>
									   			</div>
											</div>
										</div>
										<div id="custom_html-9" class="widget_text ear-content widget anchor widget_custom_html">
											<div class="textwidget custom-html-widget"></div>
										</div>						
									</div>
								</div>
							</header>
							<!-- masthead -->	

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