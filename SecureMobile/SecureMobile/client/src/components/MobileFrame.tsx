import { Shield, Wifi, Activity, AlertTriangle, CheckCircle, BarChart3, Clock, Lock, Eye, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function MobileFrame() {
  return (
    <div className="relative mx-auto w-80 h-[620px]">
      {/* Phone Frame - Modern Android */}
      <div className="relative w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.8rem] p-2 shadow-2xl">
        {/* Camera Bar - Modern Horizontal Design */}
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-700 rounded-full z-20 flex items-center justify-center space-x-3">
          <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
          <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
          <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
        </div>
        
        <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
          {/* Always-On Display Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent"></div>
          
          {/* Status Bar */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-4 pt-8 text-white">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-3">
                <span className="font-medium text-green-400">10:24</span>
                <div className="flex items-center space-x-1">
                  <Globe className="h-3 w-3 text-blue-400" />
                  <span className="text-xs text-slate-300">5G</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Wifi className="h-4 w-4 text-green-400" />
                <div className="flex items-center space-x-1">
                  <div className="w-1 h-3 bg-green-400 rounded-sm"></div>
                  <div className="w-1 h-3 bg-green-400 rounded-sm"></div>
                  <div className="w-1 h-3 bg-green-400 rounded-sm"></div>
                  <div className="w-1 h-3 bg-green-400 rounded-sm"></div>
                </div>
                <div className="w-7 h-4 border border-green-400 rounded-sm relative">
                  <div className="w-6 h-2 bg-green-400 rounded-sm absolute top-0 left-0"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* App Header */}
          <div className="bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 px-6 py-5 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mr-4 backdrop-blur-sm">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">SecureGuard</h3>
                    <p className="text-green-100 text-sm">Advanced Protection Suite</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end mb-1">
                    <div className="w-2 h-2 bg-green-300 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm font-semibold">SECURED</span>
                  </div>
                  <div className="text-xs text-green-200">All systems protected</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dashboard Content */}
          <div className="p-5 space-y-5 bg-gradient-to-b from-slate-900 to-black h-full text-white">
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-red-900/40 to-red-800/40 backdrop-blur-sm rounded-xl p-3 border border-red-700/30"
              >
                <div className="text-center">
                  <AlertTriangle className="h-5 w-5 text-red-400 mx-auto mb-1" />
                  <p className="text-2xl font-bold text-red-400">324</p>
                  <p className="text-xs text-red-200">Threats</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-emerald-900/40 to-emerald-800/40 backdrop-blur-sm rounded-xl p-3 border border-emerald-700/30"
              >
                <div className="text-center">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mx-auto mb-1" />
                  <p className="text-2xl font-bold text-emerald-400">98</p>
                  <p className="text-xs text-emerald-200">Protected</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 backdrop-blur-sm rounded-xl p-3 border border-blue-700/30"
              >
                <div className="text-center">
                  <Activity className="h-5 w-5 text-blue-400 mx-auto mb-1" />
                  <p className="text-2xl font-bold text-blue-400">24/7</p>
                  <p className="text-xs text-blue-200">Monitor</p>
                </div>
              </motion.div>
            </div>
            
            {/* Security Modules */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-3"
            >
              <h4 className="text-lg font-semibold text-slate-200 mb-3">Security Modules</h4>
              
              <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-4 border border-slate-600/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mr-3">
                      <Wifi className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-200">Firewall Shield</p>
                      <p className="text-xs text-slate-400">Network protection active</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="w-2 h-2 bg-green-400 rounded-full mb-1"></div>
                    <span className="text-xs text-green-400 font-semibold">ACTIVE</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-4 border border-slate-600/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                      <Eye className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-200">Privacy Guard</p>
                      <p className="text-xs text-slate-400">Anti-spy monitoring</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="w-2 h-2 bg-green-400 rounded-full mb-1"></div>
                    <span className="text-xs text-green-400 font-semibold">ACTIVE</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-4 border border-slate-600/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                      <Lock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-200">Virus Scanner</p>
                      <p className="text-xs text-slate-400">Real-time protection</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="w-2 h-2 bg-green-400 rounded-full mb-1"></div>
                    <span className="text-xs text-green-400 font-semibold">ACTIVE</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Side Buttons */}
      <div className="absolute top-24 -left-1 w-1 h-6 bg-slate-600 rounded-full"></div>
      <div className="absolute top-32 -left-1 w-1 h-10 bg-slate-600 rounded-full"></div>
      <div className="absolute top-26 -right-1 w-1 h-8 bg-slate-600 rounded-full"></div>
      
      {/* Floating Security Indicators */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        className="absolute -top-6 -right-6 bg-white rounded-full p-4 shadow-xl border-2 border-green-200"
      >
        <Shield className="h-6 w-6 text-green-500" />
      </motion.div>
      
      <motion.div
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
        className="absolute -bottom-6 -left-6 bg-white rounded-full p-4 shadow-xl border-2 border-red-200"
      >
        <AlertTriangle className="h-6 w-6 text-red-500" />
      </motion.div>
      
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.6, type: "spring", stiffness: 200 }}
        className="absolute top-1/2 -left-6 bg-white rounded-full p-4 shadow-xl border-2 border-blue-200"
      >
        <Activity className="h-6 w-6 text-blue-500" />
      </motion.div>
    </div>
  );
}
