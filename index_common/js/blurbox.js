




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>BlurBox/blurbox.js at gh-pages · nrbrook/BlurBox · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="nrbrook/BlurBox" name="twitter:title" /><meta content="BlurBox - A jQuery lightbox plugin which blurs the background" name="twitter:description" /><meta content="https://avatars1.githubusercontent.com/u/1141167?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars1.githubusercontent.com/u/1141167?s=400" property="og:image" /><meta content="nrbrook/BlurBox" property="og:title" /><meta content="https://github.com/nrbrook/BlurBox" property="og:url" /><meta content="BlurBox - A jQuery lightbox plugin which blurs the background" property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="72B349C8:159A:3C55CBF:537A0B1D" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="y5COVIUjCkXejQoeu0G6Bez9i7Rrp/qmQ6xvBSZ2RCJdkV0eSOXQFct07LJkrSrP3mNfygcamAnb3NuFKTBK1A==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-da7475c114a3c2eab7b91a0584202a89fd188935.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-a49192fef33ef6e2053a634597427056eb62d634.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="e22dc102a1df9d45c9f2153cbc5fc5b0">

      
  <meta name="description" content="BlurBox - A jQuery lightbox plugin which blurs the background" />

  <meta content="1141167" name="octolytics-dimension-user_id" /><meta content="nrbrook" name="octolytics-dimension-user_login" /><meta content="15571907" name="octolytics-dimension-repository_id" /><meta content="nrbrook/BlurBox" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="15571907" name="octolytics-dimension-repository_network_root_id" /><meta content="nrbrook/BlurBox" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/nrbrook/BlurBox/commits/gh-pages.atom" rel="alternate" title="Recent Commits to BlurBox:gh-pages" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fnrbrook%2FBlurBox%2Fblob%2Fgh-pages%2Fblurbox.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="nrbrook/BlurBox"
      data-branch="gh-pages"
      data-sha="0e706078005569ad7d9305f6f9d7ef1d9cc832ce"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="nrbrook/BlurBox" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
    <a href="/login?return_to=%2Fnrbrook%2FBlurBox"
    class="minibutton with-count star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>Star
  </a>

    <a class="social-count js-social-count" href="/nrbrook/BlurBox/stargazers">
      0
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fnrbrook%2FBlurBox"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/nrbrook/BlurBox/network" class="social-count">
        0
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/nrbrook" class="url fn" itemprop="url" rel="author"><span itemprop="title">nrbrook</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/nrbrook/BlurBox" class="js-current-repository js-repo-home-link">BlurBox</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/nrbrook/BlurBox" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /nrbrook/BlurBox">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/nrbrook/BlurBox/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues /nrbrook/BlurBox/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/nrbrook/BlurBox/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /nrbrook/BlurBox/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/nrbrook/BlurBox/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /nrbrook/BlurBox/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/nrbrook/BlurBox/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /nrbrook/BlurBox/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/nrbrook/BlurBox/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /nrbrook/BlurBox/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/nrbrook/BlurBox.git" readonly>
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/nrbrook/BlurBox.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/nrbrook/BlurBox" readonly>
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/nrbrook/BlurBox" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/nrbrook/BlurBox" class="minibutton sidebar-button js-conduit-rewrite-url" title="Save nrbrook/BlurBox to your computer and use it in GitHub Desktop." aria-label="Save nrbrook/BlurBox to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/nrbrook/BlurBox/archive/gh-pages.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download nrbrook/BlurBox as a zip file"
                   title="Download nrbrook/BlurBox as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<a href="/nrbrook/BlurBox/blob/9acbbe578a4033e6f13935a0c0edc8299e9456c6/blurbox.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:880fa81686462bf73c66a8f20be0e52d -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/nrbrook/BlurBox/find/gh-pages" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="gh-pages"
    data-ref="gh-pages"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">gh-pages</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/nrbrook/BlurBox/blob/gh-pages/blurbox.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/nrbrook/BlurBox" data-branch="gh-pages" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">BlurBox</span></a></span></span><span class="separator"> / </span><strong class="final-path">blurbox.js</strong> <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="blurbox.js" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>
