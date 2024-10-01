<?php

namespace WPDataAccess\WPDA_Navi {

	class WPDA_Navi {

		public function show() {
			?>
			<div class="wpda-navi-container">
				<?php
				$this->header();
				$this->tool_guide();
				$this->hot_topics();
				// $this->tool_selector();
				?>
			</div>
			<?php
		}

		private function header() {
			?>
			<div class="wpda-navi-container-header">
				<div class="wpda-navi-container-header-title">
					<div>
						<h1>
							Welcome to WP Data Access
						</h1>

						<h2>
							A powerful data-driven WordPress App Builder with an intuitive Table Builder and highly
							customizable Form Builder
						</h2>
					</div>

					<div></div>
				</div>

				<div class="wpda-navi-container-header-image">
					<img src="<?php echo plugins_url('../../assets/images/coding-isometric-01-blauw.png', __FILE__); ?>"/>
				</div>
			</div>
			<?php
		}

		private function tool_guide() {
			?>
			<h2>
				Tool Guide
			</h2>

			<div class="wpda-navi-container-content">
				<div class="wpda-navi-container-content-items">
					<div class="wpda-navi-container-content-item wpda-featured">
						<div class="wpda-navi-container-content-item-title">
							<span class="fa-solid wpda-icon">
								<svg xmlns="http://www.w3.org/2000/svg"
									 height="18px"
									 width="18px"
									 viewBox="4 4 16 16"
									 fill="inherit"
									 class="wpda-icon"
								>
									<path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path>
								</svg>
							</span>
							<h3>App Builder <span class="wpda-new">NEW</span></h3>
							<div class="wpda-navi-container-content-item-title-help">
								<a
										href="https://wpdataaccess.com/docs/app-builder/whats-the-app-builder/"
										target="_blank"
										class="wpda_tooltip"
										title="View online documentation"
								>
									<i class="fa-solid fa-question-circle wpda-icon-help"></i>
								</a>
							</div>
						</div>

						<div class="wpda-navi-container-content-item-slogan">
							Build Apps with the new Table Builder and Form Builder
						</div>

						<div class="wpda-navi-container-content-item-content">
							<ul class="wpda-navi-container-content-item-content-grid switch-grid">
								<li>
									<a href="?page=wpda_apps">Start App Builder</a>
								</li>
								<li>
									<a href="?page=wpda_apps&page_iaction=create_new_app">Create a new app</a>
								</li>
							</ul>
						</div>

						<div class="wpda-navi-container-content-item-facts">
							<ul>
								<li>Intuitive Table Builder for creating data tables with ease</li>
								<li>Highly customizable Form Builder for designing data entry forms</li>
								<li>Integrated Theme Builder to personalize app styling</li>
								<li>Real-time configuration updates for instant adjustments</li>
							</ul>
						</div>
					</div>

					<div class="wpda-navi-container-content-item">
						<div class="wpda-navi-container-content-item-title">
							<span class="fa-solid fa-database wpda-icon"></span>
							<h3>Explorer</h3>
							<div class="wpda-navi-container-content-item-title-help">
								<a
										href="https://wpdataaccess.com/docs/data-explorer/data-explorer-getting-started/"
										target="_blank"
										class="wpda_tooltip"
										title="View online documentation"
								>
									<i class="fa-solid fa-question-circle wpda-icon-help"></i>
								</a>
							</div>
						</div>

						<div class="wpda-navi-container-content-item-slogan">
							Perform data and database related tasks
						</div>

						<div class="wpda-navi-container-content-item-content">
							<ul class="wpda-navi-container-content-item-content-grid">
								<li>
									<a href="?page=wpda">Start Data Explorer</a>
								</li>
								<li>
									<a href="?page=wpda&page_iaction=wpda_import_sql">Import SQL files</a>
								</li>
								<li>
									<a href="?page=wpda&page_iaction=manage_databases">Manage databases</a>
								</li>
								<li>
									<a href="?page=wpda&page_action=wpda_import_csv">Import CSV files</a>
								</li>
							</ul>
						</div>

						<div class="wpda-navi-container-content-item-facts">
							<ul>
								<li>Explore local and remote databases</li>
								<li>Manage table data</li>
							</ul>
						</div>
					</div>

					<div class="wpda-navi-container-content-item">
						<div class="wpda-navi-container-content-item-title">
							<span class="fa-solid fa-code wpda-icon"></span>
							<h3>SQL</h3>
							<div class="wpda-navi-container-content-item-title-help">
								<a
										href="https://wpdataaccess.com/docs/query-builder/query-builder-getting-started/"
										target="_blank"
										class="wpda_tooltip"
										title="View online documentation"
								>
									<i class="fa-solid fa-question-circle wpda-icon-help"></i>
								</a>
							</div>
						</div>

						<div class="wpda-navi-container-content-item-slogan">
							Execute any SQL command from your WordPress dashboard
						</div>

						<div class="wpda-navi-container-content-item-content">
							<ul>
								<li>
									<a href="?page=wpda_query_builder">Start Query Builder</a>
								</li>
							</ul>
						</div>

						<div class="wpda-navi-container-content-item-facts">
							<ul>
								<li>Write, store, execute and reuse SQL code</li>
								<li>Execute DCL, DDL and DML commands</li>
								<li>User must have the necessary credentials</li>
							</ul>
						</div>
					</div>

					<div class="wpda-navi-container-content-item">
						<div class="wpda-navi-container-content-item-title">
							<span class="fa-solid fa-table wpda-icon"></span>
							<h3>Tables</h3>
							<div class="wpda-navi-container-content-item-title-help">
								<a
										href="https://wpdataaccess.com/docs/data-tables/data-tables-getting-started/"
										target="_blank"
										class="wpda_tooltip"
										title="View online documentation"
								>
									<i class="fa-solid fa-question-circle wpda-icon-help"></i>
								</a>
							</div>
						</div>

						<div class="wpda-navi-container-content-item-slogan">
							Create responsive data tables in minutes
						</div>

						<div class="wpda-navi-container-content-item-content">
							<ul>
								<li>
									<a href="?page=wpda_publisher">Start old Table Builder</a>
								</li>
							</ul>
						</div>

						<div class="wpda-navi-container-content-item-facts">
							<ul>
								<li><strong>Soon replaced by the App Builder</strong></li>
								<li>Available until at least summer 2025</li>
								<li>Use to maintain old tables</li>
								<li>Use new App Builder for new projects</li>
							</ul>
						</div>
					</div>

					<div class="wpda-navi-container-content-item">
						<div class="wpda-navi-container-content-item-title">
							<span class="fa-solid fa-wand-magic-sparkles wpda-icon"></span>
							<h3>Forms</h3>
							<div class="wpda-navi-container-content-item-title-help">
								<a
										href="https://wpdataaccess.com/docs/data-apps/data-projects/"
										target="_blank"
										class="wpda_tooltip"
										title="View online documentation"
								>
									<i class="fa-solid fa-question-circle wpda-icon-help"></i>
								</a>
							</div>
						</div>

						<div class="wpda-navi-container-content-item-slogan">
							Create responsive master-detail forms
						</div>

						<div class="wpda-navi-container-content-item-content">
							<ul>
								<li>
									<a href="?page=wpda_wpdp">Start old Form Builder</a>
								</li>
							</ul>
						</div>

						<div class="wpda-navi-container-content-item-facts">
							<ul>
								<li><strong>Soon replaced by the App Builder</strong></li>
								<li>Available until at least summer 2025</li>
								<li>Use to maintain old forms</li>
								<li>Use new App Builder for new projects</li>
							</ul>
						</div>
					</div>

					<div class="wpda-navi-container-content-item"
						 style="grid-template-rows: auto 1fr"
					>
						<div class="wpda-navi-container-content-item-title">
							<span class="fa-solid fa-comments wpda-icon"></span>
							<h3>What's new?</h3>
							<div class="wpda-navi-container-content-item-title-help">
								<a
										href="https://wordpress.org/plugins/wp-data-access/#developers"
										target="_blank"
										class="wpda_tooltip"
										title="View full changelog"
								>
									<i class="fa-solid fa-question-circle wpda-icon-help"></i>
								</a>
							</div>
						</div>

						<div class="wpda-navi-container-content-item-facts whats-new"
							 style="display: block !important; overflow: auto; padding-right: 20px; max-height: 160px"
						>
							<ul>
								<li>
									Manage relationships from Table Builder and Form Builder
								</li>
								<li>
									Toggle density in Data Explorer and App Builder
								</li>
								<li>
									Customize the plugin’s behavior using hooks<br/>> (App Builder > Table Builder > Hooks) <a href="https://wpdataaccess.com/docs/table-hooks/getting-started-with-hooks/" target="_blank">read more...</a>
								</li>
								<li>
									Inline row viewing with PDF export icon<br/>> App Builder > Table Builder > Table > Row actions
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<?php
		}

