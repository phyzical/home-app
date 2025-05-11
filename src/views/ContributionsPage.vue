<template>
    <div class="page contributions uk-container">
        <div class="sign uk-text-center">
            <span class="sign-1">Code</span>
            <span class="sign-2"> Contributions</span>
        </div>
        <div class="content">
            <div
                class="uk-grid uk-grid-row"
                uk-grid
            >
                <div class="uk-width-1-1 uk-button-group group-1">
                    <button
                        class="bouncy uk-button uk-width-1-2"
                        :class="displays.employed ? 'button-active' : null"
                        @click="employedClick"
                    >
                        Employed Contributions
                    </button>
                    <button
                        class="bouncy uk-button uk-width-1-2"
                        :class="displays.personal ? 'button-active' : null"
                        @click="personalClick"
                    >
                        Personal Contributions
                    </button>
                </div>
                <div class="uk-width-1-1 uk-flex">
                    <div
                        class="arrow bounce-container uk-width-1-2"
                        :class="displays.employed ? null : 'uk-invisible'"
                    >
                        <img
                            :data-src="arrow"
                            width=""
                            height=""
                            class="arrow-1"
                            uk-svg
                        >
                    </div>
                    <div
                        class="arrow bounce-container uk-width-1-2"
                        :class="displays.personal ? null : 'uk-invisible'"
                    >
                        <img
                            :data-src="arrow"
                            width=""
                            height=""
                            class="arrow-2"
                            uk-svg
                        >
                    </div>
                </div>
                <div
                    class="button-one uk-width-1-1 uk-button-group group-2"
                    :class="displays.employed ? 'uk-animation-slide-top' : 'uk-invisible'"
                >
                    <button
                        class="bouncy uk-button uk-width-1-2"
                        :class="displays.agworld ? 'button-active' : null"
                        @click="agworldClick"
                    >
                        Agworld
                    </button>
                    <button
                        class="bouncy uk-button uk-width-1-2"
                        :class="displays.strangeAnimals ? 'button-active' : null"
                        @click="strangeAnimalsClick"
                    >
                        Strange Animals
                    </button>
                    <button
                        class="bouncy uk-button uk-width-1-2"
                        :class="displays.simplisite ? 'button-active' : null"
                        @click="simplisiteClick"
                    >
                        Simplisite
                    </button>
                </div>
                <div class="uk-width-1-1 uk-flex">
                    <div
                        class="arrow bounce-container uk-width-1-2"
                        :class="displays.simplisite ? null : 'uk-invisible'"
                    >
                        <img
                            :data-src="arrow"
                            width=""
                            height=""
                            class="arrow-3"
                            uk-svg
                        >
                    </div>
                    <div
                        class="arrow bounce-container uk-width-1-2"
                        :class="displays.strangeAnimals ? null : 'uk-invisible'"
                    >
                        <img
                            :data-src="arrow"
                            width=""
                            height=""
                            class="arrow-4"
                            uk-svg
                        >
                    </div>
                </div>
            </div>
            <div
                class="uk-grid"
                uk-grid
            >
                <projects-component
                    class="agworld"
                    :projects="projects.agworld"
                    :class="[
                        displays.agworld ? 'uk-animation-slide-top' : 'uk-hidden',
                        'employed',
                    ]"
                />
                <projects-component
                    class="simplisite"
                    :projects="projects.simplisite"
                    :class="[
                        displays.simplisite ? 'uk-animation-slide-top' : 'uk-hidden',
                        'employed',
                    ]"
                />
                <projects-component
                    class="strange-animals"
                    :projects="projects.strangeAnimals"
                    :class="[
                        displays.strangeAnimals ? 'uk-animation-slide-top' : 'uk-hidden',
                        'employed',
                    ]"
                />
                <projects-component
                    class="personal"
                    :projects="projects.personal"
                    :class="displays.personal ? 'uk-animation-slide-top' : 'uk-hidden'"
                />
            </div>
        </div>
    </div>
</template>