</div>


  <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/nrbrook/BlurBox/contributors/gh-pages/blurbox.js">
    Fetching contributors…

    <div class="participation">
      <p class="loader-loading"><img alt="Octocat-spinner-32-eaf2f5" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" /></p>
      <p class="loader-error">Cannot retrieve contributors at this time</p>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>301 lines (271 sloc)</span>
          <span class="meta-divider"></span>
        <span>9.577 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w js-conduit-openfile-check"
               href="http://mac.github.com"
               data-url="github-mac://openRepo/https://github.com/nrbrook/BlurBox?branch=gh-pages&amp;filepath=blurbox.js"
               aria-label="Open this file in GitHub for Mac"
               data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
              <a class="minibutton disabled tooltipped tooltipped-w" href="#"
                 aria-label="You must be signed in to make or propose changes">Edit</a>
          <a href="/nrbrook/BlurBox/raw/gh-pages/blurbox.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/nrbrook/BlurBox/blame/gh-pages/blurbox.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/nrbrook/BlurBox/commits/gh-pages/blurbox.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger disabled empty-icon tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="p">;(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">factory</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2'>    <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">define</span> <span class="o">===</span> <span class="s1">'function'</span> <span class="o">&&</span> <span class="nx">define</span><span class="p">.</span><span class="nx">amd</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3'>        <span class="c1">// AMD. Register as an anonymous module.</span></div><div class='line' id='LC4'>        <span class="nx">define</span><span class="p">([</span><span class="s1">'jquery'</span><span class="p">],</span> <span class="nx">factory</span><span class="p">);</span></div><div class='line' id='LC5'>    <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC6'>        <span class="c1">// Browser globals</span></div><div class='line' id='LC7'>        <span class="nx">factory</span><span class="p">(</span><span class="nx">jQuery</span><span class="p">);</span></div><div class='line' id='LC8'>    <span class="p">}</span></div><div class='line' id='LC9'><span class="p">}(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">$</span><span class="p">,</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC10'>	<span class="s2">"use strict"</span><span class="p">;</span></div><div class='line' id='LC11'><br/></div><div class='line' id='LC12'>	<span class="kd">var</span> <span class="nx">style</span> <span class="o">=</span> <span class="s1">'\</span></div><div class='line' id='LC13'><span class="s1">body, html { width: 100%; height: 100%; margin: 0; padding: 0; }\</span></div><div class='line' id='LC14'><span class="s1">.blurbox-noscroll { overflow: hidden; height: 100%; width: 100%; }\</span></div><div class='line' id='LC15'><span class="s1">.blurbox-hidden { display: none !important; }\</span></div><div class='line' id='LC16'><span class="s1">#blurbox-wrapper { overflow: auto; padding: 10px; border-radius: 5px; background-color: white; opacity: 0; position: fixed; top: 50%; left: 50%; z-index: 9999; width: 50%; height: 50%; max-width: 95%; max-height: 95%; display: block; box-sizing: border-box; }\</span></div><div class='line' id='LC17'><span class="s1">#blurbox-wrapper.blurbox-show { opacity: 1; }\</span></div><div class='line' id='LC18'><span class="s1">#blurbox-darkenbg { opacity: 0; top: 0; left: 0; z-index: 9998; position: fixed; height: 100%; width: 100%; }\</span></div><div class='line' id='LC19'><span class="s1">#blurbox-darkenbg.blurbox-show { opacity: 1; }\</span></div><div class='line' id='LC20'><span class="s1">@media (max-width: 480px) {\</span></div><div class='line' id='LC21'><span class="s1">	#blurbox-wrapper { margin: 0; left: 0; height: 100%; width: 100%; top: 100%; opacity: 1; border-radius: 0; max-height: none; max-width: none; }\</span></div><div class='line' id='LC22'><span class="s1">	#blurbox-wrapper.blurbox-show { top: 0; }\</span></div><div class='line' id='LC23'><span class="s1">}\</span></div><div class='line' id='LC24'><span class="s1">'</span><span class="p">,</span></div><div class='line' id='LC25'><span class="nx">ffsvg</span> <span class="o">=</span> <span class="s1">'url("data:image/svg+xml;utf8,'</span><span class="o">+</span><span class="nb">encodeURIComponent</span><span class="p">(</span><span class="s1">'<svg version="1.1" xmlns="http://www.w3.org/2000/svg"><filter id="blur"><feGaussianBlur stdDeviation="'</span><span class="p">)</span><span class="o">+</span><span class="s1">'{blur}'</span><span class="o">+</span><span class="nb">encodeURIComponent</span><span class="p">(</span><span class="s1">'" /></filter></svg>'</span><span class="p">)</span><span class="o">+</span><span class="s1">'#blur")'</span><span class="p">;</span></div><div class='line' id='LC26'><br/></div><div class='line' id='LC27'>	<span class="nx">$</span><span class="p">(</span><span class="s1">'head'</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="s1">'<style>'</span><span class="o">+</span><span class="nx">style</span><span class="o">+</span><span class="s1">'</style>'</span><span class="p">);</span></div><div class='line' id='LC28'>	<span class="kd">var</span> <span class="nx">pluginName</span> <span class="o">=</span> <span class="s1">'blurbox'</span><span class="p">,</span></div><div class='line' id='LC29'>		<span class="nx">plugin</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">element</span><span class="p">,</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC30'>	        <span class="k">this</span><span class="p">.</span><span class="nx">element</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">element</span><span class="p">);</span></div><div class='line' id='LC31'>	        <span class="k">this</span><span class="p">.</span><span class="nx">options</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span> <span class="p">{},</span> <span class="nx">plugin</span><span class="p">.</span><span class="nx">defaults</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC32'>	        <span class="k">this</span><span class="p">.</span><span class="nx">_init</span><span class="p">();</span></div><div class='line' id='LC33'>	    <span class="p">};</span></div><div class='line' id='LC34'><br/></div><div class='line' id='LC35'>	<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">plugin</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC36'>		<span class="nx">defaults</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC37'>			<span class="nx">blur</span><span class="o">:</span> <span class="mi">3</span><span class="p">,</span></div><div class='line' id='LC38'>			<span class="nx">animateBlur</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC39'>			<span class="nx">duration</span><span class="o">:</span> <span class="mi">300</span><span class="p">,</span></div><div class='line' id='LC40'>			<span class="nx">autosize</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC41'>			<span class="nx">bgColor</span><span class="o">:</span> <span class="s1">'rgba(0,0,0,0.2)'</span><span class="p">,</span></div><div class='line' id='LC42'>			<span class="nx">bodyContent</span><span class="o">:</span> <span class="kc">null</span></div><div class='line' id='LC43'>		<span class="p">},</span></div><div class='line' id='LC44'>		<span class="nx">activeBlurbox</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC45'>		<span class="nx">darkenbg</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC46'>		<span class="nx">wrapper</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC47'>		<span class="nx">bodyContent</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC48'>		<span class="nx">styleProps</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC49'>			<span class="nx">filter</span><span class="o">:</span> <span class="s1">'filter'</span><span class="p">,</span></div><div class='line' id='LC50'>			<span class="nx">transition</span><span class="o">:</span> <span class="s1">'transition'</span><span class="p">,</span></div><div class='line' id='LC51'>		<span class="p">},</span></div><div class='line' id='LC52'>		<span class="nx">cssProps</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC53'>			<span class="nx">filter</span><span class="o">:</span> <span class="s1">'filter'</span><span class="p">,</span></div><div class='line' id='LC54'>			<span class="nx">transition</span><span class="o">:</span> <span class="s1">'transition'</span></div><div class='line' id='LC55'>		<span class="p">},</span></div><div class='line' id='LC56'>		<span class="nx">stylePropVals</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC57'>			<span class="nx">filter</span><span class="o">:</span> <span class="s1">'blur({blur}px)'</span><span class="p">,</span></div><div class='line' id='LC58'>			<span class="nx">transition</span><span class="o">:</span> <span class="s1">'{prop} {dur}ms'</span></div><div class='line' id='LC59'>		<span class="p">},</span></div><div class='line' id='LC60'>		<span class="nx">stylePrefixes</span><span class="o">:</span> <span class="p">[</span><span class="s1">'Moz'</span><span class="p">,</span> <span class="s1">'Webkit'</span><span class="p">,</span> <span class="s1">'Khtml'</span><span class="p">,</span> <span class="s1">'O'</span><span class="p">,</span> <span class="s1">'Ms'</span><span class="p">],</span></div><div class='line' id='LC61'>		<span class="nx">transitionEndEvents</span><span class="o">:</span> <span class="s1">'webkitTransitionEnd mozTransitionEnd msTransitionEnd oTransitionEnd'</span><span class="p">,</span></div><div class='line' id='LC62'>		<span class="nx">_init</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC63'>			<span class="k">this</span><span class="p">.</span><span class="nx">darkenbg</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">'#blurbox-darkenbg'</span><span class="p">);</span></div><div class='line' id='LC64'>			<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">darkenbg</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC65'>				<span class="k">this</span><span class="p">.</span><span class="nx">darkenbg</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">'<div id="blurbox-darkenbg" class="blurbox-hidden">'</span><span class="p">);</span></div><div class='line' id='LC66'>				<span class="nx">$</span><span class="p">(</span><span class="s1">'body'</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">darkenbg</span><span class="p">);</span></div><div class='line' id='LC67'>				<span class="k">this</span><span class="p">.</span><span class="nx">darkenbg</span><span class="p">.</span><span class="nx">click</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC68'>					<span class="nx">plugin</span><span class="p">.</span><span class="nx">activeBlurbox</span><span class="p">.</span><span class="nx">hide</span><span class="p">();</span></div><div class='line' id='LC69'>				<span class="p">});</span></div><div class='line' id='LC70'>			<span class="p">}</span></div><div class='line' id='LC71'><br/></div><div class='line' id='LC72'>			<span class="k">this</span><span class="p">.</span><span class="nx">wrapper</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">'#blurbox-wrapper'</span><span class="p">);</span></div><div class='line' id='LC73'>			<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">wrapper</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC74'>				<span class="k">this</span><span class="p">.</span><span class="nx">wrapper</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">'<div id="blurbox-wrapper" class="blurbox-hidden">'</span><span class="p">);</span></div><div class='line' id='LC75'>				<span class="nx">$</span><span class="p">(</span><span class="s1">'body'</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">wrapper</span><span class="p">);</span></div><div class='line' id='LC76'>			<span class="p">}</span></div><div class='line' id='LC77'><br/></div><div class='line' id='LC78'>			<span class="k">this</span><span class="p">.</span><span class="nx">bodyContent</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">'body'</span><span class="p">).</span><span class="nx">children</span><span class="p">(</span><span class="s1">':first'</span><span class="p">);</span></div><div class='line' id='LC79'><br/></div><div class='line' id='LC80'>			<span class="k">this</span><span class="p">.</span><span class="nx">_determineProps</span><span class="p">();</span></div><div class='line' id='LC81'>		<span class="p">},</span></div><div class='line' id='LC82'>		<span class="nx">_testStylePrefixes</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">s</span><span class="p">,</span> <span class="nx">prop</span><span class="p">,</span> <span class="nx">testVal</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC83'>			<span class="c1">// test no prefix first</span></div><div class='line' id='LC84'>			<span class="k">if</span><span class="p">(</span><span class="nx">s</span><span class="p">[</span><span class="nx">prop</span><span class="p">]</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC85'>				<span class="nx">s</span><span class="p">[</span><span class="nx">prop</span><span class="p">]</span> <span class="o">=</span> <span class="nx">testVal</span><span class="p">;</span></div><div class='line' id='LC86'>				<span class="k">if</span><span class="p">(</span><span class="nx">s</span><span class="p">[</span><span class="nx">testprop</span><span class="p">]</span> <span class="o">===</span> <span class="nx">testVal</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC87'>					<span class="nx">plugin</span><span class="p">.</span><span class="nx">styleProps</span><span class="p">[</span><span class="nx">prop</span><span class="p">]</span> <span class="o">=</span> <span class="nx">prop</span><span class="p">;</span></div><div class='line' id='LC88'>					<span class="nx">plugin</span><span class="p">.</span><span class="nx">cssProps</span><span class="p">[</span><span class="nx">prop</span><span class="p">]</span> <span class="o">=</span> <span class="nx">prop</span><span class="p">;</span></div><div class='line' id='LC89'>					<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC90'>				<span class="p">}</span></div><div class='line' id='LC91'>			<span class="p">}</span></div><div class='line' id='LC92'>			<span class="kd">var</span> <span class="nx">capprop</span> <span class="o">=</span> <span class="nx">prop</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="mi">1</span><span class="p">).</span><span class="nx">toUpperCase</span><span class="p">()</span><span class="o">+</span><span class="nx">prop</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="mi">1</span><span class="p">),</span></div><div class='line' id='LC93'>				<span class="nx">testprop</span><span class="p">;</span></div><div class='line' id='LC94'>			<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">stylePrefixes</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span><span class="nx">v</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC95'>				<span class="nx">testprop</span> <span class="o">=</span> <span class="nx">v</span><span class="o">+</span><span class="nx">capprop</span><span class="p">;</span></div><div class='line' id='LC96'>				<span class="c1">// check if the property exists</span></div><div class='line' id='LC97'>				<span class="k">if</span><span class="p">(</span><span class="nx">s</span><span class="p">[</span><span class="nx">testprop</span><span class="p">]</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC98'>					<span class="c1">// try setting it (for webkit)</span></div><div class='line' id='LC99'>					<span class="nx">s</span><span class="p">[</span><span class="nx">testprop</span><span class="p">]</span> <span class="o">=</span> <span class="nx">testVal</span><span class="p">;</span></div><div class='line' id='LC100'>					<span class="k">if</span><span class="p">(</span><span class="nx">s</span><span class="p">[</span><span class="nx">testprop</span><span class="p">]</span> <span class="o">===</span> <span class="nx">testVal</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC101'>						<span class="nx">plugin</span><span class="p">.</span><span class="nx">styleProps</span><span class="p">[</span><span class="nx">prop</span><span class="p">]</span> <span class="o">=</span> <span class="nx">testprop</span><span class="p">;</span></div><div class='line' id='LC102'>						<span class="nx">plugin</span><span class="p">.</span><span class="nx">cssProps</span><span class="p">[</span><span class="nx">prop</span><span class="p">]</span> <span class="o">=</span> <span class="s1">'-'</span><span class="o">+</span><span class="nx">v</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span><span class="o">+</span><span class="s1">'-'</span><span class="o">+</span><span class="nx">prop</span><span class="p">;</span></div><div class='line' id='LC103'>						<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC104'>					<span class="p">}</span></div><div class='line' id='LC105'>				<span class="p">}</span></div><div class='line' id='LC106'>			<span class="p">});</span></div><div class='line' id='LC107'>		<span class="p">},</span></div><div class='line' id='LC108'>		<span class="nx">_determineProps</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC109'>			<span class="kd">var</span> <span class="nx">s</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">'<div>'</span><span class="p">)[</span><span class="mi">0</span><span class="p">].</span><span class="nx">style</span><span class="p">;</span></div><div class='line' id='LC110'>			<span class="nx">plugin</span><span class="p">.</span><span class="nx">_testStylePrefixes</span><span class="p">(</span><span class="nx">s</span><span class="p">,</span> <span class="s1">'filter'</span><span class="p">,</span> <span class="s1">'blur(3px)'</span><span class="p">)</span></div><div class='line' id='LC111'>			<span class="k">if</span><span class="p">(</span><span class="nx">plugin</span><span class="p">.</span><span class="nx">styleProps</span><span class="p">.</span><span class="nx">filter</span> <span class="o">===</span> <span class="s1">'filter'</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC112'>				<span class="c1">// test for moz</span></div><div class='line' id='LC113'>				<span class="kd">var</span> <span class="nx">testval</span> <span class="o">=</span> <span class="nx">ffsvg</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="s1">'{blur}'</span><span class="p">,</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC114'>				<span class="nx">s</span><span class="p">.</span><span class="nx">filter</span> <span class="o">=</span> <span class="nx">testval</span><span class="p">;</span></div><div class='line' id='LC115'>				<span class="k">if</span><span class="p">(</span><span class="nx">s</span><span class="p">.</span><span class="nx">filter</span> <span class="o">===</span> <span class="nx">testval</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC116'>					<span class="nx">plugin</span><span class="p">.</span><span class="nx">stylePropVals</span><span class="p">.</span><span class="nx">filter</span> <span class="o">=</span> <span class="nx">ffsvg</span><span class="p">;</span></div><div class='line' id='LC117'>				<span class="p">}</span></div><div class='line' id='LC118'>			<span class="p">}</span></div><div class='line' id='LC119'>			<span class="nx">plugin</span><span class="p">.</span><span class="nx">_testStylePrefixes</span><span class="p">(</span><span class="nx">s</span><span class="p">,</span> <span class="s1">'transition'</span><span class="p">,</span> <span class="s1">'width 100ms'</span><span class="p">);</span></div><div class='line' id='LC120'>		<span class="p">},</span></div><div class='line' id='LC121'>		<span class="nx">_applyProp</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span><span class="nx">prop</span><span class="p">,</span><span class="nx">subs</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC122'>			<span class="kd">var</span> <span class="nx">val</span> <span class="o">=</span> <span class="nx">plugin</span><span class="p">.</span><span class="nx">stylePropVals</span><span class="p">[</span><span class="nx">prop</span><span class="p">];</span></div><div class='line' id='LC123'>			<span class="k">if</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">isPlainObject</span><span class="p">(</span><span class="nx">subs</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC124'>				<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">subs</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span><span class="nx">v</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC125'>					<span class="nx">val</span> <span class="o">=</span> <span class="nx">val</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="s1">'{'</span><span class="o">+</span><span class="nx">k</span><span class="o">+</span><span class="s1">'}'</span><span class="p">,</span> <span class="nx">v</span><span class="p">);</span></div><div class='line' id='LC126'>				<span class="p">});</span></div><div class='line' id='LC127'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC128'>				<span class="c1">// array of property values</span></div><div class='line' id='LC129'>				<span class="kd">var</span> <span class="nx">vals</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC130'>				<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">subs</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span><span class="nx">sub</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC131'>					<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">sub</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span><span class="nx">v</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC132'>						<span class="nx">vals</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">val</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="s1">'{'</span><span class="o">+</span><span class="nx">k</span><span class="o">+</span><span class="s1">'}'</span><span class="p">,</span> <span class="nx">v</span><span class="p">));</span></div><div class='line' id='LC133'>					<span class="p">});</span></div><div class='line' id='LC134'>				<span class="p">});</span></div><div class='line' id='LC135'>				<span class="nx">val</span> <span class="o">=</span> <span class="nx">vals</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">', '</span><span class="p">);</span></div><div class='line' id='LC136'>			<span class="p">}</span></div><div class='line' id='LC137'><br/></div><div class='line' id='LC138'>			<span class="nx">el</span><span class="p">.</span><span class="nx">style</span><span class="p">[</span><span class="nx">plugin</span><span class="p">.</span><span class="nx">styleProps</span><span class="p">[</span><span class="nx">prop</span><span class="p">]]</span> <span class="o">=</span> <span class="nx">val</span><span class="p">;</span></div><div class='line' id='LC139'>		<span class="p">},</span></div><div class='line' id='LC140'>		<span class="nx">_removeProp</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="nx">prop</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC141'>			<span class="nx">el</span><span class="p">.</span><span class="nx">style</span><span class="p">[</span><span class="nx">plugin</span><span class="p">.</span><span class="nx">styleProps</span><span class="p">[</span><span class="nx">prop</span><span class="p">]]</span> <span class="o">=</span> <span class="s1">''</span><span class="p">;</span></div><div class='line' id='LC142'>		<span class="p">},</span></div><div class='line' id='LC143'>		<span class="nx">hide</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC144'>			<span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">activeBlurbox</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC145'>				<span class="k">this</span><span class="p">.</span><span class="nx">activeBlurbox</span><span class="p">.</span><span class="nx">hide</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC146'>			<span class="p">}</span></div><div class='line' id='LC147'>		<span class="p">}</span></div><div class='line' id='LC148'>	<span class="p">});</span></div><div class='line' id='LC149'><br/></div><div class='line' id='LC150'>	<span class="nx">plugin</span><span class="p">.</span><span class="nx">_init</span><span class="p">();</span></div><div class='line' id='LC151'><br/></div><div class='line' id='LC152'>	<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">plugin</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC153'>		<span class="nx">_init</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC154'>			<span class="k">this</span><span class="p">.</span><span class="nx">displayed</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC155'>			<span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="p">.</span><span class="nx">detach</span><span class="p">();</span></div><div class='line' id='LC156'>			<span class="k">this</span><span class="p">.</span><span class="nx">applyOptions</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC157'>		<span class="p">},</span></div><div class='line' id='LC158'><br/></div><div class='line' id='LC159'>		<span class="nx">applyOptions</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC160'>			<span class="k">this</span><span class="p">.</span><span class="nx">options</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span> <span class="p">{},</span> <span class="nx">plugin</span><span class="p">.</span><span class="nx">defaults</span><span class="p">,</span> <span class="nx">options</span><span class="p">);;</span></div><div class='line' id='LC161'><br/></div><div class='line' id='LC162'>			<span class="k">this</span><span class="p">.</span><span class="nx">bodyContent</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">bodyContent</span> <span class="o">||</span> <span class="nx">plugin</span><span class="p">.</span><span class="nx">bodyContent</span><span class="p">;</span></div><div class='line' id='LC163'>			<span class="k">this</span><span class="p">.</span><span class="nx">bodyContent</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">'blurbox-bodyContent'</span><span class="p">);</span></div><div class='line' id='LC164'><br/></div><div class='line' id='LC165'>			<span class="c1">// apply styles</span></div><div class='line' id='LC166'>			<span class="kd">var</span> <span class="nx">isSmall</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">'body'</span><span class="p">).</span><span class="nx">width</span><span class="p">()</span> <span class="o"><=</span> <span class="mi">480</span><span class="p">;</span></div><div class='line' id='LC167'>			<span class="nx">plugin</span><span class="p">.</span><span class="nx">_applyProp</span><span class="p">(</span><span class="nx">plugin</span><span class="p">.</span><span class="nx">wrapper</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="s1">'transition'</span><span class="p">,</span> <span class="p">{</span><span class="nx">prop</span><span class="o">:</span><span class="nx">isSmall</span> <span class="o">?</span> <span class="s1">'top'</span> <span class="o">:</span> <span class="s1">'opacity'</span><span class="p">,</span><span class="nx">dur</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">duration</span><span class="p">});</span></div><div class='line' id='LC168'>			<span class="nx">plugin</span><span class="p">.</span><span class="nx">_applyProp</span><span class="p">(</span><span class="nx">plugin</span><span class="p">.</span><span class="nx">darkenbg</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="s1">'transition'</span><span class="p">,</span> <span class="p">{</span><span class="nx">prop</span><span class="o">:</span><span class="s1">'opacity'</span><span class="p">,</span><span class="nx">dur</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">duration</span><span class="p">});</span></div><div class='line' id='LC169'>			<span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">animateBlur</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC170'>				<span class="nx">plugin</span><span class="p">.</span><span class="nx">_applyProp</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">bodyContent</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="s1">'transition'</span><span class="p">,</span> <span class="p">{</span><span class="nx">prop</span><span class="o">:</span><span class="nx">plugin</span><span class="p">.</span><span class="nx">cssProps</span><span class="p">.</span><span class="nx">filter</span><span class="p">,</span><span class="nx">dur</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">duration</span><span class="p">});</span></div><div class='line' id='LC171'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC172'>				<span class="nx">plugin</span><span class="p">.</span><span class="nx">_removeProp</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">bodyContent</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="s1">'transition'</span><span class="p">);</span></div><div class='line' id='LC173'>			<span class="p">}</span></div><div class='line' id='LC174'><br/></div><div class='line' id='LC175'>			<span class="nx">plugin</span><span class="p">.</span><span class="nx">darkenbg</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">'backgroundColor'</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">bgColor</span> <span class="o">||</span> <span class="s1">''</span><span class="p">);</span></div><div class='line' id='LC176'>		<span class="p">},</span></div><div class='line' id='LC177'><br/></div><div class='line' id='LC178'>		<span class="nx">show</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC179'>			<span class="k">this</span><span class="p">.</span><span class="nx">applyOptions</span><span class="p">((</span><span class="nx">options</span> <span class="o">&&</span> <span class="nx">$</span><span class="p">.</span><span class="nx">isPlainObject</span><span class="p">(</span><span class="nx">options</span><span class="p">))</span> <span class="o">||</span> <span class="p">{});</span></div><div class='line' id='LC180'><br/></div><div class='line' id='LC181'>			<span class="k">if</span><span class="p">(</span><span class="nx">plugin</span><span class="p">.</span><span class="nx">activeBlurbox</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC182'>				<span class="nx">plugin</span><span class="p">.</span><span class="nx">activeBlurbox</span><span class="p">.</span><span class="nx">hide</span><span class="p">();</span></div><div class='line' id='LC183'>			<span class="p">}</span></div><div class='line' id='LC184'><br/></div><div class='line' id='LC185'>			<span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">'blurbox.willShow'</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC186'><br/></div><div class='line' id='LC187'>			<span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="p">.</span><span class="nx">detach</span><span class="p">();</span></div><div class='line' id='LC188'><br/></div><div class='line' id='LC189'>			<span class="kd">var</span> <span class="nx">isBig</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">'body'</span><span class="p">).</span><span class="nx">width</span><span class="p">()</span> <span class="o">></span> <span class="mi">480</span><span class="p">;</span></div><div class='line' id='LC190'>			<span class="k">if</span><span class="p">(</span><span class="nx">isBig</span> <span class="o">&&</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">autosize</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC191'>				<span class="k">this</span><span class="p">.</span><span class="nx">autosize</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC192'>			<span class="p">}</span></div><div class='line' id='LC193'><br/></div><div class='line' id='LC194'>			<span class="c1">// prevent scroll on body</span></div><div class='line' id='LC195'>			<span class="k">this</span><span class="p">.</span><span class="nx">bodyContent</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">'blurbox-noscroll'</span><span class="p">);</span></div><div class='line' id='LC196'>			<span class="c1">// set the popup content and 'show' it</span></div><div class='line' id='LC197'>			<span class="nx">plugin</span><span class="p">.</span><span class="nx">wrapper</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="p">);</span></div><div class='line' id='LC198'>			<span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="p">.</span><span class="nx">show</span><span class="p">();</span></div><div class='line' id='LC199'>			<span class="c1">// blur it</span></div><div class='line' id='LC200'>			<span class="k">if</span><span class="p">(</span><span class="nx">isBig</span> <span class="o">&&</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">animateBlur</span> <span class="o">&&</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">blur</span> <span class="o">></span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC201'>				<span class="nx">plugin</span><span class="p">.</span><span class="nx">_applyProp</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">bodyContent</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="s1">'filter'</span><span class="p">,</span> <span class="p">{</span><span class="nx">blur</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">blur</span><span class="p">});</span></div><div class='line' id='LC202'>			<span class="p">}</span></div><div class='line' id='LC203'>			<span class="nx">plugin</span><span class="p">.</span><span class="nx">wrapper</span><span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="s1">'blurbox-hidden'</span><span class="p">);</span></div><div class='line' id='LC204'>			<span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">bgColor</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC205'>				<span class="nx">plugin</span><span class="p">.</span><span class="nx">darkenbg</span><span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="s1">'blurbox-hidden'</span><span class="p">);</span></div><div class='line' id='LC206'>			<span class="p">}</span></div><div class='line' id='LC207'>			<span class="k">if</span><span class="p">(</span><span class="nx">isBig</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC208'>				<span class="nx">plugin</span><span class="p">.</span><span class="nx">wrapper</span><span class="p">.</span><span class="nx">css</span><span class="p">({</span><span class="s1">'margin-left'</span><span class="o">:</span><span class="s1">'-'</span><span class="o">+</span><span class="p">(</span><span class="nx">plugin</span><span class="p">.</span><span class="nx">wrapper</span><span class="p">.</span><span class="nx">width</span><span class="p">()</span><span class="o">/</span><span class="mi">2</span><span class="p">)</span><span class="o">+</span><span class="s1">'px'</span><span class="p">,</span> <span class="s1">'margin-top'</span><span class="o">:</span><span class="s1">'-'</span><span class="o">+</span><span class="p">(</span><span class="nx">plugin</span><span class="p">.</span><span class="nx">wrapper</span><span class="p">.</span><span class="nx">height</span><span class="p">()</span><span class="o">/</span><span class="mi">2</span><span class="p">)</span><span class="o">+</span><span class="s1">'px'</span><span class="p">})</span></div><div class='line' id='LC209'>			<span class="p">}</span></div><div class='line' id='LC210'><br/></div><div class='line' id='LC211'>			<span class="kd">var</span> <span class="nx">t</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span></div><div class='line' id='LC212'>				<span class="nx">endAnim</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC213'>					<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">t</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">animateBlur</span> <span class="o">&&</span> <span class="nx">t</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">blur</span> <span class="o">></span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC214'>						<span class="nx">plugin</span><span class="p">.</span><span class="nx">_applyProp</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">bodyContent</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="s1">'filter'</span><span class="p">,</span> <span class="p">{</span><span class="nx">blur</span><span class="o">:</span><span class="nx">t</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">blur</span><span class="p">});</span></div><div class='line' id='LC215'>					<span class="p">}</span></div><div class='line' id='LC216'>					<span class="nx">plugin</span><span class="p">.</span><span class="nx">wrapper</span><span class="p">.</span><span class="nx">off</span><span class="p">(</span><span class="nx">plugin</span><span class="p">.</span><span class="nx">tranisitionEndEvents</span><span class="p">);</span></div><div class='line' id='LC217'>					<span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">timeout</span><span class="p">);</span></div><div class='line' id='LC218'>				<span class="p">},</span></div><div class='line' id='LC219'>				<span class="nx">timeout</span><span class="p">;</span></div><div class='line' id='LC220'>			<span class="c1">// set timeout at 0 to let elements be rendered first after display:none has been removed</span></div><div class='line' id='LC221'>			<span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC222'>				<span class="nx">plugin</span><span class="p">.</span><span class="nx">wrapper</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">'blurbox-show'</span><span class="p">);</span></div><div class='line' id='LC223'>				<span class="k">if</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">bgColor</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC224'>					<span class="nx">plugin</span><span class="p">.</span><span class="nx">darkenbg</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">'blurbox-show'</span><span class="p">);</span></div><div class='line' id='LC225'>				<span class="p">}</span></div><div class='line' id='LC226'>				<span class="nx">t</span><span class="p">.</span><span class="nx">bodyContent</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">'click.blurbox'</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">proxy</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">hide</span><span class="p">,</span><span class="nx">t</span><span class="p">));</span></div><div class='line' id='LC227'><br/></div><div class='line' id='LC228'>				<span class="nx">timeout</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="nx">endAnim</span><span class="p">,</span> <span class="nx">t</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">duration</span><span class="o">+</span><span class="mi">50</span><span class="p">);</span></div><div class='line' id='LC229'>				<span class="nx">plugin</span><span class="p">.</span><span class="nx">wrapper</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="nx">plugin</span><span class="p">.</span><span class="nx">tranisitionEndEvents</span><span class="p">,</span> <span class="nx">endAnim</span><span class="p">);</span></div><div class='line' id='LC230'>			<span class="p">},</span><span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC231'><br/></div><div class='line' id='LC232'>			<span class="k">this</span><span class="p">.</span><span class="nx">displayed</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC233'>			<span class="nx">plugin</span><span class="p">.</span><span class="nx">activeBlurbox</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC234'><br/></div><div class='line' id='LC235'>			<span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">'blurbox.didShow'</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC236'><br/></div><div class='line' id='LC237'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC238'>		<span class="p">},</span></div><div class='line' id='LC239'><br/></div><div class='line' id='LC240'>		<span class="nx">hide</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC241'>			<span class="k">this</span><span class="p">.</span><span class="nx">applyOptions</span><span class="p">((</span><span class="nx">options</span> <span class="o">&&</span> <span class="nx">$</span><span class="p">.</span><span class="nx">isPlainObject</span><span class="p">(</span><span class="nx">options</span><span class="p">))</span> <span class="o">||</span> <span class="p">{});</span></div><div class='line' id='LC242'><br/></div><div class='line' id='LC243'>			<span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">'blurbox.willHide'</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC244'>			<span class="k">this</span><span class="p">.</span><span class="nx">bodyContent</span><span class="p">.</span><span class="nx">off</span><span class="p">(</span><span class="s1">'click.blurbox'</span><span class="p">);</span></div><div class='line' id='LC245'>			<span class="c1">// allow scroll on body</span></div><div class='line' id='LC246'>			<span class="k">this</span><span class="p">.</span><span class="nx">bodyContent</span><span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="s1">'blurbox-noscroll'</span><span class="p">);</span></div><div class='line' id='LC247'>			<span class="c1">// hide the wrapper</span></div><div class='line' id='LC248'>			<span class="nx">plugin</span><span class="p">.</span><span class="nx">wrapper</span><span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="s1">'blurbox-show'</span><span class="p">);</span></div><div class='line' id='LC249'>			<span class="c1">// hide the overlay</span></div><div class='line' id='LC250'>			<span class="nx">plugin</span><span class="p">.</span><span class="nx">darkenbg</span><span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="s1">'blurbox-show'</span><span class="p">);</span></div><div class='line' id='LC251'>			<span class="c1">// set a timeout and listen for transition end events, whichever happens first end the animation</span></div><div class='line' id='LC252'>			<span class="kd">var</span> <span class="nx">endAnim</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC253'>					<span class="c1">// at end of animation, display:none the wrapper</span></div><div class='line' id='LC254'>					<span class="nx">plugin</span><span class="p">.</span><span class="nx">wrapper</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">'blurbox-hidden'</span><span class="p">);</span></div><div class='line' id='LC255'>					<span class="c1">// and the overlay</span></div><div class='line' id='LC256'>					<span class="nx">plugin</span><span class="p">.</span><span class="nx">darkenbg</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">'blurbox-hidden'</span><span class="p">);</span></div><div class='line' id='LC257'>					<span class="c1">// stop listening for animation end events and clear the timeout</span></div><div class='line' id='LC258'>					<span class="nx">plugin</span><span class="p">.</span><span class="nx">wrapper</span><span class="p">.</span><span class="nx">off</span><span class="p">(</span><span class="nx">plugin</span><span class="p">.</span><span class="nx">tranisitionEndEvents</span><span class="p">);</span></div><div class='line' id='LC259'>					<span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">timeout</span><span class="p">);</span></div><div class='line' id='LC260'>				<span class="p">},</span></div><div class='line' id='LC261'>				<span class="nx">timeout</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="nx">endAnim</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">duration</span><span class="p">);</span></div><div class='line' id='LC262'>			<span class="nx">plugin</span><span class="p">.</span><span class="nx">wrapper</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="nx">plugin</span><span class="p">.</span><span class="nx">tranisitionEndEvents</span><span class="p">,</span> <span class="nx">endAnim</span><span class="p">);</span></div><div class='line' id='LC263'>			<span class="nx">plugin</span><span class="p">.</span><span class="nx">_removeProp</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">bodyContent</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="s1">'filter'</span><span class="p">);</span></div><div class='line' id='LC264'>			<span class="k">this</span><span class="p">.</span><span class="nx">displayed</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC265'>			<span class="nx">plugin</span><span class="p">.</span><span class="nx">activeBlurbox</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC266'>			<span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">'blurbox.didHide'</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC267'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC268'>		<span class="p">},</span></div><div class='line' id='LC269'><br/></div><div class='line' id='LC270'>		<span class="nx">toggle</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC271'>			<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">displayed</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">hide</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">show</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC272'>		<span class="p">},</span></div><div class='line' id='LC273'><br/></div><div class='line' id='LC274'>		<span class="nx">autosize</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">renderOffscreen</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC275'>			<span class="k">if</span><span class="p">(</span><span class="nx">renderOffscreen</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC276'>				<span class="kd">var</span> <span class="nx">style</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">'style'</span><span class="p">);</span></div><div class='line' id='LC277'>				<span class="c1">// render off screen for size</span></div><div class='line' id='LC278'>				<span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="p">.</span><span class="nx">css</span><span class="p">({</span><span class="nx">position</span><span class="o">:</span><span class="s1">'absolute'</span><span class="p">,</span><span class="nx">left</span><span class="o">:</span><span class="s1">'100000px'</span><span class="p">,</span><span class="nx">display</span><span class="o">:</span><span class="s1">'block'</span><span class="p">});</span></div><div class='line' id='LC279'>				<span class="nx">$</span><span class="p">(</span><span class="s1">'body'</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="p">);</span></div><div class='line' id='LC280'>			<span class="p">}</span></div><div class='line' id='LC281'>			<span class="kd">var</span> <span class="nx">width</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="p">.</span><span class="nx">width</span><span class="p">();</span></div><div class='line' id='LC282'>			<span class="kd">var</span> <span class="nx">height</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="p">.</span><span class="nx">height</span><span class="p">();</span></div><div class='line' id='LC283'>			<span class="k">if</span><span class="p">(</span><span class="nx">renderOffscreen</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC284'>				<span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="p">.</span><span class="nx">detach</span><span class="p">();</span></div><div class='line' id='LC285'>				<span class="nx">style</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">'style'</span><span class="p">,</span> <span class="nx">style</span><span class="p">)</span> <span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="p">.</span><span class="nx">removeAttr</span><span class="p">(</span><span class="s1">'style'</span><span class="p">);</span></div><div class='line' id='LC286'>			<span class="p">}</span></div><div class='line' id='LC287'>			<span class="nx">plugin</span><span class="p">.</span><span class="nx">wrapper</span><span class="p">.</span><span class="nx">css</span><span class="p">({</span><span class="nx">width</span><span class="o">:</span><span class="nx">width</span><span class="p">,</span><span class="nx">height</span><span class="o">:</span><span class="nx">height</span><span class="p">});</span></div><div class='line' id='LC288'>		<span class="p">}</span></div><div class='line' id='LC289'>	<span class="p">});</span></div><div class='line' id='LC290'><br/></div><div class='line' id='LC291'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">[</span><span class="nx">pluginName</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC292'>		<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="k">return</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC293'>		<span class="kd">var</span> <span class="nx">p</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">'plugin_'</span> <span class="o">+</span> <span class="nx">pluginName</span><span class="p">);</span></div><div class='line' id='LC294'>        <span class="k">if</span> <span class="p">(</span><span class="nx">p</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">p</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC295'>		<span class="nx">p</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">plugin</span><span class="p">(</span> <span class="k">this</span><span class="p">,</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC296'>		<span class="nx">$</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">'plugin_'</span> <span class="o">+</span> <span class="nx">pluginName</span><span class="p">,</span> <span class="nx">p</span><span class="p">);</span></div><div class='line' id='LC297'>		<span class="k">return</span> <span class="nx">p</span><span class="p">;</span></div><div class='line' id='LC298'>    <span class="p">};</span></div><div class='line' id='LC299'><br/></div><div class='line' id='LC300'>	<span class="nx">$</span><span class="p">[</span><span class="nx">pluginName</span><span class="p">]</span> <span class="o">=</span> <span class="nx">plugin</span><span class="p">;</span></div><div class='line' id='LC301'><span class="p">}));</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about/index.html">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>© 2014 <span title="0.06542s from github-fe132-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/access/index.html">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-ab437d541e9c517df422126b73a5694a1d43ee9e.js" type="text/javascript"></script>
      <script async crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-f8fc00b8934006933bc2391fd76f435ac85a7016.js" type="text/javascript"></script>
      
      
  </body>
</html>

