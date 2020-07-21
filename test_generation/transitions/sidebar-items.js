initSidebarItems({"enum":[["StackBinOpResult",""]],"fn":[["create_struct","Construct a struct from abstract values on the stack The struct is stored in the register after creation"],["create_struct_from_inst",""],["function_can_acquire_resource","Whether the function acquires any global resources or not"],["get_function_instantiation_for_state",""],["get_struct_instantiation_for_state",""],["kind_for_token","Given a signature token, returns the kind of this token in the module context, and kind instantiation for the function."],["kinds_for_instantiation","Given a locals signature index, determine the kind for each signature token. Restricted for determining kinds at the top-level only. This is reflected in the use of `state.instantiation[..]` as the kind context."],["local_availability_is","Check whether the local at `index` is of the given availability"],["local_exists","Check whether the local at `index` exists"],["local_kind_is","Check whether the local at `index` is of the given kind"],["local_place","Insert the register value into the locals at `index`"],["local_set","Set the availability of local at `index`"],["local_take","Put copy of the local at `index` in register"],["local_take_borrow","Put reference to local at `index` in register"],["memory_safe","TODO: This is a temporary function that represents memory safety for a reference. This should be removed and replaced with appropriate memory safety premises when the borrow checking infrastructure is fully implemented. `index` is `Some(i)` if the instruction can be memory safe when operating on non-reference types."],["register_dereference","Dereference the value stored in the register. If the value is not a reference, or the register is empty, return an error."],["stack_bin_op","Perform a binary operation using the top two values on the stack as operands."],["stack_function_call","Simulate calling the function at `function_index`"],["stack_function_inst_call",""],["stack_function_inst_popn",""],["stack_function_popn","Pop the number of stack values required to call the function at `function_index`"],["stack_has","Determine whether the stack is at least of size `index`. If the optional `abstract_value` argument is some `AbstractValue`, check whether the type at `index` is that abstract_value."],["stack_has_integer","Determine whether the stack contains an integer value at given index."],["stack_has_polymorphic_eq","Determine whether two tokens on the stack have the same type"],["stack_has_reference","Determine whether the stack has a reference at `index` with the given mutability. If `mutable` is `Either` then the reference can be either mutable or immutable"],["stack_has_struct","Determine if a struct (of the given signature) is at the top of the stack The `struct_index` can be `Some(index)` to check for a particular struct, or `None` to just check that there is a a struct."],["stack_has_struct_inst",""],["stack_kind_is","Determine the abstract value at `index` is of the given kind, if it exists. If it does not exist, return `false`."],["stack_kind_is_subkind","Determine if the abstract value at `index` has a kind that is a subkind of the kind for the instruction kind. e.g. if the instruction takes a type of kind `All` then it is OK to fit in a value with a type of kind `Copyable`."],["stack_local_polymorphic_eq","Determine whether an abstract value on the stack and a abstract value in the locals have the same type"],["stack_pop","Pop from the top of the stack."],["stack_push","Push given abstract_value to the top of the stack."],["stack_push_register","Push to the top of the stack from the register."],["stack_push_register_borrow","Push a reference to a register value with the given mutability."],["stack_ref_polymorphic_eq","Determine whether an abstract value on the stack that is a reference points to something of the same type as another abstract value on the stack"],["stack_satisfies_function_inst_signature",""],["stack_satisfies_function_signature","Determine whether the function at the given index can be constructed from the values on the stack."],["stack_satisfies_struct_instantiation",""],["stack_satisfies_struct_signature","Determine whether the struct at the given index can be constructed from the values on the stack. Note that this function is bidirectional; if there is an instantiation, we check it. Otherwise, we infer the types that are needed."],["stack_struct_borrow_field","Push the field at `field_index` of a struct as an `AbstractValue` to the stack"],["stack_struct_borrow_field_inst",""],["stack_struct_has_field",""],["stack_struct_has_field_inst",""],["stack_struct_inst_popn",""],["stack_struct_popn","Pop the number of stack values required to construct the struct at `struct_index`"],["stack_top_is_castable_to",""],["stack_unpack_struct","Push the fields of a struct as `AbstractValue`s to the stack"],["stack_unpack_struct_inst",""],["stack_unpack_struct_instantiation",""],["struct_inst_is_resource",""],["struct_is_resource","Determine if a struct at the given index is a resource"],["struct_ref_instantiation",""]],"struct":[["Subst","A substitution is a mapping from type formal index to the `SignatureToken` representing the type instantiation for that index."]]});