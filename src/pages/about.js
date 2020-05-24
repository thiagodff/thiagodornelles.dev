import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  const [avatarURL, setAvatarURL] = useState('');

  useEffect(() => {
    async function loadImg() {
      fetch('https://api.github.com/users/thiagodff').then(
        response => response.json()
      ).then(
        data => setAvatarURL(data.avatar_url)
      );

    }

    loadImg();
  }, []);

  return (
    <Layout title="about">
      <SEO title="Thiago" />
      <h1>Conheça um pouco sobre mim.</h1>
    </Layout>
  )
}

export default AboutPage
