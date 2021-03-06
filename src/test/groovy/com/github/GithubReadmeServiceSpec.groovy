package com.github

import com.github.GithubReadmeService
import grails.testing.services.ServiceUnitTest
import spock.lang.Specification

class GithubReadmeServiceSpec extends Specification implements ServiceUnitTest<GithubReadmeService> {

    def "fetchMarkdown"() {
        given:
        String githubSlug = 'rvanderwerf/grails-alexa-skills'

        when:
        String result = service.fetchMarkdown(githubSlug)

        then:
        noExceptionThrown()
        result
    }

    def "fetchAsciidoc"() {
        given:
        String githubSlug = 'rvanderwerf/grails-alexa-skills'

        when:
        String result = service.fetchAsciidoc(githubSlug)

        then:
        noExceptionThrown()
        !result
    }
}
