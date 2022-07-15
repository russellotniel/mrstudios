import React from "react"
import SEO from "../components/SEO"
import Layout from "../components/Layout"

const Subscribe = () => {
  return (
    <Layout>
      <SEO title="Subscribe" />
      <center>
        <div id="mc_embed_signup">
          <form
            action="https://gmail.us11.list-manage.com/subscribe/post?u=89673f29223011df0f7445d49&amp;id=0e107bb11f"
            method="post"
          >
            <div id="mc_embed_signup_scroll">
              <h2>Subscribe</h2>
              <div>
                <label>Email</label>
                <input type="email" name="email"></input>
              </div>
              <div class="optionalParent">
                <div class="clear foot">
                  <button type="submit" class="btn-dark">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </center>
    </Layout>
  )
}

export default Subscribe
