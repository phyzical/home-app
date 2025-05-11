<template>
    <div class="page about-me uk-container">
        <div class="sign uk-text-center">
            <span class="sign-1">About</span>
            <span class="sign-2"> Me</span>
        </div>
        <div class="content">
            <div>
                <p> Hey! Im a software developer who graduated from {{ linkedInData.uni.name }} with a Bachelors in Software Engineering. </p>
                <p> 
                    I have {{ yearsExperience }} years of professional experience in the field and I am currently employed as a full stack developer at 
                    <a :href="linkedInData.job.url">
                        {{ linkedInData.job.name }}
                    </a>
                </p>
                <p>
                    I have experience making native mobile apps, websites and software that all interact with each other behind the scenes through the use of the latest languages and technologies. Go 
                    <router-link to="work">
                        here
                    </router-link> to see some of the things I have built or helped with, or scroll down to see what technologies I use.
                </p>
                <p> I have experience in planning, building, managing and deploying ideas to life.</p>
                <p> In my spare time I enjoy gaming and coding.</p>
                <p>
                    If you have an app, website or software that needs building or require assistance in maintaining something, feel free to   <router-link to="contact-me">
                        Contact Me
                    </router-link> or send me an email at <a href="mailto:me@jackcarpenter.dev">me@jackcarpenter.dev</a>
                </p>
            </div>
            <div class="arrow uk-grid uk-align-center">
                <img
                    :data-src="arrow"
                    width=""
                    height=""
                    uk-svg
                >
                <img
                    :data-src="arrow"
                    width=""
                    height=""
                    uk-svg
                >
                <img
                    :data-src="arrow"
                    width=""
                    height=""
                    uk-svg
                >
            </div>
            <div class="experiences">
                <div
                    uk-slider="center:true"
                    class="category-content"
                >
                    <div
                        class="uk-position-relative uk-visible-toggle uk-light"
                        tabindex="-1"
                    >
                        <ul
                            class="experience-ul uk-slider-items"
                        >
                            <li
                                v-for="(experience,i) in experiences"
                                :key="`experience-${i}`"
                                class="experience uk-grid uk-flex-center uk-grid-match uk-padding"
                            >
                                <h1 class="category uk-width-1-1 uk-align-center">
                                    {{ experience.title }}
                                </h1>
                                <div

                                    class=" uk-grid uk-grid-small uk-flex-center"
                                    uk-grid
                                >
                                    <div
                                        v-for="(category,x) in experience.categories"
                                        :key="`experience-${i}-${x}`"
                                        class="language"
                                        :class="experience.categories.length > 1 ? 'uk-width-1-2' : 'uk-width-1-1'"
                                    >
                                        <img
                                            v-if="category.asSVG"
                                            :data-src="category.image"
                                            uk-svg
                                            class="image uk-align-center"
                                            :class="[category.title]"
                                            @click="appClick(category.link)"
                                        >
                                        <img
                                            v-else
                                            :data-src="category.image"
                                            uk-img
                                            class="image uk-align-center"
                                            :class="[category.title]"
                                            @click="appClick(category.link)"
                                        >
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <a
                            class="uk-position-center-left uk-position-small uk-hidden-hover"
                            href="#"
                            uk-slidenav-previous
                            uk-slider-item="previous"
                        />
                        <a
                            class="uk-position-center-right uk-position-small uk-hidden-hover"
                            href="#"
                            uk-slidenav-next
                            uk-slider-item="next"
                        />
                    </div>
                    <ul class=" uk-slider-nav uk-dotnav uk-flex-center" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {currentYear} from "../helpers/helpers";
import linkedInData from '../helpers/linkedInData.json';
import arrow from '../images/arrow-1.svg';
import unix from '../images/frameworks/unix.png';
import osx from '../images/frameworks/osx.png';
import aws from '../images/frameworks/aws.png';
import laravel from '../images/frameworks/Laravel.png';
import silverStripe from '../images/frameworks/silverstripe.png';
import php from '../images/frameworks/php.png';
import reactNative from '../images/frameworks/react-native.png';
import uiKit from '../images/frameworks/uikit.png';
import scss from '../images/frameworks/scss.png';
import bootStrap from '../images/frameworks/bootstrap.png';
import vue from '../images/frameworks/vue.png';
import js from '../images/frameworks/JS.png';
import nodeJS from '../images/frameworks/NodeJS.png';
import webpack from '../images/frameworks/webpack.png';
import css from '../images/frameworks/css.png';
import craft from '../images/frameworks/craft.png';
import jenkins from '../images/frameworks/jenkins.png';
import teamcity from '../images/frameworks/teamcity.png';
import pipelines from '../images/frameworks/pipelines.png';
import docker from '../images/frameworks/docker.svg';
import ansible from '../images/frameworks/ansible.svg';
import virtualBox from '../images/frameworks/virtualbox.png';
import ruby from '../images/frameworks/ruby.png';
import rubyOnRails from '../images/frameworks/rubyOnRails.png';
import react from '../images/frameworks/react.png';
import azure from '../images/frameworks/azure.svg';
import appcenter from '../images/frameworks/AppCenter.png';
import github from '../images/frameworks/github.png';

