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
              {{ cv.aboutMe.name }}
            </h2>
          </div>
          <div class="cv-entry uk-align-center">
            <b>Email:</b> <span> {{ cv.aboutMe.email }}</span>
            <br>
            <b>Location:</b> <span> {{ cv.aboutMe.location }}</span>
            <br>
            <b>LinkedIn:</b> <span> <a v-href="cv.aboutMe.linkedIn">{{ cv.aboutMe.linkedIn }}</a></span>
            <br>
            <b>GitHub:</b><span> <a v-href="cv.aboutMe.github">{{ cv.aboutMe.github }}</a></span>
          </div>

          <div class="cv-entry uk-align-center">
            <span>I am a Software Engineer who graduated from {{ cv.aboutMe.uniName }} with a {{ cv.aboutMe.uniDegree }}.</span>
            <br>
            <span>I have {{ yearsExperience }} years of professional experience in the field and I am currently employed as a {{ cv.aboutMe.jobTitle }} at {{ cv.aboutMe.jobName }}.</span>
            <br>
            <span>I have experience making native mobile apps, websites and software, i have worked on both monoliths and microservice architectures.</span>
            <br>
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
                class="cv-entry-item"
                v-html="item"
              />
            </div>
            <div>
              <b v-if="entry.content.length > 1">
                Roles and Responsibilities:
              </b>
              <ul>
                <div
                  v-for="(item, x) in entry.content"
                  :key="`job-history-content-${i}-${x}`"
                  class="cv-entry-item"
                  v-html="item"
                />
              </ul>
            </div>
            <div>
              <b v-if="entry.achievements.length > 1">
                Achievements:
              </b>
              <ul>
                <div
                  v-for="(item, x) in entry.achievements"
                  :key="`job-history-achievements-${i}-${x}`"
                  class="cv-entry-item"
                  v-html="item"
                />
              </ul>
            </div>
            <div>
              <b v-if="entry.achievements.length > 1">
                Achievements:
              </b>
              <ul>
                <div
                  v-for="(item, x) in entry.achievements"
                  :key="`job-history-achievements-${i}-${x}`"
                  class="cv-entry-item"
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
import aaf from '../../src/images/projects/aaf.png'
import dominoes from '../../src/images/education/dominoes.png'
import aboutMe from './AboutMePage.vue'
import { currentYear } from '../helpers/helpers'
import linkedInData from '../helpers/linkedInData.json'

import { mapActions } from 'vuex'
const pdfMakeFont = () => import('pdfmake/build/vfs_fonts')
const pdfMake = () => import('pdfmake')

