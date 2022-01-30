import { NextApiRequest, NextApiResponse } from "next";

interface TCorsOptions {
  origin?: string;
  maxAge?: string;
  allowMethods?: string[];
  allowHeaders?: string[];
  allowCredentials?: boolean;
  exposeHeaders?: any[];
}

const DEFAULT_ALLOW_METHODS = [
  "POST",
  "GET",
  "PUT",
  "PATCH",
  "DELETE",
  "OPTIONS",
];

const DEFAULT_ALLOW_HEADERS = [
  "Origin",
  "X-Requested-With",
  "Access-Control-Allow-Origin",
  "X-HTTP-Method-Override",
  "Content-Type",
  "Authorization",
  "Accept",
];

const DEFAULT_MAX_AGE_SECONDS = 60 * 60 * 24; // 24 hours

const cors =
  (options: TCorsOptions) =>
  (handler: any) =>
  (req: NextApiRequest, res: NextApiResponse, ...restArgs: any) => {
    const {
      origin = "*",
      maxAge = DEFAULT_MAX_AGE_SECONDS,
      allowMethods = DEFAULT_ALLOW_METHODS,
      allowHeaders = DEFAULT_ALLOW_HEADERS,
      allowCredentials = true,
      exposeHeaders = [],
    } = options;

    res.setHeader("Access-Control-Allow-Origin", origin);

    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );

    if (req.method === "OPTIONS") {
      res.end();
      return false;
    }

    // res.setHeader("Access-Control-Allow-Origin", origin);
    // if (allowCredentials) {
    //   res.setHeader("Access-Control-Allow-Credentials", "true");
    // }

    // const preFlight = req.method === "OPTIONS";
    // if (preFlight) {
    //   // res.setHeader('Access-Control-Allow-Methods', allowMethods.join(','))
    //   // res.setHeader('Access-Control-Allow-Headers', allowHeaders.join(','))
    //   // res.setHeader('Access-Control-Max-Age', String(maxAge));

    //   res.end();
    //   return false;
    // }

    return handler(req, res, ...restArgs);
  };

export default cors;
