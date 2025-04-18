export JEKYLL_VERSION=4.2.2
docker run --rm \
  --volume="$PWD:/srv/jekyll:Z" \
  --volume="$PWD/vendor/bundle:/usr/local/bundle:Z" \
  --publish 4000:4000 \
  --publish 35729:35729 \
  -e JEKYLL_ROOTLESS=1 \
  -it jekyll/jekyll:$JEKYLL_VERSION \
  jekyll build $@
