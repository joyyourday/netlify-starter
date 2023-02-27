import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            type="application/ld+json"
            class="yoast-schema-graph"
            dangerouslySetInnerHTML={{
              __html: `{
                "@context":"https://schema.org",
                "@graph":[{"@type":"WebPage",
                "@id":"https://moviewatchfree.netlify.app/",
                "url":"https://moviewatchfree.netlify.app/",
                "name":"Movie Watch Free™ Hollywood Bollywood Adult | Watch now the Best TV shows and Movies",
                "isPartOf":{"@id":"https://moviewatchfree.netlify.app/#website"},
                "primaryImageOfPage":{"@id":"https://moviewatchfree.netlify.app/#primaryimage"},
                "image":{"@id":"https://moviewatchfree.netlify.app/#primaryimage"},
                "thumbnailUrl":"https://moviewatchfree.netlify.app/logo.png",
                "datePublished":"2023-01-02T10:50:12+00:00",
                "dateModified":"2023-02-20T11:33:45+00:00",
                "description":"Movie Watch Free™ Hollywood Bollywood Adult | Watch now the Best TV shows and Movies",
                "breadcrumb":{"@id":"https://moviewatchfree.netlify.app/#breadcrumb"},
                "inLanguage":"en-US",
                "potentialAction":[{"@type":"ReadAction",
                "target":["https://moviewatchfree.netlify.app/"]}]},
                {"@type":"ImageObject",
                "inLanguage":"en-US",
                "@id":"https://moviewatchfree.netlify.app/#primaryimage",
                "url":"https://moviewatchfree.netlify.app/logo.png",
                "contentUrl":"https://moviewatchfree.netlify.app/logo.png",
                "width":381,
                "height":77,
                "caption":"Movie Watch Free™"},
                {"@type":"BreadcrumbList",
                "@id":"https://moviewatchfree.netlify.app/#breadcrumb",
                "itemListElement":[{"@type":"ListItem","position":1,
                "name":"Movie Watch Free™"}]},
                {"@type":"WebSite",
                "@id":"https://moviewatchfree.netlify.app/#website",
                "url":"https://moviewatchfree.netlify.app/",
                "name":"Movie Watch Free™",
                "description":"Movie Watch Free™| Watch now the Best TV shows and Movies",
                "potentialAction":[{"@type":"SearchAction",
                "target":{"@type":"EntryPoint",
                "urlTemplate":"https://moviewatchfree.netlify.app/?s={search_term_string}"},
                "query-input":"required name=search_term_string"}],
                "inLanguage":"en-US"}]}`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
