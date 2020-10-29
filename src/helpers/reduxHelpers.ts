type REDUX_STATUS = "REQUEST" | "SUCCESS" | "ERROR";

export type ActionTypesObject = {
  request: string;
  success: string;
  error: string;
};

export function extractStatus(type): REDUX_STATUS {
  let status = type.split("_").pop();

  if (status !== "ERROR" && status !== "SUCCESS") {
    status = "REQUEST";
  }

  return status;
}

/**
 * This creates a success, request and error action for the specified action name
 * This makes creating action types a lot easier and less repetitive.
 * @param name The name of the action
 */
export function createActionType(name: string): ActionTypesObject {
  return {
    request: `${name}_REQUEST`,
    success: `${name}_SUCCESS`,
    error: `${name}_ERROR`,
  };
}

/**
 * This returns an action creator function that you can easily use in a
 * dispatch in your components.
 * @param actionType a string that makes specifies the action type
 */
export function generateActionCreator(actionType: string) {
  const actionCreator = (payload?: any) => ({
    type: actionType,
    payload,
  });

  return actionCreator;
}

export function handleReduxAction<T = Record<string, any>>(
  state: T,
  payload,
  status: REDUX_STATUS,
  key: keyof T
): T {
  const { data, errors } = payload;

  if (status === "REQUEST") {
    return {
      ...state,
      [key]: {
        ...state[key],
        processing: true,
        processed: false,
      },
    };
  } else if (status === "SUCCESS") {
    return {
      ...state,
      [key]: {
        ...state[key],
        processing: false,
        success: true,
        processed: true,
        data,
      },
    };
  }

  return {
    ...state,
    [key]: {
      ...state[key],
      processing: false,
      success: false,
      processed: true,
      errors,
    },
  };
}

export function handleInfiniteScrollReduxState<
  T extends Record<string, ManyObjectState | any>
>(
  state: T,
  payload,
  status: REDUX_STATUS,
  key: keyof T,
  resetWhenPageNumberIsOne = true
): T {
  const { data = [], pageNumber = 1, paginationMeta } = payload;

  if (status === "REQUEST" || status === "ERROR") {
    const newState = handleReduxAction(state, payload, status, key);

    if (pageNumber === 1) {
      newState[key]["data"] = [];
    }

    return newState;
  }

  const pageShouldReset =
    resetWhenPageNumberIsOne && paginationMeta?.currentPage === 1;

  let newData = [...state[key].data, ...data];

  if (pageShouldReset) {
    newData = data;
  }

  return {
    ...state,
    [key]: {
      ...state[key],
      processing: false,
      success: true,
      processed: true,
      data: newData,
      paginationMeta,
    },
  };
}

export function complexUpdate<
  T extends Record<string, any> = Record<string, any>
>(payload: Record<string, any>, state: T, postKey: keyof T) {
  const { data: updatedPost } = payload;

  const existingFeed = state[postKey].data.map((post) => {
    if (post.id === updatedPost.id) {
      return {
        ...post,
        ...updatedPost,
      };
    }

    return post;
  });

  return {
    ...state,
    [postKey]: {
      ...state[postKey],
      data: existingFeed,
    },
  };
}
