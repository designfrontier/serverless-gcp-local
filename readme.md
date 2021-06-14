# serverless-gcp-local

A light version of serverless-offline but for GCP based node projects. It isn't
fancy, but it reads the GCP style config and gets a local web server running.
Lots more work to do but if you need :pointup: then this is your jam.

# Usage:

Add `"start": "serverless-gcp-local"` to the scripts section of your package.json
and you're good to go. IF your serverless.yaml file is in the root of the
project.

It will spin up a server on port 3030 unless there is another port secified on
the process.env.

# TODO:

- check that env var PORT actually works from the parent project
- databases?
- more complex routing?