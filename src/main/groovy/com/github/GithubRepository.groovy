package com.github

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.databind.PropertyNamingStrategy
import com.fasterxml.jackson.databind.annotation.JsonNaming
import groovy.transform.CompileStatic

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@CompileStatic
class GithubRepository {
    Long id
    String name
    String fullName
    GithubOwner owner
    //private
    String htmlUrl
    String description
    Boolean fork
    String url
    String forksUrl
    String keysUrl
    String collaboratorsUrl
    String teamsUrl
    String hooksUrl
    String issueEventsUrl
    String assigneesUrl
    String branchesUrl
    String tagsUrl
    String blobsUrl
    String gitTagsUrl
    String gitRefsUrl
    String treesUrl
    String statusesUrl
    String languagesUrl
    String stargazersUrl
    String contributorsUrl
    String subscribersUrl
    String subscriptionUrl
    String commitsUrl
    String gitCommitsUrl
    String commentsUrl
    String issueCommentUrl
    String contentsUrl
    String compareUrl
    String mergesUrl
    String archiveUrl
    String downloadsUrl
    String issuesUrl
    String pullsUrl
    String milestonesUrl
    String notificationsUrl
    String labelsUrl
    String releasesUrl
    String deploymentsUrl
    String createdAt
    String updatedAt
    String pushedAt
    String gitUrl
    String sshUrl
    String cloneUrl
    String svnUrl
    String homepage
    Integer size
    Integer stargazersCount
    Integer watchersCount
    String language
    Boolean hasIssues
    Boolean hasProjects
    Boolean hasDownloads
    Boolean hasWiki
    Boolean hasPages
    Integer forksCount
    String mirrorUrl
    Boolean archived
    Integer openIssuesCount
    GithubLicense license
    Integer forks
    Integer openIssues
    Integer watchers
    String defaultBranch
    GithubPermissions permissions
    Integer networkCount
    Integer subscribersCount
}
