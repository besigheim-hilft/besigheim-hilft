Consent Manager Installation Instructions

1. Extract the contents of this zip file
2. Place the files in your website directory
3. Add the following code to your HTML page, inside the <head> tag:

<link rel="stylesheet" id="silktide-consent-manager-css" href="path-to-css/silktide-consent-manager.css">
<script src="path-to-js/silktide-consent-manager.js"></script>
<script>
silktideCookieBannerManager.updateCookieBannerConfig({
  background: {
    showBackground: true
  },
  cookieIcon: {
    position: "bottomLeft"
  },
  cookieTypes: [
    {
      id: "notwendige_cookies",
      name: "Notwendige Cookies",
      description: "<p>\n<p data-start=\"826\" data-end=\"1000\"></p></p><p data-start=\"654\" data-end=\"824\">Diese Cookies sind erforderlich, damit unsere Website funktioniert (z. B. um Formulare abzusenden oder Ihre Cookie-Einstellungen zu speichern).</p>",
      required: true,
      onAccept: function() {
        console.log('Add logic for the required Notwendige Cookies here');
      }
    }
  ],
  text: {
    banner: {
      description: "<p><span style=\"color: rgb(0, 0, 0);\">„Wir verwenden Cookies, um unsere Website benutzerfreundlich zu gestalten. Einige sind notwendig, andere helfen uns, die Seite zu verbessern. Sie können selbst entscheiden, welche Cookies Sie erlauben.“&nbsp;</span><a href=\"https://www.besigheim-hilft.de/datenschutz\" target=\"_blank\">Datenschutz</a></p>",
      acceptAllButtonText: "Alle akzeptieren",
      acceptAllButtonAccessibleLabel: "Accept all cookies",
      rejectNonEssentialButtonText: "Nicht notwendige ablehnen",
      rejectNonEssentialButtonAccessibleLabel: "Reject non-essential",
      preferencesButtonText: "Einstellungen",
      preferencesButtonAccessibleLabel: "Toggle preferences"
    },
    preferences: {
      title: "Customize your cookie preferences",
      description: "<p>We respect your right to privacy. You can choose not to allow some types of cookies. Your cookie preferences will apply across our website.</p>",
      creditLinkText: "Get this banner for free",
      creditLinkAccessibleLabel: "Get this banner for free"
    }
  }
});
</script>
