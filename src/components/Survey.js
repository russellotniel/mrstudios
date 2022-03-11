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
          <List className="py-5">
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
                    <h3>{name["en-US"]}</h3>
                    <h3>{votes["en-US"]}</h3>
                    <Button variant="outline-dark" onClick={() => addVote(id)}>
                      Vote
                    </Button>
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
  }

  @media (min-width: 800px) {
    .line {
      width: 5%;
    }

    .votes {
      flex-direction: row;
      justify-content: space-evenly;
    }
  }
`

export default Survey

// client
//   .getSpace("qa5s4zuftbb3")
//   .then(space => space.getEnvironment("master"))
//   .then(environment => environment.getEntry("7tYvL3dl0xTQcD4gAKDIbg"))
//   .then(entry => {
//     entry.fields.votes["en-US"] = entry.fields.votes["en-US"] + 1
//     return entry.update()
//   })
//   .then(entry => console.log(`Entry ${entry.sys.id} votes updated with + 1.`))
//   .catch(console.error)

// await client
//   .getSpace("qa5s4zuftbb3")
//   .then(space => space.getEnvironment("master"))
//   .then(environment => environment.getEntry(id))
//   .then(entry => {
//     return entry.update(tempItems)
//   })
//   .then(entry =>
//     console.log(`Entry ${entry.fields.name["en-US"]} updated.`)
//   )
//   .catch(console.error)

// await client
//   .getSpace("qa5s4zuftbb3")
//   .then(space => space.getEnvironment("master"))
//   .then(environment => environment.getEntry(id))
//   .then(entry => {
//     entry.fields.votes["en-US"] += 1
//     return entry.update()
//   })
//   .then(entry =>
//     console.log(`Entry ${entry.fields.name["en-US"]} updated.`)
//   )
//   .catch(console.error)

// await client
//   .getSpace("qa5s4zuftbb3")
//   .then(space => space.getEnvironment("master"))
//   .then(environment => environment.getEntry(id))
//   .then(entry => {
//     const newItems = {
//       id: entry.sys.id,
//       fields: entry.fields,
//     }
//     setItems(newItems)
//     setLoading(false)
//     return entry.update(tempItems)
//   })
//   .then(entry =>
//     console.log(`Entry ${entry.fields.name["en-US"]} updated.`)
//   )
//   .catch(console.error)

// console.log(records)

// const newItems = records.items.map(record => {
//   const id = record.sys.id
//   const fields = record.fields
//   return { id, fields }
// })
// setItems(newItems)
// setLoading(false)

// const tempItems = [...items].map(item => {
//   if (item.id === id) {
//     let { id, fields } = item
//     fields = { ...fields, votes: fields.votes["en-US"] + 1 }
//     return { id, fields }
//   } else {
//     return item
//   }
// })
