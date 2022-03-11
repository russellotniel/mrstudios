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
      .then(entry =>
        console.log(`Entry ${entry.fields.name["en-US"]} updated.`)
      )
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
            <ul className="votes">
              {items.map(item => {
                const {
                  id,
                  fields: { name, votes },
                } = item

                return (
                  <li key={id}>
                    <h3 className="pb-2">{name["en-US"]}</h3>
                    <Button variant="outline-dark" onClick={() => addVote(id)}>
                      Vote
                    </Button>
                    <h6 className="pt-3">{votes["en-US"]} votes</h6>
                  </li>
                )
              })}
            </ul>
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
  }

  .title {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .votes {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .votes li {
    margin: 1rem 0;
    padding: 1rem;
    border: 1px solid black;
  }

  @media (min-width: 1100px) {
    .line {
      width: 5%;
    }

    .votes {
      flex-direction: row;
      justify-content: space-evenly;
    }

    .votes li {
      width: 20vw;
    }
  }
`

export default Survey
