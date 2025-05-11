<template>
    <div class="page cv uk-container">
        <div class="sign uk-text-center">
            <span class="sign-1">C</span>
            <span class="sign-2"> V</span>
        </div>
        <div class="content">
            <div
                class="uk-flex uk-flex-column uk-flex-center uk-flex-middle cv-container"
            >
                <button
                    class="uk-width-1-2 uk-button uk-align-center"
                    uk-button
                    @click="clickDownloadPDF"
                >
                    PDF Download
                </button>
                <div
                    class="uk-width-1-1 uk-grid cv-category"
                    uk-grid
                >
                    <div class="uk-width-1-1">
                        <h2 class="cv-title uk-text-center uk-align-center">
                            Jack Carpenter
                        </h2>
                    </div>
                    <div class="cv-entry uk-align-center">
                        <b>Email:</b> <span> me@jackcarpenter.dev</span>
                    </div>
                </div>
                <div class="uk-width-1-1 uk-divider-icon" />
                <div
                    uk-scrollspy="cls:uk-animation-slide-left"
                    class="uk-width-1-1 uk-grid cv-category uk-grid-divider"
                    uk-grid
                >
                    <div class="uk-width-1-1">
                        <h2 class="cv-title uk-text-center uk-align-center">
                            Technical Skills
                        </h2>
                    </div>
                    <div
                        v-for="(entry, i) in cv.technicalSkills"
                        :key="`technical-${i}`"
                        class="uk-width-1-2@m uk-width-1-1@s cv-entry"
                        v-html="entry"
                    />
                </div>
                <div class="uk-width-1-1 uk-divider-icon" />
                <div
                    uk-scrollspy="cls:uk-animation-slide-right"
                    class="uk-width-1-1 uk-grid cv-category uk-grid-divider"
                    uk-grid
                >
                    <div class="uk-width-1-1">
                        <h2 class="cv-title uk-text-center uk-align-center">
                            Additional Skills
                        </h2>
                    </div>
                    <div class="uk-width-1-1 cv-entry uk-flex uk-flex-column">
                        <ul>
                            <div
                                v-for="(item, i) in cv.additionalSkills"
                                :key="`additional-skills-${i}`"
                                v-html="item"
                            />
                        </ul>
                    </div>
                </div>
                <div class="uk-width-1-1 uk-divider-icon" />
                <div
                    uk-scrollspy="cls:uk-animation-slide-left"
                    class="uk-width-1-1 uk-grid cv-category"
                    uk-grid
                >
                    <div class="uk-width-1-1">
                        <h2 class="cv-title uk-text-center uk-align-center">
                            Hobbies And Interests
                        </h2>
                    </div>
                    <div class="uk-width-1-1 cv-entry uk-flex uk-flex-column">
                        <ul>
                            <div
                                v-for="(item, i) in cv.hobbiesAndInterests"
                                :key="`hobbies-and-interests-${i}`"
                                v-html="item"
                            />
                        </ul>
                    </div>
                </div>
                <div class="uk-width-1-1 uk-divider-icon" />
                <div
                    uk-scrollspy="cls:uk-animation-slide-right"
                    class="uk-width-1-1 uk-grid cv-category uk-grid-divider"
                    uk-grid
                >
                    <div class="uk-width-1-1">
                        <h2 class="cv-title uk-text-center uk-align-center">
                            Employment History
                        </h2>
                    </div>
                    <div
                        v-for="(entry, i) in cv.jobHistory"
                        :key="`job-history-${i}`"
                        class="uk-card uk-width-1-2@m uk-width-1-1@s cv-entry"
                    >
                        <img
                            :data-src="entry.image.file"
                            uk-img
                        >
                        <div class="uk-flex uk-flex-column uk-card-header">
                            <div
                                v-for="(item, x) in entry.headerContent"
                                :key="`job-history-header-content-${i}-${x}`"
                                v-html="item"
                            />
                        </div>
                        <div class="uk-card-body">
                            <ul>
                                <div
                                    v-for="(item, x) in entry.content"
                                    :key="`job-history-content-${i}-${x}`"
                                    v-html="item"
                                />
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="uk-width-1-1 uk-divider-icon" />
                <div
                    uk-scrollspy="cls:uk-animation-slide-left"
                    class="uk-width-1-1 uk-grid cv-category uk-grid-divider"
                    uk-grid
                >
                    <div class="uk-width-1-1">
                        <h2 class="cv-title uk-text-center uk-align-center">
                            Education
                        </h2>
                    </div>
                    <div
                        v-for="(entry, i) in cv.educationHistory"
                        :key="`education-${i}`"
                        class="uk-width-1-1 cv-entry"
                    >
                        <img
                            :data-src="entry.image.file"
                            uk-img
                        >
                        <div
                            v-for="(item, x) in entry.headerContent"
                            :key="`education-header-content-${i}-${x}`"
                        >
                            <div v-html="item" />
                        </div>
                        <div
                            v-for="(item, x) in entry.content"
                            :key="`education-content-${i}-${x}`"
                        >
                            <div v-html="item" />
                        </div>
                    </div>
                </div>
                <div class="uk-width-1-1 uk-divider-icon" />
                <div
                    uk-scrollspy="cls:uk-animation-slide-right"
                    class="uk-width-1-1 uk-grid cv-category uk-grid-divider"
                    uk-grid
                >
                    <div class="uk-width-1-1">
                        <h2 class="cv-title uk-text-center uk-align-center">
                            Short Courses
                        </h2>
                    </div>
                    <div
                        v-for="(entry, i) in cv.shortCourses"
                        :key="`short-course-${i}`"
                        class="uk-width-1-1 cv-entry"
                    >
                        <div
                            class="uk-align-center"
                            v-html="entry"
                        />
                    </div>
                </div>
                <div class="uk-width-1-1 uk-divider-icon" />
                <div
                    uk-scrollspy="cls:uk-animation-slide-left"
                    class="uk-width-1-1 uk-grid cv-category uk-grid-divider"
                    uk-grid
                >
                    <div class="uk-width-1-1">
                        <h2 class="cv-title uk-text-center uk-align-center">
                            References
                        </h2>
                    </div>
                    <div
                        v-for="(entry, i) in cv.references"
                        :key="`references-${i}`"
                        class="uk-width-1-1 cv-entry"
                    >
                        <div>
                            <img
                                :data-src="entry.image.file"
                                uk-img
                            >
                            <div
                                v-for="(item, x) in entry.content"
                                :key="`reference-entry-${i}-${x}`"
                                class="uk-width-1-1 cv-entry"
                            >
                                <div v-html="item" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import mcc from '../../src/images/education/mcc.jpg'