		private function hot_topics() {
			?>
			<div class="wpda-navi-container-content">
				<div class="wpda-navi-container-content-item wpda-hot-topics">
					<h2>
						Frequently Asked Questions
					</h2>

					<div class="wpda-navi-container-content-item-facts">
						<button
							onClick="window.open('https://wpdataaccess.com/docs/app-builder/whats-the-app-builder/', '_blank')"
						>
							<span class="wpda-hot-title">
								App Builder
							</span>
							<span class="wpda-hot-topic">
								What is the App Builder?
							</span>
						</button>

						<button
							onClick="window.open('https://wpdataaccess.com/docs/app-builder/app-builder-relationships/', '_blank')"
						>
							<span class="wpda-hot-title">
								Master-Detail Relationships
							</span>
							<span class="wpda-hot-topic">
								How do I add a master-detail relationship to my app?
							</span>
						</button>

						<button
							onClick="window.open('https://wpdataaccess.com/docs/app-builder/computed-fields/', '_blank')"
						>
							<span class="wpda-hot-title">
								Computed Fields
							</span>
							<span class="wpda-hot-topic">
								How do I use a computed field in my app?
							</span>
						</button>

						<button
							onClick="window.open('https://wpdataaccess.com/docs/app-builder/app-lookups/', '_blank')"
						>
							<span class="wpda-hot-title">
								Lookups
							</span>
							<span class="wpda-hot-topic">
								How do I add a lookup to my app?
							</span>
						</button>

						<button
							onClick="window.open('https://wpdataaccess.com/docs/table-builder-filters/column-filters/', '_blank')"
						>
							<span class="wpda-hot-title">
								Column Filters
							</span>
							<span class="wpda-hot-topic">
								How do I enable column filters in my app?
							</span>
						</button>

						<button
							onClick="window.open('https://wpdataaccess.com/documentation/', '_blank')"
						>
							<span class="wpda-hot-title">
								Documentation
							</span>
							<span class="wpda-hot-topic">
								Where can I find the online documentation?
							</span>
						</button>

						<button
							onClick="window.open('https://wordpress.org/support/plugin/wp-data-access/', '_blank')"
						>
							<span class="wpda-hot-title">
								Online Support
							</span>
							<span class="wpda-hot-topic">
								Where can I get online support?
							</span>
						</button>

						<button
							onClick="window.open('https://wpdataaccess.com/docs/remote-databases/mysql-mariadb/', '_blank')"
						>
							<span class="wpda-hot-title">
								Remote connections
							</span>
							<span class="wpda-hot-topic">
								How can I establish a remote connection?
							</span>
						</button>

						<button
							onClick="window.open('https://wpdataaccess.com/docs/remote-connection-wizard/start-here/', '_blank')"
						>
							<span class="wpda-hot-title">
								Premium Data Services
							</span>
							<span class="wpda-hot-topic">
								How can I use Premium Data Services for remote connections?
							</span>
						</button>
					</div>
				</div>
			</div>
			<?php
		}

		private function tool_selector() {
			?>
			<h2>
				Tool Selector
			</h2>

			<div class="wpda-navi-container-content">
				???
			</div>
			<?php
		}

	}

}