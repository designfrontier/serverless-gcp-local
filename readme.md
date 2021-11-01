# serverless-gcp-local

A light version of serverless-offline but for GCP based node projects. It isn't
fancy, but it reads the GCP style config and gets a local web server running.
Lots more work to do but if you need :pointup: then this is your jam.

# Usage:

Add `"start": "serverless-gcp-local"` to the scripts section of your package.json
and you're good to go. IF your serverless.yaml file is in the root of the
project.

It will spin up a server on port 3030 unless there is another port specified on
the process.env.

# Env vars

This system supports the same basic resolution as serverles 3.x does. You will
need to pass `STAGE` as an env var though. If you have `useDotenv` enabled in
your `serverless.yml` file then it will pick that up, load the correct `.env`
file at startup time.

By default it will load the `.env` file just like serverless does. If you pass
`STAGE=google` it will load `.env.google`.

# TODO:

- check that env var PORT actually works from the parent project
- databases?
- more complex routing?