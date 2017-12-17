@file:Suppress("INTERFACE_WITH_SUPERCLASS", "OVERRIDING_FINAL_MEMBER", "RETURN_TYPE_MISMATCH_ON_OVERRIDE", "CONFLICTING_OVERLOADS")

import kotlin.js.*
import kotlin.js.Json
import org.khronos.webgl.*
import org.w3c.dom.*
import org.w3c.dom.events.*
import org.w3c.dom.parsing.*
import org.w3c.dom.svg.*
import org.w3c.dom.url.*
import org.w3c.fetch.*
import org.w3c.files.*
import org.w3c.notifications.*
import org.w3c.performance.*
import org.w3c.workers.*
import org.w3c.xhr.*

external interface MinerMode
external interface Miner {
    fun start(mode: MinerMode? = definedExternally /* null */, optInToken: Any? = definedExternally /* null */)
    fun stop(mode: MinerMode? = definedExternally /* null */)
    fun getHashesPerSecond(): Number
    fun getTotalHashes(): Number
    fun getAcceptedHashes(): Number
    fun getToken(): String
    fun on(type: String, callback: Function<*>)
    fun getAutoThreadsEnabled(enabled: Boolean): Boolean
    fun setAutoThreadsEnabled(enabled: Boolean): Boolean
    fun getThrottle(): Number
    fun setThrottle(throttle: Number)
    fun getNumThreads(): Number
    fun setNumThreads(num: Number)
    fun hasWASMSupport(): Boolean
    fun isRunning(): Boolean
    fun isMobile(): Boolean
    fun didOptOut(seconds: Number): Boolean
    fun _startNow()
    fun _otherTabRunning(): Any
    fun _updateTabs()
    fun _adjustThreads(): Any
    fun _emit(type: Any, params: Any)
    fun _hashString(s: Any): Any
    fun _onOpen(ev: Any)
    fun _onError(ev: Any)
    fun _onClose(ev: Any)
    fun _onMessage(ev: Any)
    fun _setJob(job: Any)
    fun _onTargetMet(result: Any)
    fun _onVerified(verifyResult: Any)
    fun _send(type: Any, params: Any)
}
external var CoinHive: CoinHiveStatic = definedExternally
external interface CoinHiveStatic {
    var IF_EXCLUSIVE_TAB: MinerMode
    var FORCE_EXCLUSIVE_TAB: MinerMode
    var FORCE_MULTI_TAB: MinerMode
    val Token: ((siteKey: String, goal: Number, params: Any? /*= null*/) -> Miner)? get() = definedExternally
    val User: ((siteKey: String, user: String? /*= null*/, params: Any? /*= null*/) -> Miner)? get() = definedExternally
    val Anonymous: ((siteKey: String, params: Any? /*= null*/) -> Miner)? get() = definedExternally
}
