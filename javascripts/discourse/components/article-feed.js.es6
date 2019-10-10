html {
  font-family: "Open Sans", sans-serif;
}

.alert-too-few-topics,
.alert-bootstrap-mode {
  display: none;
}

.article-feed-component {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 265px;
  padding: 0 0.25em 2em 0.25em;
  border-bottom: 2px solid $primary-low;
  margin: 3em 0 2em 0;

  .article-feed-heading-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1em;
    .article-feed-heading {
      border-bottom: 5px solid $tertiary;
      padding: 0 1.35em;
      font-size: $font-up-2;
      display: inline-block;
    }
  }

  .article-wrapper {
  }

  .article-link {
    line-height: $line-height-large;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    position: relative;
    h4 {
      margin-bottom: 0;
      position: absolute;
      bottom: 0;
      padding: 0.5em;
      background: rgba(0, 0, 0, 0.7);
      color: $secondary;
      transition: color 0.25s ease-in-out;
    }
    &:hover {
      h4 {
        color: $tertiary;
      }
    }
  }

  .article-thumbnail {
    width: 100%;
    object-fit: cover;
    object-position: center;
    margin-bottom: 0.25em;
  }

  .article-title {
    min-height: 2.75em;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}

// carousel

.owl-next,
.owl-prev {
  background: none;
  border: none;
  outline: none;
}

.feed-nav-wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-size: 2em;
  margin-bottom: -0.75em;
}

.owl-carousel .owl-stage {
  padding-bottom: 0.25em;
}
