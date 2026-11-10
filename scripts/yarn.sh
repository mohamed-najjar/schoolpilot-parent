#!/bin/sh
set -eu
exec npm exec --yes --package=corepack@0.36.0 -- corepack yarn "$@"
