package grailsplugins

import com.github.GithubRepository
import groovy.util.logging.Slf4j

import java.text.DateFormat
import java.text.ParseException
import java.text.SimpleDateFormat

@Slf4j
class PluginsTagLib {
    public static final DateFormat UTC = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
    public static final DateFormat DISPLAY = new SimpleDateFormat('MMM d, yyyy')

    static namespace = 'grailsplugins'

    static returnObjectForTags = ['bintrayLink', 'githubpageUrl']

    def lastUpdated = { attrs, body ->
        GrailsPlugin grailsPlugin = attrs.plugin
        if ( grailsPlugin.bintrayPackage?.updated ) {
            try {
                Date date = UTC.parse(grailsPlugin.bintrayPackage?.updated)
                out << DISPLAY.format(date)
            } catch ( ParseException e) {
                log.error 'unable to parse updated {} for {}', grailsPlugin.bintrayPackage?.updated, grailsPlugin.bintrayPackage?.name
            }
        }
    }

    def githubpageUrl = { attrs, body ->
        GithubRepository githubRepository = attrs.githubRepository
        "https://${githubRepository.owner.login}.github.io/${githubRepository.name}/"
    }

    def bintrayLink = { attrs, body ->
        GrailsPlugin grailsPlugin = attrs.plugin
        "https://bintray.com/${grailsPlugin.bintrayPackage?.owner}/${grailsPlugin.bintrayPackage?.repo}/${grailsPlugin.bintrayPackage?.name}"
    }

    def labelsTagCloud = { attrs, body ->
        List<GrailsPlugin> pluginList = attrs.pluginList
        String header = labelsHeader()
        List<Tag> tags = labelsTagCloud(pluginList)
        renderTagCloud(tags, header, 'label', out)
    }

    def ownersTagCloud = { attrs, body ->
        List<GrailsPlugin> pluginList = attrs.pluginList
        String header = ownersHeader()
        List<Tag> tags = ownerTagCloud(pluginList)
        renderTagCloud(tags, header, 'owner', out)
    }

    void renderTagCloud(List<Tag> tags, String header, String preffix, def out) {
        out << "<div class='tagsbytopic'>"
        out << "<h3 class='columnheader'>${header}</h3>"
        out << '<ul>'
        for ( Tag tag : tags) {
            out << "<li class='tag${tag.ocurrence}'><a href='q/${preffix}:${tag.title}'>${tag.title}</a></li>"
        }
        out << '</ul>'
        out << '</div>'
    }

    String labelsHeader() {
        g.message(code: 'plugins.tagcloud.labels', default: 'Plugins by Tag')
    }

    String ownersHeader() {
        g.message(code: 'plugins.tagcloud.owner', default: 'Plugins by Owner')
    }

    List<Tag> ownerTagCloud(List<GrailsPlugin> pluginList) {
        Map<String, Integer> tagsOcurrence = [:] as Map<String, Integer>
        for (GrailsPlugin plugin : pluginList) {
            String label = plugin.bintrayPackage?.owner
            if ( label ) {
                if (!tagsOcurrence.containsKey(label)) {
                    tagsOcurrence[label] = 1
                } else {
                    tagsOcurrence[label] = tagsOcurrence[label] + 1
                }
            }
        }
        tagListFromTagsOcurrence(tagsOcurrence)
    }

    List<Tag> labelsTagCloud(List<GrailsPlugin> pluginList) {
        Map<String, Integer> tagsOcurrence = [:] as Map<String, Integer>
        for (GrailsPlugin plugin : pluginList) {
            List<String> labels = plugin.bintrayPackage?.labels
            if ( labels ) {
                for (String label : labels) {
                    if (!tagsOcurrence.containsKey(label)) {
                        tagsOcurrence[label] = 1
                    } else {
                        tagsOcurrence[label] = tagsOcurrence[label] + 1
                    }
                }
            }
        }
        tagListFromTagsOcurrence(tagsOcurrence)
    }

    List<Tag> tagListFromTagsOcurrence(Map<String, Integer> tagsOcurrence) {
        tagsOcurrence?.collect { String k, Integer v -> new Tag(title: k, ocurrence: v) }?.sort { Tag a, Tag b ->
            a.title <=> b.title
        }
    }
}

class Tag {
    String title
    int ocurrence
}