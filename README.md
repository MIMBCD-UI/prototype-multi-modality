# MIMBCD-UI Multi Modality Prototype

<img src="https://github.com/MIMBCD-UI/prototype-multi-modality/blob/master/assets/banner.png?raw=true"/>

⚠️ This repository information is not yet curated. For similar use, please follow the [`prototype-multi-modality-assistant`](https://github.com/mida-project/prototype-multi-modality-assistant) repository on the [MIDA](https://github.com/mida-project) organization.

In this repository, we present one of the used prototypes for our [User Tests and Analysis 4 (UTA4)](https://github.com/MIMBCD-UI/meta/wiki/User-Research#test-4-single-modality-vs-multi-modality-) study. Work and results are published on a top [Human-Computer Interaction (HCI)](https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction) conference named [AVI 2020](https://dl.acm.org/conference/avi) ([page](https://sites.google.com/unisa.it/avi2020)). Results were analyzed and interpreted from [Statistical Analysis](https://mimbcd-ui.github.io/statistical-analysis/) charts. The user tests were made in clinical institutions, where clinicians diagnose several patients for a **Single-Modality** *vs* **Multi-Modality** comparison. For example, in these tests, we used both [`prototype-single-modality`](https://github.com/mida-project/prototype-single-modality) and [`prototype-multi-modality`](https://github.com/mida-project/prototype-multi-modality) repositories for the comparison. The [MIMBCD-UI](https://mimbcd-ui.github.io/) is a research project that deals with the use of a recently proposed technique in literature: [Deep Convolutional Neural Networks (CNNs)](https://en.wikipedia.org/wiki/Convolutional_neural_network). These deep networks will incorporate information from several different modes by a User Interface (UI) implemented based on our [Prototype Breast Screening](https://github.com/MIMBCD-UI/prototype-breast-screening) repository. The hereby repository is a mirror of our [Prototype Breast Screening](https://github.com/MIMBCD-UI/prototype-breast-screening) repository which is an Open Source Project with the goal to deliver an example of web based medical imaging platform for the breast cancer diagnosis. We also have several demos to see in our [YouTube Channel](https://www.youtube.com/channel/UCPz4aTIVHekHXTxHTUOLmXw), please follow us.

## Citing

We kindly ask **scientific works and studies** that make use of the repository to cite it in their associated publications. Similarly, we ask **open-source** and **closed-source** works that make use of the repository to warn us about this use.

You can cite our work using the following BibTeX entry:

```
@inproceedings{10.1145/3399715.3399744,
author = {Calisto, Francisco Maria and Nunes, Nuno and Nascimento, Jacinto C.},
title = {BreastScreening: On the Use of Multi-Modality in Medical Imaging Diagnosis},
year = {2020},
isbn = {9781450375351},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3399715.3399744},
doi = {10.1145/3399715.3399744},
abstract = {This paper describes the field research, design and comparative deployment of a multimodal medical imaging user interface for breast screening. The main contributions described here are threefold: 1) The design of an advanced visual interface for multimodal diagnosis of breast cancer (BreastScreening); 2) Insights from the field comparison of Single-Modality vs Multi-Modality screening of breast cancer diagnosis with 31 clinicians and 566 images; and 3) The visualization of the two main types of breast lesions in the following image modalities: (i) MammoGraphy (MG) in both Craniocaudal (CC) and Mediolateral oblique (MLO) views; (ii) UltraSound (US); and (iii) Magnetic Resonance Imaging (MRI). We summarize our work with recommendations from the radiologists for guiding the future design of medical imaging interfaces.},
booktitle = {Proceedings of the International Conference on Advanced Visual Interfaces},
articleno = {49},
numpages = {5},
keywords = {user-centered design, multimodality, medical imaging, human-computer interaction, healthcare systems, breast cancer, annotations},
location = {Salerno, Italy},
series = {AVI '20}
}
```

## Instructions

First of all, you will need [NodeJS](https://nodejs.org/) installed locally on your machine. This project needs both [`npm`](https://www.npmjs.com/) and [`http-server`](https://github.com/indexzero/http-server) dependencies to install and run the core project. If you do not have those installed please follow the [`INSTALL`](src/INSTALL.md) instructions.

### DICOM Server

The following assumes you will be using a [git](https://git-scm.com/) version control for this repository, storing thanks to [GitHub](https://github.com/). First, [Download](https://git-scm.com/downloads) and [Install](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) [git](https://git-scm.com/). Our system needs to be integrated with [WADO-URI](http://dicom.nema.org/dicom/2013/output/chtml/part18/sect_6.3.html) servers, [DICOMWeb](https://www.dicomstandard.org/dicomweb/) servers or any HTTP based server that returns a [DICOM P10](http://www.web3.lu/dicom-standard/) instances. We suggest you to use an [Orthanc](https://www.orthanc-server.com/) server, since it is a simple and powerful [**standalone DICOM server**](https://www.orthanc-server.com/static.php?page=about) by providing a [**RESTful API**](https://en.wikipedia.org/wiki/Representational_state_transfer).

You can [download](https://www.orthanc-server.com/download.php) a latest version or you can use our own sample of an [Orthanc](https://www.orthanc-server.com/) version with our examples of patient images. The instructions to use our solution are as follows.

#### Clone

1.1.1. Clone the DICOM Server [repository](https://github.com/MIMBCD-UI/dicom-server):

```
git clone git@github.com:MIMBCD-UI/dicom-server.git
```

1.1.2. Go inside the project folder:

```
cd dicom-server/
```

#### Install

1.2.1. Install the local dependencies:

```
npm install
```

1.2.2. You can now **Run** the project, just follow the [next section](https://github.com/MIMBCD-UI/prototype-multi-modality#run).

#### Run

1.3.1. Inside the project folder:

```
cd dicom-server
```

1.3.2. Start the DICOM Server (Orthanc) for [MacOS](https://www.orthanc-server.com/static.php?page=download-mac):

```
npm run start:multi
```

**OR**

```
cd ..
cd dicom-server/orthancAndPluginsOSX.stable/
./startOrthanc.command
```

**NOTE**: If you are not using [MacOS](https://www.orthanc-server.com/static.php?page=download-mac), for instance, if you are using [Windows](https://www.orthanc-server.com/download-windows.php) or [Debian](https://packages.debian.org/search?keywords=orthanc&searchon=names&exact=1&suite=all&section=all) you have a [documentation](https://www.orthanc-server.com/static.php?page=documentation) for that. Just follow the [Windows](https://www.orthanc-server.com/resources/2015-02-09-emsy-tutorial/index.html) or [Debian](https://packages.debian.org/sid/orthanc) documentations. You also have several [other options](https://www.orthanc-server.com/download.php).

1.3.3. Open the link:

```
localhost:8248
```

NOTE: If you need some help see the [Demo](https://youtu.be/tkzpT3KpY2A).

### Main Server

Our main server uses [NodeJS](https://nodejs.org/en/) and has several [dependencies](https://github.com/MIMBCD-UI/prototype-multi-modality/blob/master/package.json). For the following steps you must have already installed both [NodeJS](https://nodejs.org/en/) and [`npm`](https://www.npmjs.com/) in your machine.

#### Clone

2.1.1. Clone the project repository:

```
git clone git@github.com:MIMBCD-UI/prototype-multi-modality.git
```

2.1.2. Go inside the project folder:

```
cd prototype-multi-modality/
```

#### Install

2.2.1. Install the local dependencies:

```
npm install
```

2.2.2. You can now **Run** the project, just follow the [next section](https://github.com/MIMBCD-UI/prototype-multi-modality#run).

#### Run

2.3.1. Inside the project folder:

```
cd prototype-multi-modality/
```

2.3.2. If you have already run the DICOM Server on a [previous section](https://github.com/MIMBCD-UI/prototype-multi-modality#dicom-server), please jump to the **2.3.3.** point, otherwise do:

```
npm run dicom-server
```

2.3.3. Run the code:

```
npm run build:multi
```

2.3.4. Start the project:

```
npm run start:multi
```

2.3.5. Open the link:

```
localhost:8286/src/public/index.html
```

##### Allow-Control-Allow-Origin

Access-Control-Allow-Origin is a [CORS (Cross-Origin Resource Sharing) header](https://www.html5rocks.com/en/tutorials/cors/). If you want to know [How does Access-Control-Allow-Origin header work?](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work) follow the link.

###### Google Chrome

* To deal with the CORS issue it is necessary to open [Google Chrome](https://www.google.com/intl/en/chrome/browser/desktop/) with `--disable-web-security` flag on:

```
open /Applications/Google\ Chrome.app --args --disable-web-security --user-data-dir
```

* Or install the  [CORS](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en) plugin for [Google Chrome](https://www.google.com/intl/en/chrome/browser/desktop/).


## About

For more information about the [MIMBCD-UI](https://mimbcd-ui.github.io/) Project just follow the [link](https://github.com/MIMBCD-UI/meta). Pieces of information about details of this repository are also in a [wiki](https://github.com/MIMBCD-UI/prototype-multi-modality/wiki). This prototype was developed using several libraries and dependencies. Despite that all libraries had their importance and supported the development, one of it was of chief importance. The [CornerstoneJS](https://cornerstonejs.org/) library and [secondary libraries](https://github.com/cornerstonejs), respectively, are supporting this prototype. We [Acknowledge](https://github.com/MIMBCD-UI/prototype-multi-modality/blob/master/README.md#acknowledgments) all people involved in the path.

### License

Copyright © 2017 [Instituto Superior Técnico (IST)](https://tecnico.ulisboa.pt/)

The [`prototype-multi-modality`](https://github.com/MIMBCD-UI/prototype-multi-modality) repository is distributed under the terms of both [Academic License](https://github.com/MIMBCD-UI/prototype-multi-modality/blob/master/ACADEMIC.md) and [Commercial License](https://github.com/MIMBCD-UI/prototype-multi-modality/blob/master/COMMERCIAL.md), for academic and commercial purpose, respectively. For more information regarding the [License](https://github.com/MIMBCD-UI/prototype-multi-modality/blob/master/LICENSE.md) of the hereby repository, just follow both [ACADEMIC](https://github.com/MIMBCD-UI/prototype-multi-modality/blob/master/ACADEMIC.md) and [COMMERCIAL](https://github.com/MIMBCD-UI/prototype-multi-modality/blob/master/COMMERCIAL.md) files.

### Acknowledgments

A special thanks to [Chris Hafey](https://www.linkedin.com/in/chafey/), the propelling person of [CornerstoneJS](https://cornerstonejs.org/), who also developed the [cornerstoneDemo](https://github.com/chafey/cornerstoneDemo). Not forgetting the three supporters of the CornerstoneJS library, [Aloïs Dreyfus](https://www.linkedin.com/in/alois-dreyfus), [Danny Brown](http://dannyrb.com/) and [Erik Ziegler](https://www.npmjs.com/~swederik). We also would like to give a special thanks to [Erik Ziegler](https://www.npmjs.com/~swederik) who support several [issues](https://groups.google.com/forum/#!forum/cornerstone-platform) during this path.

- [Aloïs Dreyfus](https://www.linkedin.com/in/alois-dreyfus) ([adreyfus](https://github.com/adreyfus))

- [Chris Hafey](https://www.linkedin.com/in/chafey/) ([chafey](https://github.com/chafey))

- [Danny Brown](http://dannyrb.com/) ([dannyrb](https://github.com/dannyrb))

- [Erik Ziegler](https://www.npmjs.com/~swederik) ([swederik](https://github.com/swederik))

- [Jason Hostetter](http://www.jasonhostetter.com/)

- [Marcelo Ribeiro](http://www.sysline.inf.br/) ([sysline](https://github.com/sysline))

- [Sébastien Jodogne](https://www.linkedin.com/in/jodogne/) ([jodogne](https://github.com/jodogne))

- [Steve Pieper](https://lmi.med.harvard.edu/people/steve-pieper)