import curtin from '../../src/images/education/curtin.png'
import simplisite from '../../src/images/projects/simplisite.jpg'
import strangeAnimals from '../../src/images/projects/strangeanimals.png'
import agworld from '../../src/images/projects/agworld.png'
import dominoes from '../../src/images/education/dominoes.png'
import { mapActions } from 'vuex'
const pdfMakeFont = () => import('pdfmake/build/vfs_fonts')
const pdfMake = () => import('pdfmake')
export default {
    data () {
        return {
            cv: {
                technicalSkills: [
                    '<div class="uk-width-1-1"><b>Programing Languages:</b></div>' +
                        '<span>PHP, JavaScript, SQL, React-Native, HTML, Css, Elixir, React, Java, Ruby, NodeJS, Python, Clojure, Scss.</span>',
                    '<div class="uk-width-1-1"><b>Operating Systems:</b></div>' +
                        '<span>OSX and Linux.</span>',
                    '<div class="uk-width-1-1"><b>Development/Artifacts:</b></div>' +
                        '<span>Jira, Confluence, Object Oriented Design, UML, Technical' +
                        'Documentation, Agile methodologies (scrum), Test Driven Development.</span>',
                    '<div class="uk-width-1-1"><b>Version Control:</b></div>' +
                        '<span>Git, Mecurial</span>',
                    '<div class="uk-width-1-1"><b>Frameworks:</b></div>' +
                        '<span>Silverstripe, VueJS, Laravel, React-Native, Ruby on rails' +
                        ' UIKit, Bootstrap, Sass, CraftCMS, Django, Unity</span>',
                    '<div class="uk-width-1-1"><b>Build Tools:</b></div>' +
                        '<span>GulpJS, Webpack, GruntJS</span>',
                    '<div class="uk-width-1-1"><b>Cloud Services:</b></div>' +
                        '<span>AWS, Shopify, Serverpilot, ISPConfig, Azure, Intune</span>',
                    '<div class="uk-width-1-1"><b>CI/CD:</b></div>' +
                        '<span>Bitbucket Pipelines, Jenkins, TeamCity, Azure Appcenter</span>',
                    '<div class="uk-width-1-1"><b>Virtualisation:</b></div>' +
                        '<span>Ansible, Vagrant, VirtualBox, Docker</span>',
                    ''
                ],
                additionalSkills: [
                    '<li>Experience leading teams</li>',
                    '<li>Experience writing technical specification documents</li>',
                    '<li>Dedicated and driven</li>',
                    '<li>Experience quoting projects</li>',
                    '<li>Experience deriving clients wants into needs</li>',
                    '<li>Experience with Test Driven Development</li>',
                    '<li>Experience with CI/CD services to allow for increased automation and continuous integration</li>',
                    '<li>Willingness to learn new things</li>',
                    '<li>Enjoy tinkering with new technologies</li>',
                    '<li>Ability to adapt to a changing environment</li>',
                    '<li>Ability to work well within a team environment</li>',
                    '<li>Setting up home networks</li>',
                    '<li>Installing and troubleshooting software</li>',
                    '<li>Experienced in customer service skills</li>',
                    '<li>Ability to communicate effectively both in writing and verbally</li>'
                ],
                hobbiesAndInterests: [
                    '<li>Assembling computers and servers</li>',
                    '<li>Computer games</li>',
                    '<li>Cars</li>',
                    '<li>Tv Shows and Movies</li>',
                    '<li>Played soccer for the last 10 years</li>',
                    '<li>Creating/implementing “shortcuts” for everyday life</li>',
                    '<li>Doing my part to help with Open-Source projects when i can</li>',
                    '<li>Programing</li>'
                ],
                shortCourses: [
                    '<b>Certificate I and II in Information Technology</b>',
                    '<b>Certificate II in Hospitality</b>' +
                        '<p>Responsible Service of Alcohol</p>',
                    '<b>Diploma of information Technology</b>'
                ],
                references: [
                    {
                        content: [
                            '<p>Charlie Apps</p>',
                            '<p>Director, Strange Animals</p>',
                            '<p>M: 0413 764 041</p>',
                            '<p>E: charliea@strangeanimals.com.au</p>'
                        ],
                        image: {
                            file: strangeAnimals,
                            base64: null
                        }
                    },
                    {
                        content: [
                            '<p>Troy Worth</p>',
                            '<p>Ex-Director, Simplisite</p>',
                            '<p>M: 0419 966 794</p>',
                            '<p>E: troyw@elitecrickettraining.com.au</p>'
                        ],
                        image: {
                            file: simplisite,
                            base64: null
                        }
                    }
                ],
                educationHistory: [
                    {
                        headerContent: ['<b>2010 – 2014</b>'],
                        image: {
                            file: curtin,
                            base64: null
                        },
                        content: [
                            '<p>Curtin University. Bentley, Perth, Western Australia.</p>',
                            '<p>Completed a bachelor of science majoring in software engineering.</p>'
                        ]
                    },
                    {
                        headerContent: ['<b>2010 – 2014</b>'],
                        image: {
                            file: mcc,
                            base64: null
                        },
                        content: [
                            '<p>Mandurah Catholic College, Western Australia.</p>',
                            '<p>Year 12 graduate.</p>'
                        ]
                    }
                ],
                jobHistory: [
                    {
                        headerContent: [
                            '<b>September 2020 - Current</b>',
                            '<span>Agworld</span>',
                            '<span><b>Position:</b> Full Stack Software Developer</span>'
                        ],
                        image: {
                            file: agworld,
                            base64: null
                        },
                        content: [
                            '<li>Maintain various ruby/react based projects</li>',
                            '<li>Lead feature implementations</li>',
                            '<li>Provided experience to learning developers through guidance</li>',
                            '<li>Worked in the infrastructure team depending on cycle</li>',
                            '<li>Refactored legacy code to be a more readable, reusable replacement</li>',
                            '<li>Upgraded various frameworks to be up to date</li>',
                            '<li>Learned a lot about maintaining legacy code and improving it</li>'
                        ]
                    },
                    {
                        headerContent: [
                            '<b>May 2018 - August 2020</b>',
                            '<span>Strange Animals</span>',
                            '<span><b>Position:</b> Lead Software Developer</span>'
                        ],
                        image: {
                            file: strangeAnimals,
                            base64: null
                        },
                        content: [
                            '<li>Created and maintained various PHP based projects</li>',
                            '<li>Created and maintained various JS based work</li>',
                            '<li>Created and maintained various React-Native native mobile apps</li>',
                            '<li>Experience as tech lead</li>',
                            '<li>Provided experience to learning developers through guidance</li>',
                            '<li>Created project specification documents</li>',
                            '<li>Built infrastructure used by whole company simplify every day tasks</li>',
                            '<li>Implemented CI/CD services for more streamlined deployment and testing processes</li>'
                        ]
                    },
                    {
                        headerContent: [
                            '<b>February 2015 - May 2018</b>',
                            '<span>Simplisite Business Solutions</span>',
                            '<span><b>Position:</b> Junior Software Developer - Senior Software Developer</span>'
                        ],
                        image: {
                            file: simplisite,
                            base64: null
                        },
                        content: [
                            '<li>Created and maintained various PHP based projects</li>',
                            '<li>Created and maintained various JS based work</li>',
                            '<li>Created and maintained various React-Native native mobile apps</li>',
                            '<li>Lead small teams</li>',
                            '<li>Worked in teams</li>',
                            '<li>Created project specification documents</li>',
                            '<li>Implemented CI/CD services for more streamlined deployment and testing processes</li>'
                        ]
                    },
                    {
                        headerContent: [
                            '<b>September 2010 - February 2015</b>',
                            '<span>Dominoes, Mandurah</span>',
                            '<span><b>Position:</b> Manager/Delivery Driver</span>'
                        ],
                        image: {
                            file: dominoes,
                            base64: null
                        },
                        content: [
                            '<li>Strong customer service skills</li>',
                            '<li>Taking, processing orders and handling cash tills</li>',
                            '<li>Managerial duties</li>',
                            '<li>Team leading skills</li>',
                            '<li>Store running responsibilities</li>'
                        ]
                    }
                    // this is needed when tis uneven
                    // },{
                    //     headerContent: [
                    //         ''
                    //     ],
                    //     image: {
                    //         file: null,
                    //         base64: null
                    //     },
                    //     content: [
                    //         ''
                    //     ],
                    // }
                ]
            }
        }
    },
    mounted () {
        const self = this
        pdfMake().then((pdfMakePromise) => {
            pdfMakeFont().then((pdfMakeFontPromise) => {
                pdfMakePromise.default.vfs = pdfMakeFontPromise.pdfMake.vfs
            })
        })

        // eslint-disable-next-line
    Object.defineProperty(Array.prototype, "chunk_inefficient", {
            value: function (chunkSize) {
                const array = this
                return [].concat.apply(
                    [],
                    array.map(function (elem, i) {
                        return i % chunkSize ? [] : [array.slice(i, i + chunkSize)]
                    })
                )
            }
        })
        self.cv.educationHistory.forEach((item, i) => {
            if (item.image.file) {
                self.toDataURL(item.image.file, (res) => {
                    item.image.base64 = res
                    self.cv.educationHistory[i] = item
                })
            }
        })
        self.cv.jobHistory.forEach((item, i) => {
            if (item.image.file) {
                self.toDataURL(item.image.file, (res) => {
                    item.image.base64 = res
                    self.cv.jobHistory[i] = item
                })
            }
        })
        self.cv.references.forEach((item, i) => {
            if (item.image.file) {
                self.toDataURL(item.image.file, (res) => {
                    item.image.base64 = res
                    self.cv.references[i] = item
                })
            }
        })
    },
    methods: {
        ...mapActions(['isLoading']),
        stripHtml (html) {
            const tmp = document.createElement('DIV')
            tmp.innerHTML = html
            return tmp.textContent || tmp.innerText || ''
        },
        toDataURL (url, callback) {
            const xhr = new XMLHttpRequest()
            xhr.onload = function () {
                const reader = new FileReader()
                reader.onloadend = function () {
                    callback(reader.result)
                }
                reader.readAsDataURL(xhr.response)
            }
            xhr.open('GET', url)
            xhr.responseType = 'blob'
            xhr.send()
        },
        clickDownloadPDF () {
            this.isLoading(1)
            setTimeout(() => {
                this.downloadPDF()
                setTimeout(() => {
                    this.isLoading(-1)
                }, 1000)
            }, 1)
        },
        downloadPDF () {
            const technicalSkills = this.cv.technicalSkills
                .map((item) =>
                    item.split('</div>').map((subItem, i) => {
                        return {
                            text: this.stripHtml(subItem),
                            style: {
                                bold: !i
                            },
                            margin: [0, 0, 0, 10]
                        }
                    })
                )
                .chunk_inefficient(2)
            const jobHistory = this.cv.jobHistory
                .map((item, i) => {
                    const arr = []
                    if (item.image.file) {
                        arr.push({
                            image: item.image.base64,
                            width: 50,
                            height: 50
                        })
                    }
                    return arr.concat([
                        ...item.headerContent.map((subItem, x) => {
                            return {
                                text: this.stripHtml(subItem),
                                style: {
                                    bold: !x
                                }
                            }
                        }),
                        {
                            ul: item.content.map((subItem) => this.stripHtml(subItem)),
                            style: 'list',
                            margin: [30, 20, 0, 20]
                            // pageBreak: i === 1 ? 'after' : null
                        }
                    ])
                })
                .chunk_inefficient(2)
            const educationHistory = this.cv.educationHistory.map((item) => [
                {
                    image: item.image.base64,
                    width: 50,
                    height: 50
                },
                ...item.headerContent.map((subItem, i) => {
                    return {
                        text: this.stripHtml(subItem),
                        style: {
                            bold: !i
                        }
                    }
                }),
                ...item.content.map((subItem, i) => {
                    return {
                        text: this.stripHtml(subItem),
                        margin: [0, i === 1 ? 20 : 0, 0, 0]
                    }
                })
            ])
            const shortCourses = this.cv.shortCourses.map((item) =>
                this.stripHtml(item)
            )
            const additionalSkills = this.cv.additionalSkills.map((item) =>
                this.stripHtml(item)
            )
            const references = this.cv.references.map((item) => [
                {
                    image: item.image.base64,
                    width: 50,
                    height: 50
                },
                ...item.content.map((subItem, i) => {
                    return {
                        text: this.stripHtml(subItem),
                        style: {
                            bold: !i
                        },
                        margin: [0, i === 1 ? 20 : 0, 0, 0]
                    }
                })
            ])
            const hobbiesAndInterests = this.cv.hobbiesAndInterests.map((item) =>
                this.stripHtml(item)
            )
            const hr = {
                canvas: [
                    { type: 'line', x1: 0, y1: 5, x2: 595 - 2 * 40, y2: 5, lineWidth: 3 }
                ],
                margin: [0, 15, 0, 15]
            }
            const docDefinition = {
                footer: function (currentPage, pageCount) {
                    return currentPage.toString() + ' of ' + pageCount
                },
                header: 'Jack Carpenter',
                info: {
                    title: 'Jack Carpenter CV',
                    author: 'Jack Carpenter'
                },
                content: [
                    {
                        text: 'Jack Carpenter',
                        style: 'title',
                        margin: [0, 0, 0, 30]
                    },
                    {
                        layout: 'noBorders', // optional
                        table: {
                            // headers are automatically repeated if the table spans over multiple pages
                            // you can declare how many rows should be treated as headers
                            headerRows: 0,
                            widths: '50%',
                            body: [
                                ['Email:', 'me@jackcarpenter.dev'],
                                ['Website:', 'https://jackcarpenter.dev']
                            ]
                        }
                    },
                    hr,
                    hr,
                    hr,
                    {
                        text: 'Technical Skills',
                        style: 'header'
                    },
                    {
                        layout: 'noBorders', // optional
                        table: {
                            // headers are automatically repeated if the table spans over multiple pages
                            // you can declare how many rows should be treated as headers
                            headerRows: 0,
                            widths: '50%',
                            body: technicalSkills
                        },
                        margin: [0, 15, 0, 0],
                        pageBreak: 'after'
                    },
                    {
                        text: 'Additional Skills',
                        style: 'header'
                    },
                    {
                        // to treat a paragraph as a bulleted list, set an array of items under the ul key
                        ul: additionalSkills,
                        margin: [170, 20, 0, 0],
                        style: 'list'
                    },
                    hr,
                    hr,
                    hr,
                    {
                        text: 'Hobbies and Interests',
                        style: 'header'
                    },
                    {
                        // to treat a paragraph as a bulleted list, set an array of items under the ul key
                        ul: hobbiesAndInterests,
                        margin: [170, 20, 0, 0],
                        style: 'list',
                        pageBreak: 'after'
                    },
                    {
                        text: 'Employment History',
                        style: 'header'
                    },
                    {
                        layout: 'noBorders', // optional
                        table: {
                            // headers are automatically repeated if the table spans over multiple pages
                            // you can declare how many rows should be treated as headers
                            headerRows: 0,
                            widths: '50%',
                            body: jobHistory
                        },
                        margin: [0, 20, 0, 0],
                        pageBreak: 'after'
                    },
                    {
                        text: 'Education',
                        style: 'header'
                    },
                    {
                        layout: 'noBorders', // optional
                        table: {
                            // headers are automatically repeated if the table spans over multiple pages
                            // you can declare how many rows should be treated as headers
                            headerRows: 0,
                            widths: '50%',
                            body: [educationHistory],
                            margin: [0, 20, 0, 0]
                        }
                    },
                    hr,
                    hr,
                    hr,
                    {
                        text: 'Short Courses',
                        style: 'header'
                    },
                    {
                        // to treat a paragraph as a bulleted list, set an array of items under the ul key
                        ul: shortCourses,
                        margin: [170, 20, 0, 0],
                        style: 'list'
                    },
                    hr,
                    hr,
                    hr,
                    {
                        text: 'References',
                        style: 'header'
                    },
                    {
                        layout: 'noBorders', // optional
                        table: {
                            // headers are automatically repeated if the table spans over multiple pages
                            // you can declare how many rows should be treated as headers
                            headerRows: 0,
                            widths: '50%',
                            body: [references]
                        },
                        margin: [0, 20, 0, 0]
                    }
                ],
                styles: {
                    title: {
                        fontSize: 27,
                        bold: true
                    },
                    header: {
                        fontSize: 22,
                        bold: true
                    },
                    list: {
                        alignment: 'left'
                    }
                },
                defaultStyle: {
                    alignment: 'center'
                }
            }
            pdfMake().then((pdfMakePromise) => {
                pdfMakePromise
                    .createPdf(docDefinition)
                    .download('Jack Carpenter CV.pdf')
            })
        }
    }
}
</script>
