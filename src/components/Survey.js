import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

const contentful = require("contentful-management")

const client = contentful.createClient({
  accessToken: "CFPAT-mXlpaSekI8vf9hfOk_oHua6_Y26OTEJ2KPV-eHPrRG4",
})

const Survey = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const getRecords = async () => {
    const entries = await client
      .getSpace("qa5s4zuftbb3")
      .then(space => space.getEnvironment("master"))
      .then(env => env.getEntries({ "sys.contentType.sys.id": "survey" }))
      .catch(console.error)

    const newItems = entries.items.map(entry => {
      const id = entry.sys.id
      const fields = entry.fields
      return { id, fields }
    })
    setItems(newItems)
    setLoading(false)
  }

  useEffect(() => {
    getRecords()
  }, [])

  const addVote = async id => {
    setLoading(true)

    await client
      .getSpace("qa5s4zuftbb3")
      .then(space => space.getEnvironment("master"))
      .then(environment => environment.getEntry(id))
      .then(entry => {
        entry.fields.votes["en-US"] += 1

        const newItems = items.map(item => {
          if (entry.sys.id === item.id) {
            let { id, fields } = item
            let tempVotes = fields.votes["en-US"] + 1
            fields = { ...fields, votes: { "en-US": tempVotes } }
            return { id, fields }
          } else {
            return item
          }
        })

        setItems(newItems)
        setLoading(false)

        return entry.update()
      })
      .catch(console.error)
  }

  return (
    <Wrapper>
      <Container>
        {loading && <h2 className="text-center py-5">Loading</h2>}
        {!loading && (
          <List className="py-4">
            <h2>Which brand do you prefer?</h2>
            <div className="line"></div>
            <div className="survey-content">
              {items.map(item => {
                const {
                  id,
                  fields: { name, votes },
                } = item

                return (
                  <div key={id} className="votes">
                    <h3>{name["en-US"]}</h3>
                    <Button variant="outline-dark" onClick={() => addVote(id)}>
                      Vote
                    </Button>
                    <h6 className="pt-3">{votes["en-US"]} votes</h6>
                  </div>
                )
              })}
            </div>
          </List>
        )}
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #d9d9d9;
  width: 100%;
`

const List = styled.div`
  h2 {
    font-weight: 600;
  }

  h3 {
    font-weight: 500;
  }

  button {
    border: 1px solid;
  }

  .line {
    border-bottom: 2px solid gray;
    width: 10%;
    margin-bottom: 1.5em;
  }

  .title {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .votes {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    margin: 1rem 0;
    padding: 1rem;
  }

  @media (min-width: 850px) {
    .line {
      width: 5%;
    }

    .survey-content {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 1rem;
    }

    .votes {
      flex-direction: column;
    }
  }
`

export default Survey
