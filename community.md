# [APP][PRO] hompageApi

The sole purpose of this tiny app is to provide the application dashboard with the current system information of the homey pro. 

## The homepage App

[Screenshot]

A modern, <em>fully static, fast</em>, secure <em>fully proxied</em>, highly customizable application dashboard with integrations for over 100 services and translations into multiple languages. Easily configured via YAML files or through docker label discovery.

[Here you can find the information you need to install and configure the homepage App](https://gethomepage.dev/latest/)

## Homey-Service configuration

### Install the homey homepageApi app

[Link](???)

### Configure Service

Add the following configuration to the service.yaml file and change the [homey-ip]

```
- Smarthome:
    - Homey Develop:
        description: Homey Developer Tools
        icon: https://my.homey.app/img/logo.png
        href: https://tools.developer.homey.app/
        ping: tools.developer.homey.app
    - Homey Pro:
        description: The Next Generation of Smart Home
        icon: https://my.homey.app/img/logo.png
        href: https://my.homey.app/
        ping: [homey-ip]
        widget:
            type: customapi
            url: http://[homey-ip]/api/app/org.cflat-inc.homepageApi/getInfo
            mappings:
                - field: cpu
                  label: cpu
                  format: text
                - field: mem
                  label: mem
                  format: text
                - field: storage
                  label: storage
                  format: text
                - field: temp
                  label: temp
                  format: text                
```

### Finish

Restart the homepage app if necessary..

Now you should see the following result:

[Screenshot]