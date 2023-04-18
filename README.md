# abap-saas-reference-solution
ABAP SaaS Reference Solution for ABAP solution provider 

# Introduction
This repository contains files of a generic ABAP SaaS Reference Solution. Once this solution is deployed, it allows you to enable an ABAP product on SAP BTP ABAP Environment for consumers. 

It consists of a default [SAP Approuter](https://www.npmjs.com/package/@sap/approuter), [XS Environment](https://www.npmjs.com/package/@sap/xsenv), [ASP Middleware](https://www.npmjs.com/package/@sap/asp-middleware) and MTA extension examples. 

The MTA extension examples can be found in the folder named "extensions/examples" that you can adapt to your needs. The configuration of the MTA and its extensions is explained in detail on the [SAP Help Portal](https://help.sap.com/docs/btp/sap-business-technology-platform/developing-multitenant-applications-in-abap-environment?locale=en-US).

# Installation
Clone the repository, run `npm i` to download the dependency node modules (stated in the `router/package.json` file) and add the values matching your BTP environment to the `mta.yaml` and extension file. Regarding build and deploy, follow the instructions which can be found [here](https://help.sap.com/docs/btp/sap-business-technology-platform/build-and-deploy?locale=en-US).

