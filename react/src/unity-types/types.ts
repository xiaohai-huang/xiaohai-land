//
// Types in assemblies: Assembly-CSharp
// Generated 11/17/2023 10:08:30 PM
//
/* eslint-disable */

import { ReactUnity, System, UnityEngine } from "@reactunity/renderer";

export declare class StyleHelper {
  static Instance: StyleHelper;
  Q(
    element: UnityEngine.UIElements.VisualElement,
    name: string
  ): UnityEngine.UIElements.VisualElement;
  SetFlex(
    element: UnityEngine.UIElements.VisualElement,
    property: string,
    value: string
  ): void;
  SetPadding(
    element: UnityEngine.UIElements.VisualElement,
    direction: string,
    value: number
  ): void;
  SetMargin(
    element: UnityEngine.UIElements.VisualElement,
    direction: string,
    value: number
  ): void;
  SetAlignItems(
    element: UnityEngine.UIElements.VisualElement,
    value: string
  ): void;
  Equals(obj: any): boolean;
  GetHashCode(): number;
  GetType(): System.Type;
  ToString(): string;
}
export declare class UpdateScriptSource {
  constructor();
  destroyCancellationToken: System.Threading.CancellationToken;
  useGUILayout: boolean;
  didStart: boolean;
  didAwake: boolean;
  runInEditMode: boolean;
  enabled: boolean;
  isActiveAndEnabled: boolean;
  transform: UnityEngine.Transform;
  gameObject: UnityEngine.GameObject;
  tag: string;
  rigidbody: UnityEngine.Component;
  rigidbody2D: UnityEngine.Component;
  camera: UnityEngine.Component;
  light: UnityEngine.Component;
  animation: UnityEngine.Component;
  constantForce: UnityEngine.Component;
  renderer: UnityEngine.Component;
  audio: UnityEngine.Component;
  networkView: UnityEngine.Component;
  collider: UnityEngine.Component;
  collider2D: UnityEngine.Component;
  hingeJoint: UnityEngine.Component;
  particleSystem: UnityEngine.Component;
  name: string;
  hideFlags: UnityEngine.HideFlags;
  ScriptSourceConfigUrl: string;
  OnStartDownloadScript: UnityEngine.Events.UnityEvent;
  OnFinishDownloadScript: UnityEngine.Events.UnityEvent;
  IsInvoking(): boolean;
  CancelInvoke(): void;
  Invoke(methodName: string, time: number): void;
  InvokeRepeating(methodName: string, time: number, repeatRate: number): void;
  CancelInvoke(methodName: string): void;
  IsInvoking(methodName: string): boolean;
  StartCoroutine(methodName: string): UnityEngine.Coroutine;
  StartCoroutine(methodName: string, value: any): UnityEngine.Coroutine;
  StartCoroutine(
    routine: System.Collections.IEnumerator
  ): UnityEngine.Coroutine;
  StartCoroutine_Auto(
    routine: System.Collections.IEnumerator
  ): UnityEngine.Coroutine;
  StopCoroutine(routine: System.Collections.IEnumerator): void;
  StopCoroutine(routine: UnityEngine.Coroutine): void;
  StopCoroutine(methodName: string): void;
  StopAllCoroutines(): void;
  GetComponent(type: System.Type): UnityEngine.Component;
  GetComponent(type: string): UnityEngine.Component;
  GetComponentInChildren(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component;
  GetComponentInChildren(t: System.Type): UnityEngine.Component;
  GetComponentsInChildren(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component[];
  GetComponentsInChildren(t: System.Type): UnityEngine.Component[];
  GetComponentInParent(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component;
  GetComponentInParent(t: System.Type): UnityEngine.Component;
  GetComponentsInParent(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component[];
  GetComponentsInParent(t: System.Type): UnityEngine.Component[];
  GetComponents(type: System.Type): UnityEngine.Component[];
  GetComponents(type: System.Type, results: UnityEngine.Component[]): void;
  CompareTag(tag: string): boolean;
  SendMessageUpwards(
    methodName: string,
    value: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessageUpwards(methodName: string, value: any): void;
  SendMessageUpwards(methodName: string): void;
  SendMessageUpwards(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessage(methodName: string, value: any): void;
  SendMessage(methodName: string): void;
  SendMessage(
    methodName: string,
    value: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessage(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  BroadcastMessage(
    methodName: string,
    parameter: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  BroadcastMessage(methodName: string, parameter: any): void;
  BroadcastMessage(methodName: string): void;
  BroadcastMessage(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  GetInstanceID(): number;
  GetHashCode(): number;
  Equals(other: any): boolean;
  ToString(): string;
  GetType(): System.Type;
}
export declare class AndroidCodeRunner {
  constructor();
  destroyCancellationToken: System.Threading.CancellationToken;
  useGUILayout: boolean;
  didStart: boolean;
  didAwake: boolean;
  runInEditMode: boolean;
  enabled: boolean;
  isActiveAndEnabled: boolean;
  transform: UnityEngine.Transform;
  gameObject: UnityEngine.GameObject;
  tag: string;
  rigidbody: UnityEngine.Component;
  rigidbody2D: UnityEngine.Component;
  camera: UnityEngine.Component;
  light: UnityEngine.Component;
  animation: UnityEngine.Component;
  constantForce: UnityEngine.Component;
  renderer: UnityEngine.Component;
  audio: UnityEngine.Component;
  networkView: UnityEngine.Component;
  collider: UnityEngine.Component;
  collider2D: UnityEngine.Component;
  hingeJoint: UnityEngine.Component;
  particleSystem: UnityEngine.Component;
  name: string;
  hideFlags: UnityEngine.HideFlags;
  IsInvoking(): boolean;
  CancelInvoke(): void;
  Invoke(methodName: string, time: number): void;
  InvokeRepeating(methodName: string, time: number, repeatRate: number): void;
  CancelInvoke(methodName: string): void;
  IsInvoking(methodName: string): boolean;
  StartCoroutine(methodName: string): UnityEngine.Coroutine;
  StartCoroutine(methodName: string, value: any): UnityEngine.Coroutine;
  StartCoroutine(
    routine: System.Collections.IEnumerator
  ): UnityEngine.Coroutine;
  StartCoroutine_Auto(
    routine: System.Collections.IEnumerator
  ): UnityEngine.Coroutine;
  StopCoroutine(routine: System.Collections.IEnumerator): void;
  StopCoroutine(routine: UnityEngine.Coroutine): void;
  StopCoroutine(methodName: string): void;
  StopAllCoroutines(): void;
  GetComponent(type: System.Type): UnityEngine.Component;
  GetComponent(type: string): UnityEngine.Component;
  GetComponentInChildren(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component;
  GetComponentInChildren(t: System.Type): UnityEngine.Component;
  GetComponentsInChildren(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component[];
  GetComponentsInChildren(t: System.Type): UnityEngine.Component[];
  GetComponentInParent(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component;
  GetComponentInParent(t: System.Type): UnityEngine.Component;
  GetComponentsInParent(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component[];
  GetComponentsInParent(t: System.Type): UnityEngine.Component[];
  GetComponents(type: System.Type): UnityEngine.Component[];
  GetComponents(type: System.Type, results: UnityEngine.Component[]): void;
  CompareTag(tag: string): boolean;
  SendMessageUpwards(
    methodName: string,
    value: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessageUpwards(methodName: string, value: any): void;
  SendMessageUpwards(methodName: string): void;
  SendMessageUpwards(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessage(methodName: string, value: any): void;
  SendMessage(methodName: string): void;
  SendMessage(
    methodName: string,
    value: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessage(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  BroadcastMessage(
    methodName: string,
    parameter: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  BroadcastMessage(methodName: string, parameter: any): void;
  BroadcastMessage(methodName: string): void;
  BroadcastMessage(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  GetInstanceID(): number;
  GetHashCode(): number;
  Equals(other: any): boolean;
  ToString(): string;
  GetType(): System.Type;
}
export declare class Updater {
  constructor();
  destroyCancellationToken: System.Threading.CancellationToken;
  useGUILayout: boolean;
  didStart: boolean;
  didAwake: boolean;
  runInEditMode: boolean;
  enabled: boolean;
  isActiveAndEnabled: boolean;
  transform: UnityEngine.Transform;
  gameObject: UnityEngine.GameObject;
  tag: string;
  rigidbody: UnityEngine.Component;
  rigidbody2D: UnityEngine.Component;
  camera: UnityEngine.Component;
  light: UnityEngine.Component;
  animation: UnityEngine.Component;
  constantForce: UnityEngine.Component;
  renderer: UnityEngine.Component;
  audio: UnityEngine.Component;
  networkView: UnityEngine.Component;
  collider: UnityEngine.Component;
  collider2D: UnityEngine.Component;
  hingeJoint: UnityEngine.Component;
  particleSystem: UnityEngine.Component;
  name: string;
  hideFlags: UnityEngine.HideFlags;
  OnDownloadStarted: UnityEngine.Events.UnityEvent<AppUpdate.AppUpdateInfo>;
  UpdateServer: string;
  IsInvoking(): boolean;
  CancelInvoke(): void;
  Invoke(methodName: string, time: number): void;
  InvokeRepeating(methodName: string, time: number, repeatRate: number): void;
  CancelInvoke(methodName: string): void;
  IsInvoking(methodName: string): boolean;
  StartCoroutine(methodName: string): UnityEngine.Coroutine;
  StartCoroutine(methodName: string, value: any): UnityEngine.Coroutine;
  StartCoroutine(
    routine: System.Collections.IEnumerator
  ): UnityEngine.Coroutine;
  StartCoroutine_Auto(
    routine: System.Collections.IEnumerator
  ): UnityEngine.Coroutine;
  StopCoroutine(routine: System.Collections.IEnumerator): void;
  StopCoroutine(routine: UnityEngine.Coroutine): void;
  StopCoroutine(methodName: string): void;
  StopAllCoroutines(): void;
  GetComponent(type: System.Type): UnityEngine.Component;
  GetComponent(type: string): UnityEngine.Component;
  GetComponentInChildren(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component;
  GetComponentInChildren(t: System.Type): UnityEngine.Component;
  GetComponentsInChildren(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component[];
  GetComponentsInChildren(t: System.Type): UnityEngine.Component[];
  GetComponentInParent(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component;
  GetComponentInParent(t: System.Type): UnityEngine.Component;
  GetComponentsInParent(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component[];
  GetComponentsInParent(t: System.Type): UnityEngine.Component[];
  GetComponents(type: System.Type): UnityEngine.Component[];
  GetComponents(type: System.Type, results: UnityEngine.Component[]): void;
  CompareTag(tag: string): boolean;
  SendMessageUpwards(
    methodName: string,
    value: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessageUpwards(methodName: string, value: any): void;
  SendMessageUpwards(methodName: string): void;
  SendMessageUpwards(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessage(methodName: string, value: any): void;
  SendMessage(methodName: string): void;
  SendMessage(
    methodName: string,
    value: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessage(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  BroadcastMessage(
    methodName: string,
    parameter: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  BroadcastMessage(methodName: string, parameter: any): void;
  BroadcastMessage(methodName: string): void;
  BroadcastMessage(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  GetInstanceID(): number;
  GetHashCode(): number;
  Equals(other: any): boolean;
  ToString(): string;
  GetType(): System.Type;
}
export declare class ConsoleToScreen {
  constructor();
  destroyCancellationToken: System.Threading.CancellationToken;
  useGUILayout: boolean;
  didStart: boolean;
  didAwake: boolean;
  runInEditMode: boolean;
  enabled: boolean;
  isActiveAndEnabled: boolean;
  transform: UnityEngine.Transform;
  gameObject: UnityEngine.GameObject;
  tag: string;
  rigidbody: UnityEngine.Component;
  rigidbody2D: UnityEngine.Component;
  camera: UnityEngine.Component;
  light: UnityEngine.Component;
  animation: UnityEngine.Component;
  constantForce: UnityEngine.Component;
  renderer: UnityEngine.Component;
  audio: UnityEngine.Component;
  networkView: UnityEngine.Component;
  collider: UnityEngine.Component;
  collider2D: UnityEngine.Component;
  hingeJoint: UnityEngine.Component;
  particleSystem: UnityEngine.Component;
  name: string;
  hideFlags: UnityEngine.HideFlags;
  fontSize: number;
  Log(logString: string, stackTrace: string, type: UnityEngine.LogType): void;
  IsInvoking(): boolean;
  CancelInvoke(): void;
  Invoke(methodName: string, time: number): void;
  InvokeRepeating(methodName: string, time: number, repeatRate: number): void;
  CancelInvoke(methodName: string): void;
  IsInvoking(methodName: string): boolean;
  StartCoroutine(methodName: string): UnityEngine.Coroutine;
  StartCoroutine(methodName: string, value: any): UnityEngine.Coroutine;
  StartCoroutine(
    routine: System.Collections.IEnumerator
  ): UnityEngine.Coroutine;
  StartCoroutine_Auto(
    routine: System.Collections.IEnumerator
  ): UnityEngine.Coroutine;
  StopCoroutine(routine: System.Collections.IEnumerator): void;
  StopCoroutine(routine: UnityEngine.Coroutine): void;
  StopCoroutine(methodName: string): void;
  StopAllCoroutines(): void;
  GetComponent(type: System.Type): UnityEngine.Component;
  GetComponent(type: string): UnityEngine.Component;
  GetComponentInChildren(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component;
  GetComponentInChildren(t: System.Type): UnityEngine.Component;
  GetComponentsInChildren(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component[];
  GetComponentsInChildren(t: System.Type): UnityEngine.Component[];
  GetComponentInParent(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component;
  GetComponentInParent(t: System.Type): UnityEngine.Component;
  GetComponentsInParent(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component[];
  GetComponentsInParent(t: System.Type): UnityEngine.Component[];
  GetComponents(type: System.Type): UnityEngine.Component[];
  GetComponents(type: System.Type, results: UnityEngine.Component[]): void;
  CompareTag(tag: string): boolean;
  SendMessageUpwards(
    methodName: string,
    value: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessageUpwards(methodName: string, value: any): void;
  SendMessageUpwards(methodName: string): void;
  SendMessageUpwards(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessage(methodName: string, value: any): void;
  SendMessage(methodName: string): void;
  SendMessage(
    methodName: string,
    value: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessage(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  BroadcastMessage(
    methodName: string,
    parameter: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  BroadcastMessage(methodName: string, parameter: any): void;
  BroadcastMessage(methodName: string): void;
  BroadcastMessage(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  GetInstanceID(): number;
  GetHashCode(): number;
  Equals(other: any): boolean;
  ToString(): string;
  GetType(): System.Type;
}
export declare class FPSCounter {
  constructor();
  FramesPerSec: number;
  destroyCancellationToken: System.Threading.CancellationToken;
  useGUILayout: boolean;
  didStart: boolean;
  didAwake: boolean;
  runInEditMode: boolean;
  enabled: boolean;
  isActiveAndEnabled: boolean;
  transform: UnityEngine.Transform;
  gameObject: UnityEngine.GameObject;
  tag: string;
  rigidbody: UnityEngine.Component;
  rigidbody2D: UnityEngine.Component;
  camera: UnityEngine.Component;
  light: UnityEngine.Component;
  animation: UnityEngine.Component;
  constantForce: UnityEngine.Component;
  renderer: UnityEngine.Component;
  audio: UnityEngine.Component;
  networkView: UnityEngine.Component;
  collider: UnityEngine.Component;
  collider2D: UnityEngine.Component;
  hingeJoint: UnityEngine.Component;
  particleSystem: UnityEngine.Component;
  name: string;
  hideFlags: UnityEngine.HideFlags;
  IsInvoking(): boolean;
  CancelInvoke(): void;
  Invoke(methodName: string, time: number): void;
  InvokeRepeating(methodName: string, time: number, repeatRate: number): void;
  CancelInvoke(methodName: string): void;
  IsInvoking(methodName: string): boolean;
  StartCoroutine(methodName: string): UnityEngine.Coroutine;
  StartCoroutine(methodName: string, value: any): UnityEngine.Coroutine;
  StartCoroutine(
    routine: System.Collections.IEnumerator
  ): UnityEngine.Coroutine;
  StartCoroutine_Auto(
    routine: System.Collections.IEnumerator
  ): UnityEngine.Coroutine;
  StopCoroutine(routine: System.Collections.IEnumerator): void;
  StopCoroutine(routine: UnityEngine.Coroutine): void;
  StopCoroutine(methodName: string): void;
  StopAllCoroutines(): void;
  GetComponent(type: System.Type): UnityEngine.Component;
  GetComponent(type: string): UnityEngine.Component;
  GetComponentInChildren(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component;
  GetComponentInChildren(t: System.Type): UnityEngine.Component;
  GetComponentsInChildren(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component[];
  GetComponentsInChildren(t: System.Type): UnityEngine.Component[];
  GetComponentInParent(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component;
  GetComponentInParent(t: System.Type): UnityEngine.Component;
  GetComponentsInParent(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component[];
  GetComponentsInParent(t: System.Type): UnityEngine.Component[];
  GetComponents(type: System.Type): UnityEngine.Component[];
  GetComponents(type: System.Type, results: UnityEngine.Component[]): void;
  CompareTag(tag: string): boolean;
  SendMessageUpwards(
    methodName: string,
    value: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessageUpwards(methodName: string, value: any): void;
  SendMessageUpwards(methodName: string): void;
  SendMessageUpwards(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessage(methodName: string, value: any): void;
  SendMessage(methodName: string): void;
  SendMessage(
    methodName: string,
    value: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessage(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  BroadcastMessage(
    methodName: string,
    parameter: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  BroadcastMessage(methodName: string, parameter: any): void;
  BroadcastMessage(methodName: string): void;
  BroadcastMessage(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  GetInstanceID(): number;
  GetHashCode(): number;
  Equals(other: any): boolean;
  ToString(): string;
  GetType(): System.Type;
}
export declare class HelloWorld {
  constructor();
  destroyCancellationToken: System.Threading.CancellationToken;
  useGUILayout: boolean;
  didStart: boolean;
  didAwake: boolean;
  runInEditMode: boolean;
  enabled: boolean;
  isActiveAndEnabled: boolean;
  transform: UnityEngine.Transform;
  gameObject: UnityEngine.GameObject;
  tag: string;
  rigidbody: UnityEngine.Component;
  rigidbody2D: UnityEngine.Component;
  camera: UnityEngine.Component;
  light: UnityEngine.Component;
  animation: UnityEngine.Component;
  constantForce: UnityEngine.Component;
  renderer: UnityEngine.Component;
  audio: UnityEngine.Component;
  networkView: UnityEngine.Component;
  collider: UnityEngine.Component;
  collider2D: UnityEngine.Component;
  hingeJoint: UnityEngine.Component;
  particleSystem: UnityEngine.Component;
  name: string;
  hideFlags: UnityEngine.HideFlags;
  UGUI: ReactUnity.UGUI.ReactRendererUGUI;
  BeforeLoadUI(): void;
  AfterLoadUI(): void;
  IsInvoking(): boolean;
  CancelInvoke(): void;
  Invoke(methodName: string, time: number): void;
  InvokeRepeating(methodName: string, time: number, repeatRate: number): void;
  CancelInvoke(methodName: string): void;
  IsInvoking(methodName: string): boolean;
  StartCoroutine(methodName: string): UnityEngine.Coroutine;
  StartCoroutine(methodName: string, value: any): UnityEngine.Coroutine;
  StartCoroutine(
    routine: System.Collections.IEnumerator
  ): UnityEngine.Coroutine;
  StartCoroutine_Auto(
    routine: System.Collections.IEnumerator
  ): UnityEngine.Coroutine;
  StopCoroutine(routine: System.Collections.IEnumerator): void;
  StopCoroutine(routine: UnityEngine.Coroutine): void;
  StopCoroutine(methodName: string): void;
  StopAllCoroutines(): void;
  GetComponent(type: System.Type): UnityEngine.Component;
  GetComponent(type: string): UnityEngine.Component;
  GetComponentInChildren(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component;
  GetComponentInChildren(t: System.Type): UnityEngine.Component;
  GetComponentsInChildren(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component[];
  GetComponentsInChildren(t: System.Type): UnityEngine.Component[];
  GetComponentInParent(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component;
  GetComponentInParent(t: System.Type): UnityEngine.Component;
  GetComponentsInParent(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component[];
  GetComponentsInParent(t: System.Type): UnityEngine.Component[];
  GetComponents(type: System.Type): UnityEngine.Component[];
  GetComponents(type: System.Type, results: UnityEngine.Component[]): void;
  CompareTag(tag: string): boolean;
  SendMessageUpwards(
    methodName: string,
    value: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessageUpwards(methodName: string, value: any): void;
  SendMessageUpwards(methodName: string): void;
  SendMessageUpwards(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessage(methodName: string, value: any): void;
  SendMessage(methodName: string): void;
  SendMessage(
    methodName: string,
    value: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessage(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  BroadcastMessage(
    methodName: string,
    parameter: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  BroadcastMessage(methodName: string, parameter: any): void;
  BroadcastMessage(methodName: string): void;
  BroadcastMessage(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  GetInstanceID(): number;
  GetHashCode(): number;
  Equals(other: any): boolean;
  ToString(): string;
  GetType(): System.Type;
}
export declare class InAppUpdate {
  constructor();
  destroyCancellationToken: System.Threading.CancellationToken;
  useGUILayout: boolean;
  didStart: boolean;
  didAwake: boolean;
  runInEditMode: boolean;
  enabled: boolean;
  isActiveAndEnabled: boolean;
  transform: UnityEngine.Transform;
  gameObject: UnityEngine.GameObject;
  tag: string;
  rigidbody: UnityEngine.Component;
  rigidbody2D: UnityEngine.Component;
  camera: UnityEngine.Component;
  light: UnityEngine.Component;
  animation: UnityEngine.Component;
  constantForce: UnityEngine.Component;
  renderer: UnityEngine.Component;
  audio: UnityEngine.Component;
  networkView: UnityEngine.Component;
  collider: UnityEngine.Component;
  collider2D: UnityEngine.Component;
  hingeJoint: UnityEngine.Component;
  particleSystem: UnityEngine.Component;
  name: string;
  hideFlags: UnityEngine.HideFlags;
  UpdateServer: string;
  OnStartDownload: UnityEngine.Events.UnityEvent<UnityEngine.Networking.UnityWebRequest>;
  CheckUpdates(): void;
  OnDownloadPatchClick(): void;
  PerformUpdate(): void;
  InstallApp(apkPath: string): boolean;
  Fetch(url: string): System.Threading.Tasks.Task<string>;
  IsInvoking(): boolean;
  CancelInvoke(): void;
  Invoke(methodName: string, time: number): void;
  InvokeRepeating(methodName: string, time: number, repeatRate: number): void;
  CancelInvoke(methodName: string): void;
  IsInvoking(methodName: string): boolean;
  StartCoroutine(methodName: string): UnityEngine.Coroutine;
  StartCoroutine(methodName: string, value: any): UnityEngine.Coroutine;
  StartCoroutine(
    routine: System.Collections.IEnumerator
  ): UnityEngine.Coroutine;
  StartCoroutine_Auto(
    routine: System.Collections.IEnumerator
  ): UnityEngine.Coroutine;
  StopCoroutine(routine: System.Collections.IEnumerator): void;
  StopCoroutine(routine: UnityEngine.Coroutine): void;
  StopCoroutine(methodName: string): void;
  StopAllCoroutines(): void;
  GetComponent(type: System.Type): UnityEngine.Component;
  GetComponent(type: string): UnityEngine.Component;
  GetComponentInChildren(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component;
  GetComponentInChildren(t: System.Type): UnityEngine.Component;
  GetComponentsInChildren(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component[];
  GetComponentsInChildren(t: System.Type): UnityEngine.Component[];
  GetComponentInParent(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component;
  GetComponentInParent(t: System.Type): UnityEngine.Component;
  GetComponentsInParent(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component[];
  GetComponentsInParent(t: System.Type): UnityEngine.Component[];
  GetComponents(type: System.Type): UnityEngine.Component[];
  GetComponents(type: System.Type, results: UnityEngine.Component[]): void;
  CompareTag(tag: string): boolean;
  SendMessageUpwards(
    methodName: string,
    value: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessageUpwards(methodName: string, value: any): void;
  SendMessageUpwards(methodName: string): void;
  SendMessageUpwards(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessage(methodName: string, value: any): void;
  SendMessage(methodName: string): void;
  SendMessage(
    methodName: string,
    value: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessage(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  BroadcastMessage(
    methodName: string,
    parameter: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  BroadcastMessage(methodName: string, parameter: any): void;
  BroadcastMessage(methodName: string): void;
  BroadcastMessage(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  GetInstanceID(): number;
  GetHashCode(): number;
  Equals(other: any): boolean;
  ToString(): string;
  GetType(): System.Type;
}
export declare class IncrementButton {
  constructor();
  destroyCancellationToken: System.Threading.CancellationToken;
  useGUILayout: boolean;
  didStart: boolean;
  didAwake: boolean;
  runInEditMode: boolean;
  enabled: boolean;
  isActiveAndEnabled: boolean;
  transform: UnityEngine.Transform;
  gameObject: UnityEngine.GameObject;
  tag: string;
  rigidbody: UnityEngine.Component;
  rigidbody2D: UnityEngine.Component;
  camera: UnityEngine.Component;
  light: UnityEngine.Component;
  animation: UnityEngine.Component;
  constantForce: UnityEngine.Component;
  renderer: UnityEngine.Component;
  audio: UnityEngine.Component;
  networkView: UnityEngine.Component;
  collider: UnityEngine.Component;
  collider2D: UnityEngine.Component;
  hingeJoint: UnityEngine.Component;
  particleSystem: UnityEngine.Component;
  name: string;
  hideFlags: UnityEngine.HideFlags;
  HandleOnClick(): void;
  IsInvoking(): boolean;
  CancelInvoke(): void;
  Invoke(methodName: string, time: number): void;
  InvokeRepeating(methodName: string, time: number, repeatRate: number): void;
  CancelInvoke(methodName: string): void;
  IsInvoking(methodName: string): boolean;
  StartCoroutine(methodName: string): UnityEngine.Coroutine;
  StartCoroutine(methodName: string, value: any): UnityEngine.Coroutine;
  StartCoroutine(
    routine: System.Collections.IEnumerator
  ): UnityEngine.Coroutine;
  StartCoroutine_Auto(
    routine: System.Collections.IEnumerator
  ): UnityEngine.Coroutine;
  StopCoroutine(routine: System.Collections.IEnumerator): void;
  StopCoroutine(routine: UnityEngine.Coroutine): void;
  StopCoroutine(methodName: string): void;
  StopAllCoroutines(): void;
  GetComponent(type: System.Type): UnityEngine.Component;
  GetComponent(type: string): UnityEngine.Component;
  GetComponentInChildren(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component;
  GetComponentInChildren(t: System.Type): UnityEngine.Component;
  GetComponentsInChildren(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component[];
  GetComponentsInChildren(t: System.Type): UnityEngine.Component[];
  GetComponentInParent(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component;
  GetComponentInParent(t: System.Type): UnityEngine.Component;
  GetComponentsInParent(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component[];
  GetComponentsInParent(t: System.Type): UnityEngine.Component[];
  GetComponents(type: System.Type): UnityEngine.Component[];
  GetComponents(type: System.Type, results: UnityEngine.Component[]): void;
  CompareTag(tag: string): boolean;
  SendMessageUpwards(
    methodName: string,
    value: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessageUpwards(methodName: string, value: any): void;
  SendMessageUpwards(methodName: string): void;
  SendMessageUpwards(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessage(methodName: string, value: any): void;
  SendMessage(methodName: string): void;
  SendMessage(
    methodName: string,
    value: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessage(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  BroadcastMessage(
    methodName: string,
    parameter: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  BroadcastMessage(methodName: string, parameter: any): void;
  BroadcastMessage(methodName: string): void;
  BroadcastMessage(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  GetInstanceID(): number;
  GetHashCode(): number;
  Equals(other: any): boolean;
  ToString(): string;
  GetType(): System.Type;
}
export declare class MainUI {
  constructor();
  destroyCancellationToken: System.Threading.CancellationToken;
  useGUILayout: boolean;
  didStart: boolean;
  didAwake: boolean;
  runInEditMode: boolean;
  enabled: boolean;
  isActiveAndEnabled: boolean;
  transform: UnityEngine.Transform;
  gameObject: UnityEngine.GameObject;
  tag: string;
  rigidbody: UnityEngine.Component;
  rigidbody2D: UnityEngine.Component;
  camera: UnityEngine.Component;
  light: UnityEngine.Component;
  animation: UnityEngine.Component;
  constantForce: UnityEngine.Component;
  renderer: UnityEngine.Component;
  audio: UnityEngine.Component;
  networkView: UnityEngine.Component;
  collider: UnityEngine.Component;
  collider2D: UnityEngine.Component;
  hingeJoint: UnityEngine.Component;
  particleSystem: UnityEngine.Component;
  name: string;
  hideFlags: UnityEngine.HideFlags;
  ShowSplashScreen(): void;
  HideSplashScreen(): void;
  IsInvoking(): boolean;
  CancelInvoke(): void;
  Invoke(methodName: string, time: number): void;
  InvokeRepeating(methodName: string, time: number, repeatRate: number): void;
  CancelInvoke(methodName: string): void;
  IsInvoking(methodName: string): boolean;
  StartCoroutine(methodName: string): UnityEngine.Coroutine;
  StartCoroutine(methodName: string, value: any): UnityEngine.Coroutine;
  StartCoroutine(
    routine: System.Collections.IEnumerator
  ): UnityEngine.Coroutine;
  StartCoroutine_Auto(
    routine: System.Collections.IEnumerator
  ): UnityEngine.Coroutine;
  StopCoroutine(routine: System.Collections.IEnumerator): void;
  StopCoroutine(routine: UnityEngine.Coroutine): void;
  StopCoroutine(methodName: string): void;
  StopAllCoroutines(): void;
  GetComponent(type: System.Type): UnityEngine.Component;
  GetComponent(type: string): UnityEngine.Component;
  GetComponentInChildren(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component;
  GetComponentInChildren(t: System.Type): UnityEngine.Component;
  GetComponentsInChildren(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component[];
  GetComponentsInChildren(t: System.Type): UnityEngine.Component[];
  GetComponentInParent(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component;
  GetComponentInParent(t: System.Type): UnityEngine.Component;
  GetComponentsInParent(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component[];
  GetComponentsInParent(t: System.Type): UnityEngine.Component[];
  GetComponents(type: System.Type): UnityEngine.Component[];
  GetComponents(type: System.Type, results: UnityEngine.Component[]): void;
  CompareTag(tag: string): boolean;
  SendMessageUpwards(
    methodName: string,
    value: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessageUpwards(methodName: string, value: any): void;
  SendMessageUpwards(methodName: string): void;
  SendMessageUpwards(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessage(methodName: string, value: any): void;
  SendMessage(methodName: string): void;
  SendMessage(
    methodName: string,
    value: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessage(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  BroadcastMessage(
    methodName: string,
    parameter: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  BroadcastMessage(methodName: string, parameter: any): void;
  BroadcastMessage(methodName: string): void;
  BroadcastMessage(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  GetInstanceID(): number;
  GetHashCode(): number;
  Equals(other: any): boolean;
  ToString(): string;
  GetType(): System.Type;
}
export declare class Progress {
  constructor();
  destroyCancellationToken: System.Threading.CancellationToken;
  useGUILayout: boolean;
  didStart: boolean;
  didAwake: boolean;
  runInEditMode: boolean;
  enabled: boolean;
  isActiveAndEnabled: boolean;
  transform: UnityEngine.Transform;
  gameObject: UnityEngine.GameObject;
  tag: string;
  rigidbody: UnityEngine.Component;
  rigidbody2D: UnityEngine.Component;
  camera: UnityEngine.Component;
  light: UnityEngine.Component;
  animation: UnityEngine.Component;
  constantForce: UnityEngine.Component;
  renderer: UnityEngine.Component;
  audio: UnityEngine.Component;
  networkView: UnityEngine.Component;
  collider: UnityEngine.Component;
  collider2D: UnityEngine.Component;
  hingeJoint: UnityEngine.Component;
  particleSystem: UnityEngine.Component;
  name: string;
  hideFlags: UnityEngine.HideFlags;
  HandleOnStartDownload(appUpdateInfo: AppUpdate.AppUpdateInfo): void;
  IsInvoking(): boolean;
  CancelInvoke(): void;
  Invoke(methodName: string, time: number): void;
  InvokeRepeating(methodName: string, time: number, repeatRate: number): void;
  CancelInvoke(methodName: string): void;
  IsInvoking(methodName: string): boolean;
  StartCoroutine(methodName: string): UnityEngine.Coroutine;
  StartCoroutine(methodName: string, value: any): UnityEngine.Coroutine;
  StartCoroutine(
    routine: System.Collections.IEnumerator
  ): UnityEngine.Coroutine;
  StartCoroutine_Auto(
    routine: System.Collections.IEnumerator
  ): UnityEngine.Coroutine;
  StopCoroutine(routine: System.Collections.IEnumerator): void;
  StopCoroutine(routine: UnityEngine.Coroutine): void;
  StopCoroutine(methodName: string): void;
  StopAllCoroutines(): void;
  GetComponent(type: System.Type): UnityEngine.Component;
  GetComponent(type: string): UnityEngine.Component;
  GetComponentInChildren(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component;
  GetComponentInChildren(t: System.Type): UnityEngine.Component;
  GetComponentsInChildren(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component[];
  GetComponentsInChildren(t: System.Type): UnityEngine.Component[];
  GetComponentInParent(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component;
  GetComponentInParent(t: System.Type): UnityEngine.Component;
  GetComponentsInParent(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component[];
  GetComponentsInParent(t: System.Type): UnityEngine.Component[];
  GetComponents(type: System.Type): UnityEngine.Component[];
  GetComponents(type: System.Type, results: UnityEngine.Component[]): void;
  CompareTag(tag: string): boolean;
  SendMessageUpwards(
    methodName: string,
    value: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessageUpwards(methodName: string, value: any): void;
  SendMessageUpwards(methodName: string): void;
  SendMessageUpwards(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessage(methodName: string, value: any): void;
  SendMessage(methodName: string): void;
  SendMessage(
    methodName: string,
    value: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessage(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  BroadcastMessage(
    methodName: string,
    parameter: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  BroadcastMessage(methodName: string, parameter: any): void;
  BroadcastMessage(methodName: string): void;
  BroadcastMessage(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  GetInstanceID(): number;
  GetHashCode(): number;
  Equals(other: any): boolean;
  ToString(): string;
  GetType(): System.Type;
}
export declare class TimeUI {
  constructor();
  destroyCancellationToken: System.Threading.CancellationToken;
  useGUILayout: boolean;
  didStart: boolean;
  didAwake: boolean;
  runInEditMode: boolean;
  enabled: boolean;
  isActiveAndEnabled: boolean;
  transform: UnityEngine.Transform;
  gameObject: UnityEngine.GameObject;
  tag: string;
  rigidbody: UnityEngine.Component;
  rigidbody2D: UnityEngine.Component;
  camera: UnityEngine.Component;
  light: UnityEngine.Component;
  animation: UnityEngine.Component;
  constantForce: UnityEngine.Component;
  renderer: UnityEngine.Component;
  audio: UnityEngine.Component;
  networkView: UnityEngine.Component;
  collider: UnityEngine.Component;
  collider2D: UnityEngine.Component;
  hingeJoint: UnityEngine.Component;
  particleSystem: UnityEngine.Component;
  name: string;
  hideFlags: UnityEngine.HideFlags;
  IsInvoking(): boolean;
  CancelInvoke(): void;
  Invoke(methodName: string, time: number): void;
  InvokeRepeating(methodName: string, time: number, repeatRate: number): void;
  CancelInvoke(methodName: string): void;
  IsInvoking(methodName: string): boolean;
  StartCoroutine(methodName: string): UnityEngine.Coroutine;
  StartCoroutine(methodName: string, value: any): UnityEngine.Coroutine;
  StartCoroutine(
    routine: System.Collections.IEnumerator
  ): UnityEngine.Coroutine;
  StartCoroutine_Auto(
    routine: System.Collections.IEnumerator
  ): UnityEngine.Coroutine;
  StopCoroutine(routine: System.Collections.IEnumerator): void;
  StopCoroutine(routine: UnityEngine.Coroutine): void;
  StopCoroutine(methodName: string): void;
  StopAllCoroutines(): void;
  GetComponent(type: System.Type): UnityEngine.Component;
  GetComponent(type: string): UnityEngine.Component;
  GetComponentInChildren(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component;
  GetComponentInChildren(t: System.Type): UnityEngine.Component;
  GetComponentsInChildren(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component[];
  GetComponentsInChildren(t: System.Type): UnityEngine.Component[];
  GetComponentInParent(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component;
  GetComponentInParent(t: System.Type): UnityEngine.Component;
  GetComponentsInParent(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component[];
  GetComponentsInParent(t: System.Type): UnityEngine.Component[];
  GetComponents(type: System.Type): UnityEngine.Component[];
  GetComponents(type: System.Type, results: UnityEngine.Component[]): void;
  CompareTag(tag: string): boolean;
  SendMessageUpwards(
    methodName: string,
    value: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessageUpwards(methodName: string, value: any): void;
  SendMessageUpwards(methodName: string): void;
  SendMessageUpwards(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessage(methodName: string, value: any): void;
  SendMessage(methodName: string): void;
  SendMessage(
    methodName: string,
    value: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessage(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  BroadcastMessage(
    methodName: string,
    parameter: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  BroadcastMessage(methodName: string, parameter: any): void;
  BroadcastMessage(methodName: string): void;
  BroadcastMessage(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  GetInstanceID(): number;
  GetHashCode(): number;
  Equals(other: any): boolean;
  ToString(): string;
  GetType(): System.Type;
}
export declare class UITimer {
  constructor();
  destroyCancellationToken: System.Threading.CancellationToken;
  useGUILayout: boolean;
  didStart: boolean;
  didAwake: boolean;
  runInEditMode: boolean;
  enabled: boolean;
  isActiveAndEnabled: boolean;
  transform: UnityEngine.Transform;
  gameObject: UnityEngine.GameObject;
  tag: string;
  rigidbody: UnityEngine.Component;
  rigidbody2D: UnityEngine.Component;
  camera: UnityEngine.Component;
  light: UnityEngine.Component;
  animation: UnityEngine.Component;
  constantForce: UnityEngine.Component;
  renderer: UnityEngine.Component;
  audio: UnityEngine.Component;
  networkView: UnityEngine.Component;
  collider: UnityEngine.Component;
  collider2D: UnityEngine.Component;
  hingeJoint: UnityEngine.Component;
  particleSystem: UnityEngine.Component;
  name: string;
  hideFlags: UnityEngine.HideFlags;
  TextTemplate: string;
  IsInvoking(): boolean;
  CancelInvoke(): void;
  Invoke(methodName: string, time: number): void;
  InvokeRepeating(methodName: string, time: number, repeatRate: number): void;
  CancelInvoke(methodName: string): void;
  IsInvoking(methodName: string): boolean;
  StartCoroutine(methodName: string): UnityEngine.Coroutine;
  StartCoroutine(methodName: string, value: any): UnityEngine.Coroutine;
  StartCoroutine(
    routine: System.Collections.IEnumerator
  ): UnityEngine.Coroutine;
  StartCoroutine_Auto(
    routine: System.Collections.IEnumerator
  ): UnityEngine.Coroutine;
  StopCoroutine(routine: System.Collections.IEnumerator): void;
  StopCoroutine(routine: UnityEngine.Coroutine): void;
  StopCoroutine(methodName: string): void;
  StopAllCoroutines(): void;
  GetComponent(type: System.Type): UnityEngine.Component;
  GetComponent(type: string): UnityEngine.Component;
  GetComponentInChildren(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component;
  GetComponentInChildren(t: System.Type): UnityEngine.Component;
  GetComponentsInChildren(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component[];
  GetComponentsInChildren(t: System.Type): UnityEngine.Component[];
  GetComponentInParent(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component;
  GetComponentInParent(t: System.Type): UnityEngine.Component;
  GetComponentsInParent(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component[];
  GetComponentsInParent(t: System.Type): UnityEngine.Component[];
  GetComponents(type: System.Type): UnityEngine.Component[];
  GetComponents(type: System.Type, results: UnityEngine.Component[]): void;
  CompareTag(tag: string): boolean;
  SendMessageUpwards(
    methodName: string,
    value: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessageUpwards(methodName: string, value: any): void;
  SendMessageUpwards(methodName: string): void;
  SendMessageUpwards(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessage(methodName: string, value: any): void;
  SendMessage(methodName: string): void;
  SendMessage(
    methodName: string,
    value: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessage(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  BroadcastMessage(
    methodName: string,
    parameter: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  BroadcastMessage(methodName: string, parameter: any): void;
  BroadcastMessage(methodName: string): void;
  BroadcastMessage(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  GetInstanceID(): number;
  GetHashCode(): number;
  Equals(other: any): boolean;
  ToString(): string;
  GetType(): System.Type;
}
export declare class VersionText {
  constructor();
  destroyCancellationToken: System.Threading.CancellationToken;
  useGUILayout: boolean;
  didStart: boolean;
  didAwake: boolean;
  runInEditMode: boolean;
  enabled: boolean;
  isActiveAndEnabled: boolean;
  transform: UnityEngine.Transform;
  gameObject: UnityEngine.GameObject;
  tag: string;
  rigidbody: UnityEngine.Component;
  rigidbody2D: UnityEngine.Component;
  camera: UnityEngine.Component;
  light: UnityEngine.Component;
  animation: UnityEngine.Component;
  constantForce: UnityEngine.Component;
  renderer: UnityEngine.Component;
  audio: UnityEngine.Component;
  networkView: UnityEngine.Component;
  collider: UnityEngine.Component;
  collider2D: UnityEngine.Component;
  hingeJoint: UnityEngine.Component;
  particleSystem: UnityEngine.Component;
  name: string;
  hideFlags: UnityEngine.HideFlags;
  IsInvoking(): boolean;
  CancelInvoke(): void;
  Invoke(methodName: string, time: number): void;
  InvokeRepeating(methodName: string, time: number, repeatRate: number): void;
  CancelInvoke(methodName: string): void;
  IsInvoking(methodName: string): boolean;
  StartCoroutine(methodName: string): UnityEngine.Coroutine;
  StartCoroutine(methodName: string, value: any): UnityEngine.Coroutine;
  StartCoroutine(
    routine: System.Collections.IEnumerator
  ): UnityEngine.Coroutine;
  StartCoroutine_Auto(
    routine: System.Collections.IEnumerator
  ): UnityEngine.Coroutine;
  StopCoroutine(routine: System.Collections.IEnumerator): void;
  StopCoroutine(routine: UnityEngine.Coroutine): void;
  StopCoroutine(methodName: string): void;
  StopAllCoroutines(): void;
  GetComponent(type: System.Type): UnityEngine.Component;
  GetComponent(type: string): UnityEngine.Component;
  GetComponentInChildren(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component;
  GetComponentInChildren(t: System.Type): UnityEngine.Component;
  GetComponentsInChildren(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component[];
  GetComponentsInChildren(t: System.Type): UnityEngine.Component[];
  GetComponentInParent(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component;
  GetComponentInParent(t: System.Type): UnityEngine.Component;
  GetComponentsInParent(
    t: System.Type,
    includeInactive: boolean
  ): UnityEngine.Component[];
  GetComponentsInParent(t: System.Type): UnityEngine.Component[];
  GetComponents(type: System.Type): UnityEngine.Component[];
  GetComponents(type: System.Type, results: UnityEngine.Component[]): void;
  CompareTag(tag: string): boolean;
  SendMessageUpwards(
    methodName: string,
    value: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessageUpwards(methodName: string, value: any): void;
  SendMessageUpwards(methodName: string): void;
  SendMessageUpwards(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessage(methodName: string, value: any): void;
  SendMessage(methodName: string): void;
  SendMessage(
    methodName: string,
    value: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  SendMessage(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  BroadcastMessage(
    methodName: string,
    parameter: any,
    options: UnityEngine.SendMessageOptions
  ): void;
  BroadcastMessage(methodName: string, parameter: any): void;
  BroadcastMessage(methodName: string): void;
  BroadcastMessage(
    methodName: string,
    options: UnityEngine.SendMessageOptions
  ): void;
  GetInstanceID(): number;
  GetHashCode(): number;
  Equals(other: any): boolean;
  ToString(): string;
  GetType(): System.Type;
}
export declare namespace AppUpdate {
  export class AppUpdateInfo {
    constructor();
    AvailableVersion: string;
    BytesDownloaded: number;
    TotalBytesToDownload: number;
    InstallStatus: AppUpdate.InstallStatus;
    UpdateAvailability: AppUpdate.UpdateAvailability;
    SetBytesDownloadedGetter(getter: () => number): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): System.Type;
    ToString(): string;
  }
  export enum InstallStatus {
    DOWNLOADING = 0,
    DOWNLOADED = 1,
    FAILED = 2,
    INSTALLED = 3,
    INSTALLING = 4,
    PENDING = 5,
  }
  export enum UpdateAvailability {
    UNKNOWN = 0,
    UPDATE_AVAILABLE = 1,
    UPDATE_NOT_AVAILABLE = 2,
  }
  export class AppUpdateManagerFactory {
    static Create(server: string): AppUpdate.IAppUpdateManager;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): System.Type;
    ToString(): string;
  }
  export class AppUpdateOptions {
    constructor();
    DeletePackages: boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): System.Type;
    ToString(): string;
  }
  export interface IAppUpdateManager {
    GetAppUpdateInfo(): System.Threading.Tasks.Task<AppUpdate.AppUpdateInfo>;
    AddListener(
      listener: (obj: AppUpdate.InstallStatus) => void
    ): (obj: AppUpdate.InstallStatus) => void;
    RemoveListener(listener: (obj: AppUpdate.InstallStatus) => void): void;
    StartUpdateFlow(
      updateInfo: AppUpdate.AppUpdateInfo,
      options: AppUpdate.AppUpdateOptions
    ): System.Threading.Tasks.Task;
  }
}
export declare namespace DiffTool {
  export class DiffToolFactory {
    static Create(tool: DiffTool.Tool): DiffTool.IDiffTool;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): System.Type;
    ToString(): string;
  }
  export enum Tool {
    DotNetBSDiff = 0,
    YZQBSDiff = 1,
  }
  export interface IDiffTool {
    ApplyPatch(
      oldFilePath: string,
      patchFilePath: string,
      outputFilePath: string
    ): System.Threading.Tasks.Task<boolean>;
  }
}
