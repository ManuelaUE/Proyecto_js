'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">project-backend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-e3d7ec217bedf5acc9f0da716a541171d4758eeebc12a6d16b1f81492ccc7247f0f658aa3bdf15bd21583ae3becb8492b9361a067c29652d0d240b66a95319a0"' : 'data-bs-target="#xs-controllers-links-module-AppModule-e3d7ec217bedf5acc9f0da716a541171d4758eeebc12a6d16b1f81492ccc7247f0f658aa3bdf15bd21583ae3becb8492b9361a067c29652d0d240b66a95319a0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-e3d7ec217bedf5acc9f0da716a541171d4758eeebc12a6d16b1f81492ccc7247f0f658aa3bdf15bd21583ae3becb8492b9361a067c29652d0d240b66a95319a0"' :
                                            'id="xs-controllers-links-module-AppModule-e3d7ec217bedf5acc9f0da716a541171d4758eeebc12a6d16b1f81492ccc7247f0f658aa3bdf15bd21583ae3becb8492b9361a067c29652d0d240b66a95319a0"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-e3d7ec217bedf5acc9f0da716a541171d4758eeebc12a6d16b1f81492ccc7247f0f658aa3bdf15bd21583ae3becb8492b9361a067c29652d0d240b66a95319a0"' : 'data-bs-target="#xs-injectables-links-module-AppModule-e3d7ec217bedf5acc9f0da716a541171d4758eeebc12a6d16b1f81492ccc7247f0f658aa3bdf15bd21583ae3becb8492b9361a067c29652d0d240b66a95319a0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-e3d7ec217bedf5acc9f0da716a541171d4758eeebc12a6d16b1f81492ccc7247f0f658aa3bdf15bd21583ae3becb8492b9361a067c29652d0d240b66a95319a0"' :
                                        'id="xs-injectables-links-module-AppModule-e3d7ec217bedf5acc9f0da716a541171d4758eeebc12a6d16b1f81492ccc7247f0f658aa3bdf15bd21583ae3becb8492b9361a067c29652d0d240b66a95319a0"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-0064b1500c1441214b3f419ae54cda3e285ca4eecb4b5dff754bee61f432458bd3276aa1f889fc25c53f35dcccfef6b88d5f86023abe6cfba354f2c9ff09d890"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-0064b1500c1441214b3f419ae54cda3e285ca4eecb4b5dff754bee61f432458bd3276aa1f889fc25c53f35dcccfef6b88d5f86023abe6cfba354f2c9ff09d890"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-0064b1500c1441214b3f419ae54cda3e285ca4eecb4b5dff754bee61f432458bd3276aa1f889fc25c53f35dcccfef6b88d5f86023abe6cfba354f2c9ff09d890"' :
                                            'id="xs-controllers-links-module-AuthModule-0064b1500c1441214b3f419ae54cda3e285ca4eecb4b5dff754bee61f432458bd3276aa1f889fc25c53f35dcccfef6b88d5f86023abe6cfba354f2c9ff09d890"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-0064b1500c1441214b3f419ae54cda3e285ca4eecb4b5dff754bee61f432458bd3276aa1f889fc25c53f35dcccfef6b88d5f86023abe6cfba354f2c9ff09d890"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-0064b1500c1441214b3f419ae54cda3e285ca4eecb4b5dff754bee61f432458bd3276aa1f889fc25c53f35dcccfef6b88d5f86023abe6cfba354f2c9ff09d890"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-0064b1500c1441214b3f419ae54cda3e285ca4eecb4b5dff754bee61f432458bd3276aa1f889fc25c53f35dcccfef6b88d5f86023abe6cfba354f2c9ff09d890"' :
                                        'id="xs-injectables-links-module-AuthModule-0064b1500c1441214b3f419ae54cda3e285ca4eecb4b5dff754bee61f432458bd3276aa1f889fc25c53f35dcccfef6b88d5f86023abe6cfba354f2c9ff09d890"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CustomersModule.html" data-type="entity-link" >CustomersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CustomersModule-03e7a8005a8bd50bd3be43e275ba55b1e9f6d0c127d65ee8ed0014bd0d1bded6596035e935b5c7816456d184c8b5f433d338acbb6c4018d1e805815f314df810"' : 'data-bs-target="#xs-controllers-links-module-CustomersModule-03e7a8005a8bd50bd3be43e275ba55b1e9f6d0c127d65ee8ed0014bd0d1bded6596035e935b5c7816456d184c8b5f433d338acbb6c4018d1e805815f314df810"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CustomersModule-03e7a8005a8bd50bd3be43e275ba55b1e9f6d0c127d65ee8ed0014bd0d1bded6596035e935b5c7816456d184c8b5f433d338acbb6c4018d1e805815f314df810"' :
                                            'id="xs-controllers-links-module-CustomersModule-03e7a8005a8bd50bd3be43e275ba55b1e9f6d0c127d65ee8ed0014bd0d1bded6596035e935b5c7816456d184c8b5f433d338acbb6c4018d1e805815f314df810"' }>
                                            <li class="link">
                                                <a href="controllers/CustomersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CustomersModule-03e7a8005a8bd50bd3be43e275ba55b1e9f6d0c127d65ee8ed0014bd0d1bded6596035e935b5c7816456d184c8b5f433d338acbb6c4018d1e805815f314df810"' : 'data-bs-target="#xs-injectables-links-module-CustomersModule-03e7a8005a8bd50bd3be43e275ba55b1e9f6d0c127d65ee8ed0014bd0d1bded6596035e935b5c7816456d184c8b5f433d338acbb6c4018d1e805815f314df810"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CustomersModule-03e7a8005a8bd50bd3be43e275ba55b1e9f6d0c127d65ee8ed0014bd0d1bded6596035e935b5c7816456d184c8b5f433d338acbb6c4018d1e805815f314df810"' :
                                        'id="xs-injectables-links-module-CustomersModule-03e7a8005a8bd50bd3be43e275ba55b1e9f6d0c127d65ee8ed0014bd0d1bded6596035e935b5c7816456d184c8b5f433d338acbb6c4018d1e805815f314df810"' }>
                                        <li class="link">
                                            <a href="injectables/CustomersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/InventoryModule.html" data-type="entity-link" >InventoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-InventoryModule-9fea32ed6ebd3517ea82b0fd0234f56053cb51de567ff6cc1d6bf45d740929818827d80191d35f323fecf572309f77d22aca3c20ae4e20442a2d8f8ce871d054"' : 'data-bs-target="#xs-controllers-links-module-InventoryModule-9fea32ed6ebd3517ea82b0fd0234f56053cb51de567ff6cc1d6bf45d740929818827d80191d35f323fecf572309f77d22aca3c20ae4e20442a2d8f8ce871d054"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-InventoryModule-9fea32ed6ebd3517ea82b0fd0234f56053cb51de567ff6cc1d6bf45d740929818827d80191d35f323fecf572309f77d22aca3c20ae4e20442a2d8f8ce871d054"' :
                                            'id="xs-controllers-links-module-InventoryModule-9fea32ed6ebd3517ea82b0fd0234f56053cb51de567ff6cc1d6bf45d740929818827d80191d35f323fecf572309f77d22aca3c20ae4e20442a2d8f8ce871d054"' }>
                                            <li class="link">
                                                <a href="controllers/InventoryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InventoryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-InventoryModule-9fea32ed6ebd3517ea82b0fd0234f56053cb51de567ff6cc1d6bf45d740929818827d80191d35f323fecf572309f77d22aca3c20ae4e20442a2d8f8ce871d054"' : 'data-bs-target="#xs-injectables-links-module-InventoryModule-9fea32ed6ebd3517ea82b0fd0234f56053cb51de567ff6cc1d6bf45d740929818827d80191d35f323fecf572309f77d22aca3c20ae4e20442a2d8f8ce871d054"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-InventoryModule-9fea32ed6ebd3517ea82b0fd0234f56053cb51de567ff6cc1d6bf45d740929818827d80191d35f323fecf572309f77d22aca3c20ae4e20442a2d8f8ce871d054"' :
                                        'id="xs-injectables-links-module-InventoryModule-9fea32ed6ebd3517ea82b0fd0234f56053cb51de567ff6cc1d6bf45d740929818827d80191d35f323fecf572309f77d22aca3c20ae4e20442a2d8f8ce871d054"' }>
                                        <li class="link">
                                            <a href="injectables/InventoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InventoryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersModule.html" data-type="entity-link" >OrdersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-OrdersModule-3a7d1fd8cf18b0efa5a1ead9e62854fbf0b8a7f8e402cb53d4d817c16340d64b7bc9d141a2716209969ba165c42fa09ff390038c37890eeffebd5add9a004ef5"' : 'data-bs-target="#xs-controllers-links-module-OrdersModule-3a7d1fd8cf18b0efa5a1ead9e62854fbf0b8a7f8e402cb53d4d817c16340d64b7bc9d141a2716209969ba165c42fa09ff390038c37890eeffebd5add9a004ef5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrdersModule-3a7d1fd8cf18b0efa5a1ead9e62854fbf0b8a7f8e402cb53d4d817c16340d64b7bc9d141a2716209969ba165c42fa09ff390038c37890eeffebd5add9a004ef5"' :
                                            'id="xs-controllers-links-module-OrdersModule-3a7d1fd8cf18b0efa5a1ead9e62854fbf0b8a7f8e402cb53d4d817c16340d64b7bc9d141a2716209969ba165c42fa09ff390038c37890eeffebd5add9a004ef5"' }>
                                            <li class="link">
                                                <a href="controllers/OrdersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-OrdersModule-3a7d1fd8cf18b0efa5a1ead9e62854fbf0b8a7f8e402cb53d4d817c16340d64b7bc9d141a2716209969ba165c42fa09ff390038c37890eeffebd5add9a004ef5"' : 'data-bs-target="#xs-injectables-links-module-OrdersModule-3a7d1fd8cf18b0efa5a1ead9e62854fbf0b8a7f8e402cb53d4d817c16340d64b7bc9d141a2716209969ba165c42fa09ff390038c37890eeffebd5add9a004ef5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrdersModule-3a7d1fd8cf18b0efa5a1ead9e62854fbf0b8a7f8e402cb53d4d817c16340d64b7bc9d141a2716209969ba165c42fa09ff390038c37890eeffebd5add9a004ef5"' :
                                        'id="xs-injectables-links-module-OrdersModule-3a7d1fd8cf18b0efa5a1ead9e62854fbf0b8a7f8e402cb53d4d817c16340d64b7bc9d141a2716209969ba165c42fa09ff390038c37890eeffebd5add9a004ef5"' }>
                                        <li class="link">
                                            <a href="injectables/OrdersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaymentsModule.html" data-type="entity-link" >PaymentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PaymentsModule-1d8b3f9a74a81425db8051b10352d25bff9233333b568ec038c26a844957c9c6bc1bfb1ce04ae77345188baf63e01b36fe8e8aa04d108cc57f2cb902a6a9b60f"' : 'data-bs-target="#xs-controllers-links-module-PaymentsModule-1d8b3f9a74a81425db8051b10352d25bff9233333b568ec038c26a844957c9c6bc1bfb1ce04ae77345188baf63e01b36fe8e8aa04d108cc57f2cb902a6a9b60f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PaymentsModule-1d8b3f9a74a81425db8051b10352d25bff9233333b568ec038c26a844957c9c6bc1bfb1ce04ae77345188baf63e01b36fe8e8aa04d108cc57f2cb902a6a9b60f"' :
                                            'id="xs-controllers-links-module-PaymentsModule-1d8b3f9a74a81425db8051b10352d25bff9233333b568ec038c26a844957c9c6bc1bfb1ce04ae77345188baf63e01b36fe8e8aa04d108cc57f2cb902a6a9b60f"' }>
                                            <li class="link">
                                                <a href="controllers/PaymentsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PaymentsModule-1d8b3f9a74a81425db8051b10352d25bff9233333b568ec038c26a844957c9c6bc1bfb1ce04ae77345188baf63e01b36fe8e8aa04d108cc57f2cb902a6a9b60f"' : 'data-bs-target="#xs-injectables-links-module-PaymentsModule-1d8b3f9a74a81425db8051b10352d25bff9233333b568ec038c26a844957c9c6bc1bfb1ce04ae77345188baf63e01b36fe8e8aa04d108cc57f2cb902a6a9b60f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PaymentsModule-1d8b3f9a74a81425db8051b10352d25bff9233333b568ec038c26a844957c9c6bc1bfb1ce04ae77345188baf63e01b36fe8e8aa04d108cc57f2cb902a6a9b60f"' :
                                        'id="xs-injectables-links-module-PaymentsModule-1d8b3f9a74a81425db8051b10352d25bff9233333b568ec038c26a844957c9c6bc1bfb1ce04ae77345188baf63e01b36fe8e8aa04d108cc57f2cb902a6a9b60f"' }>
                                        <li class="link">
                                            <a href="injectables/PaymentsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsModule.html" data-type="entity-link" >ProductsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProductsModule-f14927f72516b6a0cad32bc5d041059596e508e5653b8a90f193372a4e02cca1468fee5c0860e1a99e10c3bb74b76b3a791d86082f7f3e9df519fe338ad93397"' : 'data-bs-target="#xs-controllers-links-module-ProductsModule-f14927f72516b6a0cad32bc5d041059596e508e5653b8a90f193372a4e02cca1468fee5c0860e1a99e10c3bb74b76b3a791d86082f7f3e9df519fe338ad93397"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductsModule-f14927f72516b6a0cad32bc5d041059596e508e5653b8a90f193372a4e02cca1468fee5c0860e1a99e10c3bb74b76b3a791d86082f7f3e9df519fe338ad93397"' :
                                            'id="xs-controllers-links-module-ProductsModule-f14927f72516b6a0cad32bc5d041059596e508e5653b8a90f193372a4e02cca1468fee5c0860e1a99e10c3bb74b76b3a791d86082f7f3e9df519fe338ad93397"' }>
                                            <li class="link">
                                                <a href="controllers/ProductsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProductsModule-f14927f72516b6a0cad32bc5d041059596e508e5653b8a90f193372a4e02cca1468fee5c0860e1a99e10c3bb74b76b3a791d86082f7f3e9df519fe338ad93397"' : 'data-bs-target="#xs-injectables-links-module-ProductsModule-f14927f72516b6a0cad32bc5d041059596e508e5653b8a90f193372a4e02cca1468fee5c0860e1a99e10c3bb74b76b3a791d86082f7f3e9df519fe338ad93397"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductsModule-f14927f72516b6a0cad32bc5d041059596e508e5653b8a90f193372a4e02cca1468fee5c0860e1a99e10c3bb74b76b3a791d86082f7f3e9df519fe338ad93397"' :
                                        'id="xs-injectables-links-module-ProductsModule-f14927f72516b6a0cad32bc5d041059596e508e5653b8a90f193372a4e02cca1468fee5c0860e1a99e10c3bb74b76b3a791d86082f7f3e9df519fe338ad93397"' }>
                                        <li class="link">
                                            <a href="injectables/ProductsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-1ea5d7a4859c2ced733060f75857e2d1fb26f1b4b29400f45074a3311f133a7a2bab6aff9af5d64063fe823211deb6a814dc49b3d8cae3ee024dfced4cf03263"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-1ea5d7a4859c2ced733060f75857e2d1fb26f1b4b29400f45074a3311f133a7a2bab6aff9af5d64063fe823211deb6a814dc49b3d8cae3ee024dfced4cf03263"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-1ea5d7a4859c2ced733060f75857e2d1fb26f1b4b29400f45074a3311f133a7a2bab6aff9af5d64063fe823211deb6a814dc49b3d8cae3ee024dfced4cf03263"' :
                                            'id="xs-controllers-links-module-UsersModule-1ea5d7a4859c2ced733060f75857e2d1fb26f1b4b29400f45074a3311f133a7a2bab6aff9af5d64063fe823211deb6a814dc49b3d8cae3ee024dfced4cf03263"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-1ea5d7a4859c2ced733060f75857e2d1fb26f1b4b29400f45074a3311f133a7a2bab6aff9af5d64063fe823211deb6a814dc49b3d8cae3ee024dfced4cf03263"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-1ea5d7a4859c2ced733060f75857e2d1fb26f1b4b29400f45074a3311f133a7a2bab6aff9af5d64063fe823211deb6a814dc49b3d8cae3ee024dfced4cf03263"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-1ea5d7a4859c2ced733060f75857e2d1fb26f1b4b29400f45074a3311f133a7a2bab6aff9af5d64063fe823211deb6a814dc49b3d8cae3ee024dfced4cf03263"' :
                                        'id="xs-injectables-links-module-UsersModule-1ea5d7a4859c2ced733060f75857e2d1fb26f1b4b29400f45074a3311f133a7a2bab6aff9af5d64063fe823211deb6a814dc49b3d8cae3ee024dfced4cf03263"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CustomersController.html" data-type="entity-link" >CustomersController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/InventoryController.html" data-type="entity-link" >InventoryController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/OrdersController.html" data-type="entity-link" >OrdersController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PaymentsController.html" data-type="entity-link" >PaymentsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProductsController.html" data-type="entity-link" >ProductsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Auth.html" data-type="entity-link" >Auth</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAuthDto.html" data-type="entity-link" >CreateAuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCustomerDto.html" data-type="entity-link" >CreateCustomerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateInventoryDto.html" data-type="entity-link" >CreateInventoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOrderDto.html" data-type="entity-link" >CreateOrderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePaymentDto.html" data-type="entity-link" >CreatePaymentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductDto.html" data-type="entity-link" >CreateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Customer.html" data-type="entity-link" >Customer</a>
                            </li>
                            <li class="link">
                                <a href="classes/Inventory.html" data-type="entity-link" >Inventory</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="classes/Payment.html" data-type="entity-link" >Payment</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAuthDto.html" data-type="entity-link" >UpdateAuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCustomerDto.html" data-type="entity-link" >UpdateCustomerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateInventoryDto.html" data-type="entity-link" >UpdateInventoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateOrderDto.html" data-type="entity-link" >UpdateOrderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePaymentDto.html" data-type="entity-link" >UpdatePaymentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProductDto.html" data-type="entity-link" >UpdateProductDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomersService.html" data-type="entity-link" >CustomersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InventoryService.html" data-type="entity-link" >InventoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrdersService.html" data-type="entity-link" >OrdersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaymentsService.html" data-type="entity-link" >PaymentsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductsService.html" data-type="entity-link" >ProductsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});