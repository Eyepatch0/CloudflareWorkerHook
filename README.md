<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![ISC License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Eyepatch0/CloudflareWorkerHook">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">CloudflareWorkerHook</h3>

  <p align="center">
    Cloudlfare Worker which can monitor a public GitHub repository and push updates on Discord.
    <br />
    <a href="https://github.com/Eyepatch0/CloudflareWorkerHook"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <!-- <a href="https://github.com/Eyepatch0/CloudflareWorkerHook">View Demo</a>
    · -->
    <a href="https://github.com/Eyepatch0/CloudflareWorkerHook/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/Eyepatch0/CloudflareWorkerHook/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

<!-- ## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

### Built With

- [![Cloudlare Workers][workers.cloudflare.com]][Cloudflare-url]
- [![Github API][github.com]][Github-url]
- [![Discord Webhook][discord.com]][Discord-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- npm

  ```sh
  npm install npm@latest -g
  ```

- Create an account on [Cloudlare](https://www.cloudflare.com/)

- wrangler
  ```sh
  npm install -g wrangler
  ```

### Installation

1. Clone the Repository

   ```sh
   git clone https://github.com/Eyepatch0/CloudflareWorkerHook.git
   ```

2. Configure Environment Variables

   - Rename `.dev.vars.example` to `.dev.vars` and add your tokens.
   - Rename `wrangler.toml.example` to `wrangler.toml` and add your details.

3. Create a KV Namespace

   ```sh
    npx wrangler kv:namespace create <YOUR_NAMESPACE>
   ```

   and add the namespace details to `wrangler.toml`.

4. Test Locally

   ```sh
    npx wrangler dev --test-scheduled
   ```

   Open your browser and go to: `http://localhost:8787/__scheduled`

5. Deploy the Application
   ```sh
    npx wrangler deploy
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

<!-- ## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- ROADMAP -->

<!-- ## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
  - [ ] Nested Feature

See the [open issues](https://github.com/Eyepatch0/CloudflareWorkerHook/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- CONTRIBUTING -->

<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- LICENSE -->

## License

Distributed under the ISC License. See [ISC License](https://opensource.org/licenses/ISC) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Your Name: [@0_eyepatch](https://twitter.com/@0_eyepatch) - syed.mohammed0975@gmail.com

<!-- Project Link: [https://github.com/Eyepatch0/CloudflareWorkerHook](https://github.com/Eyepatch0/CloudflareWorkerHook) -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- []()
- []()
- []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Eyepatch0/CloudflareWorkerHook.svg?style=for-the-badge
[contributors-url]: https://github.com/Eyepatch0/CloudflareWorkerHook/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Eyepatch0/CloudflareWorkerHook.svg?style=for-the-badge
[forks-url]: https://github.com/Eyepatch0/CloudflareWorkerHook/network/members
[stars-shield]: https://img.shields.io/github/stars/Eyepatch0/CloudflareWorkerHook.svg?style=for-the-badge
[stars-url]: https://github.com/Eyepatch0/CloudflareWorkerHook/stargazers
[issues-shield]: https://img.shields.io/github/issues/Eyepatch0/CloudflareWorkerHook.svg?style=for-the-badge
[issues-url]: https://github.com/Eyepatch0/CloudflareWorkerHook/issues
[license-shield]: https://img.shields.io/github/license/Eyepatch0/CloudflareWorkerHook.svg?style=for-the-badge
[license-url]: https://opensource.org/licenses/ISC
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/syed-mohammed0
[product-screenshot]: images/screenshot.png
[workers.cloudflare.com]: https://img.shields.io/badge/Cloudflare%20Workers-F38020?style=flat&logo=Cloudflare&logoColor=white
[Cloudflare-url]: https://workers.cloudflare.com/
[github.com]: https://img.shields.io/badge/GitHub%20API-181717?style=flat&logo=GitHub&logoColor=white
[Github-url]: https://docs.github.com/en/rest

[discord.com]: https://img.shields.io/badge/Discord%20Webhook-7289DA?style=flat&logo=Discord&logoColor=white%20[Discord-url]:%20https://discord.com/docs
[Discord-url]: https://discord.com/developers/docs/resources/webhook
