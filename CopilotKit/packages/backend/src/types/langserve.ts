import { AnnotatedFunctionArgument } from "@copilotkit/shared";

export interface RemoteChain {
  name: string;
  description: string;
  chainUrl: string;

  argumentAnnotations?: AnnotatedFunctionArgument[];
  callType?: "invoke" | "stream";
  argumentType?: "single" | "multi";
}