<script>
import arrow from '../images/arrow-1.svg'
import simplisite from '../images/projects/simplisite.jpg'
import strangeanimals from '../images/projects/strangeanimals.png'
import agworld from '../images/projects/agworld.png'
import adventureworld from '../images/projects/adventureworld.png'
import bgc from '../images/projects/bgc.png'
import blackswan from '../images/projects/blackswan.png'
import bluebody from '../images/projects/bluebody.png'
import cbc from '../images/projects/cbc.png'
import cccsf from '../images/projects/cccsf.png'
import cultstatus from '../images/projects/cultstatus.gif'
import ect from '../images/projects/ect.svg'
import github from '../images/projects/github.png'
import hawaiian from '../images/projects/hawaiian.png'
import hopeforchildren from '../images/projects/hopeforchildren.png'
import kalisbros from '../images/projects/kalisbros.png'
import nfib from '../images/projects/nfib.jpg'
import nlv from '../images/projects/nlv.svg'
import pch from '../images/projects/pch.png'
import simonds from '../images/projects/simonds.png'
import startpoint from '../images/projects/startpoint.svg'
import bookings from '../images/projects/bookings.png'
import precinct from '../images/projects/precinct.svg'
import smartbet from '../images/projects/smartbet.svg'
import suelewis from '../images/projects/suelewis.png'
import wangle from '../images/projects/wangle.png'
import xpress from '../images/projects/xpress.svg'
import yourcall from '../images/projects/yourcall.png'
import hgwa from '../images/projects/hgwa.svg'
import waso from '../images/projects/waso.svg'