export default {
    name: 'AboutMe',
    data: () => {
        return {
            experiences: [{
                categories: [{
                    image: vue,
                    title: 'Vue',
                    link: 'https://vuejs.org/'
                }, {
                    image: js,
                    title: 'JS',
                    link: 'https://www.javascript.com'
                }, {
                    image: nodeJS,
                    title: 'NodeJS',
                    link: 'https://nodejs.org/en/'
                }, {
                    image: react,
                    title: 'React',
                    link: 'https://reactjs.org/'
                },
                ],
                title: 'Javascript'
            },{
                categories: [{
                    image: uiKit,
                    title: 'UIKit',
                    link: 'https://getuikit.com'
                },{
                    image: scss,
                    title: 'SCSS',
                    link: 'https://sass-lang.com'
                },{
                    image: bootStrap,
                    title: 'Bootstrap',
                    link: 'https://getbootstrap.com'
                },{
                    image: css,
                    title: 'CSS',
                    link: 'https://css-tricks.com'
                }
                ],
                title: 'UI'
            },{
                categories: [{
                    image: reactNative,
                    title: 'React Native',
                    link: 'https://facebook.github.io/react-native/'
                },
                ],
                title: 'Native Apps'
            },{
                categories: [{
                    image: php,
                    title: 'PHP',
                    link: 'https://www.php.net'
                }, {
                    image: ruby,
                    title: 'Ruby',
                    link: 'https://www.ruby-lang.org/en/'
                }
                ],
                title: 'Backend'
            },{
                categories: [{
                    image: laravel,
                    title: 'Laravel',
                    link: 'https://laravel.com'
                }, {
                    image: silverStripe,
                    title: 'Silverstripe',
                    link: 'https://www.Silverstripe.org'
                }, {
                    image: craft,
                    title: 'CraftCMS',
                    link: 'https://craftcms.com'
                },{
                    image: rubyOnRails,
                    title: 'Ruby On Rails',
                    link: 'https://rubyonrails.org/',
                },
                ],
                title: 'Frameworks'
            },{
                categories: [{
                    image: aws,
                    title: 'Amazon Web Services',
                    link: 'https://aws.amazon.com'
                },{
                    image: azure,
                    title: 'Microsoft Azure',
                    link: 'https://azure.microsoft.com'
                }
                ],
                title: 'Cloud Services'
            },{
                categories: [{
                    image: pipelines,
                    title: 'Bitbucket Pipelines',
                    link: 'https://bitbucket.org/product/features/pipelines'
                },{
                    image: jenkins,
                    title: 'Jenkins',
                    link: 'https://jenkins.io/'
                },{
                    image: teamcity,
                    title: 'TeamCity',
                    link: 'https://www.jetbrains.com/teamcity/'
                },{
                    image: appcenter,
                    title: 'Azure Appcenter',
                    link: 'https://appcenter.ms/'
                },  {
                    image: github,
                    title: 'Github Actions',
                    link: 'https://github.com/features/actions'
                },
                ],
                title: 'CI/CD Services'
            },{
                categories: [{
                    image: unix,
                    title: 'Linux',
                    link: 'https://www.linux.org'
                },{
                    image: osx,
                    title: 'OSX',
                    link: 'https://www.apple.com/au/macos/catalina/'
                }
                ],
                title: 'OS'
            },{
                categories: [{
                    image: ansible,
                    title: 'Ansible',
                    link: 'https://www.ansible.com/'
                },{
                    image: virtualBox,
                    title: 'VirtualBox',
                    link: 'https://www.virtualbox.org/'
                }, {
                    image: docker,
                    title: 'Docker',
                    link: 'https://www.docker.com/'
                },
                ],
                title: 'Virtualisation'
            },{
                categories: [{
                    image: webpack,
                    title: 'Webpack',
                    link: 'https://webpack.js.org/'
                }
                ],
                title: 'Build Tools'
            }
            ]
        }
    },
    computed: {
        yearsExperience() {
            return currentYear() - 2014;
        },
        linkedInData() {
            return linkedInData;
        },
        arrow() {
            return arrow;
        }
    },
    methods: {
        appClick(link) {
            window.open(link, '_blank');
        },
    }
}
</script>