export interface RepositoryDTO {
  type: 'object';
  required: ['total_count', 'incomplete_results', 'items'];
  properties: {
    total_count: {
      type: 'integer';
    };
    incomplete_results: {
      type: 'boolean';
    };
    items: {
      type: 'array';
      items: {
        title: 'Repo Search Result Item';
        description: 'Repo Search Result Item';
        type: 'object';
        properties: {
          id: {
            type: 'integer';
          };
          node_id: {
            type: 'string';
          };
          name: {
            type: 'string';
          };
          full_name: {
            type: 'string';
          };
          owner: {
            anyOf: [
              {
                type: 'null';
              },
              {
                title: 'Simple User';
                description: 'A GitHub user.';
                type: 'object';
                properties: {
                  name: {
                    type: ['string', 'null'];
                  };
                  email: {
                    type: ['string', 'null'];
                  };
                  login: {
                    type: 'string';
                    examples: ['octocat'];
                  };
                  id: {
                    type: 'integer';
                    examples: [1];
                  };
                  node_id: {
                    type: 'string';
                    examples: ['MDQ6VXNlcjE='];
                  };
                  avatar_url: {
                    type: 'string';
                    format: 'uri';
                    examples: [
                      'https://github.com/images/error/octocat_happy.gif'
                    ];
                  };
                  gravatar_id: {
                    type: ['string', 'null'];
                    examples: ['41d064eb2195891e12d0413f63227ea7'];
                  };
                  url: {
                    type: 'string';
                    format: 'uri';
                    examples: ['https://api.github.com/users/octocat'];
                  };
                  html_url: {
                    type: 'string';
                    format: 'uri';
                    examples: ['https://github.com/octocat'];
                  };
                  followers_url: {
                    type: 'string';
                    format: 'uri';
                    examples: [
                      'https://api.github.com/users/octocat/followers'
                    ];
                  };
                  following_url: {
                    type: 'string';
                    examples: [
                      'https://api.github.com/users/octocat/following{/other_user}'
                    ];
                  };
                  gists_url: {
                    type: 'string';
                    examples: [
                      'https://api.github.com/users/octocat/gists{/gist_id}'
                    ];
                  };
                  starred_url: {
                    type: 'string';
                    examples: [
                      'https://api.github.com/users/octocat/starred{/owner}{/repo}'
                    ];
                  };
                  subscriptions_url: {
                    type: 'string';
                    format: 'uri';
                    examples: [
                      'https://api.github.com/users/octocat/subscriptions'
                    ];
                  };
                  organizations_url: {
                    type: 'string';
                    format: 'uri';
                    examples: ['https://api.github.com/users/octocat/orgs'];
                  };
                  repos_url: {
                    type: 'string';
                    format: 'uri';
                    examples: ['https://api.github.com/users/octocat/repos'];
                  };
                  events_url: {
                    type: 'string';
                    examples: [
                      'https://api.github.com/users/octocat/events{/privacy}'
                    ];
                  };
                  received_events_url: {
                    type: 'string';
                    format: 'uri';
                    examples: [
                      'https://api.github.com/users/octocat/received_events'
                    ];
                  };
                  type: {
                    type: 'string';
                    examples: ['User'];
                  };
                  site_admin: {
                    type: 'boolean';
                  };
                  starred_at: {
                    type: 'string';
                    examples: ['"2020-07-09T00:17:55Z"'];
                  };
                };
                required: [
                  'avatar_url',
                  'events_url',
                  'followers_url',
                  'following_url',
                  'gists_url',
                  'gravatar_id',
                  'html_url',
                  'id',
                  'node_id',
                  'login',
                  'organizations_url',
                  'received_events_url',
                  'repos_url',
                  'site_admin',
                  'starred_url',
                  'subscriptions_url',
                  'type',
                  'url'
                ];
              }
            ];
          };
          private: {
            type: 'boolean';
          };
          html_url: {
            type: 'string';
            format: 'uri';
          };
          description: {
            type: ['string', 'null'];
          };
          fork: {
            type: 'boolean';
          };
          url: {
            type: 'string';
            format: 'uri';
          };
          created_at: {
            type: 'string';
            format: 'date-time';
          };
          updated_at: {
            type: 'string';
            format: 'date-time';
          };
          pushed_at: {
            type: 'string';
            format: 'date-time';
          };
          homepage: {
            type: ['string', 'null'];
            format: 'uri';
          };
          size: {
            type: 'integer';
          };
          stargazers_count: {
            type: 'integer';
          };
          watchers_count: {
            type: 'integer';
          };
          language: {
            type: ['string', 'null'];
          };
          forks_count: {
            type: 'integer';
          };
          open_issues_count: {
            type: 'integer';
          };
          master_branch: {
            type: 'string';
          };
          default_branch: {
            type: 'string';
          };
          score: {
            type: 'number';
          };
          forks_url: {
            type: 'string';
            format: 'uri';
          };
          keys_url: {
            type: 'string';
          };
          collaborators_url: {
            type: 'string';
          };
          teams_url: {
            type: 'string';
            format: 'uri';
          };
          hooks_url: {
            type: 'string';
            format: 'uri';
          };
          issue_events_url: {
            type: 'string';
          };
          events_url: {
            type: 'string';
            format: 'uri';
          };
          assignees_url: {
            type: 'string';
          };
          branches_url: {
            type: 'string';
          };
          tags_url: {
            type: 'string';
            format: 'uri';
          };
          blobs_url: {
            type: 'string';
          };
          git_tags_url: {
            type: 'string';
          };
          git_refs_url: {
            type: 'string';
          };
          trees_url: {
            type: 'string';
          };
          statuses_url: {
            type: 'string';
          };
          languages_url: {
            type: 'string';
            format: 'uri';
          };
          stargazers_url: {
            type: 'string';
            format: 'uri';
          };
          contributors_url: {
            type: 'string';
            format: 'uri';
          };
          subscribers_url: {
            type: 'string';
            format: 'uri';
          };
          subscription_url: {
            type: 'string';
            format: 'uri';
          };
          commits_url: {
            type: 'string';
          };
          git_commits_url: {
            type: 'string';
          };
          comments_url: {
            type: 'string';
          };
          issue_comment_url: {
            type: 'string';
          };
          contents_url: {
            type: 'string';
          };
          compare_url: {
            type: 'string';
          };
          merges_url: {
            type: 'string';
            format: 'uri';
          };
          archive_url: {
            type: 'string';
          };
          downloads_url: {
            type: 'string';
            format: 'uri';
          };
          issues_url: {
            type: 'string';
          };
          pulls_url: {
            type: 'string';
          };
          milestones_url: {
            type: 'string';
          };
          notifications_url: {
            type: 'string';
          };
          labels_url: {
            type: 'string';
          };
          releases_url: {
            type: 'string';
          };
          deployments_url: {
            type: 'string';
            format: 'uri';
          };
          git_url: {
            type: 'string';
          };
          ssh_url: {
            type: 'string';
          };
          clone_url: {
            type: 'string';
          };
          svn_url: {
            type: 'string';
            format: 'uri';
          };
          forks: {
            type: 'integer';
          };
          open_issues: {
            type: 'integer';
          };
          watchers: {
            type: 'integer';
          };
          topics: {
            type: 'array';
            items: {
              type: 'string';
            };
          };
          mirror_url: {
            type: ['string', 'null'];
            format: 'uri';
          };
          has_issues: {
            type: 'boolean';
          };
          has_projects: {
            type: 'boolean';
          };
          has_pages: {
            type: 'boolean';
          };
          has_wiki: {
            type: 'boolean';
          };
          has_downloads: {
            type: 'boolean';
          };
          has_discussions: {
            type: 'boolean';
          };
          archived: {
            type: 'boolean';
          };
          disabled: {
            type: 'boolean';
            description: 'Returns whether or not this repository disabled.';
          };
          visibility: {
            description: 'The repository visibility: public, private, or internal.';
            type: 'string';
          };
          license: {
            anyOf: [
              {
                type: 'null';
              },
              {
                title: 'License Simple';
                description: 'License Simple';
                type: 'object';
                properties: {
                  key: {
                    type: 'string';
                    examples: ['mit'];
                  };
                  name: {
                    type: 'string';
                    examples: ['MIT License'];
                  };
                  url: {
                    type: ['string', 'null'];
                    format: 'uri';
                    examples: ['https://api.github.com/licenses/mit'];
                  };
                  spdx_id: {
                    type: ['string', 'null'];
                    examples: ['MIT'];
                  };
                  node_id: {
                    type: 'string';
                    examples: ['MDc6TGljZW5zZW1pdA=='];
                  };
                  html_url: {
                    type: 'string';
                    format: 'uri';
                  };
                };
                required: ['key', 'name', 'url', 'spdx_id', 'node_id'];
              }
            ];
          };
          permissions: {
            type: 'object';
            properties: {
              admin: {
                type: 'boolean';
              };
              maintain: {
                type: 'boolean';
              };
              push: {
                type: 'boolean';
              };
              triage: {
                type: 'boolean';
              };
              pull: {
                type: 'boolean';
              };
            };
            required: ['admin', 'pull', 'push'];
          };
          text_matches: {
            title: 'Search Result Text Matches';
            type: 'array';
            items: {
              type: 'object';
              properties: {
                object_url: {
                  type: 'string';
                };
                object_type: {
                  type: ['string', 'null'];
                };
                property: {
                  type: 'string';
                };
                fragment: {
                  type: 'string';
                };
                matches: {
                  type: 'array';
                  items: {
                    type: 'object';
                    properties: {
                      text: {
                        type: 'string';
                      };
                      indices: {
                        type: 'array';
                        items: {
                          type: 'integer';
                        };
                      };
                    };
                  };
                };
              };
            };
          };
          temp_clone_token: {
            type: 'string';
          };
          allow_merge_commit: {
            type: 'boolean';
          };
          allow_squash_merge: {
            type: 'boolean';
          };
          allow_rebase_merge: {
            type: 'boolean';
          };
          allow_auto_merge: {
            type: 'boolean';
          };
          delete_branch_on_merge: {
            type: 'boolean';
          };
          allow_forking: {
            type: 'boolean';
          };
          is_template: {
            type: 'boolean';
          };
          web_commit_signoff_required: {
            type: 'boolean';
            examples: [false];
          };
        };
        required: [
          'archive_url',
          'assignees_url',
          'blobs_url',
          'branches_url',
          'collaborators_url',
          'comments_url',
          'commits_url',
          'compare_url',
          'contents_url',
          'contributors_url',
          'deployments_url',
          'description',
          'downloads_url',
          'events_url',
          'fork',
          'forks_url',
          'full_name',
          'git_commits_url',
          'git_refs_url',
          'git_tags_url',
          'hooks_url',
          'html_url',
          'id',
          'node_id',
          'issue_comment_url',
          'issue_events_url',
          'issues_url',
          'keys_url',
          'labels_url',
          'languages_url',
          'merges_url',
          'milestones_url',
          'name',
          'notifications_url',
          'owner',
          'private',
          'pulls_url',
          'releases_url',
          'stargazers_url',
          'statuses_url',
          'subscribers_url',
          'subscription_url',
          'tags_url',
          'teams_url',
          'trees_url',
          'url',
          'clone_url',
          'default_branch',
          'forks',
          'forks_count',
          'git_url',
          'has_downloads',
          'has_issues',
          'has_projects',
          'has_wiki',
          'has_pages',
          'homepage',
          'language',
          'archived',
          'disabled',
          'mirror_url',
          'open_issues',
          'open_issues_count',
          'license',
          'pushed_at',
          'size',
          'ssh_url',
          'stargazers_count',
          'svn_url',
          'watchers',
          'watchers_count',
          'created_at',
          'updated_at',
          'score'
        ];
      };
    };
  };
}
