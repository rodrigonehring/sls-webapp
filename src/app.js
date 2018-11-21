import './sass/main.scss'

import 'babel-polyfill'
import $ from 'jquery'
import Reveal from 'reveal.js'
import hljs from 'highlight.js'
import { RevealMarkdown } from 'reveal.js/plugin/markdown/markdown'

// Fontawesome setup
import fontawesome from '@fortawesome/fontawesome'
import fontawesomeSolid from '@fortawesome/fontawesome-free-solid'
fontawesome.library.add(fontawesomeSolid)

import pageJS from './slides/000-page-js.slide'
import pageHTML from './slides/000-page-html.slide.html'
import pageMarkDown from './slides/000-page-md.slide.md'
import pageIcons from './slides/000-page-icons.slide.html'

// Star Wars Theme
import swLead from './slides/100-sw-lead.slide.html'
import swTitle from './slides/100-sw-title.slide.html'
import swOpening from './slides/100-sw-opening.slide.html'
import swGif from './slides/100-sw-gif.slide.html'

import slide001 from './slides/001.slide.html'

import lambdaScope from './slides/lambda/scope.slide.md'
import lambdaLifecycle from './slides/lambda/lifecycle.slide.html'
import lambdaWhat from './slides/lambda/whatis.slide.html'
import lambdaEnd from './slides/lambda/end.slide.html'
import lambdaEnd1 from './slides/lambda/end1.slide.html'
import lambdaEnd2 from './slides/lambda/end2.slide.html'
import lambdaEnd3 from './slides/lambda/end3.slide.html'
import lambdaEnd4 from './slides/lambda/end4.slide.html'
import lambdaEdge from './slides/lambda/edge.slide.html'
import lambdaEdge1 from './slides/lambda/edge1.slide.html'
import lambdaEdge2 from './slides/lambda/edge2.slide.html'
import lambdaEdge3 from './slides/lambda/edge3.slide.html'
import lambdaEvents from './slides/lambda/events.slide.html'

import aboutMe from './slides/aboutMe.slide.html'
import caseGofind1 from './slides/gofind/gofind1.slide.html'
import caseGofind2 from './slides/gofind/gofind2.slide.html'
import caseGofind3 from './slides/gofind/gofind3.slide.html'
import caseGofind4 from './slides/gofind/gofind4.slide.html'

import sls1 from './slides/framework/1.slide.html'
import sls2 from './slides/framework/2.slide.html'
import sls3 from './slides/framework/3.slide.html'

import concept1 from './slides/concept/1.slide.html'
import concept2 from './slides/concept/benefits.slide.html'

import end from './slides/end.slide.html'

// -------------------------------------------------------------------------
// Slides
// -------------------------------------------------------------------------

function group(items) {
  const section = $('<section class="lead box-center space-around">')

  items.forEach((s) => section.append(s))

  return section
}

const slides = [
  slide001,
  aboutMe,

  group([caseGofind1, caseGofind2, caseGofind3, caseGofind4]),

  group([concept1, concept2]),

  group([
    lambdaWhat,
    lambdaEvents,
    lambdaLifecycle,
    lambdaScope,
    lambdaEnd,
    lambdaEnd1,
    lambdaEnd2,
    lambdaEnd3,
    lambdaEnd4,
    lambdaEdge,
    lambdaEdge1,
    lambdaEdge2,
    lambdaEdge3,
  ]),

  group([sls1, sls2, sls3]),


  group([end])

].forEach((s) => $('#slides').append(s))

// -------------------------------------------------------------------------
// Reveal.js Configuration
// -------------------------------------------------------------------------

Reveal.initialize({
  center: false,
  margin: 0,
  width: '100%',
  height: '100%',
  slideNumber: true,
  fragments: true,
  fragmentInURL: true,
  history: true,
})

RevealMarkdown.initialize()

hljs.initHighlightingOnLoad()
