# TestSourceUpdateRequestType

type of sources a runner can get data from.
  string: String content (e.g. Postman JSON file).
  file-uri: content stored on the webserver.
  git-file: the file stored in the Git repo in the given repository.path field (Deprecated: use git instead).
  git-dir: the entire git repo or git subdirectory depending on the  repository.path field (Testkube does a shadow clone and sparse checkout to limit IOs in the case of monorepos). (Deprecated: use git instead).
  git: automatically provisions either a file, directory or whole git repository depending on the repository.path field.



## Values

| Name      | Value     |
| --------- | --------- |
| `String`  | string    |
| `FileUri` | file-uri  |
| `GitFile` | git-file  |
| `GitDir`  | git-dir   |
| `Git`     | git       |