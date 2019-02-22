import { ratingReducer } from "../rating";
import {
  RATING_REQUEST,
  RATING_SUCCESS,
  RATING_FAILURE
} from "../../../../actions/types";

describe("rating reducer", () => {
  it("should return the initial state", () => {
    expect(ratingReducer(undefined, {})).toEqual({});
  });

  it("should handle rating request", () => {
    expect(
      ratingReducer(
        {},
        {
          RATING_REQUEST
        }
      )
    ).toEqual({
      requesting: true
    });

    expect(
      ratingReducer(
        {},
        {
          RATING_SUCCESS
        }
      )
    ).toEqual({
      message: "success",
      payload: undefined
    });
    expect(ratingReducer({}, { RATING_FAILURE })).toEqual({
      requesting: false,
      message: "failure"
    });
  });
});
