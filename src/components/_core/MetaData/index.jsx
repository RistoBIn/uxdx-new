import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

const MetaData = ({ title, description, image, pathname, article, lang }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          defaultImage,
          twitterUsername
        }
      }
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || '/'}`
      }

      // const loadTito = function (script) {
      //   if (script.readyState || script.readyState === 'loaded' || script.readyState === 'complete') {
      //     // Script loaded!
      //     // So all dependencies are ready, call the desired function now
      //     TitoWidget.buildWidgets()
      //   }
      // }

      return (
        <>
          <Helmet title={seo.title} titleTemplate={titleTemplate} htmlAttributes={{ lang }}>

            <meta name='description' content={seo.description} />
            <meta name='image' content={seo.image} />
            {seo.url && <meta property='og:url' content={seo.url} />}
            {(article ? true : null) && (
              <meta property='og:type' content='article' />
            )}
            {seo.title && <meta property='og:title' content={seo.title} />}
            {seo.description && (
              <meta property='og:description' content={seo.description} />
            )}
            {seo.image && <meta property='og:image' content={seo.image} />}
            <meta name='twitter:card' content='summary_large_image' />
            {twitterUsername && (
              <meta name='twitter:creator' content={twitterUsername} />
            )}
            {seo.title && <meta name='twitter:title' content={seo.title} />}
            {seo.description && (
              <meta name='twitter:description' content={seo.description} />
            )}
            {seo.image && <meta name='twitter:image' content={seo.image} />}

            {/* IMPORT TITO */}
            <link rel='stylesheet' type='text/css' href='https://css.tito.io/v1.1' />
            <script>{`
              var script = document.createElement("script");
              script.type = 'text/javascript';
              script.src = 'https://js.tito.io/v1';
              script.defer = true;
              script.async = true;
              document.getElementsByTagName('head')[0].appendChild(script);
              script.onload = script.onreadystatechange = function () {
                if (script.readyState || script.readyState === 'loaded' || script.readyState === 'complete') {
                  // Script loaded!
                  // So all dependencies are ready, call the desired function now
                  console.log('Building Tito')
                  TitoWidget.buildWidgets()
                }
              }
              TitoDevelopmentMode = true
            `}
            </script>
            {/* Add Crisp Chat */}
            <script type='text/javascript'>
              {`
                window.$crisp=[];
                window.CRISP_WEBSITE_ID="8d39cddd-9a5c-4a2c-8b08-8b404a966a53";
                (function(){d=document;s=d.createElement("script");
                s.src="https://client.crisp.chat/l.js";
                s.async=1;
                d.getElementsByTagName("head")[0].appendChild(s);})();
              `}
            </script>
          </Helmet>
        </>
      )
    }}
  />
)

export default MetaData

MetaData.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
  lang: PropTypes.string
}

MetaData.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
  lang: 'en'
}

const query = graphql`
  query MetaData {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`
