import { renderRelayTree } from "lib/tests/renderRelayTree"
import React from "react"
import { graphql } from "react-relay"
import { SellerInfoFragmentContainer as SellerInfo } from "../SellerInfo"

jest.unmock("react-relay")

describe("SellerInfo", () => {
  it("renders", async () => {
    const wrapper = await renderRelayTree({
      Component: SellerInfo,
      query: graphql`
        # TODO: Add parameters or nest the fragment spread inside a root field, as necessary.
        query SellerInfoTestQuery {
          artwork(id: "testArtwork") {
            ...SellerInfo_artwork
          }
        }
      `,
      mockData: {
        artwork: artworkSellerInfo,
      },
      variables: {},
      wrapper: children => <MockBoot breakpoint="lg">{children}</MockBoot>,
    })
    expect(
      wrapper
        .find("SellerInfo")
        .children()
        .getElements().length
    ).not.toEqual(0)
  })
})

const artworkSellerInfo = {
  partner: {
    name: "Partner 1",
  },
  " $refType": null,
}
