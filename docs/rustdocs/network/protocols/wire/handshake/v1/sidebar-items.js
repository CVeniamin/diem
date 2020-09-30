initSidebarItems({"enum":[["HandshakeError","An enum to list the possible errors during the libra handshake negotiation"],["MessagingProtocolVersion","Enum representing different versions of the Libra network protocol. These should be listed from old to new, old having the smallest value. We derive `PartialOrd` since nodes need to find highest intersecting protocol version."],["ProtocolId","Unique identifier associated with each application protocol."]],"struct":[["HandshakeMsg","The HandshakeMsg contains a mapping from MessagingProtocolVersion suppported by the node to a bit-vector specifying application-level protocols supported over that version."],["SupportedProtocols",""]]});