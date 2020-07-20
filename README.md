# TND AddToCal Hugo Module

An "Add to Calendar" button for adding events to your google/yahoo online calendars, or downloading an ics file for your desktop ical and outlook calendar applications.

## Requirements

Requirements:
- Go 1.14
- Hugo 0.61.0


## Installation

If not already, [init](https://gohugo.io/hugo-modules/use-modules/#initialize-a-new-module) your project as Hugo Module:

```
$: hugo mod init github.com/theNewDynamic/hugo-module-calendar
```

Configure your project's module to import this module:

```yaml
# config.yaml
module:
  imports:
  - path: github.com/theNewDynamic/hugo-module-tnd-addtocal
```

## Usage

To add the calendar button, use the following partial:

```
{{ partial "tnd-addtocal/add-to-calendar" . }}
```

Also, be sure the following partial is called (only once) on any page with the calendar button. It will add the button styles and scripts:

```
{{ partial "tnd-addtocal/add-to-calendar-assets" . }}
```

### Settings & Defaults

Settings are added to the project's parameter under the `tnd_addtocal` map as shown below.

```yaml
# config.yaml
params:
  tnd_calendar:
    default_location: '123 somewhere Rd., elsewhere TN 00000'
    org_title: 'The New Dynamic'
    org_email: 'example@email.com'
    calendar_entries:
      google: true
      yahoo: true
      ical: true
      outlook_desktop: true
```

note: If the `ical` or `outlook_desktop` options are selected, the following must be added to the event collections `_index.md` file frontmatter for the ics files to be generated:

```yaml
cascade:
  outputs:
  - html
  - calendar
outputs:
- html
- rss
```

### Required Fields

The frontmatter values that should be included in each event file for the calendar button to work are:

```yaml
title: A Title
date: 2017-10-12 19:00:00
venue: venues/a-venue.md           #optional
tickets_link: https://something.com/a-place/tickets   #optional
```

The `venue` field is optional but if a venue is specified, the following fields should be in its frontmatter:

```yaml
title: A Venue
venue:
  city: Elsewhere
  state: TN
  zip: '00000'
  address: '123 somewhere Rd., elsewhere TN 00000'
  phone: '000-000-0000'
  link: 'https://something.com/place'

```

## theNewDynamic

This project is maintained and love by [thenewDynamic](https://www.thenewdynamic.com).