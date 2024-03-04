// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nRVYsRNsf37ycEBzz1jTUZ
// Component: 9Z8mAFDQd8Qm

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { PhoneInput } from "../../PhoneInput"; // plasmic-import: pe3HGqk8Z1sA/codeComponent
import { AntdCheckbox } from "@plasmicpkgs/antd5/skinny/registerCheckbox";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";

import { useScreenVariants as useScreenVariantsvi9YyKaZar4F } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: VI9yyKaZar4f/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: nRVYsRNsf37ycEBzz1jTUZ/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: 9Z8mAFDQd8Qm/css

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  h1?: Flex__<"h1">;
  form?: Flex__<typeof FormWrapper>;
  input?: Flex__<typeof AntdInput>;
  input2?: Flex__<typeof AntdInput>;
  phoneInput?: Flex__<typeof PhoneInput>;
  input3?: Flex__<typeof AntdInput>;
  checkbox?: Flex__<typeof AntdCheckbox>;
  link?: Flex__<"a"> & Partial<LinkProps>;
  button?: Flex__<typeof AntdButton>;
  merci?: Flex__<"div">;
};

export interface DefaultHomepageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "form.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "form",
        onMutate: generateOnMutateForSpec("value", FormWrapper_Helpers)
      },
      {
        path: "input.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      },
      {
        path: "input2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      },
      {
        path: "input3.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      },
      {
        path: "checkbox.checked",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "form.isSubmitting",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,

        refName: "form",
        onMutate: generateOnMutateForSpec("isSubmitting", FormWrapper_Helpers)
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const plasmicInvalidate = usePlasmicInvalidate();

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsvi9YyKaZar4F()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox__nmiaz)}>
            <div className={classNames(projectcss.all, sty.freeBox__qNCsv)}>
              <PlasmicImg__
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={
                  hasVariant(globalVariants, "screen", "desktopOnly")
                    ? "800px"
                    : "100%"
                }
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/senat_mestrallet_mdaeschlimann_com/images/ericMestralletjpeg.jpg",
                  fullWidth: 1500,
                  fullHeight: 1076,
                  aspectRatio: undefined
                }}
              />
            </div>
            <h1
              data-plasmic-name={"h1"}
              data-plasmic-override={overrides.h1}
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1
              )}
            >
              {"Colloque sur l'\u00e9ducation\navec Eric Mestrallet"}
            </h1>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__etuOg)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___5ZRno
              )}
            >
              {
                "Mercredi 22 mars 2024 de 15h00 \u00e0 18h00 \nau S\u00e9nat, Palais du Luxembourg"
              }
            </div>
            {(() => {
              try {
                return (() => {
                  if (window.self !== window.top) {
                    return true;
                  } else {
                    return document.cookie.includes("mestrallet=true")
                      ? false
                      : true;
                  }
                })();
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return true;
                }
                throw e;
              }
            })()
              ? (() => {
                  const child$Props = {
                    className: classNames("__wab_instance", sty.form),
                    extendedOnValuesChange:
                      generateStateOnChangePropForCodeComponents(
                        $state,
                        "value",
                        ["form", "value"],
                        FormWrapper_Helpers
                      ),
                    formItems: [
                      { label: "Name", name: "name", inputType: "Text" },
                      {
                        label: "Message",
                        name: "message",
                        inputType: "Text Area"
                      }
                    ],
                    labelCol: { span: 8, horizontalOnly: true },
                    layout: "vertical",
                    mode: "advanced",
                    onFinish: async values => {
                      const $steps = {};

                      $steps["httpPost"] = true
                        ? (() => {
                            const actionArgs = {
                              dataOp: {
                                sourceId: "ddBdpqNybrhmL3gA2tP2BN",
                                opId: "3bd9ad3a-ba03-4c74-bcaf-9ed4c9ca6f46",
                                userArgs: {
                                  body: [values]
                                },
                                cacheKey: null,
                                invalidatedKeys: ["plasmic_refresh_all"],
                                roleId: null
                              },
                              continueOnError: true
                            };
                            return (async ({ dataOp, continueOnError }) => {
                              try {
                                const response = await executePlasmicDataOp(
                                  dataOp,
                                  {
                                    userAuthToken:
                                      dataSourcesCtx?.userAuthToken,
                                    user: dataSourcesCtx?.user
                                  }
                                );
                                await plasmicInvalidate(dataOp.invalidatedKeys);
                                return response;
                              } catch (e) {
                                if (!continueOnError) {
                                  throw e;
                                }
                                return e;
                              }
                            })?.apply(null, [actionArgs]);
                          })()
                        : undefined;
                      if (
                        $steps["httpPost"] != null &&
                        typeof $steps["httpPost"] === "object" &&
                        typeof $steps["httpPost"].then === "function"
                      ) {
                        $steps["httpPost"] = await $steps["httpPost"];
                      }

                      $steps["runCode"] = true
                        ? (() => {
                            const actionArgs = {
                              customFunction: async () => {
                                return (() => {
                                  if (
                                    $steps.httpPost?.data?.statusCode !== 200
                                  ) {
                                    if (
                                      window.confirm(
                                        "Une erreur s'est produite. Vous allez être redirigé vers notre formulaire de contact afin de pouvoir la signaler."
                                      )
                                    ) {
                                      return (window.top.location.href =
                                        "https://mdaeschlimann.com/contact/");
                                    }
                                  } else {
                                    document.cookie =
                                      "mestrallet=true; Secure; SameSite=Strict; Path=/";
                                    return location.reload();
                                  }
                                })();
                              }
                            };
                            return (({ customFunction }) => {
                              return customFunction();
                            })?.apply(null, [actionArgs]);
                          })()
                        : undefined;
                      if (
                        $steps["runCode"] != null &&
                        typeof $steps["runCode"] === "object" &&
                        typeof $steps["runCode"].then === "function"
                      ) {
                        $steps["runCode"] = await $steps["runCode"];
                      }
                    },
                    onIsSubmittingChange:
                      generateStateOnChangePropForCodeComponents(
                        $state,
                        "isSubmitting",
                        ["form", "isSubmitting"],
                        FormWrapper_Helpers
                      ),
                    ref: ref => {
                      $refs["form"] = ref;
                    },
                    requiredMark: true,
                    submitSlot: null,
                    wrapperCol: { span: 16, horizontalOnly: true }
                  };
                  initializeCodeComponentStates(
                    $state,
                    [
                      {
                        name: "value",
                        plasmicStateName: "form.value"
                      },
                      {
                        name: "isSubmitting",
                        plasmicStateName: "form.isSubmitting"
                      }
                    ],
                    [],
                    FormWrapper_Helpers ?? {},
                    child$Props
                  );

                  return (
                    <FormWrapper
                      data-plasmic-name={"form"}
                      data-plasmic-override={overrides.form}
                      {...child$Props}
                    >
                      <FormItemWrapper
                        className={classNames(
                          "__wab_instance",
                          sty.formField__oU2Ir
                        )}
                        label={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__gmg7Q
                            )}
                          >
                            {"Pr\u00e9nom"}
                          </div>
                        }
                        name={"prenom"}
                        noLabel={false}
                        rules={[{ ruleType: "required", message: "Requis" }]}
                      >
                        {(() => {
                          const child$Props = {
                            className: classNames("__wab_instance", sty.input),
                            onChange:
                              generateStateOnChangePropForCodeComponents(
                                $state,
                                "value",
                                ["input", "value"],
                                AntdInput_Helpers
                              ),
                            value: generateStateValueProp($state, [
                              "input",
                              "value"
                            ])
                          };
                          initializeCodeComponentStates(
                            $state,
                            [
                              {
                                name: "value",
                                plasmicStateName: "input.value"
                              }
                            ],
                            [],
                            AntdInput_Helpers ?? {},
                            child$Props
                          );

                          return (
                            <AntdInput
                              data-plasmic-name={"input"}
                              data-plasmic-override={overrides.input}
                              {...child$Props}
                            />
                          );
                        })()}
                      </FormItemWrapper>
                      <FormItemWrapper
                        className={classNames(
                          "__wab_instance",
                          sty.formField__l716T
                        )}
                        label={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text___6AewZ
                            )}
                          >
                            {"Nom"}
                          </div>
                        }
                        name={"nom"}
                        noLabel={false}
                        rules={[{ ruleType: "required", message: "Requis" }]}
                      >
                        {(() => {
                          const child$Props = {
                            className: classNames("__wab_instance", sty.input2),
                            onChange:
                              generateStateOnChangePropForCodeComponents(
                                $state,
                                "value",
                                ["input2", "value"],
                                AntdInput_Helpers
                              ),
                            value: generateStateValueProp($state, [
                              "input2",
                              "value"
                            ])
                          };
                          initializeCodeComponentStates(
                            $state,
                            [
                              {
                                name: "value",
                                plasmicStateName: "input2.value"
                              }
                            ],
                            [],
                            AntdInput_Helpers ?? {},
                            child$Props
                          );

                          return (
                            <AntdInput
                              data-plasmic-name={"input2"}
                              data-plasmic-override={overrides.input2}
                              {...child$Props}
                            />
                          );
                        })()}
                      </FormItemWrapper>
                      <FormItemWrapper
                        className={classNames(
                          "__wab_instance",
                          sty.formField__chWz6
                        )}
                        label={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__jpLcp
                            )}
                          >
                            {"T\u00e9l\u00e9phone mobile"}
                          </div>
                        }
                        name={"Mobile"}
                        rules={[{ ruleType: "required", message: "Requis" }]}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__pfhDp
                          )}
                        >
                          <PhoneInput
                            data-plasmic-name={"phoneInput"}
                            data-plasmic-override={overrides.phoneInput}
                            className={classNames(
                              "__wab_instance",
                              sty.phoneInput
                            )}
                            name={"telephone"}
                            placeholder={``}
                          />
                        </div>
                      </FormItemWrapper>
                      <FormItemWrapper
                        className={classNames(
                          "__wab_instance",
                          sty.formField__w66Bp
                        )}
                        label={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__pKu2P
                            )}
                          >
                            {"Email"}
                          </div>
                        }
                        name={"email"}
                        rules={[{ ruleType: "required", message: "Requis" }]}
                      >
                        {(() => {
                          const child$Props = {
                            className: classNames("__wab_instance", sty.input3),
                            onChange:
                              generateStateOnChangePropForCodeComponents(
                                $state,
                                "value",
                                ["input3", "value"],
                                AntdInput_Helpers
                              ),
                            value: generateStateValueProp($state, [
                              "input3",
                              "value"
                            ])
                          };
                          initializeCodeComponentStates(
                            $state,
                            [
                              {
                                name: "value",
                                plasmicStateName: "input3.value"
                              }
                            ],
                            [],
                            AntdInput_Helpers ?? {},
                            child$Props
                          );

                          return (
                            <AntdInput
                              data-plasmic-name={"input3"}
                              data-plasmic-override={overrides.input3}
                              {...child$Props}
                            />
                          );
                        })()}
                      </FormItemWrapper>
                      <FormItemWrapper
                        className={classNames(
                          "__wab_instance",
                          sty.formField__kMo2A
                        )}
                        label={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__eMr1H
                            )}
                          >
                            {"Label"}
                          </div>
                        }
                        name={"rgpd"}
                        noLabel={true}
                        rules={[{ ruleType: "required", message: "Requis" }]}
                      >
                        <AntdCheckbox
                          data-plasmic-name={"checkbox"}
                          data-plasmic-override={overrides.checkbox}
                          checked={generateStateValueProp($state, [
                            "checkbox",
                            "checked"
                          ])}
                          className={classNames("__wab_instance", sty.checkbox)}
                          onChange={generateStateOnChangeProp($state, [
                            "checkbox",
                            "checked"
                          ])}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__kpl4X
                            )}
                          >
                            <React.Fragment>
                              <React.Fragment>
                                {"Je confirme avoir pris connaissance de vos "}
                              </React.Fragment>
                              {
                                <PlasmicLink__
                                  data-plasmic-name={"link"}
                                  data-plasmic-override={overrides.link}
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.a,
                                    projectcss.__wab_text,
                                    projectcss.plasmic_default__inline,
                                    sty.link
                                  )}
                                  component={Link}
                                  href={
                                    "/mentions-legales-et-politique-de-confidentialite/"
                                  }
                                  platform={"nextjs"}
                                >
                                  {
                                    "mentions l\u00e9gales et politique de confidentialit\u00e9"
                                  }
                                </PlasmicLink__>
                              }
                              <React.Fragment>{""}</React.Fragment>
                            </React.Fragment>
                          </div>
                        </AntdCheckbox>
                      </FormItemWrapper>
                      <AntdButton
                        data-plasmic-name={"button"}
                        data-plasmic-override={overrides.button}
                        className={classNames("__wab_instance", sty.button)}
                        submitsForm={true}
                        type={"primary"}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__yTenZ
                          )}
                        >
                          {"Inscription"}
                        </div>
                      </AntdButton>
                    </FormWrapper>
                  );
                })()
              : null}
            {(() => {
              try {
                return (() => {
                  if (window.self !== window.top) {
                    return false;
                  } else {
                    return document.cookie.includes("mestrallet=true")
                      ? true
                      : false;
                  }
                })();
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return true;
                }
                throw e;
              }
            })() ? (
              <div
                data-plasmic-name={"merci"}
                data-plasmic-override={overrides.merci}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.merci
                )}
              >
                {
                  "Nous avons bien re\u00e7u votre formulaire.\nMerci pour votre inscription au \nComit\u00e9 des experts avec Eric Mestrallet."
                }
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "img",
    "h1",
    "form",
    "input",
    "input2",
    "phoneInput",
    "input3",
    "checkbox",
    "link",
    "button",
    "merci"
  ],
  img: ["img"],
  h1: ["h1"],
  form: [
    "form",
    "input",
    "input2",
    "phoneInput",
    "input3",
    "checkbox",
    "link",
    "button"
  ],
  input: ["input"],
  input2: ["input2"],
  phoneInput: ["phoneInput"],
  input3: ["input3"],
  checkbox: ["checkbox", "link"],
  link: ["link"],
  button: ["button"],
  merci: ["merci"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof PlasmicImg__;
  h1: "h1";
  form: typeof FormWrapper;
  input: typeof AntdInput;
  input2: typeof AntdInput;
  phoneInput: typeof PhoneInput;
  input3: typeof AntdInput;
  checkbox: typeof AntdCheckbox;
  link: "a";
  button: typeof AntdButton;
  merci: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    h1: makeNodeComponent("h1"),
    form: makeNodeComponent("form"),
    input: makeNodeComponent("input"),
    input2: makeNodeComponent("input2"),
    phoneInput: makeNodeComponent("phoneInput"),
    input3: makeNodeComponent("input3"),
    checkbox: makeNodeComponent("checkbox"),
    link: makeNodeComponent("link"),
    button: makeNodeComponent("button"),
    merci: makeNodeComponent("merci"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
