//
// Types in assemblies: Assembly-CSharp
// Generated 11/10/2023 2:48:40 AM
//
/* eslint-disable */

import {
  Facebook,
  ReactUnity,
  System,
  UnityEngine,
} from "@reactunity/renderer";
import { InlineStyleRemap } from "@reactunity/renderer";

export declare class StyleHelper {
  static Instance: StyleHelper;
  Q(
    element: UnityEngine.UIElements.VisualElement,
    name: string
  ): UnityEngine.UIElements.VisualElement;
  SetPadding(
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
  // @ts-expect-error
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
export declare namespace XiaohaiLand {
  export namespace UI {
    export namespace UIToolkit {
      export class MyImage {
        constructor(
          context: ReactUnity.UIToolkit.UIToolkitContext,
          tag: string
        );
        Element: UnityEngine.UIElements.Image;
        TargetElement: UnityEngine.UIElements.VisualElement;
        ClientWidth: number;
        ClientHeight: number;
        Disabled: boolean;
        Context: ReactUnity.UIToolkit.UIToolkitContext;
        Parent: ReactUnity.IContainerComponent;
        Data: ReactUnity.Reactive.ReactiveObjectRecord;
        Layout: Facebook.Yoga.YogaNode;
        ComputedStyle: ReactUnity.Styling.NodeStyle;
        StyleState: ReactUnity.Styling.StyleState;
        StateStyles: ReactUnity.Styling.StateStyles;
        Style: InlineStyleRemap;
        InlineStylesheet: ReactUnity.Styling.StyleSheet;
        CustomProperties: Record<string, any>;
        RevertCalculator: ReactUnity.Styling.IRevertCalculator;
        ParentIndex: number;
        CurrentOrder: number;
        Entering: boolean;
        Leaving: boolean;
        UpdatedThisFrame: boolean;
        Destroyed: boolean;
        Tag: string;
        TextContent: string;
        PoolStack: System.Collections.Generic.Stack<ReactUnity.IPoolableComponent>;
        IsPseudoElement: boolean;
        ResolvedName: string;
        ClassName: string;
        ClassList: ReactUnity.Helpers.ClassList;
        Id: string;
        Name: string;
        RefId: number;
        InstanceId: number;
        IsContainer: boolean;
        Children: ReactUnity.IReactComponent[];
        BeforeRules: ReactUnity.Styling.Rules.RuleTreeNode<ReactUnity.Styling.Rules.StyleData>[];
        AfterRules: ReactUnity.Styling.Rules.RuleTreeNode<ReactUnity.Styling.Rules.StyleData>[];
        BeforePseudo: ReactUnity.IReactComponent;
        AfterPseudo: ReactUnity.IReactComponent;
        ScrollLeft: number;
        ScrollTop: number;
        ScrollWidth: number;
        ScrollHeight: number;
        SetProperty(property: string, value: any): void;
        Pool(): boolean;
        AddEventListener(
          eventName: string,
          fun: ReactUnity.Helpers.Callback
        ): () => void;
        GetComponent(type: System.Type): any;
        AddComponent(type: System.Type): any;
        CaptureMouse(): void;
        ReleaseMouse(): void;
        HasMouseCapture(): boolean;
        UpdateOrder(prev: number, current: number): boolean;
        Activate(): void;
        Update(): void;
        MarkForStyleResolving(recursive: boolean): void;
        Remove(): void;
        Destroy(recursive?: boolean): void;
        Revive(): boolean;
        OnClassChange(): void;
        SetParent(
          newParent: ReactUnity.IContainerComponent,
          relativeTo?: ReactUnity.IReactComponent,
          insertAfter?: boolean
        ): void;
        SetEventListener(
          eventName: string,
          fun: ReactUnity.Helpers.Callback
        ): void;
        FireEvent(eventName: string, arg: any): void;
        SetData(propertyName: string, value: any): void;
        SetCustomProperty(propertyName: string, value: any): void;
        ResolveStyle(recursive?: boolean): void;
        MarkForStyleResolvingWithSiblings(recursive: boolean): void;
        ApplyStyles(): void;
        ApplyLayoutStyles(): void;
        Matches(query: string): boolean;
        Closest(query: string): ReactUnity.IReactComponent;
        QuerySelector(query: string): ReactUnity.IReactComponent;
        QuerySelectorAll(query: string): ReactUnity.IReactComponent[];
        Accept(
          visitor: ReactUnity.Helpers.Visitors.ReactComponentVisitor,
          skipSelf?: boolean
        ): void;
        AddBefore(): void;
        RemoveBefore(): void;
        AddAfter(): void;
        RemoveAfter(): void;
        RegisterChild(child: ReactUnity.IReactComponent, index?: number): void;
        UnregisterChild(child: ReactUnity.IReactComponent): void;
        Clear(): void;
        Equals(obj: any): boolean;
        GetHashCode(): number;
        GetType(): System.Type;
        ToString(): string;
      }
      export class ActiveStateHandler {
        constructor();
        activators: UnityEngine.UIElements.ManipulatorActivationFilter[];
        target: UnityEngine.UIElements.VisualElement;
        ClearListeners(): void;
        OnPointerDown(eventData: UnityEngine.UIElements.MouseDownEvent): void;
        OnPointerUp(eventData: UnityEngine.UIElements.MouseUpEvent): void;
        Equals(obj: any): boolean;
        GetHashCode(): number;
        GetType(): System.Type;
        ToString(): string;
      }
      export class XiaohaiRendererUIToolkit {
        constructor();
        Root: UnityEngine.UIElements.VisualElement;
        MediaProvider: ReactUnity.Styling.Rules.IMediaProvider;
        Context: ReactUnity.ReactContext;
        Timer: ReactUnity.Scheduling.ITimer;
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
        Source: ReactUnity.ScriptSource;
        EngineType: ReactUnity.Scripting.JavascriptEngineType;
        Globals: ReactUnity.Helpers.SerializableDictionary;
        AdvancedOptions: ReactUnity.ReactRendererBase_ReactAdvancedOptions;
        SetUseDevServer(value: number): void;
        PlayAudio(clip: UnityEngine.AudioClip): void;
        Render(): ReactUnity.ReactRendererBase_WaitForRenderToComplete;
        IsInvoking(): boolean;
        CancelInvoke(): void;
        Invoke(methodName: string, time: number): void;
        InvokeRepeating(
          methodName: string,
          time: number,
          repeatRate: number
        ): void;
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
        GetComponents(
          type: System.Type,
          results: UnityEngine.Component[]
        ): void;
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
      export class XiaohaiUIToolkitContext {
        constructor(options: ReactUnity.UIToolkit.UIToolkitContext_Options);
        StateHandlers: Record<string, System.Type>;
        HostElement: UnityEngine.UIElements.VisualElement;
        CalculatesLayout: boolean;
        Host: ReactUnity.IHostComponent;
        DetachedRoots: System.Collections.Generic.HashSet<ReactUnity.IReactComponent>;
        Globals: ReactUnity.Helpers.GlobalRecord;
        IsDisposed: boolean;
        IsEditorContext: boolean;
        options: ReactUnity.ReactContext_Options;
        Source: ReactUnity.ScriptSource;
        Timer: ReactUnity.Scheduling.ITimer;
        Dispatcher: ReactUnity.Scheduling.IDispatcher;
        Location: ReactUnity.Scripting.DomProxies.Location;
        LocalStorage: ReactUnity.Scripting.DomProxies.LocalStorage;
        MediaProvider: ReactUnity.Styling.Rules.IMediaProvider;
        OnRestart: () => void;
        // @ts-expect-error
        StyleParser: ExCSS.StylesheetParser;
        Style: ReactUnity.Styling.StyleContext;
        Script: ReactUnity.Scripting.ScriptContext;
        Html: ReactUnity.Html.HtmlContext;
        CursorSet: ReactUnity.Styling.CursorSet;
        CursorAPI: ReactUnity.Helpers.CursorAPI;
        Disposables: (() => void)[];
        Initialize(): void;
        PlayAudio(clip: UnityEngine.AudioClip): void;
        UpdateElementsRecursively(): void;
        LateUpdateElementsRecursively(): void;
        InsertStyle(style: string): ReactUnity.Styling.StyleSheet;
        InsertStyle(
          style: string,
          importanceOffset: number
        ): ReactUnity.Styling.StyleSheet;
        InsertStyle(
          sheet: ReactUnity.Styling.StyleSheet
        ): ReactUnity.Styling.StyleSheet;
        RemoveStyle(sheet: ReactUnity.Styling.StyleSheet): void;
        ResolvePath(path: string): string;
        CreateStaticScript(path: string): ReactUnity.ScriptSource;
        Start(afterStart?: () => void): void;
        Dispose(): void;
        HandleUnknownProperty(
          cmp: ReactUnity.IReactComponent,
          propertyName: string,
          value: any
        ): void;
        BindCommands(
          commandsObject: any,
          callbacksObject: any,
          getObjectCallback: any,
          getEventAsObjectCallback: any
        ): void;
        SetRef(refId: number, cmp: ReactUnity.IReactComponent): void;
        GetRef(
          refId: number,
          ensureUpdate?: boolean
        ): ReactUnity.IReactComponent;
        FlushCommands(serializedCommands?: string): void;
        CreateText(
          tag?: string,
          text?: string,
          poolKey?: string
        ): ReactUnity.ITextComponent;
        CreateDefaultComponent(
          tag: string,
          text: string,
          poolKey?: string
        ): ReactUnity.IReactComponent;
        CreateComponent(
          tag: string,
          text: string,
          poolKey?: string
        ): ReactUnity.IReactComponent;
        CreatePseudoComponent(
          tag: string,
          poolKey?: string
        ): ReactUnity.IReactComponent;
        PoolComponent(
          cmp: ReactUnity.IPoolableComponent,
          pool: System.Collections.Generic.Stack<ReactUnity.IPoolableComponent>
        ): void;
        Equals(obj: any): boolean;
        GetHashCode(): number;
        GetType(): System.Type;
        ToString(): string;
      }
    }
  }
}