export default {
    components: {
        ProjectsComponent: () => import('../components/generic/ProjectsComponent')
    },
    data () {
        return {
            arrow,
            displays: {
                employed: false,
                personal: false,
                simplisite: false,
                strangeAnimals: false,
                agworld: false
            },
            projects: {
                agworld: [
                    {
                        title: 'Agworld',
                        image: agworld,
                        body:
                            '<p>Agworld has a series of codebases behind a paywall</p>' +
                            '<p>They are all about farm management systems, ruby, ruby on rails and react based</p>' +
                            '<p>My duties involved mentoring, implementing features, fixing bugs and refactoring legacy code</p>',
                        link: 'https://agworld.com.au'
                    }
                ],
                simplisite: [
                    {
                        title: 'Simplisite',
                        image: simplisite,
                        body:
                            '<p>This was the main website for Simplisite</p>' +
                            '<p>This is a static html website built via scss, webpack and vanilla js</p>' +
                            '<p>My duties involved maintaining deployments, build processes, fine tuning project requirements and leading the project</p>',
                        link: 'https://web.archive.org/web/20180530212545/http://www.simplisite.com.au/'
                    },
                    {
                        title: 'Kailis Bros',
                        image: kalisbros,
                        body:
                            '<p>This was Kailis Bros website by Simplisite</p>' +
                            '<p>Kailis Bros has restaurants that also sell seafood produce</p>' +
                            '<p>This is a static html website built via css and vanilla js</p>' +
                            '<p>My duties involved overseeing general maintenance and feature updates</p>',
                        link: 'https://web.archive.org/web/20180518091732/http://kailisbroswebsite.com/'
                    },
                    {
                        title: 'Cult Status',
                        image: cultstatus,
                        body:
                            '<p>This is a Shopify website for Cultstatus by Simplisite</p>' +
                            '<p>Cultstatus is a retail online shop selling premium goods</p>' +
                            '<p>This is a static html website built via css and vanilla js hosted on shopify</p>' +
                            '<p>My duties involved overseeing general maintenance and feature updates</p>',
                        link: 'https://cultstatus.com.au/'
                    },
                    {
                        title: 'NFIB',
                        image: nfib,
                        body:
                            '<p>This is a insurance portal built for National Franchisee Insurance Brokers by Simplisite</p>' +
                            '<p>NFIB is a website that sells and maintains insurance policies</p>' +
                            '<p>This is a CMS running Silverstripe which uses php with webpack, scss and js for the frontend</p>' +
                            '<p>My duties involved handling support requests, delegating tasks, mentoring, overseeing general maintenance and feature updates</p>',
                        link: 'https://mynfib.com.au/'
                    },
                    {
                        title: 'Wangle',
                        image: wangle,
                        body:
                            '<p>This was a website built for wangle by Simplisite</p>' +
                            '<p>Wangle was an vpn built with family in mind</p>' +
                            '<p>This was a CMS running Silverstripe which uses php with webpack, scss and js for the frontend</p>' +
                            '<p>My duties involved building the underlying models, maintaining deployments and handling feature updates</p>',
                        link: 'https://web.archive.org/web/20180825094804/https://wan.gl/'
                    },
                    {
                        title: 'National Lifestyle Village',
                        image: nlv,
                        body:
                            '<p>This was a website built for National Lifestyle Village by Simplisite</p>' +
                            '<p>NlV has a series of retirement villages around Western Australia</p>' +
                            '<p>This was a CMS running Silverstripe which uses php with webpack, scss and js for the frontend</p>' +
                            '<p>My duties involved building the underlying models, completing maintenance requests,  maintaining deployments and handling feature updates</p>',
                        link: 'https://web.archive.org/web/20170218232633/http://www.nlv.com.au/'
                    },
                    {
                        title: 'Hawaiian',
                        image: hawaiian,
                        body:
                            '<p>This was a website built for Hawaiian to maintain the corporate side of the company by Simplisite</p>' +
                            '<p>Hawaiian owns a series of shopping centers around Perth</p>' +
                            '<p>This was a CMS running Silverstripe which uses php with webpack, scss and js for the frontend</p>' +
                            '<p>My duties involved building the underlying models, maintaining deployments and handling feature updates</p>',
                        link: 'https://web.archive.org/web/20180508092324/https://hawaiian.com.au/'
                    },
                    {
                        title: 'Blackswan',
                        image: blackswan,
                        body:
                            '<p>This was a website built for Blackswan State Theatre Company by Simplisite</p>' +
                            '<p>Blackswan is a theatre company that hosts 6 - 7 unique shows a year</p>' +
                            '<p>This was a CMS running Silverstripe which uses php with webpack, scss and js for the frontend</p>' +
                            '<p>My duties involved building the underlying models, delegating tasks, mentoring developers, maintaining deployments and handling feature updates</p>',
                        link: 'https://web.archive.org/web/20180314070309/https://bsstc.com.au/'
                    },
                    {
                        title: 'Cable Beach Club',
                        image: cbc,
                        body:
                            '<p>This was a website built for Cable Beach Club by Simplisite</p>' +
                            '<p>Cable Beach Club is a holiday resort in Broome</p>' +
                            '<p>This was a CMS running Silverstripe which uses php with webpack, scss and js for the frontend</p>' +
                            '<p>My duties involved building the underlying models, maintaining deployments and handling feature updates</p>',
                        link: 'https://web.archive.org/web/20150801041026/http://cablebeachclub.com/'
                    }
                ],
                personal: [
                    {
                        title: 'Github',
                        image: github,
                        body: '<p>This is my github account used for personal projects and open source contributions</p>',
                        link: 'https://github.com/phyzical/'
                    },
                    {
                        title: 'Bitburner',
                        image: github,
                        body: '<p>This is an open-source game found on steam, i regularly add support by fixing bugs, implementing features and providing support to new players when needed</p>',
                        link: 'https://github.com/danielyxie/bitburner'
                    },
                    {
                        title: 'React Native Swipe List view',
                        image: github,
                        body: '<p>I contributed the ability to toggle repeat preview animations, before it would only run once</p>',
                        link: 'https://github.com/jemise111/react-native-swipe-list-view'
                    },
                    {
                        title: 'Webpack Build notifier',
                        image: github,
                        body: '<p>I contributed the ability to have arbitrary code run on the completion of a successful, failed and warning build</p>',
                        link: 'https://github.com/RoccoC/webpack-build-notifier'
                    },
                    {
                        title: 'NPM Add Dependencies',
                        image: github,
                        body: '<p>I contributed the ability to use in a non cli context, custom package.json location and added tests</p>',
                        link: 'https://github.com/arfeo/npm-add-dependencies'
                    },
                    {
                        title: 'Advent of Code',
                        image: github,
                        body: '<p>This is my repository for when i feel like playing around with a new language and solving some puzzles</p>',
                        link: 'https://github.com/phyzical/advent-of-code'
                    },
                    {
                        title: 'Project Euler',
                        image: github,
                        body: '<p>This is another repository for when i feel like playing around with a new language and solving some puzzles</p>',
                        link: 'https://github.com/phyzical/project-euler'
                    },
                    {
                        title: 'React Native CameraRoll',
                        image: github,
                        body: '<p>I contributed the some basic functionality bug fixes</p>',
                        link: 'https://github.com/phyzical/react-native-cameraroll'
                    },
                    {
                        title: 'Vue DateTime',
                        image: github,
                        body: '<p>I contributed the ability to specify a date range for disabled dates aswell as tests</p>',
                        link: 'https://github.com/phyzical/vue-datetime'
                    }
                ],
                strangeAnimals: [
                    {
                        title: 'Simonds Main Website',
                        image: simonds,
                        body:
                            '<p>This is a website maintained by StrangeAnimals</p>' +
                            '<p>Simonds is a housing developer situated in the Eastern States</p>' +
                            '<p>This is a CMS running CraftCMS which uses php with gulp, css and js for the frontend</p>' +
                            '<p>My duties involved maintaining deployments, delegating maintenance requests and overseeing feature updates</p>',
                        link: 'https://www.simonds.com.au/'
                    },
                    {
                        title: 'Xpress Home Builder',
                        image: xpress,
                        body:
                            '<p>This is a website built for Simonds by StrangeAnimals</p>' +
                            '<p>Simonds is a housing developer situated in the Eastern States and this product was built as a way to ' +
                            'allow customers to visualise building their dream home from the comfort of their home</p>' +
                            '<p>This is a PWA SPA running VueJS with webpack and scss with a Laravel php backend </p>' +
                            '<p>My duties involved quoting the project from client requirements, building the initial app structure,' +
                            ' integrating with external datasources, building external RESTFUL APIs to manage product data, integrating a smooth CI & CD process ' +
                            ' and overseeing feature updates</p>',
                        link: 'https://simondsxpress.com.au/'
                    },
                    {
                        title: 'Startpoint Home Builder',
                        image: startpoint,
                        body:
                            '<p>This is a website built for Simonds by StrangeAnimals</p>' +
                            '<p>Simonds is a housing developer situated in the Eastern States and this product was an' +
                            ' off shoot of the Xpress home builder</p>' +
                            '<p>This is a PWA SPA running VueJS with webpack and scss with a Laravel php backend </p>' +
                            '<p>My duties involved quoting the project from client requirements, building the initial app structure,' +
                            ' integrating with external datasources, building external RESTFUL APIs to manage product data, integrating a smooth CI & CD process ' +
                            ' and overseeing feature updates</p>',
                        link: 'ttps://startpointapp.uat.strangeanimals.com.au'
                    },
                    {
                        title: 'Simonds Enquiries App',
                        image: simonds,
                        body:
                            '<p>This is a website built for Simonds by StrangeAnimals</p>' +
                            '<p>Simonds is a housing developer situated in the Eastern States and this product was built as a way to ' +
                            "allow simonds with assistance from strange animals to build lead gathering landing pages quickly for new promotions on simond's requests</p>" +
                            '<p>This is a PWA SPA running VueJS with webpack and scss with a Laravel php backend </p>' +
                            '<p>My duties involved quoting the project from client requirements, building the initial app structure,' +
                            ' integrating with external datasources, building external RESTFUL APIs to manage landing page data and form submissions to salesforce, integrating a smooth CI & CD process ' +
                            ' and overseeing feature updates</p>',
                        link: 'https://enquiry.simonds.com.au'
                    },
                    {
                        title: 'Simonds Bookings App',
                        image: bookings,
                        body:
                            '<p>This is a website built for Simonds by StrangeAnimals</p>' +
                            '<p>Simonds is a housing developer situated in the Eastern States and this product was built as a way to ' +
                            'allow simonds to create bookings and generate leads safely for their display homes across Australia during the COVID-19 pandemic</p>' +
                            '<p>This is a PWA SPA running VueJS with webpack and scss with a Laravel php backend </p>' +
                            '<p>My duties involved quoting the project from client requirements, forking an open source package an date package to support additional client requirements, building the initial app structure,' +
                            ' overseeing fellow developers, reviewing code, integrating a smooth CI & CD process ' +
                            ' and overseeing feature updates</p>',
                        link: 'https://bookings.simonds.com.au'
                    },
                    {
                        title: 'Simonds Issue App',
                        image: bookings,
                        body:
                            '<p>This is a website built for Simonds by StrangeAnimals</p>' +
                            '<p>Simonds is a housing developer situated in the Eastern States and this product was built as a way to ' +
                            'allow simonds to review historic ticket items from a deprecated issue tracking system</p>' +
                            '<p>This is a PWA SPA running VueJS with webpack and scss with a Laravel php backend </p>' +
                            '<p>My duties involved quoting the project from client requirements, building the initial app structure,' +
                            ' integrating with external datasources, building external RESTFUL APIs to manage the tickets, integrating a smooth CI & CD process  ' +
                            ' and overseeing feature updates</p>',
                        link: ''
                    },
                    {
                        title: 'Simonds Payments App',
                        image: bookings,
                        body:
                            '<p>This is a website built for Simonds by StrangeAnimals</p>' +
                            '<p>Simonds is a housing developer situated in the Eastern States and this product was built as a way to ' +
                            'allow simonds to review and action purchases throughout their ecosystem</p>' +
                            '<p>This is a PWA SPA running VueJS with webpack and scss with a Laravel php backend </p>' +
                            '<p>My duties involved quoting the project from client requirements, building the initial app structure,' +
                            ' integrating with external datasources, building external RESTFUL APIs to manage the payments, integrating a smooth CI & CD process  ' +
                            ' and overseeing feature updates by fellow developers</p>',
                        link: ''
                    },
                    {
                        title: 'Simonds Simvesta App',
                        image: bookings,
                        body:
                            '<p>This is a website built for Simonds by StrangeAnimals</p>' +
                            '<p>Simonds is a housing developer situated in the Eastern States and this product was built as a way to ' +
                            'allow simonds to show case the current house and land packages to their stock holders</p>' +
                            '<p>This is a PWA SPA running VueJS with webpack and scss with a Laravel php backend </p>' +
                            '<p>My duties involved quoting the project from client requirements, building the initial app structure,' +
                            ' integrating with external datasources, building external RESTFUL APIs to manage the payments, integrating a smooth CI & CD process  ' +
                            ' and overseeing feature updates by fellow developers</p>',
                        link: ''
                    },
                    {
                        title: 'Simonds Status App',
                        image: bookings,
                        body:
                            '<p>This is a website built for Simonds by StrangeAnimals</p>' +
                            '<p>Simonds is a housing developer situated in the Eastern States and this product was built as a way to ' +
                            'allow simonds to keep an overview on all the various 3rd party systems that had been built over the years.</p>' +
                            '<p>This is a PWA SPA running VueJS with webpack and scss with a Laravel php backend </p>' +
                            '<p>My duties involved quoting the project from client requirements, building the initial app structure,' +
                            ' integrating with external datasources, building external RESTFUL APIs to manage the payments, integrating a smooth CI & CD process  ' +
                            ' and overseeing feature updates by fellow developers</p>',
                        link: ''
                    },
                    {
                        title: 'Simonds GoodOneGary',
                        image: simonds,
                        body:
                            '<p>This is a website built for Simonds by StrangeAnimals</p>' +
                            '<p>Simonds is a housing developer situated in the Eastern States and this product was built as a starting proof of concept to ' +
                            'allow simonds to run friendly and engaging competitions.</p>' +
                            '<p>This is a PWA SPA running VueJS with webpack and scss with a Laravel php backend </p>' +
                            '<p>My duties involved quoting the project from client requirements, building the initial app structure,' +
                            ' integrating with external datasources, building external RESTFUL APIs to manage the payments, integrating a smooth CI & CD process  ' +
                            ' and overseeing feature updates by fellow developers</p>',
                        link: 'https://goodonegary.com'
                    },
                    {
                        title: 'Simonds Precinct Website',
                        image: precinct,
                        body:
                            '<p>This is a website built for Simonds by StrangeAnimals</p>' +
                            '<p>Simonds is a housing developer situated in the Eastern States and this product was built as a marketing tool ' +
                            'for simonds to sell sub-brands of houses</p>' +
                            '<p>This is a Craft 3 Site powered by webpack and scss</p>' +
                            '<p>My duties involved quoting the project from client requirements, building the initial structure,' +
                            ' integrating with external datasources, integrating a smooth CI & CD process  ' +
                            ' and overseeing feature updates by fellow developers</p>',
                        link: 'https://simondsprecinct.com.au'
                    },
                    {
                        title: 'Simonds Startpoint Website',
                        image: startpoint,
                        body:
                            '<p>This is a website built for Simonds by StrangeAnimals</p>' +
                            '<p>Simonds is a housing developer situated in the Eastern States and this product was built as a marketing tool ' +
                            'for simonds to sell sub-brands of houses</p>' +
                            '<p>This is a Craft 3 Site powered by webpack and scss</p>' +
                            '<p>My duties involved quoting the project from client requirements, building the initial structure,' +
                            ' integrating with external datasources, integrating a smooth CI & CD process  ' +
                            ' and overseeing feature updates by fellow developers</p>',
                        link: 'https://simondsprecinct.com.au'
                    },
                    {
                        title: 'Simonds PhotoApp',
                        image: simonds,
                        body:
                            '<p>This is a native ios and android app built for Simonds by StrangeAnimals</p>' +
                            '<p>Simonds is a housing developer situated in the Eastern States and this product was built as a tool ' +
                            'to simplify the inspection process of building houses</p>' +
                            '<p>This is a react-native app built for ios and android</p>' +
                            '<p>My duties involved quoting the project from client requirements, building the initial structure,' +
                            ' integrating with external datasources, showcasing updates to clients, resolving any issues between developers and the client, integrating a smooth CI & CD process  ' +
                            ' and overseeing feature updates by fellow developers</p>',
                        link: ''
                    },
                    {
                        title: 'Simonds WHS App',
                        image: simonds,
                        body:
                            '<p>This is a native ios and android app built for Simonds by StrangeAnimals</p>' +
                            '<p>Simonds is a housing developer situated in the Eastern States and this product was built as a tool ' +
                            'to simplify the inspection process of building houses similar to the photo app but adds the ability to create assignable jobs by incorporating a laravel php backend server</p>' +
                            '<p>This is a react-native app built for ios and android</p>' +
                            '<p>My duties involved quoting the project from client requirements, building the initial structure,' +
                            ' integrating with external datasources, building the initial backend and building RESTFUL APIs api, showcasing updates to clients, resolving any issues between developers and the client, integrating a smooth CI & CD process  ' +
                            ' and overseeing feature updates by fellow developers</p>',
                        link: ''
                    },
                    {
                        title: 'Hawaiian',
                        image: hawaiian,
                        body:
                            '<p>This is a website built for Hawaiian by StrangeAnimals</p>' +
                            '<p>Hawaiian owns a series of shopping centers around Perth</p>' +
                            '<p>This is a CMS running CraftCMS which uses php with webpack, scss and js for the frontend</p>' +
                            '<p>My duties involved maintaining deployments, mentoring other developers with tasks and overseeing feature requests</p>',
                        link: 'https://hawaiian.com.au/'
                    },
                    {
                        title: 'Strange Animals',
                        image: strangeanimals,
                        body:
                            '<p>This is a website built for StrangeAnimals by StrangeAnimals</p>' +
                            '<p>StrangeAnimals is a web, software and app design agency</p>' +
                            '<p>This is a CMS running Silverstripe which uses php with webpack, scss and js for the frontend</p>' +
                            '<p>My duties involved building the underlying models, maintaining deployments, reviewing functional requirements</p>',
                        link: 'https://strangeanimals.com.au/'
                    },
                    {
                        title: 'Blackswan',
                        image: blackswan,
                        body:
                            '<p>This is a website built for Blackswan State Theatre Company by StrangeAnimals</p>' +
                            '<p>Blackswan is a theatre company that hosts 6 - 7 unique shows a year</p>' +
                            '<p>This is a CMS running Silverstripe which uses php with webpack, scss and js for the frontend</p>' +
                            '<p>My duties involved building the underlying models, delegating maintenance requests, maintaining deployments and handling feature updates</p>',
                        link: 'https://bsstc.com.au/'
                    },
                    {
                        title: 'Perth Concert Hall',
                        image: pch,
                        body:
                            '<p>This is a website built for Perth Concert Hall by StrangeAnimals</p>' +
                            '<p>Perth Concert Hall is a theatre company with a range of shows year round</p>' +
                            '<p>This is a CMS running Silverstripe which uses php with webpack, scss and js for the frontend</p>' +
                            '<p>My duties involved building the underlying models, delegating maintenance requests, maintaining deployments and handling feature updates</p>',
                        link: 'https://www.perthconcerthall.com.au/'
                    },
                    {
                        title: 'West Australian Symphony Orchestra',
                        image: waso,
                        body:
                            '<p>This is a website built for West Australian Symphony Orchestra by StrangeAnimals</p>' +
                            '<p>West Australian Symphony Orchestra is a theatre company with a range of shows year round</p>' +
                            '<p>This is a CMS running expresion engine which uses php with webpack, scss and js for the frontend and has a laravel backend running an api which syncs performances from tessitura to the frontend website</p>' +
                            '<p>My duties involved delegating maintenance requests, maintaining deployments and handling feature updates</p>',
                        link: 'https://waso.com.au'
                    },
                    {
                        title: 'Constable Care',
                        image: cccsf,
                        body:
                            "<p>This is a website built for Constable Care's Child Safety Foundation by StrangeAnimals</p>" +
                            '<p>The Child Safety Foundation holds events to teach kids about road safety and various other safety precautions</p>' +
                            '<p>This is a CMS running Silverstripe which uses php with css and js for the frontend</p>' +
                            '<p>My duties involved building the underlying models, maintaining deployments and handling feature updates</p>',
                        link: 'https://www.cccsf.org.au'
                    },
                    {
                        title: 'BGC Contracting',
                        image: bgc,
                        body:
                            '<p>This is a website built for BGC Contracting by StrangeAnimals</p>' +
                            '<p>BGC is a contracting company providing various services including vehicle hiring and construction</p>' +
                            '<p>This is a CMS running Silverstripe which uses php with webpack, scss and js for the frontend</p>' +
                            '<p>My duties involved building the underlying models, maintaining deployments and handling feature updates</p>',
                        link: 'https://www.bgc.cc/'
                    },
                    {
                        title: 'HomegroupWA',
                        image: hgwa,
                        body:
                            '<p>This is a website built for HomegroupWA by StrangeAnimals</p>' +
                            '<p>HomegroupWA is a construction company for building homes in Western Australia and Victoria</p>' +
                            '<p>This is a CMS running Silverstripe which uses php with webpack, scss and js for the frontend</p>' +
                            '<p>My duties involved building the underlying models, reviewing functional requirements, maintaining deployments and handling feature updates</p>',
                        link: 'https://www.homegroup.com.au'
                    },
                    {
                        title: 'Cable Beach Club',
                        image: cbc,
                        body:
                            '<p>This is a website built for Cable Beach Club by StrangeAnimals</p>' +
                            '<p>Cable Beach Club is a holiday resort in Broome</p>' +
                            '<p>This is a CMS running CraftCMS which uses php with webpack, scss and js for the frontend</p>' +
                            '<p>My duties involved providing mentoring to other developers, maintaining deployments and handling feature updates</p>',
                        link: 'https://www.cablebeachclub.com/'
                    },
                    {
                        title: 'Smartbet',
                        image: smartbet,
                        body:
                            '<p>This is a website and native app built for Smartbet by StrangeAnimals</p>' +
                            '<p>Smartbet is a betting system focused on using virtual currency to bet against friends</p>' +
                            '<p>This is a CMS running Silverstripe which uses php with webpack, scss and js for the frontend and a native app built with react-native</p>' +
                            '<p>My duties involved building the underlying models, maintaining deployments and handling feature updates for the server and building the native app to communicate with the server</p>',
                        link: 'https://smartbet.digital'
                    },
                    {
                        title: 'Elite Cricket Training',
                        image: ect,
                        body:
                            '<p>This is a website built for Elite Cricket Training by StrangeAnimals</p>' +
                            '<p>Elite Cricket Training is a business for hiring cricket infrastructure and coaching purposes</p>' +
                            '<p>This is a CMS running Silverstripe which uses php with webpack, scss and js for the frontend</p>' +
                            '<p>My duties involved building underlying models, reviewing functional requirements, maintaining deployments and overseeing feature updates</p>',
                        link: 'https://elitecrickettraining.com.au'
                    },
                    {
                        title: 'Adventure World',
                        image: adventureworld,
                        body:
                            '<p>This is a website built for Adventure World by StrangeAnimals</p>' +
                            '<p>Adventure World is a theme park with water and non water rides</p>' +
                            '<p>This is a CMS running Silverstripe which uses php with webpack, scss and js for the frontend</p>' +
                            '<p>My duties involved building underlying models, maintaining deployments and overseeing feature updates</p>',
                        link: 'https://adventureworld.net.au'
                    },
                    {
                        title: 'YourCall',
                        image: yourcall,
                        body:
                            '<p>This is a website built for Constable Care by StrangeAnimals</p>' +
                            '<p>YourCall is a website which hosts interactive educational videos to teach teenagers about bad decisions and the results of these decisions</p>' +
                            '<p>This is a CMS running Silverstripe which uses php with webpack, scss and js for the frontend</p>' +
                            '<p>My duties involved maintaining deployments and overseeing feature updates</p>',
                        link: 'https://yourcall.rocks'
                    },
                    {
                        title: 'Sue Lewis Chocolatier',
                        image: suelewis,
                        body:
                            '<p>This is a website built for Sue Lewis Chocolatier by StrangeAnimals</p>' +
                            '<p>Sue Lewis Chocolatier is a connoisseur chocolate maker in Perth</p>' +
                            '<p>This is a CMS running Silverstripe which uses php with webpack, scss and js for the frontend</p>' +
                            '<p>My duties involved maintaining deployments and overseeing feature updates</p>',
                        link: 'https://suelewischocolatier.com.au/'
                    },
                    {
                        title: 'Blue Body',
                        image: bluebody,
                        body:
                            '<p>This is a website built for Blue Body by StrangeAnimals</p>' +
                            '<p>Blue Body is a spiritual center focusing and meditation and relaxation</p>' +
                            '<p>This is a CMS running Silverstripe which uses php with webpack, scss and js for the frontend</p>' +
                            '<p>My duties involved maintaining deployments and overseeing feature updates</p>',
                        link: 'https://bluebody.com.au'
                    },
                    {
                        title: 'Hope For Children',
                        image: hopeforchildren,
                        body:
                            '<p>This is a website built for Hope For Children by StrangeAnimals</p>' +
                            '<p>Hope For Children is a charity focusing on helping children</p>' +
                            '<p>This is a CMS running Silverstripe which uses php with webpack, scss and js for the frontend</p>' +
                            '<p>My duties involved building underlying models, maintaining deployments and overseeing feature updates</p>',
                        link: 'http://www.hopeforchildren.org.au/'
                    }
                ]
            }
        }
    },
    methods: {
        employedClick () {
            this.displays.employed = !this.displays.employed
            this.displays.personal = false
        },
        personalClick () {
            this.displays.employed = false
            this.displays.strangeAnimals = false
            this.displays.simplisite = false
            this.displays.agworld = false
            this.displays.personal = !this.displays.personal
        },
        simplisiteClick () {
            this.displays.strangeAnimals = false
            this.displays.agworld = false
            this.displays.simplisite = !this.displays.simplisite
        },
        strangeAnimalsClick () {
            this.displays.simplisite = false
            this.displays.agworld = false
            this.displays.strangeAnimals = !this.displays.strangeAnimals
        },
        agworldClick () {
            this.displays.simplisite = false
            this.displays.strangeAnimals = false
            this.displays.agworld = !this.displays.agworld
        }
    }
}
</script>