export default {

  data () {
    const jobHistory = [
      {
        headerContent: [
          `<b>${linkedInData.job.startDate}</b>`,
          `<span>${linkedInData.job.name}</span>`,
          '<b>Position:</b>',
          `<span>${linkedInData.job.title}</span>`
        ],
        image: {
          file: aaf,
          base64: null
        },
        content: [
          '<li>Maintained current/legacy ruby and kotlin projects</li>',
          '<li>Scoped and implemented new features and fix bugs raised by stakeholders</li>',
          '<li>Experimented with new tools to see if they would help in projects or for developer QOL</li>',
          '<li>Provided experience to learning developers through guidance and pair programming</li>',
          '<li>Communicating with stakeholders to ensure the expected outcome in features and bug fixes is achieved</li>',
          '<li>Kept on top of CVES and dependency updates with the assistance of tools like dependabot and renovate</li>',
          '<li>Maintained the infrastructure for the projects in AWS K8s/github actions, actioned alerts when fired to ensure high uptime reliability</li>'
        ],
        achievements: [
          '<li>Moved The infrastructure away from ec2 boxes over to a container based EKS environment</li>',
          '<li>Migrated existing infrastructure on AWS away from cloudformation over to terraform to a much more git based infrastructure</li>',
          '<li>Implemented devops standard around metrics and alerts to empower developers to take control and ownership of their own projects</li>',
          '<li>Implemented devops standard git based deployments empowering owners of project to choose when and what to deploy via argocd</li>',
          '<li>Learned a lot about maintaining legacy code and improving it</li>',
          '<li>Removing a legacy reporting system and implementing it into an another existing application, required backfilling ~65 million records across multiple environments</li>',
          '<li>Built a some what simple nodejs app that is used to smokescreen all apps in a blue green style of deployments, increasing confidence in deployments</li>',
          '<li>Implemented a simple service that used structs to normalize the data from multiple services to communicate with UptimeRobot to automate management of alerting of our internal services and customer connected service providers</li>',
          '<li>Enforced new CI/CD processes on github to help automate more parts of the developer workflow, allowed developers to push their code into the cloud with a simple command</li>',
          '<li>Migrated the current deployment cycles away from a once a month deployment cycle with a approval from management process to a daily cycle with the future hopes to make each commit to production</li>'
        ],
        technologies: [
          '<li>Ruby on Rails</li>',
          '<li>Kotlin</li>',
          '<li>Javascript</li>',
          '<li>Typescript</li>',
          '<li>AWS</li>',
          '<li>Terraform</li>',
          '<li>Docker</li>',
          '<li>Kubernetes</li>',
          '<li>GitHub Actions</li>'
        ]
      },
      {
        headerContent: [
          '<b>September 2020 - May 2022</b>',
          '<span>Agworld</span>',
          '<b>Position:</b>',
          '<span>Full Stack Software Developer</span>'
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
          '<li>Upgraded various frameworks to be up to date</li>'
        ],
        achievements: [
          '<li>Learned a lot about maintaining legacy code and improving it</li>',
          '<li>Took a 12 year old react project that was stuck at react 14 up to react 18</li>',
          '<li>Upgraded a legacy john deere api implementation over to the latest version maintaining functionality in the process</li>',
          '<li>Implemented a simple icon uploading flow for farmers to be able to use custom pins on the map for notify farm hands of any dangers</li>',
          '<li>Helped begin implementation of enforcing various compliance rule system with the requirement of it having to be very flexible due to lack of requirements at the time </li>'
        ],
        technologies: [
          '<li>Ruby on Rails</li>',
          '<li>React</li>',
          '<li>Javascript</li>',
          '<li>AWS</li>',
          '<li>Docker</li>',
          '<li>Kubernetes</li>',
          '<li>GitHub Actions</li>',
          '<li>Buildkite</li>'
        ]
      },
      {
        headerContent: [
          '<b>May 2018 - August 2020</b>',
          '<span>Strange Animals</span>',
          '<b>Position:</b>',
          '<span>Lead Software Developer</span>'
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
          '<li>Created project specification documents</li>'
        ],
        achievements: [
          '<li>Built many CMS sites</li>',
          '<li>Built a few react native apps</li>',
          '<li>Built infrastructure used by whole company simplify every day tasks, a frontend dev could deploy</li>',
          '<li>Implemented CI/CD services for more streamlined deployment and testing processes</li>',
          '<li>Company won awards for design of sites (cant take direct credit, but i helped the frontend brains get there)</li>'
        ],
        technologies: [
          '<li>PHP</li>',
          '<li>Laravel</li>',
          '<li>Javascript</li>',
          '<li>Typescript</li>',
          '<li>React</li>',
          '<li>React-Native</li>',
          '<li>AWS</li>',
          '<li>Docker</li>',
          '<li>Kubernetes</li>',
          '<li>GitHub Actions</li>'
        ]
      },
      {
        headerContent: [
          '<b>February 2015 - May 2018</b>',
          '<span>Simplisite Business Solutions</span>',
          '<b>Position:</b>',
          '<span>Junior Software Developer - Senior Software Developer</span>'
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
        ],
        achievements: [
          '<li>Built 6 CMS sites with the company</li>',
          '<li>Built 2 react native apps with the company</li>',
          '<li>Built infrastructure used by whole company simplify every day tasks, a frontend dev could deploy</li>'
        ],
        technologies: [
          '<li>PHP</li>',
          '<li>Laravel</li>',
          '<li>Javascript</li>',
          '<li>Typescript</li>',
          '<li>React</li>',
          '<li>React-Native</li>',
          '<li>AWS</li>',
          '<li>Docker</li>',
          '<li>Kubernetes</li>',
          '<li>GitHub Actions</li>'
        ]
      },
      {
        headerContent: [
          '<b>September 2010 - February 2015</b>',
          '<span>Dominoes, Mandurah</span>',
          '<b>Position:</b>',
          '<span>Manager/Delivery Driver</span>'
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
        ],
        achievements: [
          '<li>Learned a lot about customer service and how to deal with customers</li>',
          '<li>Learned a lot about running a business and how to manage staff</li>',
          '<li>Learned a lot about working in a team environment</li>'
        ],
        technologies: [
          '<li>POS Systems</li>',
          '<li>Microsoft Office</li>',
          '<li>Google Docs</li>'
        ]
      }
    ]

    if (jobHistory.length % 2) {
      jobHistory.push({
        headerContent: [
          ''
        ],
        image: {
          file: null,
          base64: null
        },
        content: [
          ''
        ],
        achievements: [
          ''
        ],
        technologies: [
          ''
        ]
      })
    }
    return {
      cv: {
        aboutMe: {
          uniName: linkedInData.uni.name,
          uniDegree: linkedInData.uni.degree,
          jobTitle: linkedInData.job.title,
          jobName: linkedInData.job.name,
          name: 'Jack Carpenter',
          email: 'me@jackcarpenter.dev',
          website: 'https://jackcarpenter.dev',
          location: 'Perth, Western Australia',
          linkedIn: linkedInData.profile.url,
          github: 'https://github.com/phyzical'
        },
        technicalSkills: aboutMe.data().experiences.map(x => x.categories.length ? `<div class='uk-width-1-1'><b>${x.title}:</b></div><span>${x.categories.map(x => x.title).join(', ')}.</span>` : ``),
        additionalSkills: [
          '<li>Experience leading teams</li>',
          '<li>Experience writing technical specification documents</li>',
          '<li>Dedicated and driven</li>',
          '<li>Experience quoting projects</li>',
          '<li>Experience deriving clients wants into needs</li>',
          '<li>Experience with Test Driven Development</li>',
          '<li>Experience with CI/CD services to allow for increased automation and continuous integration</li>',
          '<li>Experience with AWS</li>',
          '<li>Experience with containerization and EKS</li>',
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
          '<li>Creating/implementing “shortcuts” for everyday life</li>',
          '<li>Doing my part to help with Open-Source projects when i can</li>',
          '<li>Love Programming</li>'
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
            headerContent: ['<b>2005 – 2009</b>'],
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
        jobHistory
      }
    }
  },
  computed: {
    yearsExperience () {
      return currentYear() - 2014
    },
    linkedInData () {
      return linkedInData
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
      const jobHistory = this.cv.jobHistory.filter((item) => item.content.length > 1)
        .map((item, i) => {
          const arr = []
          return arr.concat([
            ...item.headerContent.map((subItem, x) => {
              return {
                text: this.stripHtml(subItem),
                style: {
                  bold: x % 2 === 0
                },
                margin: x % 2 !== 0 ? [0, 0, 0, 20] : []
              }
            }),
            {
              text: 'Roles and Responsibilities',
              style: 'subHeader',
              margin: [30, 0, 0, 20]
            },
            {
              ul: item.content.map((subItem) => this.stripHtml(subItem)),
              style: 'list',
              margin: [30, 0, 0, 20]
            },
            {
              text: 'Achievements',
              style: 'subHeader',
              margin: [30, 0, 0, 20]
            },
            {
              ul: item.achievements.map((subItem) => this.stripHtml(subItem)),
              style: 'list',
              margin: [30, 0, 0, 20]
            },
            {
              text: 'Technologies',
              style: 'subHeader',
              margin: [30, 0, 0, 20]
            },
            {
              ul: item.technologies.map((subItem) => this.stripHtml(subItem)),
              style: 'list',
              margin: [30, 0, 0, 20]
            }
          ])
        })
        .chunk_inefficient(1)
      const educationHistory = this.cv.educationHistory.map((item) => [
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
        header: this.cv.aboutMe.name,
        info: {
          title: `${this.cv.aboutMe.name} CV`,
          author: this.cv.aboutMe.name
        },
        content: [
          {
            text: this.cv.aboutMe.name,
            style: 'title',
            margin: [0, 0, 0, 30]
          },
          {
            layout: 'noBorders',
            table: {
              // headers are automatically repeated if the table spans over multiple pages
              // you can declare how many rows should be treated as headers
              headerRows: 0,
              widths: '50%',
              body: [
                ['Email:', this.cv.aboutMe.email],
                ['Website:', this.cv.aboutMe.website],
                ['Location:', this.cv.aboutMe.location],
                ['LinkedIn:', this.cv.aboutMe.linkedIn],
                ['GitHub:', this.cv.aboutMe.github]
              ]
            }
          },
          {
            layout: 'noBorders',
            table: {
              // headers are automatically repeated if the table spans over multiple pages
              // you can declare how many rows should be treated as headers
              headerRows: 0,
              body: [
                [`I am a Software Engineer who graduated from ${this.cv.aboutMe.uniName} with a ${this.cv.aboutMe.uniDegree}.`],
                [`I have ${this.yearsExperience} years of professional experience in the field and I am currently employed as a ${this.cv.aboutMe.jobTitle} at ${this.cv.aboutMe.jobName}.`],
                ['I have experience making native mobile apps, websites and software, i have worked on both monoliths and microservice architectures.']
              ]
            },
            margin: [0, 20, 0, 20]

          },
          {
            text: 'Employment History',
            style: 'header'
          },
          {
            layout: 'noBorders',
            table: {
              // headers are automatically repeated if the table spans over multiple pages
              // you can declare how many rows should be treated as headers
              headerRows: 0,
              body: jobHistory
            },
            margin: [0, 20, 0, 0]
          },
          {
            text: 'Education',
            style: 'header'
          },
          {
            layout: 'noBorders',
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
            text: 'Technical Skills',
            style: 'header'
          },
          {
            layout: 'noBorders',
            table: {
              // headers are automatically repeated if the table spans over multiple pages
              // you can declare how many rows should be treated as headers
              headerRows: 0,
              widths: '50%',
              body: technicalSkills
            },
            margin: [0, 15, 0, 0]
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
            style: 'list'
          }
          // hr,
          // hr,
          // hr,
          // {
          //   text: 'References',
          //   style: 'header'
          // },
          // {
          //   layout: 'noBorders',
          //   table: {
          //     // headers are automatically repeated if the table spans over multiple pages
          //     // you can declare how many rows should be treated as headers
          //     headerRows: 0,
          //     widths: '50%',
          //     body: [references]
          //   },
          //   margin: [0, 20, 0, 0]
          // }
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
          subHeader: {
            fontSize: 16,
            bold: true,
            alignment: 'left'
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
          .download(`${this.cv.aboutMe.name} CV.pdf`)
      })
    }
  }
}
</script>
