/**

 Copyright 2023 Harshad Joshi and Bufferstack.IO Analytics Technology LLP, Pune

 Licensed under the GNU General Public License, Version 3.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 https://www.gnu.org/licenses/gpl-3.0.html

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 **/


module.exports = function(RED) {
    function KepwareRead(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            if(msg.payload.readResults && msg.payload.readResults.length > 0) {
                var v = msg.payload.readResults[0].v;
                msg.payload = v;
                node.send(msg);
            }
        });
    }
    RED.nodes.registerType("kepware-read",KepwareRead);
}


// Release date : 07-06-2023